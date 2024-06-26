import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import CategoryAddForm from "./CategoryAddForm";
import { admin_POST_REQUEST } from "@/utils/helpers/request.helper";

const CategoryAddModal = ({ updateCategories }) => {
  const handleAddCategory = async (data) => {
    console.log("DATA:", data);
    if (!data) {
      return;
    }
    try {
      if (await admin_POST_REQUEST("/api/category/create/", data)) {
        console.log("Category created!");
        updateCategories();
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
