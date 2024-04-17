import { getOrderList, getOrderById, createOrder, updateOrderById } from "../controllers/order.controller.js";
import express from "express";
const router = express.Router();
import { authKeyMiddleware as authKey } from "../middleware/auth.middleware.js";

router.get("/", authKey, getOrderList);
router.get("/:id", getOrderById);
router.post("/create", createOrder);
router.put("/update/:id", updateOrderById);

export default router;
