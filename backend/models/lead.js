import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
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
        required:true
    },
    status:{
        type:String,
        enum:["New","Contacted","Qualified","Lost"],
        default:"New"
    },
    source:{
        type:String
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

export const Lead = mongoose.model("Lead",leadSchema)