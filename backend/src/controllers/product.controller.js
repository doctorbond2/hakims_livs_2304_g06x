import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  console.log("test");
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
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    console.log(err.message);
  }
};
