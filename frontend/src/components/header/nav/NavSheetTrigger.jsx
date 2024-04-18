import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import { useCart } from "../shoppingCart/CartContext";
import CartContent from "../shoppingCart/CartContent";
const NavSheetTrigger = () => {
  const { cart } = useCart();
  return (
    <>
      <shad.Sheet>
        <shad.SheetTrigger asChild>
          <shad.Button
            variant="outline"
            className={
              cart.length > 0
                ? "bg-yellow-400 hover:bg-green-500"
                : "bg-slate-100 hover:bg-green-300"
            }
          >
            <img
              className={cart.length ? "animate-bounce" : ""}
              src={"/shoppingcart.svg"}
              style={{ width: "20px" }}
            ></img>
            Varukorg
          </shad.Button>
        </shad.SheetTrigger>
        <CartContent />
      </shad.Sheet>
    </>
  );
};

export default NavSheetTrigger;
