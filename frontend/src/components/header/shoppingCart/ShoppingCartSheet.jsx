import * as shad from "@/components/ui/shadBarrel";
import TableContent from "@/components/header/shoppingCart/shoppingCartContent/page";
import { Link } from "react-router-dom";

export default function ShoppingCartSheet() {
  return (
    <shad.Sheet>
      <shad.SheetTrigger asChild>
        <shad.Button variant="outline">Kundvagn</shad.Button>
      </shad.SheetTrigger>
      <shad.SheetContent>
        <shad.SheetHeader>
          <shad.SheetTitle>Kundvagn</shad.SheetTitle>
          <shad.SheetDescription>Make changes to your profile here. Click save when you're done.</shad.SheetDescription>
        </shad.SheetHeader>
        <div>
          <TableContent />
          <div className="mt-4 flex justify-end">
            {" "}
            <Link to="/checkout">
              {" "}
              <shad.Button>Till Kassan</shad.Button>
            </Link>
          </div>
        </div>
      </shad.SheetContent>
    </shad.Sheet>
  );
}
