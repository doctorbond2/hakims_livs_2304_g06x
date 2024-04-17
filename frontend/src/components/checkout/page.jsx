import React, { useState, useEffect } from "react";
import { columns } from "./columns";
import { CheckoutTable } from "./checkoutTable";
// import useIsSubmitted from "./IsSubmitted";
// import { useCart } from "../header/shoppingCart/CartContext";

function tableContent() {
  return (
    <div className="container mx-auto py-10 grid grid-cols-2">
      <CheckoutTable />

      {/* <h1>hello</h1> */}
    </div>
  );
}

export default tableContent;
