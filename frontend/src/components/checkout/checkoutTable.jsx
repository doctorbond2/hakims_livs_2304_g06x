import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as shad from "@/components/ui/shadBarrel";
import Form from "./Form";

export function CheckoutTable({ columns, data }) {
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
                  <shad.TableCell key={cell.id}>
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
                Du kanske ska lägga till några produkter till kundvagnen innan
                du går vidare till kassan???
              </shad.TableCell>
            </shad.TableRow>
          )}
        </shad.TableBody>
      </shad.Table>
      <Form />
    </div>
  );
}
