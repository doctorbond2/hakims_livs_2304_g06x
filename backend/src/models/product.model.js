import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
    index: true,
  },
  productImage: { type: String, required: true },
  brand: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 20,
    index: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
    trim: true,
    index: true,
  },
  price: { type: Number, required: true, default: 0, min: 0, max: 10000 },
  unitPrice: { type: Number, required: true, default: 0, min: 0, max: 10000 }, //jämförspris
  unit: { type: String, required: true, default: 0, min: 0,  max: 100 }, //kg, liter, st
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 200,
  },
  stock: { type: Number, required: true, default: 0, min: 0, max: 100 },
});



const Product = model("Product", productSchema);

export default Product;
