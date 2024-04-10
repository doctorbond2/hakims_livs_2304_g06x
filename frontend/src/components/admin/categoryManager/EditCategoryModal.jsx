import React, { useEffect, useState } from "react";
import { useFetch } from "@/utils/hooks/requestHooks";
import * as shad from "@/components/ui/shadBarrel";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

const EditCategoryModal = ({ category }) => {
  const {
    data: productData,
    loading,
    error,
  } = useFetch("/api/products/category/" + category.id);
  console.log("/api/products/category/" + category.id);
  const [c_info, set_c_info] = useState(category);
  useEffect(() => {
    console.log("DATA:", productData);
    console.log(c_info);
  }, [productData]);
  return (
    <>
      {" "}
      {productData && (
        <div>
          <shad.Label htmlFor="image.alt">Titel på kategori:</shad.Label>
          <shad.Input
            id=""
            name=""
            type="text"
            value={c_info.name}
            onChange={(e) => {
              set_c_info(e.target.value);
              console.log(c_info);
            }}
          />

          {/* <shad.Select>
            <shad.SelectTrigger>
              <shad.SelectValue placeholder="Se alla" />
            </shad.SelectTrigger>
            <shad.SelectContent>
              <SelectGroup>
                {productData &&
                  productData.map((product, index) => {
                    return (
                      <shad.SelectItem value={product.title} key={index}>
                        {" "}
                        {product.title}
                      </shad.SelectItem>
                    );
                  })}
              </SelectGroup>
            </shad.SelectContent>
          </shad.Select> */}
          <shad.ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <shad.Label>Alla Produkter</shad.Label>
              <shad.Separator className="my-2"></shad.Separator>
              {productData &&
                productData.map((product, index) => {
                  return (
                    <>
                      <div
                        value={product.title}
                        key={index}
                        onClick={() => {
                          console.log("asd");
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        {product.title}
                      </div>
                      <shad.Separator className="my-2"></shad.Separator>
                    </>
                  );
                })}
            </div>
          </shad.ScrollArea>
        </div>
      )}
    </>
  );
};

export default EditCategoryModal;
