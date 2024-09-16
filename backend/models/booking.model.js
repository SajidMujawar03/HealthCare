import mongoose from "mongoose";


const bookingSchema =new mongoose.Schema({
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Doctor"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    ticketPrice:{
        type:String,
        required:true
    },
    appointmentDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:["pending","approved",'cancelled'],
        dafault:"pending",
    },
    isPaid:{
        type:Boolean,
        default:true,
    },
},{
    timestamps:true,
})


export const Booking=mongoose.model("Booking",bookingSchema)