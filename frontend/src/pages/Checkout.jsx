import React, { useState } from "react";
import TableContent from "@/components/checkout/table-content";
import CheckoutForm from "@/components/checkout/CheckoutForm";
export default function Checkout() {
  return (
    <div className="grid grid-cols-5 grid-rows-2">
      <TableContent className=""/>
      <CheckoutForm className=""/>
    </div>
  );
}
