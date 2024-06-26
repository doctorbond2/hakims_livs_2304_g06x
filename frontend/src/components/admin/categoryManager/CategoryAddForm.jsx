import React from "react";
import { useState } from "react";
import * as shad from "@/components/ui/shadBarrel";
const CategoryAddForm = ({ handleAddCategory }) => {
  const [c_form, set_c_form] = useState({ title: "", description: "" });
  const handleChangeTitle = (e) => {
    set_c_form({ ...c_form, title: e.target.value });
  };
  const handleChangeDesc = (e) => {
    set_c_form({ ...c_form, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmAddCategory = window.confirm(
      `Vill du lägga till kategorin: ${c_form.title}?`
    );

    if (confirmAddCategory) {
      handleAddCategory(c_form);
      set_c_form({ title: "", description: "" });
      alert(`Kategori: ${c_form.title} har lagts till!`);
    }
  };


  return (
    <>
      <shad.Card className="w-80 shadCardPadding">
        <form
          onSubmit={handleSubmit}
        >
          <shad.Label htmlFor="category-add-title">Kategori titel</shad.Label>
          <shad.Input
            id="category-add-title"
            name="category-add-title"
            type="text"
            placeholder="Ex. Fruits"
            value={c_form.title}
            onChange={handleChangeTitle}
          />
          <shad.Label htmlFor="image.url">Beskrivning</shad.Label>
          <shad.Input
            id="category-add-desc"
            name="category-add-desc"
            type="text"
            placeholder="Fruitiest fruits ya know"
            value={c_form.description}
            onChange={handleChangeDesc}
          />
          {/* <shad.DialogTrigger> */}
            <shad.DialogClose>
              <shad.Button
                className={"border-green-600 text-neutral-200"}
                type={"submit"}
                
              >
                Lägg till kategori
              </shad.Button>
            </shad.DialogClose>
          {/* </shad.DialogTrigger> */}
        </form>
      </shad.Card>
    </>
  );
};

export default CategoryAddForm;
