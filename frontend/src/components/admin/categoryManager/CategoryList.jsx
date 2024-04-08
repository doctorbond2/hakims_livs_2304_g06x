const CategoryList = ({ categoryList }) => {
  console.log(categoryList);
  return <> {categoryList && categoryList.map((category) => <p>{category.name}</p>)}</>;
};
export default CategoryList;
