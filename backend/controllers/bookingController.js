import { User } from "../models/user.js";
import { Lead } from "../models/lead.js";
import {Ticket} from '../models/ticket.js'
import { Contact } from "../models/contact.js";


export const initiateBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phone_number,
      location,
      dob,
      gender,
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
        gender,
        totalSpent:0
      })
    }
    
    
    // 4. Create lead if not already
    let lead = await Lead.findOne({ user: user._id });
    
    if (!lead) {
     lead = await Lead.create({ user: user._id, source, tag: 'new',location:user.location,email:user.email,phone_number:user.phone_number,totalSpent:user.totalSpent,name:user.name,gender:user.gender,dob:user.dob });
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

    const lead = await Lead.findOne({email})

    if(amount == null){
      return;
    }

    user.totalSpent += amount;
    lead.totalSpent += amount;
    await user.save()
    await lead.save()

   

    const ticket = await Ticket.create({
      user:user._id,
      name:user.name,
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

    const contact = await Contact.findOne({
      user:user._id
    })

    if(!contact){
      await Contact.create({user:user._id,name:user.name,communication:{
        email:user.email,
        sms:user.phone_number,
        whatsapp:user.phone_number
      }})
    }

    res.status(201).json({
      message:"Ticket confirmed",
      ticket,
      contact
    })


  } catch (error) {
    res.status(500).json({message:error.message})
  }
}