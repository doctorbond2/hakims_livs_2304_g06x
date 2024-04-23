import React, { useState } from "react";
import ManageProductTab from "@/components/admin/ManageProductTab";
import CategoryManager from "@/components/admin/categoryManager/CategoryManager";
import PManager from "@/components/admin/productManager/PManager";
import OrderManager from "@/components/admin/orderManager/OrderManager";
export default function Admin() {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="flex">
      <div className="w-48 bg-gray-100 h-screen p-12 font-bold">
        <button
          className={`block w-full text-left  ${
            activeTab === "products" ? "text-blue-500 " : "text-black"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Hantera Produkter
        </button>
        <button
          className={`block w-full text-left ${
            activeTab === "categories" ? "text-blue-500 " : "text-black"
          }`}
          onClick={() => setActiveTab("categories")}
        >
          Hantera Kategorier
        </button>
        <button
          className={`block w-full text-left ${
            activeTab === "orders" ? "text-blue-500 " : "text-black"
          }`}
          onClick={() => setActiveTab("orders")}
        >
          Hantera Ordrar
        </button>
      </div>

      <div className="flex-grow p-15 flex justify-center">
        {activeTab === "products" && <PManager />}
        {activeTab === "categories" && <CategoryManager />}
        {activeTab === "orders" && <OrderManager />}
      </div>
    </div>
  );
}
