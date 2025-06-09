import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        enum:["raw","new","Qualified","contacted"],
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

// leadSchema.pre('save',async function (next) {
//     if(!this.uid){
//         let isUnique = false;
//         let generatedIdentifier;

//     }
// })

export const Lead = mongoose.model("Lead",leadSchema)