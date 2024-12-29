import ProductList from '@/components/productList/ProductList';
import { useEffect, useState } from 'react';
import { GET_REQUEST } from '@/utils/helpers/request.helper';
import Hero from '@/components/Hero';
const Home = () => {
  const [productList, setProductList] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const reFetchProducts = async () => {
    setProductList(allProducts);
  };
  useEffect(() => {
    const fetchData = async () => {
      let endpoint = '/api/products';
      try {
        const products = await GET_REQUEST(endpoint);
        if (products) {
          setProductList(products);
          setAllProducts(productList);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [productList]);

  return (
    <>
      <div className="w-[100vw]">
        <Hero />

        {productList && <ProductList {...{ productList, reFetchProducts }} />}
      </div>
    </>
  );
};

export default Home;
