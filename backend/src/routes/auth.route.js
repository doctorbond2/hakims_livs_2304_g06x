import express from "express";
import {
  megaAuthTest,
  loginController,
} from "../controllers/auth.controller.js";
import { authKeyMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/test", authKeyMiddleware, megaAuthTest);
router.post("/auth/login", loginController);
router.post("/auth/register");
export default router;
