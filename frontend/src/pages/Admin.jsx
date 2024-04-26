import React, { useState, useEffect } from "react";
import ManageProductTab from "@/components/admin/ManageProductTab";
import CategoryManager from "@/components/admin/categoryManager/CategoryManager";
import PManager from "@/components/admin/productManager/PManager";
import OrderManager from "@/components/admin/orderManager/OrderManager";


export default function Admin() {
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    const handlePopState = () => {
      //Popstate aktiveras när användaren trycker på framåt/tillbaka-knappen i webbläsaren
      if (history.state && history.state.activeTab) {
        setActiveTab(history.state.activeTab);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    history.pushState({ activeTab: tabName }, "");
  };

  return (
    <div className="flex w-screen">
      <div className="w-48 bg-gray-100 h-screen p-12 font-bold">
        <button
          className={`block w-full text-left  ${
            activeTab === "products" ? "text-blue-500 " : "text-black"
          }`}
          onClick={() => handleTabChange("products")}
        >
          Hantera Produkter
        </button>
        <button
          className={`block w-full text-left ${
            activeTab === "categories" ? "text-blue-500 " : "text-black"
          }`}
          onClick={() => handleTabChange("categories")}
        >
          Hantera Kategorier
        </button>
        <button
          className={`block w-full text-left ${
            activeTab === "orders" ? "text-blue-500 " : "text-black"
          }`}
          onClick={() => handleTabChange("orders")}
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
