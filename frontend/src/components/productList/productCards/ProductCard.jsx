import * as shad from "@/components/ui/shadBarrel";
import { useState, useEffect } from "react";
import ProductCardBody from "./ProductCardBody";
import ProductModal from "./ProductModal";
import ProductAddMultiple from "./ProductAddMultiple";
import { useCart } from "@/components/header/shoppingCart/CartContext";
const ProductCard = ({ product, buyOrEdit, onSubmit, onEdit, onDelete }) => {
  const [clicked, setClicked] = useState(false);
  const { addToCart } = useCart();
  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
        <>
          <a className="relative">
            {" "}
            {product.discountRate > 0 && (
              <div className="absolute  top-1 left-1 rounded p-1.5 bg-red-500 text-white text-sm italic font-bold">
                -{product.discountRate}%
              </div>
            )}
            <ProductCardBody product={product} />
          </a>
        </>
        <div className="pb-2 content-end flex justify-center">
          {!clicked ? (
            <shad.Button
              className="w-[230px]"
              onClick={() => {
                setClicked(true);
                addToCart(product, 1);
              }}
            >
              Köp
            </shad.Button>
          ) : (
            <ProductAddMultiple {...{ product, setClicked }} />
          )}
        </div>
      </shad.Card>
    </>
  );
};

export default ProductCard;
