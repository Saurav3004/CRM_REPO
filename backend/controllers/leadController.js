import { Lead } from "../models/lead.js";
import { Contact } from "../models/contact.js";
import xlsx from "xlsx";
import fs from "fs";
import { User } from "../models/user.js";

export const leadHandler = async (req, res) => {
  try {
    const { status } = req.body;

    const { leadId } = req.params;

    const lead = await Lead.findOne({ leadId }).populate("user");

    if (!lead) return res.status(404).json({ message: "Lead not found" });

    lead.status = status || lead.status;
    await lead.save();

    if (status === "qualified") {
      // Check if contact already exists to avoid duplicates
      const existingContact = await Contact.findOne({ user: lead.user._id });
      if (!existingContact) {
        await Contact.create({ user: lead.user._id, source: lead.source });
      }
      lead.status = "converted";
      await lead.save();
    }

    res.json({ message: "Lead updated", lead });
  } catch (error) {
    console.log(error);
  }
};


export const getAllLeads = async (req, res) => {
  try {
    const attendees = await User.find().sort({ createdAt: -1 });
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendees', error });
  }
};




const excelDateToISO = (serial) => {
  if (typeof serial !== "number") return serial;

  const utc_days = Math.floor(serial - 25569);
  const utc_value = utc_days * 86400; // seconds
  const date_info = new Date(utc_value * 1000);

  const day = String(date_info.getDate()).padStart(2, '0');
  const month = String(date_info.getMonth() + 1).padStart(2, '0');
  const year = date_info.getFullYear();

  return `${day}-${month}-${year}`; 
};

export const importExcel = async (req, res) => {
  try {
    const filePath = req.file.path;

    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rawData = xlsx.utils.sheet_to_json(sheet);

    // Map Excel fields to schema fields
    const usersData = rawData.map((row) => ({
      session: row["Session"] || "",
      regNumber: row["Reg Number"] || "",
      ticketType: row["Ticket Type"] || "",
      ticketsCount: row["# Tickets"] || 0,
      status: row["Status"] || "",
      fundsStatus: row["Funds Status"] || "",
      price: row["Price"] || 0,
      purchaseAmount: row["Purchase Total"] || 0,
      purchasedOn:excelDateToISO(row["Purchased On"]),
      trackingCode: row["Tracking Code"] || "",
      discountCode: row["Discount Code"] || "",
      checkedIn:excelDateToISO(row["Checked-In Date"]) || "",
      firstName: row["First name"] || "",
      lastName: row["Last name"] || "",
      email: row["Email address"] || "",
      dob: excelDateToISO(row["Date of Birth"]) || "",
      reEnterEmail: row["Re-enter your email address"] || "",
      mobile: row["Mobile"] || "",
      gender: row["Gender"] || "",
    }));

    await User.insertMany(usersData);
    fs.unlinkSync(filePath);

    res.status(200).json({ message: "Users imported successfully" });
  } catch (error) {
    console.error("❌ Excel Import Error:", error);
    res.status(500).json({ message: "Error importing users" });
  }
};