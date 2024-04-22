import React, { useEffect, useState } from "react";
import * as shad from "@/components/ui/shadBarrel";
import { useCart } from "@/components/header/shoppingCart/CartContext";
import CardSheetTrigger from "@/components/header/nav/CardSheetTrigger";
const ProductAddMultiple = ({ product }) => {
  const { addToCart, cart, removeFromCart, clearCart } = useCart();
  const [clicked, setClicked] = useState(false);
  const [thisProductInCart, setThisProductInCart] = useState(() => {
    return cart.find((item) => item._id === product._id);
  });
  const [productQuantity, setProductQuantity] = useState(() => {
    // const existingProductIndex = cart.findIndex(
    //   (item) => item._id === product._id
    // );
    // console.log("INDEX: ", existingProductIndex);
    // if (existingProductIndex !== -1) {
    //   return cart[existingProductIndex].cartQuantity > 0
    //     ? cart[existingProductIndex].cartQuantity
    //     : 0;
    // } else {
    //   return 0;
    // }
    const targetProduct = cart.find((item) => item._id === product._id);
    if (targetProduct) {
      return targetProduct.cartQuantity;
    } else {
      return 0;
    }
  });
  useEffect(() => {
    if (productQuantity > 0) {
      setClicked(true);
    }
  }, []);
  const getCartQuantity = () => {
    const cartItem = cart.find((item) => item._id === product._id);
    if (cartItem) {
      return cartItem.cartQuantity;
    }
  };
  const handleProductQuantity = (action) => {
    switch (action) {
      case "minus": {
        removeFromCart(product, 1);
        if (productQuantity - 1 === 0) {
          setClicked(false);
        }
        break;
      }
      case "plus": {
        addToCart(product, 1);
        break;
      }
    }
  };

  useEffect(() => {
    if (cart <= 0) {
      setClicked(false);
      setProductQuantity(0);
    }
    setProductQuantity(() => getCartQuantity());
    if (productQuantity > 0) {
      setClicked(true);
    }
  }, [cart]);

  return (
    <>
      {clicked && productQuantity > 0 ? (
        <div className="pb-2 content-end flex justify-center">
          <shad.Button
            className="w-25 bg-red-700 border-b-2 rounded-full hover:bg-yellow-700"
            onClick={() => {
              handleProductQuantity("minus");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
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
