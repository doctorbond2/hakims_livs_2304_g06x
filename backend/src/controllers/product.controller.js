import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  console.log("product test");
  if (!req.body) {
    return res.status(400).json({
      error: "No body submitted",
    });
  }
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
  if (req.query) {
    let page = parseInt(req.query.page) || 1;
    let pageSize = parseInt(req.query.pageSize) || 10;
    let pageSkip = page - 1;
    try {
      const products = await Product.find().skip(pageSkip).limit(pageSize);
      return res.status(200).json(products);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        error: err.message,
      });
    }
  }

  try {
    const products = await Product.find();
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
      return res.status(404).json({
        error: "Product not found.",
      });
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
      res.status(200).json({
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
}