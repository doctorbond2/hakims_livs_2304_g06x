import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("shoppingCart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    console.log("Cart updated:", cart);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantityToAdd = 1) => {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const existingProductIndex = cart.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].cartQuantity += quantityToAdd;
    } else {
      cart.push({
        ...product,
        cartQuantity: quantityToAdd,
      });
    }

    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
