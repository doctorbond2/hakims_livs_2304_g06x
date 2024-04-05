import React, { useState } from "react";
import { POST_REQUEST } from "@/utils/helpers/request.helper";
import * as shad from "@/components/ui/shadBarrel";
import AddNewProduct from "@/components/admin/AddNewProduct";

export default function Admin() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  async function handleSubmit(newProduct) {
    console.log("test");

    console.log(newProduct);
    try {
      const response = await POST_REQUEST("/api/products/create/", newProduct);
      if (response.status === 201) {
        console.log("Good job dude");
      } else {
        console.log("auhuaehuaheuaheuhauhueuahuhae");
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  //Lägg in en knapp för att hämta alla produkter
  // klicka på produkt och få upp en modal med info om produkten

  return (
    <>
      <AddNewProduct onSubmit={handleSubmit} />
    </>
  );
}
