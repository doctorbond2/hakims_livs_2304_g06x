import Product from "../models/product.model.js";
import Category from "../models/category.model.js";

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
};

export const getProductByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;

  if (!categoryId) {
    return res.status(400).json({
      error: "No category ID provided",
    });
  }

  try {
    const products = await Product.find({
      category: mongoose.Types.ObjectId(categoryId),
    }).populate("category");
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};


export const TEST_deleteAllProducts = async () => {
  if (!req.body && !req.body.key) {
    return res.status(400).json({ error: "No api key??" });
  }
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
