import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
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

const Category = model("Category", categorySchema);

export default Category;
