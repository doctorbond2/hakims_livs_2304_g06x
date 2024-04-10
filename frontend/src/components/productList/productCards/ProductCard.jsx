import * as shad from "@/components/ui/shadBarrel";
import { useState, useEffect } from "react";
import ProductCardBody from "./ProductCardBody";
import ProductModal from "./ProductModal"; // Re-added for the "buy" scenario
import ManageProduct from "@/components/admin/ManageProduct";

const ProductCard = ({ product, buyOrEdit, onSubmit, onEdit, onDelete }) => {
  const [isBuy, setIsBuy] = useState(buyOrEdit.toLowerCase() === "köp");

  useEffect(() => {
    setIsBuy(buyOrEdit.toLowerCase() === "köp");
  }, [buyOrEdit]);

  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
        <shad.Dialog>
          {isBuy ? (
            // For the "buy" scenario
            <>
              <shad.DialogContent className="sm:max-w-[800px] grid grid-cols-2 grid-rows-2">
                <ProductModal product={product} />
              </shad.DialogContent>
              <shad.DialogTrigger asChild>
                <a className="relative">
                  {" "}
                  {product.discountRate > 0 && (
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-sm p-1">{product.discountRate}% Off</div>
                  )}
                  <ProductCardBody product={product} />
                </a>
              </shad.DialogTrigger>
            </>
          ) : (
            // For scenarios other than "buy"
            <>
              <shad.DialogContent className="sm:max-w-[600px] justify-center max-h-screen overflow-auto">
                <shad.Card className="border-slate-300 max-h-screen">
                  <ManageProduct onSubmit={onSubmit} addOrEdit="edit" product={product} onDelete={onDelete} onEdit={onEdit} />
                </shad.Card>
              </shad.DialogContent>
              <ProductCardBody product={product} />
            </>
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
