import * as shad from "@/components/ui/shadBarrel";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import CategoryAddForm from "./CategoryAddForm";
import { DELETE_REQUEST } from "@/utils/helpers/request.helper";
import CategoryList from "@/components/admin/categoryManager/CategoryList";

const CategoryManager = () => {
  const [categoryList, setCategoryList] = useState(null);

  const handleDeleteCategory = async (id, index) => {
    const yes = confirm("Are you sure you want to delete? JA, Knappen funkar!");
    if (!yes) {
      return;
    }
    try {
      if (await DELETE_REQUEST("/api/category/delete/" + id)) {
        const newList = [...categoryList];
        newList.splice(index, 1);
        setCategoryList(newList);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const updateCategories = async () => {
    const detailedCategories = await GET_REQUEST(
      "/api/category/products/details"
    );
    if (detailedCategories) {
      setCategoryList(detailedCategories);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      updateCategories();
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full justify-center">
        {
          <CategoryList
            {...{
              categoryList,
              handleDeleteCategory,
              updateCategories,
            }}
          />
        }
      </div>
    </>
  );
};

export default CategoryManager;
