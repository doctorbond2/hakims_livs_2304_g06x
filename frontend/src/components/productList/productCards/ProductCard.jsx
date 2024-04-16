import * as shad from "@/components/ui/shadBarrel";
import ProductCardBody from "./ProductCardBody";
import ProductModal from "./ProductModal";
import { useCart } from "@/components/header/shoppingCart/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <>
      <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
        <shad.Dialog>
          <shad.DialogContent className="sm:max-w-[800px] grid grid-cols-2 grid-rows-2">
            <ProductModal product={product} />
          </shad.DialogContent>
          <shad.DialogTrigger asChild>
            <a className="relative">
              {product.discountRate > 0 && <div className="absolute top-1 left-1 rounded p-1.5 bg-red-500 text-white text-sm italic font-bold">-{product.discountRate}%</div>}
              <ProductCardBody product={product} />
            </a>
          </shad.DialogTrigger>
          <shad.Button onClick={() => addToCart(product, 1)} className="w-[230px] mx-auto mb-2">
            Köp
          </shad.Button>
        </shad.Dialog>
      </shad.Card>
    </>
  );
};

export default ProductCard;
