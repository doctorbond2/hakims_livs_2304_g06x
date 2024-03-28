import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true, minlength: 3, maxlength: 250 },
    description: { type: String, trim: true }
});

const Category = model('Category', categorySchema);

export default Category;