import { useState } from "react"
import ProductList from "./ProductList"
import CategoryManagement from "./CategoryManagement"
import InventoryManagement from "./InventoryManagement"
import BulkUpload from "./BulkUpload"

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState("products")

  const renderActiveTab = () => {
    switch (activeTab) {
      case "products":
        return <ProductList />
      case "categories":
        return <CategoryManagement />
      case "inventory":
        return <InventoryManagement />
      case "bulkUpload":
        return <BulkUpload />
      default:
        return <ProductList />
    }
  }

  return (
    <div className="bg-primary m-6 rounded-lg shadow-lg p-6 ">
      <h2 className="text-2xl font-semibold text-white mb-6">Product Management</h2>
      <div className="flex mb-6">
        <button
          className={`mr-4 px-4 py-2 rounded-lg ${activeTab === "products" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded-lg ${activeTab === "categories" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
          onClick={() => setActiveTab("categories")}
        >
          Categories
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded-lg ${activeTab === "inventory" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
          onClick={() => setActiveTab("inventory")}
        >
          Inventory
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "bulkUpload" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
          onClick={() => setActiveTab("bulkUpload")}
        >
          Bulk Upload
        </button>
      </div>
      {renderActiveTab()}
    </div>
  )
}

export default ProductManagement

