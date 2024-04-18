import React, { useEffect, useState } from "react";
import * as shad from "@/components/ui/shadBarrel";
import { useCart } from "@/components/header/shoppingCart/CartContext";
const ProductAddMultiple = ({ product, setClicked }) => {
  const { addToCart, cart, removeFromCart, clearCart } = useCart();

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
  useEffect(() => {
    if (cart.length <= 0) {
      setClicked((prev) => !prev);
    }
  }, [cart]);
  return (
    <>
      <div className="pb-2 content-end flex justify-around">
        <shad.Button
          className="w-25 bg-red-700 border-b-2 rounded-full hover:bg-yellow-700"
          onClick={() => {
            handleProductQuantity("minus");
          }}
        >
          -
        </shad.Button>
        <div className="group">
          {
            <shad.Button className="bg-white-100 p-2 hover:bg-yellow-500">
              <img
                src={"../../../public/shoppingcart.svg"}
                style={{ width: "20px" }}
              ></img>
            </shad.Button>
          }
          <shad.Label className={"text-lg text-[20px]"}>
            {productQuantity} st
          </shad.Label>
        </div>
        <shad.Button
          className="w-15 bg-green-700 border-b-2 rounded-full hover:bg-yellow-500"
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
