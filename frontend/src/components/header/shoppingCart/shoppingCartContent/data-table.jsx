import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as shad from "@/components/ui/shadBarrel";
import { useCart } from "../CartContext";
export function DataTable({ columns, data, totalPrice }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const { addToCart, removeFromCart } = useCart();
  return (
    <div className="rounded-md border">
      <shad.Table>
        <shad.TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <shad.TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <shad.TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </shad.TableHead>
              ))}
            </shad.TableRow>
          ))}
        </shad.TableHeader>
        <shad.TableBody>
          {table.getRowModel().rows &&
            table.getRowModel().rows.length &&
            table.getRowModel().rows.map((row) => (
              <shad.TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <shad.TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </shad.TableCell>
                ))}
              </shad.TableRow>
            ))}
          <shad.TableRow className="font-semibold">
            <shad.TableCell colSpan={columns.length - 1}>
              Totalt Pris
            </shad.TableCell>
            <shad.TableCell>{`${totalPrice} SEK`}</shad.TableCell>
          </shad.TableRow>
        </shad.TableBody>
      </shad.Table>
    </div>
  );
}
// (
//   <shad.TableRow>
//     <shad.TableCell
//       colSpan={columns.length}
//       className="h-24 text-center"
//     >
//       Inga produkter i varukorgen
//     </shad.TableCell>
//   </shad.TableRow>
// )
