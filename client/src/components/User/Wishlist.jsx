import { Heart, Trash2, ShoppingCart } from "lucide-react"
import { useState, useEffect } from "react"
import API from '../../config/axios'

import { toast } from "react-toastify";
const Wishlist = () => {
  { document.title = 'My WishList' }
  const [products, setProducts] = useState([])
  async function fetchData() {
    try {
      const response = await API.get("/users/wishlist");
      setProducts(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const handleRemoveProduct = async (productId) => {
    try {
      const response = await API.delete(`/users/wishlistremove/${productId}`)
      fetchData()
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const addToCart = async (productId) => {
    try {
      const response = await API.post('/users/cart', {
        productId: productId
      })
      toast.success(response.data.message);
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  };

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        <Heart className="w-16 h-16 mb-4" />
        <p className="text-xl">Your wishlist is empty</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-100 flex items-center">
        <Heart fill="red" className="mr-2 text-red-600" /> Your Wishlist
      </h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.product._id} className="bg-secondary rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center p-4">
              <img
                src={product.product.image || "/placeholder.svg"}
                alt={product.product.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-100">{product.product.title}</h3>
                <p className="text-lg font-bold text-green-400">${product.product.price.toFixed(2)}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleRemoveProduct(product.product._id)}
                  className="p-2 text-red-500 hover:bg-red-900 rounded-full transition-colors duration-200"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-6 h-6" />
                </button>
                <button
                  onClick={() => addToCart(product.product._id)}
                  className="p-2 text-green-500 hover:bg-green-900 rounded-full transition-colors duration-200"
                  aria-label="Add to cart"
                >
                  <ShoppingCart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Wishlist

