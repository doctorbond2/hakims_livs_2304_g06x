import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
  },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
});

productSchema.pre("save", (next) => {
  const product_doc = this;
  if (!product_doc.image) {
    console.log("Fetch an image!");
  }
  next();
});

const Product = model("Product", productSchema);

export default Product;
