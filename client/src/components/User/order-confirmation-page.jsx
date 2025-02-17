import { useLocation } from "react-router-dom"
import { CheckCircle } from "lucide-react"

function OrderConfirmationPage() {
  const location = useLocation()
  const { order } = location.state || {}

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
          <p className="text-gray-400">Sorry, we couldn't find your order details.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="text-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Order Confirmed</h1>
          <p className="text-gray-400">Thank you for your purchase!</p>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 border-b border-gray-700 pb-2">Order Details</h2>
            <p>
              <span className="font-medium">Name:</span> {order.userDetails.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {order.userDetails.email}
            </p>
            <p>
              <span className="font-medium">Address:</span> {order.userDetails.address}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 border-b border-gray-700 pb-2">Products</h2>
            {order.products.map((product) => (
              <div key={product.id} className="flex justify-between items-center py-2">
                <span>{product.name}</span>
                <span>
                  {product.quantity} x ${product.price.toFixed(2)} = ${(product.quantity * product.price).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="text-xl font-semibold text-right border-t border-gray-700 pt-4">
            Total: ${order.totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmationPage

