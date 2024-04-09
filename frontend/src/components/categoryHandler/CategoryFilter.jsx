import React, { useEffect, useState } from 'react';
import { GET_REQUEST } from '@/utils/helpers/request.helper';

const CategoryFilter = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await GET_REQUEST('/api/categories');
        if (response.data) {
          setCategories(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    onSelectCategory(categoryId); // Skicka categoryId till förälderkomponenten
  };

  return (
    <div>
      <h3>Filter by Category</h3>
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">All</option>
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
