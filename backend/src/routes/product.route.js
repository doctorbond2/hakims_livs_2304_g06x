import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductsByCategoryId,
  admin_deleteAllProducts,
} from "../controllers/product.controller.js";
import { authKeyMiddleware as authKey } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/create", createProduct);
router.get("/", getProducts);
router.get("/category/:categoryId", getProductsByCategoryId);
router.get("/:id", getProductById);
router.put("/update/:id", updateProductById);
router.delete("/delete/:id", authKey, deleteProductById);
router.delete("/auth/complete/delete", admin_deleteAllProducts);
export default router;
