import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import CartContent from "../shoppingCart/CartContent";
const CardSheetTrigger = ({}) => {
  return (
    <>
      <shad.Sheet>
        <shad.SheetTrigger asChild>
          <shad.Button className="bg-white-100 p-1 hover:bg-yellow-200 rounded-full">
            <img src={"/shoppingcart.svg"} style={{ width: "25px" }}></img>
          </shad.Button>
        </shad.SheetTrigger>
        <CartContent />
      </shad.Sheet>
    </>
  );
};

export default CardSheetTrigger;
