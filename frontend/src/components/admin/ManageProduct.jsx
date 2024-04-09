import React, { useState } from "react";

import "@/App.css";
import * as shad from "@/components/ui/shadBarrel";

// Gör så att om man MangeProduct är inställd på Edit så ska den har input-fält som är förifylda med den produkten som ska editeras
// Gör så att
export default function ManageProduct({
  onSubmit,
  addOrEdit = "add",
  product,
}) {
  const [newProduct, setNewProduct] = useState({});

  addOrEdit = addOrEdit.toLocaleLowerCase();

  function handleImageURLChange(e) {
    setNewProduct({ ...newProduct, image: e.target.value });
  }

  function handleProductNameChange(e) {
    setNewProduct({ ...newProduct, name: e.target.value });
  }

  function handleProductPriceChange(e) {
    setNewProduct({ ...newProduct, price: e.target.value });
  }

  function handleProductStockChange(e) {
    setNewProduct({ ...newProduct, stock: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(newProduct);
    console.log(newProduct);
  }

  return (
    <shad.Card className="w-80 shadCardPadding">
      <form onSubmit={handleSubmit}>
        {/* add img */}
        {product.image && (
          <img
            src={product.image.url}
            alt={product.image.alt}
            style={{ maxWidth: "50%", height: "auto" }}
          />
        )}
        <label htmlFor="imageURL">Image URL</label>
        <br />
        <input
          id="imageURL"
          type="text"
          placeholder={
            addOrEdit === "add"
              ? "Ex. www.example.com/image.jpg"
              : product.image.url
          }
          value={newProduct.image}
          onChange={handleImageURLChange}
          // className={shad.input}
        />
        <label htmlFor="productName" className={shad.label}>
          {" "}
          Product Name
        </label>
        <br />
        <input
          id="productName"
          type="text"
          placeholder={
            addOrEdit === "add" ? "Ex. Milk, Bread, etc." : product.name
          }
          value={newProduct.name}
          onChange={handleProductNameChange}
          className={shad.input}
        />
        <br />
        <label htmlFor="productPrice" className={shad.label}>
          Product price
        </label>
        <br />
        <input
          id="productPrice"
          type="number"
          placeholder={
            addOrEdit === "add" ? "Ex. 10, 20, 30, etc." : product.price
          }
          value={newProduct.price}
          onChange={handleProductPriceChange}
          className={shad.input}
        />{" "}
        <br />
        <label htmlFor="productStock" className={shad.label}>
          Product stock:{" "}
        </label>
        <br />
        <input
          id="productStock"
          type="number"
          placeholder={
            addOrEdit === "add" ? "Ex. 10, 20, 30, etc." : product.stock
          }
          value={newProduct.stock}
          onChange={handleProductStockChange}
          className={shad.input}
        />{" "}
        <br />
        <shad.Button type={"submit"} className={shad.button}>
          {addOrEdit === "add" ? "Post user" : "Update user"}
        </shad.Button>
      </form>
    </shad.Card>
  );
}
