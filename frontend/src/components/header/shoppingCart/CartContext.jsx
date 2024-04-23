import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("shoppingCart");
    return localData ? JSON.parse(localData) : [];
  });
  const [cartCleared, setCartCleared] = useState(false);

  function clearCart() {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("stock-")) {
        localStorage.removeItem(key);
      }
    });
    setCart([]);
    const localData = localStorage.removeItem("shoppingCart");
    setCartCleared(true);
    window.location.reload();
  }

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
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, cartCleared }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
