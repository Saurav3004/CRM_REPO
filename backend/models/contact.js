import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:String,
    email:String,
    
    type:{
        type:String,
        enum:['artist','fan','VIP','general'],
        default:'general'
    },
    communication:{
        email:String,
        sms:Number,
        whatsapp:Number
    }
},{
    timestamps:true
})

export const Contact = mongoose.model("Contact",contactSchema)