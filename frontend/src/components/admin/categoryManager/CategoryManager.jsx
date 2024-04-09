import * as shad from "@/components/ui/shadBarrel";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
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

  return <div className="flex w-full justify-center">{categoryList && <CategoryList {...{ categoryList }} />}</div>;
};

export default CategoryManager;
