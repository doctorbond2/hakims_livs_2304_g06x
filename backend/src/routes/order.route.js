import { getOrderList, getOrderById } from "../controllers/order.controller.js";
import express from "express";
const router = express.Router();

router.get("/", getOrderList);
router.get("/:id", getOrderById);

export default router;
