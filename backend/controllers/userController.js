import { User } from "../models/user.model.js";

export const updateUser=async(req,res)=>{
    const id=req.params.id;

    try{
      
        const updatedUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true}).select("-password")//new :true ensures that we get the updated user in return
      
        res.status(200).json({success:true,message:"Successfully updated...",data:updatedUser})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:"Updation failure..."})
    }
}

export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Deletion successful..."})
    } catch (error) {
        res.status(500).json({success:false,message:"Deletion failure..."})
    }
}


export const getSingleUser=async(req,res)=>{
    const  id=req.params.id;//as id will be sent by params of the url
    try {
        const user=await User.findById(id).select("-password");
        res.status(200).json({success:true,message:"SuccessFully Found",data:user});
    } catch (error) {
        res.status(404).json({success:false,message:"Nouser Found"})
    }
}

export const  getAllUsers=async(req,res)=>{
    try {
        const users=await User.find({}).select("-password");//this will send all users from the database
        //-password will exclude password from the data
        res.status(200).json({success:true,message:"sent all users",data:users})
    } catch (error) {
        res.status(404).json({success:false,message:"Users Not Found"})
    }
}