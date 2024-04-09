import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import CategoryModal from "./CategoryModal";
const CategoryListItem = ({ category, handleDeleteCategory, index }) => {
  const category_id = category.id;
  const handleDelete = async () => {
    if (category_id) {
      await handleDeleteCategory(category_id, index);
    }
  };
  return (
    <>
      <shad.Dialog>
        <shad.TableRow>
          <shad.TableCell className="font-medium">{category.name}</shad.TableCell>
          <shad.TableCell className="font-medium">
            <span className="font-bold">{category.productCount}</span> {"produkter"}
          </shad.TableCell>
          <shad.TableCell>
            <shad.DialogTrigger asChild></shad.DialogTrigger>
          </shad.TableCell>
          <shad.TableCell className="text-right">
            <shad.Button
              variant="outline"
              className="shadow-md shadow-gray-500/50 mr-2"
              onClick={() => {
                console.log("asd");
              }}
            >
              Redigera
            </shad.Button>
            <shad.Button variant="destructive" className="shadow-md shadow-gray-500/50" onClick={handleDelete}>
              Radera
            </shad.Button>
          </shad.TableCell>
        </shad.TableRow>
        <shad.DialogContent>
          <CategoryModal {...{ category }} />
        </shad.DialogContent>
      </shad.Dialog>
    </>
  );
};

export default CategoryListItem;
