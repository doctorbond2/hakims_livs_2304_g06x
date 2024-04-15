import express from "express";
import { megaAuthTest } from "../controllers/auth.controller.js";
import { authKeyMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/test", authKeyMiddleware, megaAuthTest);
export default router;
