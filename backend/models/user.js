import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone_number:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    dob:{
        type:Date
    },
    totalSpent:{
        type:Number,
        default:0
    },
    tickets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Ticket"
    }]

},{
    timestamps:true
})

export const User = mongoose.model("User",userSchema)