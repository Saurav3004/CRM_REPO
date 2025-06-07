import { Lead } from "../models/lead.js";

export const leadHandler = async (req,res) => {
    try {
        const {name,email,phone,source,status} = req.body;
    
        if(!name || !email || !phone || !source || !status){
            return res.status(401).json({
                message:"All fields are required"
            })
        }
    
        const lead = await Lead.create({
            name,
            email,
            phone_number:phone,
            source,
            status,
            createdBy:req.user._id
        })
    
        res.status(200).json(lead)
    } catch (error) {
        console.log(error)
    }
}