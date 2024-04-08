import React, { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import { POST_REQUEST } from "@/utils/helpers/request.helper";
import * as shad from "@/components/ui/shadBarrel";
import AddNewProduct from "@/components/admin/AddNewProduct";
import ProductList from "@/components/productList/ProductList";
import ProductCard from "@/components/productList/productCards/ProductCard";
// import { ProductCardBody } from "@/components/productList/productCards/ProductCardBody";

export default function Admin() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([{}]);
  const [showProducts, setShowProducts] = useState(false);

  async function handleSubmit(newProduct) {
    console.log("test");

    console.log(newProduct);
    try {
      const response = await POST_REQUEST("/api/products/create/", newProduct);
      if (response.status === 201) {
        console.log("Good job dude");
      } else {
        console.log("auhuaehuaheuaheuhauhueuahuhae");
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  //Lägg in en knapp för att hämta alla produkter
  // klicka på produkt och få upp en modal med info om produkten
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await GET_REQUEST("/api/products/");
        if (response.data) {
          console.log(response.data);
          setProducts(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <shad.Button onClick={() => setShowAddProduct(!showAddProduct)} variant="outline">
        Add new product
      </shad.Button>

      {showAddProduct && <AddNewProduct onSubmit={handleSubmit} />}

      <shad.Button onClick={() => setShowProducts(!showProducts)} variant="outline">
        Edit product (show products)
      </shad.Button>
      {/* {showProducts && products.map((product) => <p>{product.name}</p>)}
       */}
      {showProducts && (
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {products &&
              products.map((product) => (
                <>
                  <div>
                    <ProductCard product={product} />
                    <shad.Button className="w-[230px]">edit</shad.Button>
                  </div>
                </>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
