
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Trash2, Plus, Minus } from "lucide-react"

function CheckoutPage() {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  })
  const [selectedProducts, setSelectedProducts] = useState([
    { id: 1, name: "Ergonomic Chair", price: 199.99, quantity: 1 },
    { id: 2, name: "Wireless Keyboard", price: 59.99, quantity: 1 },
  ])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleQuantityChange = (id, change) => {
    setSelectedProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity: Math.max(0, product.quantity + change) } : product,
      ),
    )
  }

  const removeProduct = (id) => {
    setSelectedProducts((prev) => prev.filter((product) => product.id !== id))
  }

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price * product.quantity, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const orderData = {
      userDetails,
      products: selectedProducts.filter((p) => p.quantity > 0),
      totalPrice: calculateTotal(),
    }

    try {
      const response = await fetch("/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (response.ok) {
        const order = await response.json()
        navigate("/order-confirmation", { state: { order } })
      } else {
        console.error("Order placement failed")
      }
    } catch (error) {
      console.error("Error placing order:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Your Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              {selectedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0"
                >
                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-400">${product.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">{product.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="p-1 rounded-full bg-red-600 hover:bg-red-700 transition-colors ml-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xl font-semibold mb-4 text-right">Total: ${calculateTotal().toFixed(2)}</div>
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage

