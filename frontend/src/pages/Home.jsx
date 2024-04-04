import * as shad from "@/components/ui/shadBarrel";
import ItemList from "@/components/ItemList";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import CardTest from "@/components/productList/productCards/ProductCard";


const Home = () => {
  const [productList, setProductList] = useState(null);
  const aNumber = 12;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GET_REQUEST("/api/products/");
        if (response.data) {
          console.log(response.data);
          setProductList(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CardTest />
      <>{productList && <ItemList {...{ productList }} />}</>
    </>
  );
};

export default Home;
