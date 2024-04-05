import React, { useState } from "react";
import { POST_REQUEST } from "@/utils/helpers/request.helper";
import * as shad from "@/components/ui/shadBarrel";

export default function Admin() {
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
    console.log("test");

    const updateObject = newProduct;

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
