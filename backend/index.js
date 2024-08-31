import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import cors from "cors";

//routes
import authRoute from "./Routes/auth.js"

//configure dotenv
dotenv.config()

//creating application interface
const app=express()

//setting up port
const port=process.env.PORT || 3000;

//setting up cors 0ptions
//configure cors behaviour
const corsOptions={
    origin:true,//allows any domain to access servers resources which is helpfulduring development


}


app.get('/',(req,res)=>{
    res.send("API is Working")
    
})

//Database connection
mongoose.set('strictQuery',false)
const connectDB=async ()=>{
    try {
       await  mongoose.connect(process.env.MONGO_URL,
            {
                useNewUrlParser:true,//I think it is deprecated now and we have to check it on the internet
                useUnifiedTopology:true,
            }
        )

        console.log("MONGODB is connected...");
        
        
    } catch (error) {
        console.log("MONGODB connection failure...");
    }
}

//middleware
app.use(express.json())//forparsing based on data
app.use(cookieParser())
app.use(cors(corsOptions))
app.use("/api/v1/auth",authRoute)



app.listen(port,()=>{
    connectDB()
    console.log("Server is Running");
    
})