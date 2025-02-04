import { Heart, Trash2, ShoppingCart } from "lucide-react"
import { useState } from "react"

const Wishlist = () => {
  {document.title='My WishList'}
  const [products, setProducts] = useState([{
    "id": 5,
    "title": "Adjustable Dumbbells",
    "price": 2499,
    "description": "Pair of adjustable dumbbells for strength training and fitness enthusiasts.",
    "detailedDescription": "These adjustable dumbbells allow you to increase or decrease weight for various strength training exercises. Ideal for home workouts, they offer versatility and convenience.",
    "category": "Fitness",
    "image": "https://cdn.pixabay.com/photo/2020/04/07/16/05/body-building-5013985_1280.jpg",
    "rating": {
      "rate": 1.6,
      "count": 180
    },
    "stock": 75
  },
])

  const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId))
  }

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
        <Heart className="mr-2" /> Your Wishlist
      </h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="bg-secondary rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center p-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-100">{product.title}</h3>
                <p className="text-lg font-bold text-green-400">${product.price.toFixed(2)}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleRemoveProduct(product.id)}
                  className="p-2 text-red-500 hover:bg-red-900 rounded-full transition-colors duration-200"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-6 h-6" />
                </button>
                <button
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

