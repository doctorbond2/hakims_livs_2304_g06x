import * as shad from "@/components/ui/shadBarrel";
import ProductCard from "./ProductCard";

export default function ProductModal({ product }) {
  return (
    <shad.Dialog>
      <shad.DialogTrigger asChild>
        <a>
          <ProductCard product={product}></ProductCard>
        </a>
      </shad.DialogTrigger>
      <shad.DialogContent className="sm:max-w-[425px]"></shad.DialogContent>
    </shad.Dialog>
  );
}
