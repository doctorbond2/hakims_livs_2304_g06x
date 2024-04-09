import * as shad from "@/components/ui/shadBarrel";
import ProductList from "@/components/productList/ProductList";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import ProductCard from "@/components/productList/productCards/ProductCard";
import CategoryFilter from "@/components/categoryHandler/CategoryFilter";


const Home = () => {
  const [productList, setProductList] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = "/api/products";
        if (selectedCategory) {
          endpoint = `/api/products?category=${selectedCategory}`;
        }
        const response = await GET_REQUEST(endpoint);
        if (response.data) {
          setProductList(response.data);
        }
      } catch (err) {
        console.log(err.message);
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