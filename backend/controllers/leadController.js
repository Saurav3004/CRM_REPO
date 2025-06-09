import { Lead } from "../models/lead.js";
import { Contact } from "../models/contact.js";

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
