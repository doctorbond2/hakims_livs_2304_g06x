import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    console.log(err.message);
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
