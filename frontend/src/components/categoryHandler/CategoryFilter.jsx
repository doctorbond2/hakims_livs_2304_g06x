import React, { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";

const CategoryFilter = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await GET_REQUEST("/api/category");
      if (data) {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId) => {
    onSelectCategory(categoryId);
  };

  return (
    <div>
      <h3>Filtrera efter kategori</h3>
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">Alla produkter</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
