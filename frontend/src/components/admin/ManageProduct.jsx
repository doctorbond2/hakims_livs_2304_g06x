import React, { useState } from "react";
import * as shad from "@/components/ui/shadBarrel";
import "@/App.css";

export default function ManageProduct({
  onSubmit,
  addOrEdit = "add",
  product = {
    image: { url: "", alt: "Product Image" }, // Assuming 'alt' text is required; adjust as necessary
    name: "",
    price: "",
    stock: "",
    descriotion: "",
    brand: "",
    title: "",
    category: "",
    unit: "1", // Assuming a default unit value; adjust based on your backend requirements
  },
}) {
  const [newProduct, setNewProduct] = useState({ ...product });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(newProduct);
    console.log(newProduct);
  }

  return (
    <shad.Card className="w-80 shadCardPadding">
      <form onSubmit={handleSubmit} className="form">
        <div className="image-input">
          <label htmlFor="imageURL">Image URL</label>
          <input id="imageURL" name="image" type="text" placeholder="Ex. www.example.com/image.jpg" value={newProduct.image.url} onChange={handleChange} className="input" />
        </div>
        <div className="image-input">
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            id="description"
            name="description"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={handleChange}
            className="input"
            rows="4" // Adjust based on your design needs
          ></textarea>
        </div>
        <div className="image-input">
          <label htmlFor="productPrice">Product Price</label>
          <input id="productPrice" name="price" type="number" placeholder="Ex. 10, 20, 30, etc." value={newProduct.price} onChange={handleChange} className="input" />
        </div>
        <div className="image-input">
          <label htmlFor="productStock">Product Stock</label>
          <input id="productStock" name="stock" type="number" placeholder="Ex. 10, 20, 30, etc." value={newProduct.stock} onChange={handleChange} className="input" />
        </div>
        <div className="image-input">
          <label htmlFor="brand">Brand</label>
          <input id="brand" name="brand" type="text" placeholder="Brand Name" value={newProduct.brand} onChange={handleChange} className="input" />
        </div>
        <div className="image-input">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" placeholder="Product Title" value={newProduct.title} onChange={handleChange} className="input" />
        </div>
        <div className="image-input">
          <label htmlFor="category">Category</label>
          <input id="category" name="category" type="text" placeholder="Product Category" value={newProduct.category} onChange={handleChange} className="input" />
        </div>
        <div className="image-input">
          <label htmlFor="unit">Unit</label>
          <input
            id="unit"
            name="unit"
            type="text" // Adjust this type if 'unit' is expected to be a number
            placeholder="Unit (e.g., kg, lb, pcs)"
            value={newProduct.unit}
            onChange={handleChange}
            className="input"
          />
        </div>
        <shad.Button type="submit" className="button">
          {addOrEdit === "add" ? "Add Product" : "Update Product"}
        </shad.Button>
      </form>
    </shad.Card>
  );
}
