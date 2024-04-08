import * as shad from "@/components/ui/shadBarrel";
import ProductCardBody from "./ProductCardBody";

const ProductCard = ({ product, buyOrEdit }) => {
  const isBuy = buyOrEdit.toLowerCase() === "köp";

  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
        <shad.Dialog>
          <shad.DialogContent className="sm:max-w-[600px]">
            <shad.Card className="w-[250px] h-[380px] border-slate-300">
              <ProductCardBody product={product} />
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
