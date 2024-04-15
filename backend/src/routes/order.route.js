import express from "express";
import { getOrderList, getOrderById, createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", getOrderList);
router.get("/:id", getOrderById);
router.post("/create", createOrder);

export default router;