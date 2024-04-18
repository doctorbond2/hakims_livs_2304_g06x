import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as shad from "@/components/ui/shadBarrel";
import { columns } from "./columns";
import { useCart } from "../header/shoppingCart/CartContext";
import { useEffect, useState } from "react";

export function CheckoutTable({}) {
  const { cart } = useCart();
  const [data, setData] = useState([]);
  console.log("CART: ", cart);

  const transformedData = cart.map((item) => ({
    id: item._id,
    image: item.image.url,
    productName: item.title,
    amount: item.cartQuantity,
    totalPrice: (item.discountedPrice * item.cartQuantity).toFixed(2) + " kr",
  }));

  useEffect(() => {
    setData(transformedData);
  }, [cart]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <shad.Table>
        <shad.TableBody>
          {table.getRowModel().rows && table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <shad.TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <shad.TableCell className="h-32" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </shad.TableCell>
                ))}
              </shad.TableRow>
            ))
          ) : (
            <shad.TableRow>
              <shad.TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                Din varukorg är tom!
              </shad.TableCell>
            </shad.TableRow>
          )}
        </shad.TableBody>
      </shad.Table>
    </div>
  );
}
