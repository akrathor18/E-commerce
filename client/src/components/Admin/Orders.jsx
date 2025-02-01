import { useState } from "react"
import { ChevronDown, ChevronUp } from "react-feather"

const orderStatuses = ["Placed", "Processing", "Shipped", "Delivered", "Cancelled"]

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: "12345", customer: "John Doe", product: "Product A", amount: "$99.99", status: "Placed" },
    { id: "12346", customer: "Jane Smith", product: "Product B", amount: "$149.99", status: "Processing" },
    { id: "12347", customer: "Bob Johnson", product: "Product C", amount: "$199.99", status: "Shipped" },
    { id: "12348", customer: "Alice Brown", product: "Product D", amount: "$79.99", status: "Delivered" },
    { id: "12349", customer: "Charlie Davis", product: "Product E", amount: "$129.99", status: "Cancelled" },
  ])

  const [expandedOrder, setExpandedOrder] = useState(null)

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  const toggleOrderExpansion = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Placed":
        return "bg-blue-500"
      case "Processing":
        return "bg-yellow-500"
      case "Shipped":
        return "bg-purple-500"
      case "Delivered":
        return "bg-green-500"
      case "Cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="bg-primary m-6 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-300">
          <thead className="text-xs uppercase text-accent bg-secondary">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-700">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.product}</td>
                <td className="px-4 py-2">{order.amount}</td>
                <td className="px-4 py-2">
                  <span className={`${getStatusColor(order.status)} text-white text-xs px-2 py-1 rounded-full`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => toggleOrderExpansion(order.id)}
                    className="text-blue-400 hover:text-blue-300 focus:outline-none"
                  >
                    {expandedOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {expandedOrder && (
        <div className="mt-4 p-4 bg-secondary rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Change Order Status</h3>
          <div className="flex flex-wrap gap-2">
            {orderStatuses.map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(expandedOrder, status)}
                className={`px-3 py-1 rounded-full text-sm ${
                  orders.find((o) => o.id === expandedOrder)?.status === status
                    ? getStatusColor(status)
                    : "bg-gray-600 hover:bg-gray-500"
                } text-white focus:outline-none`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Orders

