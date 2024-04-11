import * as shad from "@/components/ui/shadBarrel";
import { useState, useEffect } from "react";
import ProductCardBody from "./ProductCardBody";
<<<<<<< HEAD
import ManageProduct from "@/components/admin/ManageProduct";

const ProductCard = ({ product, buyOrEdit, onSubmit }) => {
  const [isBuy, setIsBuy] = useState(true);
  buyOrEdit = buyOrEdit.toLocaleLowerCase();

  useEffect(() => {
    buyOrEdit === "köp" ? setIsBuy(true) : setIsBuy(false);
=======
import ProductModal from "./ProductModal"; // Re-added for the "buy" scenario
import ManageProduct from "@/components/admin/ManageProduct";

const ProductCard = ({ product, buyOrEdit, onSubmit, onEdit, onDelete }) => {
  const [isBuy, setIsBuy] = useState(buyOrEdit.toLowerCase() === "köp");

  useEffect(() => {
    setIsBuy(buyOrEdit.toLowerCase() === "köp");
>>>>>>> e1cb776c33076c1f29861eaf2e0c21ef959144c3
  }, [buyOrEdit]);

  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
        <shad.Dialog>
<<<<<<< HEAD
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
=======
>>>>>>> e1cb776c33076c1f29861eaf2e0c21ef959144c3
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
                    <div className="absolute  top-1 left-1 rounded p-1.5 bg-red-500 text-white text-sm italic font-bold">-{product.discountRate}%</div>
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
<<<<<<< HEAD
          <div className="pb-2 content-end flex justify-center">
=======

<<<<<<< HEAD
          <div className="pb-2 content-end flex justify-center">
=======
<div className="pb-2 content-end flex justify-center">
>>>>>>> e1cb776c33076c1f29861eaf2e0c21ef959144c3
>>>>>>> c4189c6fc79939accb45952f88c60f4ae215cf0f
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
