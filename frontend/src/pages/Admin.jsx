import React, { useState } from "react";
import { POST_REQUEST } from "@/utils/helpers/request.helper";
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

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("test");
    const updateObject = {
      name: productName,
      price: productPrice,
      stock: productStock,
    };
    console.log(updateObject);
    try {
      const response = await POST_REQUEST(
        "/api/products/create/",
        updateObject
      );
      if (response.status === 201) {
        console.log("Good job dude");
      } else {
        console.log("auhuaehuaheuaheuhauhueuahuhae");
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <form
        onSubmit={async (e) => {
          await handleSubmit(e);
        }}
      >
        <label htmlFor="productName"> Input product Name</label>
        <input
          id="productName"
          type="text"
          value={productName}
          onChange={handleProductNameChange}
        />
        <br />
        <label htmlFor="productPrice">Product price</label>
        <input
          id="productPrice"
          type="text"
          value={productPrice}
          onChange={handleProductPriceChange}
        />{" "}
        <br />
        <label htmlFor="productStock">Product stock: </label>
        <input
          id="productStock"
          type="text"
          value={productStock}
          onChange={handleProductStockChange}
        />{" "}
        <br />
        <shad.Button type={"submit"}>Post user</shad.Button>
      </form>
    </>
  );
}
