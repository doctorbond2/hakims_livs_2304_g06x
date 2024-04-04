import * as shad from "@/components/ui/shadBarrel";

const ProductCard = ({ product }) => {
  return (
    <>
      {" "}
      <shad.Dialog>
        <shad.DialogTrigger>
          <shad.Card className="w-[250px] h-[380px] grid grid-rows-3">
            <shad.CardContent className="flex row-span-2 items-center justify-center p-5">
              <img style={{ height: "150px" }} src="/powerking.jpg" alt="HakimLogo" />
            </shad.CardContent>
            <div>
              <shad.CardTitle className="flex justify-center content-end pb-2 text-red-500">{product.price}:-</shad.CardTitle>
              <p className="flex justify-center content-end">{product.name}</p>
              <shad.CardDescription className="flex justify-center content-end">{product.name}</shad.CardDescription>
              <shad.CardFooter className="p-0 content-end flex justify-center">
                <shad.Button className="w-[225px] p-0">Köp</shad.Button>
              </shad.CardFooter>
            </div>
          </shad.Card>
        </shad.DialogTrigger>
      </shad.Dialog>
    </>
  );
};

export default ProductCard;
