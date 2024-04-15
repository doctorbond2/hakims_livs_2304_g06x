import { getOrderList, getOrderById, createOrder } from "../controllers/order.controller.js";
import express from "express";
const router = express.Router();

router.get("/", getOrderList);
router.get("/:id", getOrderById);
router.post("/create", createOrder);

export default router;
