import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryByName,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getDetailedCategories,
} from "../controllers/category.controller.js";
import { authKeyMiddleware as authKey } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/get-by-name/:id", getCategoryByName);
router.get("/:id", getCategoryById);
router.get("/products/details", getDetailedCategories);
router.post("/create", authKey, createCategory);
router.put("/update/:id", authKey, updateCategoryById);
router.delete("/delete/:id", authKey, deleteCategoryById);

router.get("/", getCategories);

export default router;
