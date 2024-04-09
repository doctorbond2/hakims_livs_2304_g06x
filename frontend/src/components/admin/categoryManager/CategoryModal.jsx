import React, { useEffect } from "react";
import { useFetch } from "@/utils/hooks/requestHooks";

const CategoryModal = (category) => {
  console.log(category.id);
  // const { data, loading, error } = useFetch(
  //   "/api/products/category/" + category.id
  // );

  useEffect(() => {
    console.log(category.id);
  }, []);
  return <>Kommer snvart!</>;
};

export default CategoryModal;
