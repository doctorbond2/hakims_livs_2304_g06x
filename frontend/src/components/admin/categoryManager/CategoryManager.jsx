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
      const response = await DELETE_REQUEST("/api/category/delete/" + id);
      if (response.status === 204) {
        const newList = [...categoryList];
        newList.splice(index, 1);
        setCategoryList(newList);
        console.log(response);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GET_REQUEST("/api/category/products/details");
        if (response.data) {
          console.log(response.data);
          setCategoryList(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full justify-center">
        {categoryList && (
          <CategoryList
            {...{
              categoryList,
              handleDeleteCategory,
            }}
          />
        )}
      </div>
    </>
  );
};

export default CategoryManager;
