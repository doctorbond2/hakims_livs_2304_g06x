import ProductCard from "@/components/productList/productCards/ProductCard";

const ProductList = ({ productList }) => {
  console.log("hej", productList);
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {productList &&
            productList.map((product) => (
              <>
                <ProductCard product={product} />
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
