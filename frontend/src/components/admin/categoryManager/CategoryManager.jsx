import * as shad from "@/components/ui/shadBarrel";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import { DELETE_REQUEST } from "@/utils/helpers/request.helper";
import CategoryList from "@/components/admin/categoryManager/CategoryList";

const CategoryManager = () => {
  const [categoryList, setCategoryList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GET_REQUEST("/api/category/products/amount");
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
  const handleDeleteCategory = async (e, id) => {
    console.log("test");
  };

  return (
    <>
      <>
        {categoryList && (
          <CategoryList {...{ categoryList, handleDeleteCategory }} />
        )}
      </>
    </>
  );
};

export default CategoryManager;
