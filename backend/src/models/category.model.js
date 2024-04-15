import { Schema, model } from "mongoose";
import { removeProductsFromCategory } from "../utils/hooks/category.hooks.js";
const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1,
      maxlength: 15,
    },
    description: { type: String, trim: true, maxlength: 200 },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    index: true,
  }
);
categorySchema.pre("deleteOne", removeProductsFromCategory);
const Category = model("Category", categorySchema);

export default Category;
