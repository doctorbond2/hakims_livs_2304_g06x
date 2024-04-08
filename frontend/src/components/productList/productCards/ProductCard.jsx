import * as shad from "@/components/ui/shadBarrel";
import { useState, useEffect } from "react";
import ProductCardBody from "./ProductCardBody";
import ManageProduct from "@/components/admin/ManageProduct";

const ProductCard = ({ product, buyOrEdit, onSubmit }) => {
  const [isBuy, setIsBuy] = useState(true);
  buyOrEdit = buyOrEdit.toLocaleLowerCase();

  useEffect(() => {
    buyOrEdit === "köp" ? setIsBuy(true) : setIsBuy(false);
  }, [buyOrEdit]);

  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
        <shad.Dialog>
          <shad.DialogContent className="sm:max-w-[600px] justify-center">
            <shad.Card
              className={
                isBuy ? "w-[250px] h-[380px] border-slate-300" : "w-[300px]"
              }
            >
              {isBuy ? (
                <ProductCardBody product={product} />
              ) : (
                <ManageProduct
                  onSubmit={onSubmit}
                  addOrEdit="edit"
                  product={product}
                />
              )}
            </shad.Card>
          </shad.DialogContent>
          {isBuy ? (
            <shad.DialogTrigger asChild>
              <a>
                <ProductCardBody product={product} />
              </a>
            </shad.DialogTrigger>
          ) : (
            <ProductCardBody product={product} />
          )}

          <div className="pb-2 content-end flex justify-center">
            {!isBuy ? (
              <shad.DialogTrigger asChild>
                <shad.Button className="w-[230px]">{buyOrEdit}</shad.Button>
              </shad.DialogTrigger>
            ) : (
              <shad.Button className="w-[230px]">{buyOrEdit}</shad.Button>
            )}{" "}
          </div>
        </shad.Dialog>
      </shad.Card>
    </>
  );
};
export default ProductCard;
