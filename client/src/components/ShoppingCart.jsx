
import { useState } from "react"


 function ShoppingCart() {
  const [products, setProducts] =useState([ {
    "id": 1,
    "title": "Men's Casual T-Shirt",
    "price": 499,
    "description": "Comfortable and stylish T-shirt for everyday wear, made from high-quality cotton.",
    "category": "Clothing",
    "image": "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
    "rating": {
      "rate": 4.2,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Women's Running Shoes",
    "price": 2999,
    "description": "Lightweight running shoes with excellent grip and cushioning for long-lasting comfort.",
    "category": "Footwear",
    "image": "https://cdn.pixabay.com/photo/2018/01/25/00/18/sneakers-3105120_1280.jpg",
    "rating": {
      "rate": 4.5,
      "count": 200
    }
  },
  {
    "id": 3,
    "title": "Wireless Earbuds",
    "price": 1999,
    "description": "True wireless earbuds with superior sound quality and long battery life.",
    "category": "Electronics",
    "image": "https://cdn.pixabay.com/photo/2020/06/10/13/22/headphones-5282687_1280.jpg",
    "rating": {
      "rate": 4.7,
      "count": 350
    }
  },
  {
    "id": 4,
    "title": "Ceramic Coffee Mug",
    "price": 299,
    "description": "Stylish ceramic mug ideal for coffee, tea, and other beverages.",
    "category": "Kitchenware",
    "image": "https://cdn.pixabay.com/photo/2019/01/10/20/48/mug-3926033_1280.jpg",
    "rating": {
      "rate": 4.3,
      "count": 95
    }
  },])

  const subtotal = products.reduce((sum, product) => sum + product.price, 0)

  const handleRemove = (productId) => {
    setProducts(products.filter((product) => product.id !== productId))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen text-text">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-2xl font-semibold text-text">Your cart is empty</p>
          <p className="mt-2 text-gray-500">Looks like you haven't added any items to your cart yet.</p>
        </div>
      ) : (
        <>
          <div className="space-y-8 py-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-start py-6 border-t">
                <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-6 flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-base font-medium text-text">{product.title}</h3>
                      <p className="mt-1 text-sm text-text">{product.rating.rate}</p>
                    </div>
                    <p className="text-base font-medium text-text">₹{product.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                      <p className="text-sm text-green-500 flex items-center">
                        <span className="mr-1.5">✓</span> In stock
                      </p>
                    
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-6 pt-6">
            <div className="flex justify-between text-base font-medium text-accent">
              <p>Subtotal</p>
              <p>₹{subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-200">Shipping and taxes will be calculated at checkout.</p>
            <button className="w-full mt-6 bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 rounded-md">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}




export default ShoppingCart