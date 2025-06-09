import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    type:{
        type:String,
        enum:['artist','fan','VIP','general'],
        default:'general'
    },
    communication:{
        email:Boolean,
        sms:Boolean,
        whatsapp:Boolean
    },
    tags:[String]
},{
    timestamps:true
})

export const Contact = mongoose.model("Contact",contactSchema)