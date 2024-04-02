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

const Product = model("Product", productSchema);

export default Product;
