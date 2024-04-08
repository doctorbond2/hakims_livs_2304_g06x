import * as shad from "@/components/ui/shadBarrel";
import ProductCardBody from "./ProductCardBody";
import ProductModal from "./ProductModal";
import ManageProduct from "@/components/admin/ManageProduct";

const ProductCard = ({ product, buyOrEdit, onSubmit }) => {
  const isBuy = buyOrEdit.toLowerCase() === "köp";

  if (isBuy) {
    // Return the JSX structure for the "buy" scenario
    return (
      <>
        <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
          <shad.Dialog>
            <shad.DialogContent className="sm:max-w-[800px] grid grid-cols-2 grid-rows-2">
              <ProductModal product={product} />
            </shad.DialogContent>
            <shad.DialogTrigger asChild>
              <a>
                <ProductCardBody product={product} />
              </a>
            </shad.DialogTrigger>

            <div className="pb-2 content-end flex justify-center">
              <shad.Button className="w-[230px]">{buyOrEdit}</shad.Button>
            </div>
          </shad.Dialog>
        </shad.Card>
      </>
    );
  } else {
    // Return the JSX structure for scenarios other than "buy"
    return (
      <>
        <shad.Card className="w-[250px] h-[380px] grid grid-rows-1 border-slate-300">
          <shad.Dialog>
            <shad.DialogContent className="sm:max-w-[600px] justify-center">
              <shad.Card className="w-[250px] h-[380px] border-slate-300">
                <ManageProduct onSubmit={onSubmit} addOrEdit="edit" product={product} />
              </shad.Card>
            </shad.DialogContent>
            <ProductCardBody product={product} />

            <div className="pb-2 content-end flex justify-center">
              <shad.DialogTrigger asChild>
                <shad.Button className="w-[230px]">{buyOrEdit}</shad.Button>
              </shad.DialogTrigger>
            </div>
          </shad.Dialog>
        </shad.Card>
      </>
    );
  }
};

export default ProductCard;
