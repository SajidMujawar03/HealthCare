

import { User } from "../models/user.model.js";
import { Doctor } from "../models/doctor.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1d' }
    );
};

export const register = async (req, res) => {
    const { name, email, password, role, photo, gender } = req.body;
    try {
        let user = null;
    

        // Check if the user already exists
        if (role === "patient") {
            user = await User.findOne({ email });
        } else if (role === "doctor") {
            user = await Doctor.findOne({ email });
        }

        if (user) {
            return res.status(200).json({ message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create a new user based on the role
        if (role === "patient") {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });

            
        } else if (role === "doctor") {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        }

        await user.save();  // Save the created user

        res.status(200).json({ success: true, message: "User successfully created..." });
    } catch (error) {
        console.error("Registration error:", error);  // Log the error
        res.status(500).json({ success: false, message: "Internal server error... Try Again" });
    }
};

export const login = async (req, res) => {
   
    let { email } = req.body;
   

    try {

      
        let user = null;

        // Check for both patient and doctor
        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
           
        } else if (doctor) {
            user = doctor;
        }

        // User not found
        if (!user) {
            return res.status(404).json({ message: "User not found..." });
        }

        // Compare the provided password with the hashed password in the database
        const isPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isPassword) {
            return res.status(400).json({ status: false, message: "Invalid credentials..." });
        }

        // Generate token
        const token = generateToken(user);
        const { password, role, appointments, ...rest } = user._doc;
        res.status(200).json({
            success: true,
            message: "Successfully logged in...",
            token,
            data: { ...rest },
            role
        });
    } catch (error) {
        console.error("Login error:", error);  // Log the error
        res.status(500).json({ status: false, message: "Failed to login..." });
    }
};
