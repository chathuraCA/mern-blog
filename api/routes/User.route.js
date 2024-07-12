import express from "express";
import { test, updateUser, check} from "../controllers/User.controller.js";
import { verifyToken } from "../Utils/verifyUser.js";
const router = express.Router();

router.post("/test", test);
router.put("/check", check);
router.put('/update/:user', verifyToken,updateUser);

export default router;
