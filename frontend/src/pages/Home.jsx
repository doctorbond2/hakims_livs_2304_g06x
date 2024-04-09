import * as shad from "@/components/ui/shadBarrel";
import React, { useEffect, useState } from 'react';
import { GET_REQUEST } from '@/utils/helpers/request.helper';
import ProductList from '@/components/productList/ProductList';
import CategoryFilter from '@/components/categoryHandler/CategoryFilter';

const Home = () => {
  const [productList, setProductList] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GET_REQUEST('/api/products/');
        if (response.data) {
          setProductList(response.data);
          setFilteredProducts(response.data); // Visa alla produkter från början
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = async (categoryId) => {
    try {
      if (categoryId) {
        const response = await GET_REQUEST(`/api/products/category/${categoryId}`);
        if (response.data) {
          setFilteredProducts(response.data);
        }
      } else {
        // Om ingen kategori är vald, återställ till att visa alla produkter
        setFilteredProducts(productList);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <CategoryFilter onSelectCategory={handleCategoryChange} />
      {filteredProducts && <ProductList productList={filteredProducts} />}
    </>
  );
};

export default Home;
