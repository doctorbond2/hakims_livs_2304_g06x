import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import EditCategoryModal from "./EditCategoryModal";
import { useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
const CategoryListItem = ({ category, handleDeleteCategory, index }) => {
  const category_id = category._id;
  const [c_info, set_c_info] = useState(category);

  const handleInput = (e, key) => {
    set_c_info({ ...c_info, [key]: e.target.value });
  };

  const delProductFromCategory = async (id) => {
    if (!id) {
      console.log("Not valid target.");
      return;
    }
    try {
      if (
        await admin_PUT_REQUEST("/api/products/update/" + id, {
          category: null,
        })
      ) {
        console.log("Removed from category. Product has now category: null");
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const updateCategory = async (e) => {
    e.preventDefault();
    const id = category._id;

    if (!id) {
      return;
    }
    delete c_info.productCount;
    try {
      if (await admin_PUT_REQUEST("/api/category/update/" + id, c_info)) {
        console.log("Update success.");
        const updatedCategory = await GET_REQUEST("/api/category/" + id);
        set_c_info({ ...updatedCategory });
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleDelete = async () => {
    if (category_id) {
      await handleDeleteCategory(category_id, index);
    }
  };
  return (
    <>
      <shad.Dialog>
        <shad.TableRow>
          <shad.TableCell className="font-medium">
            {category.title}
          </shad.TableCell>
          <shad.TableCell className="font-medium">
            <span className="font-bold">{category.productCount}</span>{" "}
            {"produkter"}
          </shad.TableCell>
          <shad.TableCell></shad.TableCell>
          <shad.TableCell className="text-right">
            <shad.DialogTrigger asChild>
              <shad.Button
                variant="outline"
                className="shadow-md shadow-gray-500/50 mr-2"
              >
                Redigera
              </shad.Button>
            </shad.DialogTrigger>
            <shad.Button
              variant="destructive"
              className="shadow-md shadow-gray-500/50"
              onClick={handleDelete}
            >
              Radera
            </shad.Button>
          </shad.TableCell>
        </shad.TableRow>
        <shad.DialogContent>
          {category ? (
            <EditCategoryModal
              {...{
                category,
                c_info,
                delProductFromCategory,
                updateCategory,
                handleInput,
              }}
            />
          ) : (
            "Loading"
          )}
        </shad.DialogContent>
      </shad.Dialog>
    </>
  );
};

export default CategoryListItem;
