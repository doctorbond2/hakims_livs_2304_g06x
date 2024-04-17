import React, { useEffect, useState } from "react";
import * as shad from "@/components/ui/shadBarrel";
import { useCart } from "@/components/header/shoppingCart/CartContext";
const ProductAddMultiple = ({ product, setClicked }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const [productQuantity, setProductQuantity] = useState(() => {
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );
    console.log("INDEX: ", existingProductIndex);
    if (existingProductIndex !== -1) {
      return cart[existingProductIndex].cartQuantity > 0
        ? cart[existingProductIndex].cartQuantity
        : 0;
    } else {
      return 0;
    }
  });
  const handleProductQuantity = (type) => {
    switch (type) {
      case "minus": {
        removeFromCart(product, 1);
        setProductQuantity(productQuantity - 1);
        break;
      }
      case "plus": {
        addToCart(product, 1);
        setProductQuantity(productQuantity + 1);
        break;
      }
    }
  };
  useEffect(() => {
    if (productQuantity <= 0) {
      setClicked((prev) => !prev);
    }
  }, [productQuantity]);
  return (
    <>
      <div className="pb-2 content-end flex justify-around">
        <shad.Button
          className="w-20 bg-red-700"
          onClick={() => {
            handleProductQuantity("minus");
          }}
        >
          -
        </shad.Button>
        <div>
          <shad.Label className="text-lg">{productQuantity}</shad.Label>
        </div>
        <shad.Button
          className="w-20 bg-green-700"
          onClick={() => {
            handleProductQuantity("plus");
          }}
        >
          +
        </shad.Button>
      </div>
    </>
  );
};

export default ProductAddMultiple;
