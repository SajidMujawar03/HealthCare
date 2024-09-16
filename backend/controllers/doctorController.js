import { Doctor } from "../models/doctor.model.js";

export const updateDoctor=async(req,res)=>{
    const id=req.params.id;

    
    try{
      
        const updatedUser=await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true}).select("-password")//new :true ensures that we get the updated user in return
    
        res.status(200).json({success:true,message:"Successfully updated...",data:updatedUser})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:"Updation failure..."})
    }
}


export const deleteDoctor=async(req,res)=>{
    const id=req.params.id;

    try {
       await Doctor.findByIdAndDelete(id)

        res.status(200).json({success:true,message:"Successfully deleted Doctor"});
    } catch (error) {
        res.status(500).json({success:false,message:"Deletion failure"});
    }
}



export const getSingleDoctor=async(req,res)=>{
    const id=req.params.id;

    try {
        const doctor=await Doctor.findById(id).populate("reviews").select("-password");

        res.status(200).json({success:true,message:"Doctor found",data:doctor});
    } catch (error) {
        res.status(404).json({success:false,message:"Doctor not found"});
    }
}


export const getAllDoctors=async(req,res)=>{
    try {

        const {query}=req.query
        let doctors;
        if(query)
        {
            doctors=await Doctor.find({isApproved:"approved",$or:[{name:{$regex:query,$options:"i"}},{specialization:{$regex:query,$options:"i"}}]}).select("-password")
        }
        else
        {
            doctors=await Doctor.find({isApproved:"approved"}).select("-password");
        }
       
        res.status(200).json({success:true,message:"Doctors sent",data:doctors})
    } catch (error) {
        res.status(500).json({success:true,message:"Doctors not found"})
    }
}