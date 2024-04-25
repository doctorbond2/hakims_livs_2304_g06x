import React, { useState } from "react";
import TableContent from "@/components/checkout/table-content";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { useEffect } from "react";
import CartTotal from "@/components/checkout/CartTotal";

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
    <div className="flex flex-col md:grid md:grid-cols-6 gap-4 w-screen">
      <div className="md:col-start-2 md:col-span-3">
        <TableContent />
      </div>
      <div className="md:col-start-5 md:col-span-2 flex flex-col gap-4">
        <CartTotal />
        <div className="md:col-start-5 md:col-span-2 ">
          {!emptyCart && <CheckoutForm />}
        </div>
      </div>
    </div>
  );
}
