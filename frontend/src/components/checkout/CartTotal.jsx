import React, { useState, useEffect } from "react";
import * as shad from "@/components/ui/shadBarrel";
const CartTotal = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [savings, setSavings] = useState(0);
  const taxRate = 0.12; // 12% Moms

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    let calculatedTotalPrice = 0;
    let calculatedSavings = 0;

    cartData.forEach((item) => {
      const itemTotal = item.discountedPrice * item.cartQuantity;
      calculatedTotalPrice += itemTotal;

      const itemSavings = (item.price - item.discountedPrice) * item.cartQuantity;
      calculatedSavings += itemSavings;
    });

    setTotalPrice(calculatedTotalPrice);
    setSavings(calculatedSavings);
  }, []);

  const totalPriceBeforeTax = totalPrice / (1 + taxRate);
  const taxAmount = totalPrice - totalPriceBeforeTax;

  return (
    <shad.Card className="w-96 h-32">
      <div className="m-5">
        <div className="text-xl">Totalsumma {totalPrice.toFixed(2).replace(".", ",")} kr</div>
        <div className="text-gray-500">Moms (12%): {taxAmount.toFixed(2).replace(".", ",")} kr</div>
        <div className="text-red-600">Du sparar {savings.toFixed(2).replace(".", ",")} kr!</div>
      </div>
    </shad.Card>
  );
};

export default CartTotal;
