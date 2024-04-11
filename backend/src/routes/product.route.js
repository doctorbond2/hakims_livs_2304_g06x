import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductsByCategoryId,
  TEST_deleteAllProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getProducts);
router.get("/category/:categoryId", getProductsByCategoryId);
router.get("/:id", getProductById);
router.put("/update/:id", updateProductById);
router.delete("/delete/:id", deleteProductById);
router.delete("/auth/complete/delete", TEST_deleteAllProducts);
export default router;
