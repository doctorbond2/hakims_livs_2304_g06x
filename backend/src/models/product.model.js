import {Schema, model} from 'mongoose';


const productSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true, minlength: 3, maxlength: 100 },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
});

/* const productSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    producer: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    image: { type: String, required: true, trim: true }, //add filepath to image here, see example below
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
});
 */

const Product = model('Product', productSchema);
export default Product;

/*
v Example of how to create a new product v (added as a reminder for image path add)

const newProduct = new Product({
    name: 'Produktnamn',
    producer: 'Producentnamn',
    description: 'Produktbeskrivning',
    price: 10,
    stock: 100,
    image: '/images/product.jpg', 
    category: categoryId 
});

*/