
import User from "../models/user.model.js"
import Doctor from"../models/doctor.model.js"
import bcrypt from 'bcryptjs'

export const register=async(req,res)=>{

    const {name,email,password,role,photo,gender}=req.body;

    try {

        let user=null

        if(role=="patient")
        {
            user=User.findOne({email})
        }
        else if(role=="doctor")
        {
            user=Doctor.findOne({email})
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
    try {
        
    } catch (error) {
        
    }
}