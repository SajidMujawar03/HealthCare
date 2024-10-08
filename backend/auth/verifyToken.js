import jwt from "jsonwebtoken"
import  {Doctor}  from "../models/doctor.model.js"
import {User} from "../models/user.model.js"

export const authenticate=async(req,res,next)=>{
    //get token from headers
    const authToken=req.headers.authorization

    //"Bearer and actual token
    //check token exists or not
    if(!authToken|| !authToken.startsWith("Bearer"))
    {
        return res.status(401).json({success:false,message:"No token , authorization deneid"})
    }

    try {
        const token=authToken.split(" ")[1]

        //verify
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)

        req.userId=decoded.id;
        req.role=decoded.role;
    
        next();
    } catch (error) {
        if(error.name === "TokenExpiredError")
        {
            return res.status(401).json({success:false,message:"Token expired"})
        }

        return res.status(401).json({success:false,message:"Invalid token"})
    }
}

export const restrict= roles =>async(req,res,next)=>{
    const userId=req.userId

    let user;

    const doctor=await Doctor.findById(userId);
    const patient=await User.findById(userId);
   

    if(patient)
    {
       
        user=patient;
    }
    if(doctor)
    {
        user=doctor;
    }

  

    if(!roles.includes(user.role))
    {
        return res.status(401).json({success:false,message:"You are not Authorized"})
    }


    next();
}