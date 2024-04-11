import React, { useEffect, useState } from "react";

import "@/App.css";
import * as shad from "@/components/ui/shadBarrel";

export default function ManageProduct({
  onSubmit,
  onDelete,
  onEdit,
  addOrEdit = "add",
  product = {
    image: { url: "", alt: "Product Image" },
    price: "",
    stock: "",
    description: "",
    brand: "",
    title: "",
    category: "",
    unit: "",
  },
}) {
  const [newProduct, setNewProduct] = useState(product);

  // useEffect(() => {
  //   setNewProduct(product); // Uppdatera tillståndet när `product` props uppdateras
  // }, [product]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "image.url") {
      setNewProduct({
        ...newProduct,
        image: { ...newProduct.image, url: value },
      });
    } else if (name === "image.alt") {
      setNewProduct({
        ...newProduct,
        image: { ...newProduct.image, alt: value },
      });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(newProduct);
  }

  async function handleDelete(e) {
    e.preventDefault();
    const areYouSure = confirm("Are you sure you want to delete this product?");

    if (product.id && areYouSure) {
      const deleted = await onDelete(product.id);
      if (deleted) {
        setNewProduct({
          image: { url: "", alt: "Product Image" },
          price: "",
          stock: "",
          description: "",
          brand: "",
          title: "",
          category: "",
          unit: "",
        });
        alert("Product deleted successfully!");
      }
    }
  }
  async function handleEdit(e) {
    e.preventDefault();
    await onEdit(newProduct);
  }

  return (
    <shad.Card className="w-80 shadCardPadding">
      <form onSubmit={handleSubmit}>
        {product.image && addOrEdit != "add" && (
          <img
            src={product.image.url}
            alt={product.image.alt}
            style={{ maxWidth: "50%", height: "auto" }}
          />
        )}
        <shad.Label htmlFor="image.url">Image URL</shad.Label>
        <shad.Input
          id="image.url"
          name="image.url"
          type="text"
          value={newProduct.image.url}
          onChange={handleChange}
        />

        <shad.Label htmlFor="image.alt">Image Alt</shad.Label>
        <shad.Input
          id="image.alt"
          name="image.alt"
          type="text"
          value={newProduct.image.alt}
          onChange={handleChange}
        />

        {/* Upprepa för de andra attributen, nu med shad-komponenter */}
        <shad.Label htmlFor="description">Description</shad.Label>
        <shad.Input
          id="description"
          name="description"
          type="text"
          value={newProduct.description}
          onChange={handleChange}
        />

        <shad.Label htmlFor="brand">Brand</shad.Label>
        <shad.Input
          id="brand"
          name="brand"
          type="text"
          value={newProduct.brand}
          onChange={handleChange}
        />

        <shad.Label htmlFor="title">Title</shad.Label>
        <shad.Input
          id="title"
          name="title"
          type="text"
          value={newProduct.title}
          onChange={handleChange}
        />

        <shad.Label htmlFor="category">Category</shad.Label>
        <shad.Input
          id="category"
          name="category"
          type="text"
          value={newProduct.category}
          onChange={handleChange}
        />

        <shad.Label htmlFor="unit">Unit</shad.Label>
        <shad.Input
          id="unit"
          name="unit"
          type="text"
          value={newProduct.unit}
          onChange={handleChange}
        />

        <shad.Label htmlFor="price">Price</shad.Label>
        <shad.Input
          id="price"
          name="price"
          type="number"
          value={newProduct.price}
          onChange={handleChange}
        />

        <shad.Label htmlFor="stock">Stock</shad.Label>
        <shad.Input
          id="stock"
          name="stock"
          type="number"
          value={newProduct.stock}
          onChange={handleChange}
        />

        {addOrEdit === "add" ? (
          <shad.Button type="submit">Add Product </shad.Button>
        ) : (
          <shad.Button type="button" onClick={handleEdit}>
            Update Product
          </shad.Button>
        )}

        {addOrEdit !== "add" && (
          <shad.Button type="button" onClick={handleDelete}>
            Delete Product
          </shad.Button>
        )}
      </form>
    </shad.Card>
  );
}
