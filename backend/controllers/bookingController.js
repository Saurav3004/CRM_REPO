import { User } from "../models/user.js";
import { Lead } from "../models/lead.js";
import { Ticket } from "../models/ticket.js";

export const bookingHandler = async (req, res) => {
  try {
    const {
      name,
      email,
      phone_number,
      location,
      dob,
      eventName,
      eventId,
      subject,
      amount,
      source
    } = req.body;

    // Decide status based on amount (payment logic)
    const confirmed = amount && Number(amount) > 0;
    const ticketStatus = confirmed ? "confirmed" : "pending";

    // 1. Find or create user
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        phone_number,
        location,
        dob,
        totalSpent: confirmed ? amount : 0
      });
    } else {
      if (confirmed) {
        user.totalSpent += amount;
        await user.save();
      }
    }

    // 2. Create ticket
    const ticket = await Ticket.create({
      user: user._id,
      eventName,
      eventId,
      subject,
      amount,
      source,
      purchasedDate: Date.now(),
      status: ticketStatus
    });

    // 3. Push ticket to user's ticket array
    user.tickets.push(ticket._id);
    await user.save();

    // 4. Create lead if not already
    let lead = await Lead.findOne({ user: user._id });
    if (!lead) {
      lead = await Lead.create({
        user: user._id,
        source,
        tag: "new",
        location: user.location
      });
    }

    res.status(201).json({
      message: `Ticket ${ticketStatus}, lead created`,
      user,
      ticket,
      lead
    });

  } catch (err) {
    console.error("Booking Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
