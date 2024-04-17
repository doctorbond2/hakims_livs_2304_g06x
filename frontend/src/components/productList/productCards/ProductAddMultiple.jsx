import React, { useEffect } from "react";
import * as shad from "@/components/ui/shadBarrel";
import { useCart } from "@/components/header/shoppingCart/CartContext";
const ProductAddMultiple = ({ product }) => {
  const { addToCart, cart, removeFromCart } = useCart();
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <>
      <div className="pb-2 content-end flex justify-space-between">
        <shad.Button
          onClick={() => {
            removeFromCart(product, 1);
          }}
        >
          -
        </shad.Button>
        <div className="w-[5vw]">asd</div>
        <shad.Button
          onClick={() => {
            addToCart(product, 1);
          }}
        >
          +
        </shad.Button>
      </div>
    </>
  );
};

export default ProductAddMultiple;
