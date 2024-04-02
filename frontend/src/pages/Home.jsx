import * as shad from "@/components/ui/shadBarrel";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";

const Home = () => {
  const [productList, setProductList] = useState(null);
  const aNumber = 12;
  useEffect(() => {
    const data = GET_REQUEST("/");
    if (data) {
      setProductList(data);
    }
  }, []);

  return (
    <>
      <>Here will be Itemlist</>
    </>
  );
};

export default Home;
