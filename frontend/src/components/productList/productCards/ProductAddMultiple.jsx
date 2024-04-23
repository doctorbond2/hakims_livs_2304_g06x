import React, { useEffect, useState } from "react";
import * as shad from "@/components/ui/shadBarrel";
import { useCart } from "@/components/header/shoppingCart/CartContext";
import CardSheetTrigger from "@/components/header/nav/CardSheetTrigger";
import { set } from "lodash";
const ProductAddMultiple = ({ product }) => {
  const { addToCart, cart, removeFromCart, clearCart } = useCart();
  const [clicked, setClicked] = useState(false);
  const [productStock, setProductStock] = useState(() => {
    // Försök att läsa lagervärdet från localStorage
    const savedStock = localStorage.getItem(`stock-${product._id}`);
    return savedStock ? parseInt(savedStock, 10) : product.stock;
  });
  // console.log("PRODUCT STOCK: ", productStock);
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
    // setProductStock(product.stock);
    console.log("PRODUCT: ", product, "Product stock: ", product.stock);
    switch (action) {
      case "minus": {
        removeFromCart(product, 1);
        setProductStock((prevStock) => prevStock + 1);

        if (productQuantity - 1 === 0) {
          setClicked(false);
        }
        break;
      }
      case "plus": {
        if (productStock >= 1) {
          addToCart(product, 1);
          setProductStock((prevStock) => prevStock - 1);

          break;
        } else {
          alert("Out of stock");
        }
      }
    }
  };

  useEffect(() => {
    localStorage.setItem(`stock-${product._id}`, productStock);
    console.log("Product Stock: ", productStock);
  }, [productStock]);
  /* 
  useEffect(() => {
    console.log("Uppdaterad Product Stock: ", productStock);
  }, [productStock]); */

  useEffect(() => {
    if (cart <= 0) {
      setClicked(false);
      setProductQuantity(0);
    }
    setProductQuantity(() => getCartQuantity());
    if (productQuantity > 0) {
      setClicked(true);
    }
    // console.log(product, "PRODUCT: ", productQuantity, "QUANTITY: ", cart);
  }, [cart]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key.includes("stock-")) {
        // Lyssna på alla nycklar som börjar med 'stock-'
        const newStock = localStorage.getItem(`stock-${product._id}`);
        setProductStock(newStock ? parseInt(newStock, 10) : product.stock);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center">
        {clicked && productQuantity > 0 ? (
          <div className="pb-2 content-end flex justify-around w-[70%]">
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
      </div>
    </>
  );
};

export default ProductAddMultiple;
