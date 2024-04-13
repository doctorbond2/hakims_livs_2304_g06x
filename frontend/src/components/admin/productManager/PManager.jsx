import React from "react";
import { useEffect, useState } from "react";
import qs from "qs";
import PManagerList from "./PManagerList";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
function PManager({}) {
  const [productList, setProductList] = useState(null);
  const detailEndPoint = useEffect(() => {
    const fetchData = async () => {
      const products = await GET_REQUEST("/api/products/");
      if (products) {
        setProductList(products);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex w-full justify-center">
        <PManagerList {...{ productList }} />
      </div>
    </>
  );
}

export default PManager;
