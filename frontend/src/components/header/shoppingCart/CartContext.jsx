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
  const removeFromCart = (product, quantityToRemove) => {
    console.log("remove");
    let currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );
    if (existingProductIndex !== -1) {
      if (
        (currentCart[existingProductIndex].cartQuantity -= quantityToRemove < 0)
      ) {
        currentCart.splice(existingProductIndex, 1);
        setCart(currentCart);
        return;
      }
      currentCart[existingProductIndex].cartQuantity -= quantityToRemove;
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
