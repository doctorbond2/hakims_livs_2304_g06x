import React from "react";
import * as shad from "@/components/ui/shadBarrel";
const CategoryListItem = ({ category }) => {
  return (
    <>
      <shad.TableRow>
        <shad.TableCell className="font-medium">{category.name}</shad.TableCell>
        <shad.TableCell>{category.count} pcs</shad.TableCell>
        <shad.TableCell>
          <shad.Button variant="secondary" className="">
            Edit
          </shad.Button>
        </shad.TableCell>
        <shad.TableCell className="text-right">
          <shad.Button variant="destructive" className="">
            Delete
          </shad.Button>
        </shad.TableCell>
      </shad.TableRow>
    </>
  );
};

export default CategoryListItem;
