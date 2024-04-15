import React, { useEffect, useState } from "react";
import * as shad from "@/components/ui/shadBarrel";
import { POST_REQUEST } from "@/utils/helpers/request.helper";
const PManagerAddModal = ({ categoryList, updateProducts }) => {
  const baseUnits = ["kg", "g", "mg", "l", "ml", "cl"];
  const [newProduct, setNewProduct] = useState({
    image: { url: "", alt: "Product Image" },
    price: "",
    stock: "",
    description: "",
    brand: "",
    title: "",
    category: "",
    unit: "",
  });
  const [selectListCatg, setSelectListCatg] = useState(categoryList);
  async function handleSubmit(e) {
    console.log("NEW PRODUCT: ", newProduct);
    e.preventDefault();
    try {
      if (await POST_REQUEST("/api/products/create/", newProduct)) {
        console.log("Product added");
        updateProducts();
      }
    } catch (err) {
      console.error(err.message);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    let parsedValue = value;
    if (e.target.type === "number") {
      parsedValue = Number(parsedValue);
    }
    console.log("VALUE: ", value, name);
    console.log("TYPE: ", e.target.type);
    if (name === "image.url") {
      setNewProduct({
        ...newProduct,
        image: { ...newProduct.image, url: value },
      });
    } else if (name === "image.alt") {
      setNewProduct({
        ...newProduct,
        image: { ...newProduct.image, alt: value },
      });
    } else {
      setNewProduct({ ...newProduct, [name]: parsedValue });
    }
  }
  function handleUnitChange(e) {
    setNewProduct({ ...newProduct, unit: e });
  }
  function handleCategoryChange(e) {
    setNewProduct({ ...newProduct, category: e });
  }
  useEffect(() => {
    console.log(newProduct);
  }, [newProduct]);
  return (
    <>
      {" "}
      <shad.Card className="w-80 shadCardPadding">
        <form onSubmit={handleSubmit}>
          <img
            src={newProduct.image.url}
            alt={newProduct.image.alt}
            style={{ maxWidth: "50%", height: "100px" }}
          />

          <shad.Label htmlFor="image.url">Image URL</shad.Label>
          <shad.Input
            id="image.url"
            name="image.url"
            type="text"
            value={newProduct.image.url}
            onChange={handleChange}
          />

          <shad.Label htmlFor="image.alt">Image Alt</shad.Label>
          <shad.Input
            id="image.alt"
            name="image.alt"
            type="text"
            value={newProduct.image.alt}
            onChange={handleChange}
          />

          {/* Upprepa för de andra attributen, nu med shad-komponenter */}
          <shad.Label htmlFor="description">Description</shad.Label>
          <shad.Input
            id="description"
            name="description"
            type="text"
            value={newProduct.description}
            onChange={handleChange}
          />

          <shad.Label htmlFor="brand">Brand</shad.Label>
          <shad.Input
            id="brand"
            name="brand"
            type="text"
            value={newProduct.brand}
            onChange={handleChange}
          />

          <shad.Label htmlFor="title">Title</shad.Label>
          <shad.Input
            id="title"
            name="title"
            type="text"
            value={newProduct.title}
            onChange={handleChange}
          />

          <shad.Label htmlFor="category">Category</shad.Label>
          <shad.Label htmlFor="category">Category</shad.Label>
          <shad.Select
            id="category"
            name="category"
            onValueChange={handleCategoryChange}
          >
            <shad.SelectTrigger className="w-[180px]">
              <shad.SelectValue placeholder={categoryList[0].title} />
            </shad.SelectTrigger>
            <shad.SelectContent>
              {selectListCatg &&
                selectListCatg.map((category, index) => {
                  return (
                    <shad.SelectItem value={category._id}>
                      {category.title}
                    </shad.SelectItem>
                  );
                })}
            </shad.SelectContent>
          </shad.Select>
          <shad.Label htmlFor="amount">Unit quantity</shad.Label>
          <div className="flex">
            <shad.Input
              placeholder={1}
              id="amount"
              name="quantity"
              type="number"
              value={newProduct.quantity}
              onChange={handleChange}
              min={1}
            />
            <shad.Select
              id="unit"
              name="unit"
              onValueChange={handleUnitChange}
              value={newProduct.unit}
            >
              <shad.SelectTrigger className="w-[80px]">
                <shad.SelectValue placeholder={"unit"} />
              </shad.SelectTrigger>
              <shad.SelectContent>
                {baseUnits.map((unit, index) => {
                  return <shad.SelectItem value={unit}>{unit}</shad.SelectItem>;
                })}
              </shad.SelectContent>
            </shad.Select>
          </div>

          <shad.Label htmlFor="price">Price</shad.Label>
          <shad.Input
            id="price"
            name="price"
            type="number"
            value={newProduct.price}
            onChange={handleChange}
          />

          <shad.Label htmlFor="stock">Stock</shad.Label>
          <shad.Input
            id="stock"
            name="stock"
            type="number"
            value={newProduct.stock}
            onChange={handleChange}
          />

          <shad.Button type="submit">Add Product </shad.Button>
        </form>
      </shad.Card>
    </>
  );
};

export default PManagerAddModal;
