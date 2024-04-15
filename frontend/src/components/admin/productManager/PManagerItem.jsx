import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import PManangerEditModal from "./PManangerEditModal";
function PManagerItem({ product, categoryList, updateProducts }) {
  const handleDelete = async () => {
    if (category_id) {
      await handleDeleteCategory(category_id, index);
    }
  };
  return (
    <>
      {product && (
        <shad.Dialog>
          <shad.TableRow>
            <shad.TableCell className="font-medium">
              {product.title}
            </shad.TableCell>
            <shad.TableCell className="font-medium">
              <span className="font-bold"></span>{" "}
              {product.category?.title ? product.category.title : "Noname"}
            </shad.TableCell>
            <shad.TableCell className="font-medium">
              <span className="font-bold"></span> {product.stock} st
            </shad.TableCell>
            <shad.TableCell className="font-medium">
              <span className="font-bold"></span> {product.price} kr
            </shad.TableCell>
            <shad.TableCell className="font-medium">
              <span className="font-bold"></span>
              {product.comparePrice}kr/{product.unit}
            </shad.TableCell>
            <shad.TableCell></shad.TableCell>
            <shad.TableCell className="text-right">
              <shad.DialogTrigger asChild>
                <shad.Button
                  variant="outline"
                  className="shadow-md shadow-gray-500/50 mr-2"
                >
                  Redigera
                </shad.Button>
              </shad.DialogTrigger>
              <shad.Button
                variant="destructive"
                className="shadow-md shadow-gray-500/50"
                onClick={handleDelete}
              >
                Radera
              </shad.Button>
            </shad.TableCell>
          </shad.TableRow>
          <shad.DialogContent>
            {product ? (
              <PManangerEditModal
                {...{ product, categoryList, updateProducts }}
              />
            ) : (
              "Loading"
            )}
          </shad.DialogContent>
        </shad.Dialog>
      )}
    </>
  );
}

export default PManagerItem;
