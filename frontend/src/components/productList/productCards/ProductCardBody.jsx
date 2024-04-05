import * as shad from "@/components/ui/shadBarrel";

export default function ProductCardBody({ product }) {
  return (
    <>
      <shad.CardContent className="flex row-span-2 items-center justify-center p-5">
        <img style={{ height: "150px" }} src="/powerking.jpg" alt="HakimLogo" />
      </shad.CardContent>
      <div className="p-10">
        <shad.CardTitle className="flex justify-center content-end pb-2 text-red-500">{product.price}:-</shad.CardTitle>
        <p className="flex justify-center content-end">{product.name}</p>
        <shad.CardDescription className="flex justify-center content-end">{product.name}</shad.CardDescription>
      </div>
    </>
  );
}
