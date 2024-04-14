import React, { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import { POST_REQUEST } from "@/utils/helpers/request.helper";
import { DELETE_REQUEST } from "@/utils/helpers/request.helper";
import { PUT_REQUEST } from "@/utils/helpers/request.helper";
import * as shad from "@/components/ui/shadBarrel";
// import AddNewProduct from "@/components/admin/AddNewProduct";
import ProductList from "@/components/productList/ProductList";
import ProductCard from "@/components/productList/productCards/ProductCard";
import ManageProduct from "@/components/admin/ManageProduct";
// import { ProductCardBody } from "@/components/productList/productCards/ProductCardBody";

export default function ManageProductTab() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([{}]);
  const [showProducts, setShowProducts] = useState(false);
  const updateProducts = async () => {
    try {
      const updatedProducts = await GET_REQUEST("/api/products/");
      if (updatedProducts) {
        setProducts([...updatedProducts]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  async function handleSubmit(newProduct) {
    try {
      if (await POST_REQUEST("/api/products/create/", newProduct)) {
        console.log("Product added");
        updateProducts();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  async function handleEdit(product) {
    try {
      if (await PUT_REQUEST(`/api/products/update/${product.id}`, product)) {
        updateProducts();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  async function handleDelete(productId) {
    try {
      if (await DELETE_REQUEST(`/api/products/delete/${productId}`)) {
        console.log("Product deleted");
        updateProducts();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await GET_REQUEST("/api/products/");
        if (data) {
          setProducts(data);
        }
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="grid gap-4 p-4">
      {/* Justera höjden på knapparna istället för hela raden */}
      <div className="flex justify-around mb-4">
        <shad.Button
          onClick={() => setShowAddProduct(!showAddProduct)}
          className="text-xs py-1 px-2"
          variant="outline"
        >
          Add new product
        </shad.Button>
        <shad.Button
          onClick={() => setShowProducts(!showProducts)}
          className="text-xs py-1 px-2"
          variant="outline"
        >
          Edit product (show products)
        </shad.Button>
      </div>

      {/* Innehållet */}
      {showAddProduct && <ManageProduct onSubmit={handleSubmit} />}

      {showProducts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-w-full ">
          {products.map((product, index) => (
            <div key={product.id} className="p-5 min-w-full ">
              <ProductCard
                product={product}
                buyOrEdit="Edit"
                onSubmit={handleSubmit}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
