import ProductCard from "@/components/productList/productCards/ProductCard";
import CategoryFilter from "../categoryHandler/CategoryFilter";
import { useState } from "react";
const ProductList = ({ productList, resetProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredCategories = () => {
    const allProductList = productList.map((p) => {
      return (
        <div className="m-3">
          <ProductCard product={p} />
        </div>
      );
    });
    if (selectedCategory) {
      const newProductList = productList
        .filter((p) => p.category?._id === selectedCategory)
        .map((p) => (
          <div className="m-3">
            <ProductCard product={p} />
          </div>
        ));
      if (newProductList.length > 0) {
        return newProductList;
      } else {
        return allProductList;
      }
    } else {
      return allProductList;
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <CategoryFilter {...{ handleSelectCategory }} />
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {productList && filteredCategories()}
        </div>
      </div>
    </>
  );
};

export default ProductList;
