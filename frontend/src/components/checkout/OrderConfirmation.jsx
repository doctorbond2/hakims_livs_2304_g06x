import * as shad from "@/components/ui/shadBarrel";
import { GET_REQUEST } from "@/utils/helpers/request.helper";

export default function OrderConfirmation() {
  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await GET_REQUEST("/api/products/");
        console.log(products);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchProducts();
  }, []);

  return <></>;
}
