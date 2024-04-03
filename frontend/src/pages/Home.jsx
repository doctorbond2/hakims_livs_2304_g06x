import * as shad from "@/components/ui/shadBarrel";
import ItemList from "@/components/ItemList";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";


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
      <>{productList && <ItemList {...{ productList }} />}</>
    </>
  );
};

export default Home;
