import * as shad from "@/components/ui/shadBarrel";
import { useState, useEffect } from "react";
import ProductCardBody from "./ProductCardBody";
import ProductModal from "./ProductModal";
import ProductAddMultiple from "./ProductAddMultiple";
const ProductCard = ({ product, buyOrEdit, onSubmit, onEdit, onDelete }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
        <shad.Dialog>
          <>
            <shad.DialogContent className="sm:max-w-[800px] grid grid-cols-2 grid-rows-2">
              <ProductModal product={product} />
            </shad.DialogContent>
            <shad.DialogTrigger asChild>
              <a className="relative">
                {" "}
                {product.discountRate > 0 && (
                  <div className="absolute  top-1 left-1 rounded p-1.5 bg-red-500 text-white text-sm italic font-bold">
                    -{product.discountRate}%
                  </div>
                )}
                <ProductCardBody product={product} />
              </a>
            </shad.DialogTrigger>
          </>
          <div className="pb-2 content-end flex justify-center">
            {!clicked ? (
              <shad.Button
                className="w-[230px]"
                onClick={() => {
                  setClicked(true);
                }}
              >
                Köp
              </shad.Button>
            ) : (
              <ProductAddMultiple {...{ product }} />
            )}
          </div>
        </shad.Dialog>
      </shad.Card>
    </>
  );
};

export default ProductCard;
