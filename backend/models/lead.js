import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        enum:["raw","qualified","contacted",'converted'],
        default:"raw"
    },
    source:{
        type:String,
        required:false
    },
    addedBy:String,
    notes:String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})



export const Lead = mongoose.model("Lead",leadSchema)