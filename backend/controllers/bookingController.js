import { User } from "../models/user.js";
import { Lead } from "../models/lead.js";
import {Ticket} from '../models/ticket.js'


export const initiateBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phone_number,
      location,
      dob,
      eventId,
      eventName,
      source,
      amount,
      subject
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
        totalSpent:0
      })
    }
    
    
    // 4. Create lead if not already
    let lead = await Lead.findOne({ user: user._id });
    if (!lead) {
     lead = await Lead.create({ user: user._id, source, tag: 'new',location:user.location });
    }

    res.status(201).json({
      message: "Ticket booked, user updated",
      user,
      
      lead
    });
  } catch (err) {
    console.error("Booking Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const confirmTicket = async (req,res) => {
  try {
    const {email,eventName,eventId,subject,amount,source,purchasedDate} = req.body

    const user = await User.findOne({email})

    if(!user) return res.status(404).json({
      message:"User not found"
    })

    user.totalSpent += amount;
    await user.save()

    const ticket = Ticket.create({
      user:user._id,
      eventName,
      eventId,
      subject,
      amount,
      purchasedDate,
      source,
      status:'confirmed'
    })

    user.tickets.push(ticket._id)
    await user.save()

    res.status(201).json({
      message:"Ticket confirmed",
      ticket
    })


  } catch (error) {
    res.status(500).json({message:"Internal server error"})
  }
}