import React, { useState } from "react";
import Page from "@/components/checkout/page";
import CheckoutForm from "@/components/checkout/CheckoutForm";

export default function Checkout() {
  return (
    <div className="flex justify-center">
      <Page className="grid grid-cols-2 grid-rows-1" />
      <CheckoutForm />
    </div>
  );
}
