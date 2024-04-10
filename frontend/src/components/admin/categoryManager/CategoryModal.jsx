import React, { useEffect, useState } from "react";
import { useFetch } from "@/utils/hooks/requestHooks";
import * as shad from "@/components/ui/shadBarrel";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

const CategoryModal = ({ category }) => {
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
          <shad.Label htmlFor="image.alt">Hittade produkter:</shad.Label>
          <shad.Select>
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
          </shad.Select>
        </div>
      )}
    </>
  );
};

export default CategoryModal;
