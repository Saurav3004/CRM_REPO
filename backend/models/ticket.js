import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:String,
    eventName:String,
    eventId:String,
    subject:String,
    amount:Number,
    source:String,
    purchasedDate:Date,
    status:{
        type:String,
        enum:['confirmed','cancelled','pending'],
        default:'pending'
    }
},{
    timestamps:true
})

export const Ticket = mongoose.model("Ticket",ticketSchema)