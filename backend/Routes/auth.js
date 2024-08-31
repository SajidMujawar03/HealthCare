import express from "express"
import { register, login } from "../controllers/authController.js"


const router=express.Router()


//why post request => use willsend sensitive data like password , email etc the post request send data in request body helps to keep
// sensitive data out of the URL and request logs
router.post("/register",register)
router.post('/login',login)


export default router;