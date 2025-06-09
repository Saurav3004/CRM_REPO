import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})

export const Admin = mongoose.model('Admin',adminSchema);