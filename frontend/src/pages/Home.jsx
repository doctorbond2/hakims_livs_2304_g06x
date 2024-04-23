import * as shad from "@/components/ui/shadBarrel";
import ProductList from "@/components/productList/ProductList";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import CategoryFilter from "@/components/categoryHandler/CategoryFilter";
import Hero from "@/components/Hero";
const Home = () => {
  const [productList, setProductList] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const reFetchProducts = async () => {
    setProductList(allProducts);
  };
  useEffect(() => {
    const fetchData = async () => {
      let endpoint = "/api/products";
      try {
        const products = await GET_REQUEST(endpoint);
        if (products) {
          console.log(products);
          setProductList(products);
          setAllProducts(productList);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[100vw] ">
        <Hero />
        {productList && <ProductList {...{ productList, reFetchProducts }} />}
      </div>
    </>
  );
};

export default Home;
