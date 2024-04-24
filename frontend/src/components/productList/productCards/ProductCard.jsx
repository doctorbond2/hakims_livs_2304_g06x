import * as shad from "@/components/ui/shadBarrel";
import ProductCardBody from "./ProductCardBody";
import ProductModal from "./ProductModal";
import ProductAddMultiple from "./ProductAddMultiple";
import { useCart } from "@/components/header/shoppingCart/CartContext";
import { useState } from "react";
const ProductCard = ({ product }) => {
  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-200 shadow-2xl font-semibold">
        <>
          <a className="relative">
            {" "}
            {product.discountRate > 0 && (
              <div className="absolute  top-1 left-1 rounded p-1.5 bg-red-500 text-white text-base italic font-bold z-10">
                -{product.discountRate}%
              </div>
            )}
            {product.stock <= 50 && (
              <div className="absolute top-1 right-1 rounded p-1.5 bg-blue-500 text-white text-sm italic font-bold z-10">
                {product.stock + " kvar!"}
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
