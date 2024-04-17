import React from "react";
import { useEffect, useState } from "react";
import qs from "qs";
import PManagerList from "./PManagerList";
import {
  admin_GET_REQUEST,
  admin_DELETE_REQUEST,
} from "@/utils/helpers/request.helper";
function PManager({}) {
  const [productList, setProductList] = useState(null);
  const [categoryList, setCategoryList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await admin_GET_REQUEST("/api/products/");
        if (products) {
          setProductList(products);
        }
        const categories = await admin_GET_REQUEST("/api/category/");
        if (categories) {
          setCategoryList(categories);
          console.log("CATEGORYLIST: ", categories);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  const updateProducts = async () => {
    try {
      const updatedProducts = await admin_GET_REQUEST("/api/products/");
      if (updatedProducts) {
        setProductList([...updatedProducts]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleDeleteProduct = async (id, index) => {
    const yes = confirm("Are you sure you want to delete? JA, Knappen funkar!");
    if (!yes) {
      return;
    }
    try {
      if (await admin_DELETE_REQUEST("/api/products/delete/" + id)) {
        const newList = [...productList];
        newList.splice(index, 1);
        setProductList(newList);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      {productList && categoryList && (
        <div className="flex w-full justify-center">
          <PManagerList
            {...{
              productList,
              categoryList,
              updateProducts,
              handleDeleteProduct,
            }}
          />
        </div>
      )}
    </>
  );
}

export default PManager;
