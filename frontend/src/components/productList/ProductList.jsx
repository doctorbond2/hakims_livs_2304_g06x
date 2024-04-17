import ProductCard from "@/components/productList/productCards/ProductCard";
const ProductList = ({ productList }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {productList &&
            productList.map((product) => (
              <>
                <div className="m-3 shadow-lg shadow-2xl">
                  <ProductCard product={product} buyOrEdit={"Köp"} />
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
