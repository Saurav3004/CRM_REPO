import { Lead } from "../models/lead.js";
import { Ticket } from "../models/ticket.js";
import { User } from "../models/user.js";


export const getDashboardStats = async (req,res) => {
    try {
        const totalUsers = await User.countDocuments();
    
        const totalTickets = await Ticket.countDocuments();
    
        const totalLeads = await Lead.countDocuments();
    
        const topSpenders = await User.find().sort({totalSpent:-1}).limit(5);
    
        res.json({
            totalUsers,
            totalTickets,
            totalLeads,
            topSpenders
        })
    } catch (error) {
        res.status(500).json({
            messgae:error.message
        })
    }
}

