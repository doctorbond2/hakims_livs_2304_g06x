import express from "express";
import { getUserInfoWithToken } from "../controllers/user.controller.js";
import { verifyBothTokensMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello from user route");
});
router.get("/details", verifyBothTokensMiddleware, getUserInfoWithToken);
export default router;
