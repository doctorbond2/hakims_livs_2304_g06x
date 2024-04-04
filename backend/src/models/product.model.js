import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1,
      maxlength: 100,
      index: true,
    },
    productImage: {
      url: { type: String, required: true, default: "No product image" },
      alt: { type: String, default: "Product Image" },
    },
    brand: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100,
      index: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: { type: Number, required: true, default: 0, min: 0, max: 10000 },
    unitPrice: { type: Number, required: true, default: 0, min: 0, max: 10000 }, //jämförspris
    unit: { type: String, required: true, default: 0, min: 0, max: 100 }, //kg, liter, st
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 255,
      default: "No description",
    },
    stock: { type: Number, required: true, default: 0, min: 0, max: 1000 },
  },
  {
    timestamps: true,
  }
);



const Product = model("Product", productSchema);

export default Product;
