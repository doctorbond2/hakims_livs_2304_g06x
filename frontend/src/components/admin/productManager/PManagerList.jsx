import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import PManagerItem from "./PManagerItem";
import PManagerAddModal from "./PManagerAddModal";
export const PManagerList = ({
  productList,
  categoryList,
  updateProducts,
  handleDeleteProduct,
}) => {
  return (
    <>
      <shad.Dialog>
        <div className="flex justify-center pt-10">
          <shad.Table className="w-[65vw] shadow">
            <shad.TableHeader>
              <shad.TableRow>
                <shad.TableHead>Titel</shad.TableHead>
                <shad.TableHead>Kategori</shad.TableHead>
                <shad.TableHead>Lagerstatus</shad.TableHead>
                <shad.TableHead>Pris</shad.TableHead>
                <shad.TableHead>JmfPris</shad.TableHead>
                <shad.TableHead>
                  <shad.DialogTrigger>
                    <shad.Button className={"bg-gray-400"}>+</shad.Button>
                  </shad.DialogTrigger>
                  <shad.DialogContent>
                    <PManagerAddModal {...{ categoryList, updateProducts }} />
                  </shad.DialogContent>
                </shad.TableHead>
              </shad.TableRow>
            </shad.TableHeader>
            <shad.TableBody>
              {productList &&
                productList.map((product, index) => {
                  return (
                    <>
                      <PManagerItem
                        key={"pm-" + product._id}
                        {...{
                          index,
                          product,
                          categoryList,
                          updateProducts,
                          handleDeleteProduct,
                        }}
                      />
                    </>
                  );
                })}
            </shad.TableBody>
          </shad.Table>
        </div>
      </shad.Dialog>
    </>
  );
};
export default PManagerList;
