import { useState } from "react"
import { AlertCircle } from "react-feather"

const InventoryManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", stock: 100, lowStockThreshold: 20 },
    { id: 2, name: "Product B", stock: 15, lowStockThreshold: 25 },
    { id: 3, name: "Product C", stock: 50, lowStockThreshold: 30 },
  ])

  const handleStockChange = (id, newStock) => {
    setProducts(
      products.map((product) => (product.id === id ? { ...product, stock: Number.parseInt(newStock) } : product)),
    )
  }

  const handleThresholdChange = (id, newThreshold) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, lowStockThreshold: Number.parseInt(newThreshold) } : product,
      ),
    )
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Inventory Management</h3>
      <table className="w-full text-left text-gray-300">
        <thead className="text-xs uppercase bg-secondary">
          <tr>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Current Stock</th>
            <th className="px-4 py-2">Low Stock Threshold</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-seconbg-secondary">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={product.stock}
                  onChange={(e) => handleStockChange(product.id, e.target.value)}
                  className="bg-gray-600 text-white px-2 py-1 rounded w-20"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={product.lowStockThreshold}
                  onChange={(e) => handleThresholdChange(product.id, e.target.value)}
                  className="bg-gray-600 text-white px-2 py-1 rounded w-20"
                />
              </td>
              <td className="px-4 py-2">
                {product.stock <= product.lowStockThreshold && (
                  <span className="flex items-center text-yellow-500">
                    <AlertCircle size={18} className="mr-2" />
                    Low Stock
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InventoryManagement

