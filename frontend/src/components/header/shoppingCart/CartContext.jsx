import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("shoppingCart");
    return localData ? JSON.parse(localData) : [];
  });
  const returnCartQuantity = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );
    console.log("INDEX: ", existingProductIndex);
    if (existingProductIndex !== -1) {
      return currentCart[existingProductIndex].cartQuantity > 0
        ? currentCart[existingProductIndex].cartQuantity
        : 0;
    } else {
      return 0;
    }
  };
  useEffect(() => {
    console.log("Cart updated:", cart);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);
  const removeFromCart = (product, quantityToRemove) => {
    let currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const existingProductIndex = currentCart.findIndex(
      (item) => item._id === product._id
    );
    if (existingProductIndex !== -1) {
      currentCart[existingProductIndex].cartQuantity -= quantityToRemove;
      if (currentCart[existingProductIndex].cartQuantity <= 0) {
        console.log("test");
        currentCart.splice(existingProductIndex, 1);
        setCart(currentCart);
        return;
      }
      setCart(currentCart);
    } else {
      currentCart.splice(existingProductIndex, 1);
      setCart(currentCart);
    }
  };
  const addToCart = (product, quantityToAdd = 1) => {
    let currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      currentCart[existingProductIndex].cartQuantity += quantityToAdd;
      setCart(currentCart);
    } else {
      currentCart.push({
        ...product,
        cartQuantity: quantityToAdd,
      });
      setCart(currentCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
