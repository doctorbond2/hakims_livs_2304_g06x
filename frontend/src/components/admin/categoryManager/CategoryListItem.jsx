import React from "react";
import * as shad from "@/components/ui/shadBarrel";

const CategoryListItem = ({ category }) => {
  return (
    <shad.TableRow>
      <shad.TableCell className="font-medium">{category.name}</shad.TableCell>
      <shad.TableCell>
        <span className="font-bold">{category.count}</span> {"produkter"}
      </shad.TableCell>
      <shad.TableCell className="text-right">
        <shad.Button className="shadow-md shadow-gray-500/50 mr-2" variant="outline">
          Redigera
        </shad.Button>
        <shad.Button className="shadow-md shadow-gray-500/50" variant="destructive">Radera</shad.Button>
      </shad.TableCell>
    </shad.TableRow>
  );
};

export default CategoryListItem;
