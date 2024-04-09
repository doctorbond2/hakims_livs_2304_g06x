import React from "react";
import * as shad from "@/components/ui/shadBarrel";
const CategoryListItem = ({ category, handleDeleteCategory }) => {
  const category_id = category._id;
  const handleDelete = () => {
    if (category_id) {
      handleDeleteCategory(category_id);
    }
  };
  return (
    <>
      <shad.TableRow>
        <shad.TableCell className="font-medium">{category.name}</shad.TableCell>
        <shad.TableCell className="font-medium">
          {category.count} pcs
        </shad.TableCell>
        <shad.TableCell className="font-medium"></shad.TableCell>
        <shad.TableCell>
          <shad.Button variant="secondary" className="">
            Edit
          </shad.Button>
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
    </>
  );
};

export default CategoryListItem;
