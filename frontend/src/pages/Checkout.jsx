import React, { useState } from "react";
import TableContent from "@/components/checkout/table-content";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CartTotal from "@/components/checkout/CartTotal";

export default function Checkout() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-7 gap-4">
      <div className="md:col-start-3 md:col-span-2">
        <TableContent />
      </div>
      <div className="md:col-start-5 md:col-span-1">
        <CartTotal />
      </div>
      <div className="md:col-start-3 md:col-span-3 pt-80">
        <CheckoutForm />
      </div>
    </div>
  );
}
