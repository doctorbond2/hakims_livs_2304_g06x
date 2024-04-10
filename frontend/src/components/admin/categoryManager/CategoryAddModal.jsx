import React from "react";
import * as shad from "@/components/ui/shadBarrel";

const CategoryAddModal = (handleAddCategory) => {
  return (
    <>
      <shad.Card className="w-80 shadCardPadding">
        <form onSubmit={handleAddCategory}>
          <shad.Label htmlFor="category-add-title">Kategori titel</shad.Label>
          <shad.Input
            id="category-add-title"
            name="category-add-title"
            type="text"
            placeholder="Ex. Fruits"
          />
          <shad.Label htmlFor="image.url">Beskrivning</shad.Label>
          <shad.Input
            id="category-add-desc"
            name="category-add-desc"
            type="text"
            placeholder="Fruitiest fruits ya know"
          />
        </form>
      </shad.Card>
    </>
  );
};
export default CategoryAddModal;
