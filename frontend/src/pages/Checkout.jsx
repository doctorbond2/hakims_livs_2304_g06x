import React, { useState } from "react";
import Page from "@/components/checkout/page";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { useEffect } from "react";

export default function Checkout() {
  const [emptyCart, setEmptyCart] = useState(false);

  function checkCart() {
    if (localStorage.getItem("shoppingCart") === null) {
      setEmptyCart(true);
    }
  }

  useEffect(() => {
    checkCart();
  }, []);

  return (
    <div className="">
      <Page className="grid grid-cols-2 grid-rows-1" />
      {!emptyCart && <CheckoutForm />}
    </div>
  );
}
