import * as shad from "@/components/ui/shadBarrel";

export default function ProductModal({ product }) {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center size-96 pr-10">
          <img className="size-auto" src="/powerking.jpg" alt="HakimLogo" />
        </div>
        <div className="flex flex-col ">
          <h2 className="text-3xl">{product.name}</h2>
          <shad.CardDescription className="">{product.name}</shad.CardDescription>
          <shad.CardTitle className="text-red-500">{product.price}:-</shad.CardTitle>
          <shad.Button className="">Köp</shad.Button>
        </div>
      </div>
    </>
  );
}
