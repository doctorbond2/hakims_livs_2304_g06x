import express from "express";
import { getUserInfoWithToken } from "../controllers/user.controller.js";
import { verifyAccessTokenMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello from user route");
});
router.get("/details", verifyAccessTokenMiddleware, getUserInfoWithToken);
export default router;
