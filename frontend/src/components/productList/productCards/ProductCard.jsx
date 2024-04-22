import * as shad from "@/components/ui/shadBarrel";
import ProductCardBody from "./ProductCardBody";
import ProductModal from "./ProductModal";
import ProductAddMultiple from "./ProductAddMultiple";
import { useCart } from "@/components/header/shoppingCart/CartContext";
import { useState } from "react";
const ProductCard = ({ product, buyOrEdit, onSubmit, onEdit, onDelete }) => {
  const { addToCart, cart } = useCart();
  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-200 shadow-2xl font-semibold">
        <>
          <a className="relative">
            {" "}
            {product.discountRate > 0 && (
              <div className="absolute  top-1 left-1 rounded p-1.5 bg-red-500 text-white text-sm italic font-bold z-10">
                -{product.discountRate}%
              </div>
            )}
            <ProductCardBody product={product} />
          </a>
        </>
        <ProductAddMultiple {...{ product }} />
      </shad.Card>
    </>
  );
};

export default ProductCard;
