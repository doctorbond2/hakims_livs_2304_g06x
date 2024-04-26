import express from "express";
import {
  getUserInfoWithToken,
  getAdminInfoWithToken,
} from "../controllers/user.controller.js";
import {
  verifyBothAdminTokensMiddleware,
  verifyBothTokensMiddleware,
} from "../middleware/auth.middleware.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello from user route");
});
router.get("/details", verifyBothTokensMiddleware, getUserInfoWithToken);
router.get(
  "/auth/details",
  verifyBothTokensMiddleware,
  verifyBothAdminTokensMiddleware,
  getUserInfoWithToken
);
export default router;
