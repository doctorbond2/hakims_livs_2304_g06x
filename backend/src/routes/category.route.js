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

const router = express.Router();

router.get("/get-by-name/:id", getCategoryByName);
router.get("/:id", getCategoryById);
router.get("/products/details", getDetailedCategories);
router.post("/create", createCategory);
router.put("/update/:id", updateCategoryById);
router.delete("/delete/:id", deleteCategoryById);

router.get("/", getCategories);

export default router;
