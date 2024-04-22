import React, { useEffect, useState } from "react";
import * as shad from "@/components/ui/shadBarrel";
import { useCart } from "@/components/header/shoppingCart/CartContext";
import CardSheetTrigger from "@/components/header/nav/CardSheetTrigger";
const ProductAddMultiple = ({ product }) => {
  const { addToCart, cart, removeFromCart, clearCart } = useCart();
  const [clicked, setClicked] = useState(false);
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
    buttonHandle();
  };
  const buttonHandle = () => {
    if (productQuantity <= 0) {
      setClicked(false);
    }
  };
  useEffect(() => {
    if (cart <= 0) {
      setClicked(false);
      setProductQuantity(0);
    }
  }, [cart]);
  return (
    <>
      {clicked ? (
        <div className="pb-2 content-end flex justify-center">
          <shad.Button
            className="w-25 bg-red-700 border-b-2 rounded-full hover:bg-yellow-700"
            onClick={() => {
              handleProductQuantity("minus");
            }}
          >
            -
          </shad.Button>
          <div className="flex content-normal">
            <CardSheetTrigger />
            <shad.Label className={"text-lg text-[25px] pr-1"}>
              {productQuantity}
            </shad.Label>
          </div>
          <shad.Button
            className="w-15 bg-green-700 border-b-2 rounded-full hover:bg-yellow-500 mg-0"
            onClick={() => {
              handleProductQuantity("plus");
            }}
          >
            +
          </shad.Button>
        </div>
      ) : (
        <div className="pb-2 content-end flex justify-center">
          <shad.Button
            className="w-[230px] bg-green-600 italic text-lg"
            onClick={() => {
              handleProductQuantity("plus");
              setClicked(true);
            }}
          >
            Köp
          </shad.Button>
        </div>
      )}
    </>
  );
};

export default ProductAddMultiple;
