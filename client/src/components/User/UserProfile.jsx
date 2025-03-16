import { useState } from "react"
import {
  User,
  ShoppingBag,
  Truck,
  Heart,
  ShoppingCart,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Edit,
  Trash,
  Plus,
} from "lucide-react"

function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="bg-secondary shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-text ">ShopEase</h1>
            </div>
            <div className="flex items-center">
              <button className="md:hidden p-2 rounded-md text-text " onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-text ">Welcome, <span className="text-accent">John Doe</span></span>
                <button className="p-2 rounded-full bg-secondary text-red-600  hover:bg-red-400">
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <aside
            className={`${mobileMenuOpen ? "block" : "hidden"} md:block w-full md:w-64 bg-secondary shadow rounded-lg p-4 h-fit`}
          >
            <nav className="space-y-1">
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === "profile" ? "bg-hover text-text " : "text-text  hover:bg-accent"}`}
                onClick={() => setActiveTab("profile")}
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === "orders" ? "bg-hover text-text " : "text-text  hover:bg-accent"}`}
                onClick={() => setActiveTab("orders")}
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                Order History
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === "tracking" ? "bg-hover text-text " : "text-text  hover:bg-accent"}`}
                onClick={() => setActiveTab("tracking")}
              >
                <Truck className="mr-3 h-5 w-5" />
                Order Tracking
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === "wishlist" ? "bg-hover text-text " : "text-text  hover:bg-accent"}`}
                onClick={() => setActiveTab("wishlist")}
              >
                <Heart className="mr-3 h-5 w-5" />
                Wishlist
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === "cart" ? "bg-hover text-text " : "text-text  hover:bg-accent"}`}
                onClick={() => setActiveTab("cart")}
              >
                <ShoppingCart className="mr-3 h-5 w-5" />
                Cart
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-secondary shadow rounded-lg p-6 text-text ">
            {activeTab === "profile" && <ProfileSection />}
            {activeTab === "orders" && <OrderHistorySection />}
            {activeTab === "tracking" && <OrderTrackingSection />}
            {activeTab === "wishlist" && <WishlistSection />}
            {activeTab === "cart" && <CartSection />}
          </main>
        </div>
      </div>
    </div>
  )
}

function ProfileSection() {
  const [activeProfileTab, setActiveProfileTab] = useState("personal")

  return (
    <div>
      <h2 className="text-xl font-semibold text-text  mb-6">Profile Management</h2>

      <div className="border-b border-hover mb-6">
        <nav className="flex space-x-8">
          <button
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeProfileTab === "personal" ? "border-hover text-hover" : "border-transparent text-text  hover:text-accent hover:border-accent"}`}
            onClick={() => setActiveProfileTab("personal")}
          >
            Personal Information
          </button>
          <button
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeProfileTab === "password" ? "border-hover text-hover" : "border-transparent text-text  hover:text-accent hover:border-accent"}`}
            onClick={() => setActiveProfileTab("password")}
          >
            Change Password
          </button>
          <button
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeProfileTab === "addresses" ? "border-hover text-hover" : "border-transparent text-text  hover:text-accent hover:border-accent"}`}
            onClick={() => setActiveProfileTab("addresses")}
          >
            Addresses
          </button>
        </nav>
      </div>

      {activeProfileTab === "personal" && (
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-text ">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  defaultValue="John"
                  className="shadow-sm focus:ring-hover focus:border-hover block w-full sm:text-sm border-gray-700 rounded-md p-2 border bg-primary text-text "
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-text ">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  defaultValue="Doe"
                  className="shadow-sm focus:ring-hover focus:border-hover block w-full sm:text-sm border-gray-700 rounded-md p-2 border bg-primary text-text "
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-text ">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="shadow-sm focus:ring-hover focus:border-hover block w-full sm:text-sm border-gray-700 rounded-md p-2 border bg-primary text-text "
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium text-text ">
                Phone number
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  defaultValue="+1 (555) 987-6543"
                  className="shadow-sm focus:ring-hover focus:border-hover block w-full sm:text-sm border-gray-700 rounded-md p-2 border bg-primary text-text "
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-text  bg-hover hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hover"
            >
              Save Changes
            </button>
          </div>
        </form>
      )}

      {activeProfileTab === "password" && (
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-text ">
                Current Password
              </label>
              <div className="mt-1">
                <input
                  id="current-password"
                  name="current-password"
                  type="password"
                  required
                  className="shadow-sm focus:ring-hover focus:border-hover block w-full sm:text-sm border-gray-700 rounded-md p-2 border bg-primary text-text "
                />
              </div>
            </div>

            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-text ">
                New Password
              </label>
              <div className="mt-1">
                <input
                  id="new-password"
                  name="new-password"
                  type="password"
                  required
                  className="shadow-sm focus:ring-hover focus:border-hover block w-full sm:text-sm border-gray-700 rounded-md p-2 border bg-primary text-text "
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-text ">
                Confirm New Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="shadow-sm focus:ring-hover focus:border-hover block w-full sm:text-sm border-gray-700 rounded-md p-2 border bg-primary text-text "
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-text  bg-hover hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hover"
            >
              Update Password
            </button>
          </div>
        </form>
      )}

      {activeProfileTab === "addresses" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-text ">Your Addresses</h3>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-text  bg-hover hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hover"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add New Address
            </button>
          </div>

          <div className="bg-primary rounded-lg p-4 border border-gray-700">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-text ">Home</p>
                <p className="text-sm text-text ">123 Main Street, Apt 4B</p>
                <p className="text-sm text-text ">New York, NY 10001</p>
                <p className="text-sm text-text ">United States</p>
                <p className="text-sm text-text ">Phone: +1 (555) 123-4567</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-hover hover:text-accent">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-400">
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-lg p-4 border border-gray-700">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-text ">Work</p>
                <p className="text-sm text-text ">456 Business Ave, Suite 200</p>
                <p className="text-sm text-text ">San Francisco, CA 94107</p>
                <p className="text-sm text-text ">United States</p>
                <p className="text-sm text-text ">Phone: +1 (555) 987-6543</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-hover hover:text-accent">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-400">
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function OrderHistorySection() {
  const orders = [
    { id: "ORD-12345", date: "2023-03-15", status: "Delivered", total: "$129.99", items: 3 },
    { id: "ORD-12346", date: "2023-02-28", status: "Delivered", total: "$79.50", items: 2 },
    { id: "ORD-12347", date: "2023-02-10", status: "Delivered", total: "$214.75", items: 4 },
    { id: "ORD-12348", date: "2023-01-22", status: "Delivered", total: "$45.00", items: 1 },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-text  mb-6">Order History</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-primary">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text  uppercase tracking-wider"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text  uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text  uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text  uppercase tracking-wider"
              >
                Total
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text  uppercase tracking-wider"
              >
                Items
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-secondary divide-y divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text ">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text ">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-hover text-text ">
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text ">{order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text ">{order.items}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-hover hover:text-accent flex items-center">
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function OrderTrackingSection() {
  const activeOrders = [
    {
      id: "ORD-12349",
      date: "2023-03-25",
      status: "Shipped",
      total: "$156.99",
      trackingNumber: "TRK-987654321",
      estimatedDelivery: "2023-03-30",
      currentLocation: "Distribution Center, Chicago, IL",
      statusHistory: [
        { status: "Order Placed", date: "2023-03-25", time: "10:30 AM" },
        { status: "Payment Confirmed", date: "2023-03-25", time: "11:45 AM" },
        { status: "Processing", date: "2023-03-26", time: "09:15 AM" },
        { status: "Packed", date: "2023-03-27", time: "02:30 PM" },
        { status: "Shipped", date: "2023-03-28", time: "11:00 AM" },
      ],
    },
    {
      id: "ORD-12350",
      date: "2023-03-27",
      status: "Processing",
      total: "$89.50",
      trackingNumber: "Not available yet",
      estimatedDelivery: "2023-04-03",
      currentLocation: "Warehouse, Dallas, TX",
      statusHistory: [
        { status: "Order Placed", date: "2023-03-27", time: "03:45 PM" },
        { status: "Payment Confirmed", date: "2023-03-27", time: "04:00 PM" },
        { status: "Processing", date: "2023-03-28", time: "10:30 AM" },
      ],
    },
  ]

  const [selectedOrder, setSelectedOrder] = useState(activeOrders[0])

  return (
    <div>
      <h2 className="text-xl font-semibold text-text  mb-6">Order Tracking</h2>

      <div className="mb-6">
        <label htmlFor="order-select" className="block text-sm font-medium text-text  mb-2">
          Select Order to Track
        </label>
        <select
          id="order-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-700 focus:outline-none focus:ring-hover focus:border-hover sm:text-sm rounded-md border bg-primary text-text "
          value={selectedOrder.id}
          onChange={(e) => {
            const selected = activeOrders.find((order) => order.id === e.target.value)
            if (selected) setSelectedOrder(selected)
          }}
        >
          {activeOrders.map((order) => (
            <option key={order.id} value={order.id}>
              {order.id} - {order.date} - {order.status}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-primary rounded-lg p-6 border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-medium text-text  mb-2">Order Information</h3>
            <p className="text-sm text-text ">
              <span className="font-medium">Order ID:</span> {selectedOrder.id}
            </p>
            <p className="text-sm text-text ">
              <span className="font-medium">Date Placed:</span> {selectedOrder.date}
            </p>
            <p className="text-sm text-text ">
              <span className="font-medium">Total:</span> {selectedOrder.total}
            </p>
            <p className="text-sm text-text ">
              <span className="font-medium">Status:</span> {selectedOrder.status}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-text  mb-2">Shipping Information</h3>
            <p className="text-sm text-text ">
              <span className="font-medium">Tracking Number:</span> {selectedOrder.trackingNumber}
            </p>
            <p className="text-sm text-text ">
              <span className="font-medium">Estimated Delivery:</span> {selectedOrder.estimatedDelivery}
            </p>
            <p className="text-sm text-text ">
              <span className="font-medium">Current Location:</span> {selectedOrder.currentLocation}
            </p>
          </div>
        </div>

        <h3 className="text-lg font-medium text-text  mb-4">Tracking Timeline</h3>
        <div className="relative">
          {selectedOrder.statusHistory.map((item, index) => (
            <div key={index} className="flex items-start mb-6 relative">
              <div className="flex flex-col items-center mr-4">
                <div className={`rounded-full h-4 w-4 ${index === 0 ? "bg-hover" : "bg-gray-600"}`}></div>
                {index < selectedOrder.statusHistory.length - 1 && (
                  <div className="h-full w-0.5 bg-gray-600 absolute top-4 bottom-0 left-1.5"></div>
                )}
              </div>
              <div>
                <p className="font-medium text-text ">{item.status}</p>
                <p className="text-sm text-text ">
                  {item.date} at {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WishlistSection() {
  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: "$249.99",
      image: "/placeholder.svg?height=80&width=80",
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$179.99",
      image: "/placeholder.svg?height=80&width=80",
      inStock: true,
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: "$89.99",
      image: "/placeholder.svg?height=80&width=80",
      inStock: false,
    },
    {
      id: 4,
      name: "Ultra HD 4K Monitor",
      price: "$349.99",
      image: "/placeholder.svg?height=80&width=80",
      inStock: true,
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-text  mb-6">Wishlist</h2>

      <div className="space-y-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-primary rounded-lg border border-gray-700"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-medium text-text ">{item.name}</h3>
                <p className="text-text ">{item.price}</p>
                <p className={`text-sm ${item.inStock ? "text-hover" : "text-red-500"}`}>
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 rounded-md text-sm font-medium ${item.inStock ? "bg-hover text-text  hover:bg-accent" : "bg-gray-600 text-gray-400 cursor-not-allowed"}`}
                disabled={!item.inStock}
              >
                Add to Cart
              </button>
              <button className="px-3 py-1 rounded-md text-sm font-medium text-red-500 hover:bg-red-900">Remove</button>
            </div>
          </div>
        ))}
      </div>

      {wishlistItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text ">Your wishlist is empty.</p>
          <button className="mt-4 px-4 py-2 bg-hover text-text  rounded-md hover:bg-accent">
            Browse Products
          </button>
        </div>
      )}
    </div>
  )
}

function CartSection() {
  const cartItems = [
    {
      id: 1,
      name: "Premium Wireless Earbuds",
      price: 129.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Smartphone Fast Charger",
      price: 24.99,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [items, setItems] = useState(cartItems)

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div>
      <h2 className="text-xl font-semibold text-text  mb-6">Shopping Cart</h2>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-primary rounded-lg border border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-text ">{item.name}</h3>
                      <p className="text-text ">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-700 rounded-md">
                      <button
                        className="px-2 py-1 text-text  hover:bg-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-text ">{item.quantity}</span>
                      <button
                        className="px-2 py-1 text-text  hover:bg-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button className="text-red-500 hover:text-red-400" onClick={() => removeItem(item.id)}>
                      <Trash className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-6 rounded-lg border border-gray-700 h-fit">
            <h3 className="text-lg font-medium text-text  mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-text ">Subtotal</span>
                <span className="font-medium text-text ">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text ">Shipping</span>
                <span className="font-medium text-text ">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text ">Tax</span>
                <span className="font-medium text-text ">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-700 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="font-medium text-text ">Total</span>
                  <span className="font-bold text-text ">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full py-2 px-4 bg-hover text-text  rounded-md hover:bg-accent font-medium">
              Proceed to Checkout
            </button>
            <button className="w-full mt-2 py-2 px-4 bg-transparent text-hover border border-hover rounded-md hover:bg-primary hover:text-accent hover:border-accent font-medium">
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-text ">Your cart is empty.</p>
          <button className="mt-4 px-4 py-2 bg-hover text-text  rounded-md hover:bg-accent">
            Browse Products
          </button>
        </div>
      )}
    </div>
  )
}


export default UserProfile