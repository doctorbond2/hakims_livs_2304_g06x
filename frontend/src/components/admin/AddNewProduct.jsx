import React, { useState } from "react";

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

  //Lägg in en knapp för att hämta alla produkter
  // klicka på produkt och få upp en modal med info om produkten

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName"> Input product Name</label>
        <input
          id="productName"
          type="text"
          value={newProduct.name}
          onChange={handleProductNameChange}
        />
        <br />
        <label htmlFor="productPrice">Product price</label>
        <input
          id="productPrice"
          type="text"
          value={newProduct.price}
          onChange={handleProductPriceChange}
        />{" "}
        <br />
        <label htmlFor="productStock">Product stock: </label>
        <input
          id="productStock"
          type="text"
          value={newProduct.stock}
          onChange={handleProductStockChange}
        />{" "}
        <br />
        <shad.Button type={"submit"}>Post user</shad.Button>
      </form>
    </>
  );
}
