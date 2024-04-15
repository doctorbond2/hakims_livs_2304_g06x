import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import { getProductsQueryHandler } from "../utils/helpers/queryHelpers.js";

export const createProduct = async (req, res) => {
  console.log("product test");
  if (!req.body) {
    return res.status(400).json({
      error: "No body submitted",
    });
  }
  console.log("REQBODY: ", req.body);
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ message: "Error with post request.", error: err.message });
  }
};

export const getProducts = async (req, res) => {
  if (req.query.page) {
    const response = await getProductsQueryHandler(req.query);
    if (!response.error) {
      return res.status(200).json(response);
    } else {
      console.log(response.error);
      return res.status(500).json({
        error: response.error,
      });
    }
  }
  //Safetylimit på 50
  try {
    const products = await Product.find()
      .limit(50)
      .populate("category")
      .sort({ title: 1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
    console.log(err.message);
  }
};

export const getProductById = async (req, res) => {
  console.log("test product by ID");
  if (!req.params.id) {
    return res.status(400).json({
      error: "No id submitted",
    });
  }
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      throw new Error("Product not found");
    }
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};

export const updateProductById = async (req, res) => {
  console.log("test update product by id");
  if (!req.params.id) {
    return res.status(400).json({
      error: "No id submitted",
    });
  }

  if (!req.body) {
    return res.status(400).json({
      error: "No body submitted",
    });
  }

  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate({ _id: id }, req.body);
    if (product) {
      res.status(200).json({
        message: "Product updated successfully",
        updated_product: product,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};

export const deleteProductById = async (req, res) => {
  console.log("test delete product by id");
  if (!req.params.id) {
    return res.status(400).json({
      error: "No id submitted",
    });
  }

  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete({ _id: id }, req.body);
    if (product) {
      res.status(204).json({
        message: "Product deleted successfully",
        deleted_product: product,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getProductsByCategoryId = async (req, res) => {
  console.log("test get product by category");
  const categoryId = req.params.categoryId;

  if (!categoryId) {
    return res.status(400).json({
      error: "No category id submitted",
    });
  }

  try {
    const products = await Product.find({ category: categoryId }).populate(
      "category"
    );
    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};
export const admin_deleteAllProducts = async (req, res) => {
  try {
    const result = await Product.find().deleteMany();
    if (result) {
      res.status(204).json({
        message:
          "All products have been removed from the database. My god, what have you done?",
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
export const TEST_deleteAllProducts = async () => {
  const { key } = req.body;
  const deleteKey = process.env.DELETE_PRODUCTS_KEY;
  if (toString(key) !== toString(deleteKey)) {
    return res
      .status(401)
      .json({ error: "Unauthorized access. Get lost noob." });
  }
  try {
    const result = await Product.find().deleteMany();
    if (result) {
      res.status(200).json({
        message:
          "All products have been removed from the database. My god, what have you done?",
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
