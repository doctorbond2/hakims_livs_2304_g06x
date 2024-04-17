import express from "express";
import {
  megaAuthTest,
  adminLoginController,
  registerController,
  loginController,
  logoutController,
} from "../controllers/auth.controller.js";
import {
  authKeyMiddleware,
  authTokenMiddleware,
  verifyBothTokensMiddleware as verifyTokens,
  verifyAccessTokenMiddleware as verifyAccToken,
} from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/test", authKeyMiddleware, megaAuthTest);
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/logout", verifyAccToken, authTokenMiddleware, logoutController);
export default router;
