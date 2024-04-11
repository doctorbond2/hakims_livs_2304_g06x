import React, { useState } from "react";
import ManageProductTab from "@/components/admin/ManageProductTab";
import CategoryManager from "@/components/admin/categoryManager/CategoryManager";

export default function Admin() {
<<<<<<< HEAD
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

  async function handleDelete(productId) {
    try {
      const response = await DELETE_REQUEST(
        `/api/products/delete/${productId}`
      );
      if (response.status === 200) {
        fetchProducts(); // Uppdatera produktlistan
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
=======
  const [activeTab, setActiveTab] = useState("products");
>>>>>>> df50f18e97a43e12450919089af00e127f271f58

  return (
    <div className="flex">
      <div className="w-48 bg-gray-100 h-screen p-5">
        <button
          className={`block w-full text-left ${
            activeTab === "products" ? "text-blue-500" : "text-black"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Hantera Produkter
        </button>
        <button
          className={`block w-full text-left ${
            activeTab === "categories" ? "text-blue-500" : "text-black"
          }`}
          onClick={() => setActiveTab("categories")}
        >
          Hantera Kategorier
        </button>
      </div>

<<<<<<< HEAD
      {showAddProduct && <ManageProduct onSubmit={handleSubmit} />}

      <shad.Button
        onClick={() => setShowProducts(!showProducts)}
        variant="outline"
      >
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
                    <ProductCard
                      product={product}
                      buyOrEdit={"Edit"}
                      onSubmit={handleSubmit}
                      onDelete={handleDelete}
                    />
                    {console.log(shad.Button)}
                  </div>
                </>
              ))}
          </div>
        </div>
      )}
    </>
=======
      <div className="flex-grow p-15 flex justify-center">
        {activeTab === "products" && <ManageProductTab />}
        {activeTab === "categories" && <CategoryManager />}
      </div>
    </div>
>>>>>>> df50f18e97a43e12450919089af00e127f271f58
  );
}
