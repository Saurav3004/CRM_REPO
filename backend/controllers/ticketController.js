import { Ticket } from "../models/ticket.js";
import { User } from "../models/user.js";

export const createTicket = async (req, res) => {
    try {
        const {email,eventName,eventId,subject,amount,source,purchasedDate} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }

        const ticket = await Ticket.create({
            user:user._id,
            eventId,
            eventName,
            subject,
            amount,
            source,
            purchasedDate,

        })

        user.totalSpent += amount;
        await user.save()

        res.status(201).json({
            message:"Ticket created and total spent updated"
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}