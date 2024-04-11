import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import CategoryAddForm from "./CategoryAddForm";
import { POST_REQUEST } from "@/utils/helpers/request.helper";

const CategoryAddModal = ({}) => {
  const handleAddCategory = async (data) => {
    console.log("DATA:", data);
    if (!data) {
      return;
    }
    try {
      const response = await POST_REQUEST("/api/category/create/", data);
      if (response.status === 204) {
        console.log("Category created!");
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <CategoryAddForm {...{ handleAddCategory }} />
    </>
  );
};
export default CategoryAddModal;
