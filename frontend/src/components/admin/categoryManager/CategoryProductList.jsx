import React from "react";
import * as shad from "@/components/ui/shadBarrel";
const CategoryProductList = ({ productData, delProductFromCategory }) => {
  const handleDelete = (id, index) => {
    const ok = confirm("Delete from category?");
    if (!ok) {
      return;
    }
    delProductFromCategory(id);
  };
  return (
    <>
      <shad.ScrollArea className="h-72 w-100 rounded-md border">
        <div className="p-4">
          {productData &&
            productData.map((product, index) => {
              return (
                <>
                  <div
                    value={product.title}
                    key={index}
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className={
                      " hover:border-amber-200 shadow shadow-gray-500/50"
                    }
                  >
                    {" "}
                    <h3> {product.title}</h3>
                    <shad.Button
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleDelete(product._id);
                      }}
                      className={"w-14 h-7"}
                    >
                      DELETE
                    </shad.Button>
                  </div>
                  <shad.Separator className="my-2"></shad.Separator>
                </>
              );
            })}
        </div>
      </shad.ScrollArea>
    </>
  );
};

export default CategoryProductList;
