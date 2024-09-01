import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    email:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        required:true,
        type:String,
    },
    name:{
        required:true,
        type:String,
    },
    phone:{
        type:Number,
    },
    role:{
        type:String,
    },
    appointment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Appointment",
        }
    ],
})

export const  User=mongoose.model("User",userSchema);