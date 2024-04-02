import React, { useState } from "react";
import * as shad from "@/components/ui/shadBarrel";

export default function Admin() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");

  function addProductToMongoDB() {
    console.log("Adding product to MongoDB");
  }

  function handleProductNameChange(e) {
    setProductName(e.target.value);
  }

  function handleProductPriceChange(e) {
    setProductPrice(e.target.value);
  }

  function handleProductStockChange(e) {
    setProductStock(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form>
        <label HTMLfor="productName"> Input product Name</label>
        <input
          id="productName"
          type="text"
          value={productName}
          onChange={handleProductNameChange}
        />
        <br />
        <label HTMLfor="productPrice">Product price</label>
        <input
          id="productPrice"
          type="text"
          value={productPrice}
          onChange={handleProductPriceChange}
        />{" "}
        <br />
        <label HTMLfor="productStock">Product stock: </label>
        <input
          id="productStock"
          type="text"
          value={productStock}
          onChange={handleProductStockChange}
        />{" "}
        <br />
      </form>
    </>
  );
}
