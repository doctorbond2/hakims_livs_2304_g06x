import * as shad from "@/components/ui/shadBarrel";
import TableContent from "@/components/header/shoppingCart/shoppingCartContent/page";
import { Link } from "react-router-dom";

export default function ShoppingCartSheet() {
  return (
    <shad.Sheet>
      <shad.SheetTrigger asChild>
        <shad.Button variant="outline">Varukorg</shad.Button>
      </shad.SheetTrigger>
      <shad.SheetContent className="grid grid-cols-1 grid-rows-10">
        <shad.SheetHeader>
          <shad.SheetTitle>Varukorg</shad.SheetTitle>
        </shad.SheetHeader>
        <div className="row-start-2 col-start-1 col-span-full flex items-start">
          <TableContent />
        </div>

        <div className="row-start-10 col-start-1 col-span-full flex items-end ">
          <Link to="/checkout" className="w-full">
            <shad.SheetClose asChild>
              <shad.Button className="w-full">Till Kassan</shad.Button>
            </shad.SheetClose>
          </Link>
        </div>
      </shad.SheetContent>
    </shad.Sheet>
  );
}
