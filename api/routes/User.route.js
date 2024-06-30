import express from "express";
import { test } from "../controllers/User.controller.js";
const router=express.Router();

router.post('/test',test );

  export default router;