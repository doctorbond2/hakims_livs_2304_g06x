import React from "react";
import { useEffect, useState } from "react";
import qs from "qs";
import PManagerList from "./PManagerList";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
function PManager({}) {
  const [productList, setProductList] = useState(null);
  const [categoryList, setCategoryList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await GET_REQUEST("/api/products/");
        if (products) {
          setProductList(products);
        }
        const categories = await GET_REQUEST("/api/category/");
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
      const updatedProducts = await GET_REQUEST("/api/products/");
      if (updatedProducts) {
        setProductList([...updatedProducts]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      {productList && categoryList && (
        <div className="flex w-full justify-center">
          <PManagerList {...{ productList, categoryList, updateProducts }} />
        </div>
      )}
    </>
  );
}

export default PManager;
