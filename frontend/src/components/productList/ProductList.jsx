import ProductCard from "@/components/productList/productCards/ProductCard";
import CategoryFilter from "../categoryHandler/CategoryFilter";
import { useState, useEffect } from "react";
const ProductList = ({ productList, reFetchProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = () => {
    let filteredProducts = productList.filter((p) => !(p.stock <= 0));

    if (selectedCategory) {
      filteredProducts = productList.filter(
        (p) => p.category?._id === selectedCategory
      );
    }
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {filteredProducts.map((p, index) => {
          return (
            <div className="m-3" key={p._id}>
              <ProductCard product={p} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <CategoryFilter {...{ handleSelectCategory }} />
      {filteredProducts()}
    </div>
  );
};

export default ProductList;
