import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById

} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProductById)
router.delete("/:id", deleteProductById)

export default router;
