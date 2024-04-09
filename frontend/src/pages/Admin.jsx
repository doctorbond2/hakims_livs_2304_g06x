import React, { useState } from "react";
import ManageProductTab from "@/components/admin/ManageProductTab";
import CategoryManager from "@/components/admin/categoryManager/CategoryManager";

export default function Admin() {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="flex">
      {/* Sidebar for selecting the tab */}
      <div className="w-48 bg-gray-100 h-screen p-5">
        <button className={`block w-full text-left ${activeTab === "products" ? "text-blue-500" : "text-black"}`} onClick={() => setActiveTab("products")}>
          Manage Products
        </button>
        <button className={`block w-full text-left ${activeTab === "categories" ? "text-blue-500" : "text-black"}`} onClick={() => setActiveTab("categories")}>
          Manage Categories
        </button>
      </div>

      {/* Main content area */}
      <div className="flex-grow p-15 flex justify-center">
        {activeTab === "products" && <ManageProductTab />}
        {activeTab === "categories" && <CategoryManager />}
      </div>
    </div>
  );
}
