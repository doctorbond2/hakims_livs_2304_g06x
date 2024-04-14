import React, { useEffect, useState } from "react";
import { useFetch } from "@/utils/hooks/requestHooks";
import * as shad from "@/components/ui/shadBarrel";
import CategoryProductList from "./CategoryProductList";

const EditCategoryModal = ({
  category,
  c_info,
  delProductFromCategory,
  updateCategory,
  handleInput,
}) => {
  console.log(c_info);
  const buttonMessage = async () => {};
  const {
    data: productData,
    loading,
    error,
  } = useFetch("/api/products/category/" + category._id);
  useEffect(() => {}, []);
  return (
    <>
      {" "}
      {productData && c_info && (
        <>
          <div>
            <form onSubmit={updateCategory}>
              <shad.Label htmlFor="category-update-title">
                Titel på kategori:
              </shad.Label>
              <shad.Input
                id="category-update-title"
                name="category-update-title"
                type="text"
                minLength={1}
                value={c_info.name}
                onChange={(e) => {
                  handleInput(e, "name");
                }}
              />
              <shad.Label htmlFor="category-update-desc">
                Beskrivning:
              </shad.Label>

              <shad.Input
                id="category-update-desc"
                name="category-update-desc"
                type="text"
                value={c_info.description}
                onChange={(e) => {
                  handleInput(e, "description");
                }}
              />

              <br></br>
              <shad.Separator></shad.Separator>
              <shad.Button
                className={"border-green-600 text-neutral-200"}
                type={"submit"}
              >
                Uppdatera kategori
              </shad.Button>
            </form>
          </div>
          <shad.Label>Relaterade produkter</shad.Label>
          {productData && (
            <CategoryProductList {...{ productData, delProductFromCategory }} />
          )}
        </>
      )}
    </>
  );
};

export default EditCategoryModal;
