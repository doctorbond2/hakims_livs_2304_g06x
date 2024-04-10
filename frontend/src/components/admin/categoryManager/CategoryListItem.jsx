import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import EditCategoryModal from "./EditCategoryModal";
const CategoryListItem = ({ category, handleDeleteCategory, index }) => {
  const category_id = category.id;
  const handleDelete = async () => {
    if (category_id) {
      await handleDeleteCategory(category_id, index);
    }
  };
  const number = 12;
  return (
    <>
      <shad.Dialog>
        <shad.TableRow>
          <shad.TableCell className="font-medium">
            {category.name}
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
          {category && <EditCategoryModal {...{ category }} />}
        </shad.DialogContent>
      </shad.Dialog>
    </>
  );
};

export default CategoryListItem;
