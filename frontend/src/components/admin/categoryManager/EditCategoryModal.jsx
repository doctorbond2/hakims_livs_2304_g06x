import React, { useEffect, useState } from "react";
import { useFetch } from "@/utils/hooks/requestHooks";
import * as shad from "@/components/ui/shadBarrel";
import CategoryProductList from "./CategoryProductList";
import { PUT_REQUEST, GET_REQUEST } from "@/utils/helpers/request.helper";

const EditCategoryModal = ({ category }) => {
  const {
    data: productData,
    loading,
    error,
  } = useFetch("/api/products/category/" + category._id);
  console.log("/api/products/category/" + category._id);
  const [c_info, set_c_info] = useState(category);
  console.log("c_info", c_info);

  const delProductFromCategory = async (id) => {
    if (!id) {
      console.log("Not valid target.");
      return;
    }
    try {
      const response = await PUT_REQUEST("/api/products/update/" + id, {
        category: null,
      });
      if (response.status === 200) {
        console.log("Removed from category. Product has now category: null");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const updateCategory = async (e) => {
    e.preventDefault();
    const id = category._id;
    if (!id) {
      return;
    }
    try {
      delete c_info.productCount;
      const response = await PUT_REQUEST("/api/category/update/" + id, c_info);
      if (response.status === 200) {
        console.log("Update success.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {}, [productData]);
  return (
    <>
      {" "}
      {productData && (
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
                  set_c_info({ ...c_info, name: e.target.value });
                }}
              />
              <shad.Label htmlFor="category-update-desc">
                Beskrivning:
              </shad.Label>

              <shad.Input
                id="category-update-desc"
                name="category-update-desc"
                type="text"
                value={c_info.description ? c_info.description : ""}
                onChange={(e) => {
                  set_c_info({ ...c_info, description: e.target.value });
                }}
              />

              <br></br>
              <shad.Separator></shad.Separator>
              <shad.DialogTrigger>
                <shad.Button
                  className={"border-green-600 text-neutral-200"}
                  type={"submit"}
                >
                  Uppdatera kategori
                </shad.Button>
              </shad.DialogTrigger>
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
