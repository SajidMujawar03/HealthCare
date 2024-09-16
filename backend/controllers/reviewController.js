import { Doctor } from "../models/doctor.model.js";
import { Review } from "../models/review.model.js";

export const getAllReviews=async (req,res)=>{
    try {
        const reviews=await Review.find({})

        res.status(200).json({success:true,message:"Successful",data:reviews})
    } catch (error) {
        res.status(404).json({success:false,message:"Not Found"})
    }
}


export const createReview=async(req,res)=>{
    if(!req.body.doctor) req.body.doctor=req.params.doctorId;
    if(!req.body.user)req.body.user=req.userId

    const newReview=new Review(req.body)

    try {
        const savedReview=await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor,
            {$push:{reviews:savedReview._id}}
        )

        res.status(200).json({success:true,message:"review Saved",data:savedReview})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}