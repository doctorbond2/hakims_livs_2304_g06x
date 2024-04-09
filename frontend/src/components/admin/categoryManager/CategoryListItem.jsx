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
          <shad.TableCell className="font-medium">
            {category.name}
          </shad.TableCell>
          <shad.TableCell className="font-medium">
            {category.productCount} pcs
          </shad.TableCell>
          <shad.TableCell>
            <shad.DialogTrigger asChild>
              <shad.Button
                variant="secondary"
                className=""
                onClick={() => {
                  console.log("asd");
                }}
              >
                Edit
              </shad.Button>
            </shad.DialogTrigger>
          </shad.TableCell>
          <shad.TableCell className="text-right">
            <shad.Button
              variant="destructive"
              className=""
              onClick={handleDelete}
            >
              Delete
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
