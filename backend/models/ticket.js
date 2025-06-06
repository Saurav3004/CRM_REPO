import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
    ticketName:{
        type:String
    },
    amount:{
        type:String
    },
    stage:{
        type:String,
        
    },
    closingDate:{
        type:Date,
    },
    contact_name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

export const Ticket = mongoose.model("Ticket",ticketSchema)