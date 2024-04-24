import React from "react";
import { useState, useEffect } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import * as shad from "@/components/ui/shadBarrel";
import ProductModal from "@/components/productList/productCards/ProductModal";
import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

function SearchBar() {
  useEffect(() => {
    const fetchData = async () => {
      let endpoint = "/api/products";
      try {
        const products = await GET_REQUEST(endpoint);
        if (products) {
          setProducts(products);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  const [products, setProducts] = useState([]);
  const [queryEntered, setQueryEntered] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilter = (e) => {
    const query = e.target.value.toLowerCase();
    setQueryEntered(query);
    const newFilter = products.filter((product) => {
      return product.title.toLowerCase().includes(query);
    });

    if (query === "") {
      setFilteredProducts([]);
      return;
    } else {
      setFilteredProducts(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredProducts([]);
    setQueryEntered("");
  };

  return (
    <div className="">
      <div className="flex">
        <input
          type="text"
          placeholder="Sök..."
          className="border-0 bg-white rounded-md rounded-tr-none rounded-br-none text-lg h-[60px] w-[350px] p-4 focus:outline-none"
          value={queryEntered}
          onChange={handleFilter}
        />
        <div className="h-[60px] w-[50px] bg-white grid place-items-center rounded-md rounded-tl-none rounded-bl-none">
          {queryEntered.length === 0 ? (
            <MagnifyingGlassIcon width="26" height="26" />
          ) : (
            <Cross1Icon
              width="20"
              height="20"
              className="cursor-pointer w-max h-max"
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      {filteredProducts.length != 0 && (
        <div className="overflow-hidden overflow-y-auto h-[272px] w-[400px] no-scrollbar absolute rounded-sm">
          {filteredProducts.slice(0, 4).map((product) => (
            <shad.Dialog key={product.id}>
              <shad.DialogTrigger asChild>
                <a className="grid bg-slate-50 items-end border grid-cols-7 grid-rows-2 cursor-pointer">
                  <div className="flex justify-center row-span-2 col-span-1 ">
                    <img
                      className="max-w-full max-h-20 object-contain p-1"
                      src={product.image.url}
                      alt={product.image.alt || "Product Image"}
                    />
                  </div>
                  <h3 className="text-2xl row-span-1 col-span-6 row-start-1 col-start-2">
                    {product.title}
                  </h3>
                  <h4 className="text-lg font-semibold col-span-6 row-start-2 col-start-2 pb-1">
                    {product.brand}
                  </h4>
                  <span className="text-base font-normal col-span-6 row-start-2 col-start-auto pb-1 pr-1">
                    {product.category.title}
                  </span>
                </a>
              </shad.DialogTrigger>
              <shad.DialogContent className="sm:max-w-[800px] grid grid-cols-2 grid-rows-2">
                <ProductModal product={product} />
              </shad.DialogContent>
            </shad.Dialog>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
