import * as shad from "@/components/ui/shadBarrel";
import TableContent from "@/components/header/shoppingCart/shoppingCartContent/page";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
export default function ShoppingCartSheet() {
  const { clearCart, cart } = useCart();
  const handleClearCart = () => {
    clearCart();
  };
  return (
    <shad.Sheet>
      <shad.SheetTrigger asChild>
        <shad.Button
          variant="outline"
          className={
            cart.length > 0
              ? "bg-yellow-400 hover:bg-green-300"
              : "bg-slate-100 hover:bg-green-300"
          }
        >
          <img
            src={"../../../public/shoppingcart.svg"}
            style={{ width: "20px" }}
          ></img>
          Varukorg
        </shad.Button>
      </shad.SheetTrigger>
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
              <shad.SheetClose asChild>
                <shad.Button className="w-[120px] bg-green-600">
                  Till Kassan
                </shad.Button>
              </shad.SheetClose>
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
    </shad.Sheet>
  );
}
