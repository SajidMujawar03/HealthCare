
import {User} from "../models/user.model.js"
import {Doctor} from"../models/doctor.model.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"


const generateToken=(user)=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
}



export const register=async(req,res)=>{

    const {name,email,password,role,photo,gender}=req.body;
    try {

        let user=null

        if(role=="patient")
        {
            user=await User.findOne({email})
        }
        else if(role=="doctor")
        {
            user=await Doctor.findOne({email})
        }
        

        //check if user exists
        if(user)
        {
            return res.status(400).json({message : "User already exists"});
        }

        //if user does not exists
        //hash password
        const salt= await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(password,salt)//two parameters

        if(role=="patient")
        {
            user=new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role,
            })
        }
        else if(role=="doctor")
        {
            user=new Doctor(
                {
                    name,
                    email,
                    password:hashPassword,
                    photo,
                    gender,
                    role,
                }
            )
        }


        await user.save()//saves the created user

        res.status(200).json({success:true,message:"User successfully created..."});
    } catch (error) {
        
        res.status(500).json({success:false,message:"Internal server error...Try Again"})
    }
}


export const login=async(req,res)=>{
    
    const {email,password}=req.body;


    
    

    try {
        // const {email,password}=req.body;
        let user=null;
        const patient=await User.findOne({email});
        const doctor=await User.findOne({email});
        if(patient)
        {
            user=patient;
        }
        else if(doctor)
        {
            user=doctor;
        }
        //check if user exists or not
        if(!user)
        {
            return res.status(404).json({message:"User not found..."})
        }
        //compare password
        console.log(password)
        const isPassword =await bcrypt.compare(password,user.password)
        if(!isPassword)
        {
            return res.status(400).json({status:false,message:"Invalid credentials..."})
        }
        //get token
        const token=generateToken(user)
        const {password,role,appointments,...rest}=user._doc
        res.status(200).json({success:true,message:"Successfully logged in...",token,data:{...rest},role})
    } catch (error) {

        res.status(500).json({status:false,message:"Failed to login..."})
        
    }
}