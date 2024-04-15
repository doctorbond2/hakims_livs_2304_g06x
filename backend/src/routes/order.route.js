import express from "express";
import { getOrderList, getOrderById } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", getOrderList);
router.get("/:id", getOrderById);

export default router;