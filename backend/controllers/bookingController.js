import { User } from "../models/user.js";
import { Lead } from "../models/lead.js";
import {Ticket} from '../models/ticket.js'


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
      source,
      
    } = req.body;

    // 1. Find or create user
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        phone_number,
        location,
        dob,
        totalSpent: amount // Initial amount
      });
    } else {
      user.totalSpent += amount;
      await user.save();
    }

    // 2. Create ticket
    const ticket = await Ticket.create({
      user: user._id,
      eventName,
      eventId,
      subject,
      amount,
      source,
      purchasedDate:Date.now()
    });

    // 3. Push ticket to user's ticket array
    user.tickets.push(ticket._id);
    await user.save();

    // 4. Create lead if not already
    const lead = await Lead.findOne({ user: user._id });
    if (!lead) {
      await Lead.create({ user: user._id, source, tag: 'new' });
    }

    res.status(201).json({
      message: "Ticket booked, user updated",
      user,
      ticket,
      lead
    });
  } catch (err) {
    console.error("Booking Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
