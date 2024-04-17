import { getOrderList, getOrderById, createOrder, updateOrderById } from "../controllers/order.controller.js";
import express from "express";
const router = express.Router();

router.get("/", getOrderList);
router.get("/:id", getOrderById);
router.post("/create", createOrder);
router.put("/update/:id", updateOrderById);

export default router;
