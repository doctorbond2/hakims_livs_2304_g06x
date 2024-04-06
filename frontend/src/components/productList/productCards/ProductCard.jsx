import * as shad from "@/components/ui/shadBarrel";
import ProductCardBody from "./ProductCardBody";
import ProductModal from "./ProductModal";
const ProductCard = ({ product, buyOrEdit }) => {
  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
        <shad.Dialog>
          <shad.DialogContent className="sm:max-w-[600px]">
              <ProductModal product={product} />
          </shad.DialogContent>
          <shad.DialogTrigger asChild>
            <a>
              <ProductCardBody product={product} />
            </a>
          </shad.DialogTrigger>
        </shad.Dialog>
        <div className="pb-2 content-end flex justify-center">
          <shad.Button className="w-[230px]">{buyOrEdit}</shad.Button>
        </div>
      </shad.Card>
    </>
  );
};
export default ProductCard;
