import * as shad from "@/components/ui/shadBarrel";
import ProductList from "@/components/productList/ProductList";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import CategoryFilter from "@/components/categoryHandler/CategoryFilter";

const Home = () => {
  const [productList, setProductList] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      let endpoint = "/api/products";
      if (selectedCategory) {
        endpoint = `/api/products/category/${selectedCategory}`;
      }
      const products = await GET_REQUEST(endpoint);
      if (products) {
        console.log(products);
        setProductList(products);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <>
      <CategoryFilter onSelectCategory={setSelectedCategory} />
      {productList && <ProductList productList={productList} />}
    </>
  );
};

export default Home;
