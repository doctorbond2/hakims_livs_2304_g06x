import Category from "../models/category.model.js";

export async function createCategory(req, res) {
  console.log("Category test");

  if (!req.body) {
    return res.status(400).json({ message: "Request BODY not found" });
  }

  try {
    let category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
}

export async function getCategories(req, res) {
  try {
    let categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err.message);
  }
}
