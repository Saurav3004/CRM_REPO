import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true
    },
    phone_number:{
        type:Number,
        unique:true
    },
    accountId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Account"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

export const Contact = mongoose.model("Contact",contactSchema)