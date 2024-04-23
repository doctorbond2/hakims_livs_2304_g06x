import React from "react";
import { useCart } from "./CartContext";
import * as shad from "@/components/ui/shadBarrel";
import TableContent from "@/components/header/shoppingCart/shoppingCartContent/page";

import { Link } from "react-router-dom";
const CartContent = () => {
  const { clearCart, cart } = useCart();
  const handleClearCart = () => {
    clearCart();
  };
  return (
    <>
      <shad.SheetContent className="grid grid-cols-1 grid-rows-10">
        <shad.SheetHeader>
          <shad.SheetTitle>Varukorg</shad.SheetTitle>
        </shad.SheetHeader>
        {cart.length > 0 ? (
          <div className="row-start-2 col-start-1 col-span-full flex items-start font-sans">
            <TableContent />
          </div>
        ) : (
          <>
            {" "}
            <shad.Label className="text-lg">
              Din kundvagn verkar vara tom!
            </shad.Label>
            <shad.Label className="text-lg">
              Varför inte se våra otroliga nya{" "}
              <Link className="font-bold" to="/products">
                <shad.SheetClose>
                  <span className="hover:text-red-500" type="button">
                    Erbjudanden
                  </span>
                </shad.SheetClose>
              </Link>
            </shad.Label>
          </>
        )}

        <br></br>
        {cart.length > 0 && (
          <div className="row-start-11 col-start-1 col-span-full flex ">
            <Link to="/checkout" className="w-full">
              <shad.DialogClose>
                <shad.SheetClose asChild>
                  <shad.Button className="w-[120px] bg-green-600">
                    Till Kassan
                  </shad.Button>
                </shad.SheetClose>
              </shad.DialogClose>
            </Link>
            <shad.SheetClose asChild>
              <shad.Button
                className="w-[130px] bg-red-600"
                onClick={handleClearCart}
              >
                Rensa Varukorg
              </shad.Button>
            </shad.SheetClose>
          </div>
        )}
      </shad.SheetContent>
    </>
  );
};

export default CartContent;
