import * as shad from "@/components/ui/shadBarrel";
import ProductCardBody from "./ProductCardBody";
import ProductModal from "./ProductModal";
const ProductCard = ({ product, buyOrEdit }) => {
  const isBuy = buyOrEdit.toLowerCase() === "köp";

  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
        <shad.Dialog>
          <shad.DialogContent className="sm:max-w-[800px] grid grid-cols-2 grid-rows-2">
            <ProductModal product={product} />
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
            '
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
