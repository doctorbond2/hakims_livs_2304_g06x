import ProductCard from '@/components/productList/productCards/ProductCard';
import CategoryFilter from '../categoryHandler/CategoryFilter';
import { useState } from 'react';
const ProductList = ({ productList }) => {
  const getFilteredProducts = () => {
    let filtered = productList.filter((p) => !(p.stock <= 0));

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category?._id === selectedCategory);
    }

    return filtered;
  };
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="flex justify-center min-w-[100vw]">
      <CategoryFilter {...{ handleSelectCategory }} />
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 min-w-[80%] min-h-[1000px]">
          {filteredProducts.map((p) => (
            <div className="m-3" key={p._id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      ) : (
        <h1>No products found</h1>
      )}
    </div>
  );
};

export default ProductList;
