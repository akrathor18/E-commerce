import { useState } from "react"
import { Edit, Trash2 } from "react-feather"
import ProductForm from "./ProductForm"

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product A",
      price: 99.99,
      description: "Description for Product A",
      stock: 100,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Product B",
      price: 149.99,
      description: "Description for Product B",
      stock: 50,
      category: "Clothing",
    },
    {
      id: 3,
      name: "Product C",
      price: 199.99,
      description: "Description for Product C",
      stock: 75,
      category: "Home & Garden",
    },
  ])

  const [editingProduct, setEditingProduct] = useState(null)

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
  }

  const handleSave = (updatedProduct) => {
    if (updatedProduct.id) {
      setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)))
    } else {
      setProducts([...products, { ...updatedProduct, id: Date.now() }])
    }
    setEditingProduct(null)
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Product List</h3>
      <table className="w-full text-left text-gray-300">
        <thead className="text-xs uppercase bg-secondary text-accent">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-gray-700">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">${product.price.toFixed(2)}</td>
              <td className="px-4 py-2">{product.stock}</td>
              <td className="px-4 py-2">{product.category}</td>
              <td className="px-4 py-2">
                <button onClick={() => handleEdit(product)} className="text-blue-400 hover:text-blue-300 mr-2">
                  <Edit size={18} />
                </button>
                <button onClick={() => handleDelete(product.id)} className="text-red-400 hover:text-red-300">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={() => setEditingProduct({})}
      >
        Add New Product
      </button>
      {editingProduct && (
        <ProductForm product={editingProduct} onSave={handleSave} onCancel={() => setEditingProduct(null)} />
      )}
    </div>
  )
}

export default ProductList

