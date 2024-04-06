import React, { useState } from "react";

import "@/App.css";
import * as shad from "@/components/ui/shadBarrel";

export default function AddNewProduct({ onSubmit }) {
  const [newProduct, setNewProduct] = useState({});

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
  }

  return (
    <shad.Card className="w-80 shadCardPadding">
      <form onSubmit={handleSubmit} className={shad.form}>
        <label htmlFor="productName" className={shad.label}>
          {" "}
          Input product Name
        </label>
        <br />
        <input
          id="productName"
          type="text"
          placeholder="Ex. Milk, Bread, etc."
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
          placeholder="Ex. 9, 299, etc."
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
          placeholder="Ex. 10, 20, 30, etc."
          value={newProduct.stock}
          onChange={handleProductStockChange}
          className={shad.input}
        />{" "}
        <br />
        <shad.Button type={"submit"} className={shad.button}>
          Post user
        </shad.Button>
      </form>
    </shad.Card>
  );
}
