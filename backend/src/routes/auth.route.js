import express from "express";
import {
  megaAuthTest,
  loginController,
  registerController,
} from "../controllers/auth.controller.js";
import { authKeyMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/test", authKeyMiddleware, megaAuthTest);
router.post("/login", loginController);
router.post("/register", registerController);
export default router;
