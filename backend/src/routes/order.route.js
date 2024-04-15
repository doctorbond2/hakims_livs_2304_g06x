<<<<<<< HEAD
import express from "express";
import { getOrderList, getOrderById, createOrder } from "../controllers/order.controller.js";

=======
import { getOrderList, getOrderById } from "../controllers/order.controller.js";
import express from "express";
>>>>>>> 1588f66aae27c0daa3ce7cb4584f69f6a02d6370
const router = express.Router();

router.get("/", getOrderList);
router.get("/:id", getOrderById);
router.post("/create", createOrder);

export default router;
