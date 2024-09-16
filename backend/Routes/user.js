import { getSingleUser ,getAllUsers,updateUser,deleteUser, getUserProfile, getMyAppointments} from "../controllers/userController.js";
import express from "express"
import {authenticate, restrict} from "../auth/verifyToken.js"

const router=express.Router();

router.put("/:id",authenticate,restrict(["patient"]),updateUser);
router.delete("/:id",authenticate,restrict(["patient"]),deleteUser);
router.get("/:id",authenticate,restrict(["patient"]),getSingleUser);
router.get("/",authenticate,restrict(["admin"]),getAllUsers);
router.get("/profile/me",authenticate,restrict(["patient"]),getUserProfile);
router.get("/appointments/my-appointment",authenticate,restrict(["patient"]),getMyAppointments);

export default router;
