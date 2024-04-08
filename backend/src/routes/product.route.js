import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductByCategory,
  TEST_deleteAllProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/category/:categoryId", getProductByCategory);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);
router.delete("/auth/complete/delete", TEST_deleteAllProducts);
export default router;
