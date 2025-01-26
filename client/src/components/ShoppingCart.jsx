
import { useState } from "react"


 function ShoppingCart() {
  const [products, setProducts] =useState([])

  const subtotal = products.reduce((sum, product) => sum + product.price, 0)

  const handleRemove = (productId) => {
    setProducts(products.filter((product) => product.id !== productId))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-2xl font-semibold text-gray-700">Your cart is empty</p>
          <p className="mt-2 text-gray-500">Looks like you haven't added any items to your cart yet.</p>
        </div>
      ) : (
        <>
          <div className="space-y-8 py-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-start py-6 border-t">
                <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
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
                      <h3 className="text-base font-medium text-gray-900">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                    </div>
                    <p className="text-base font-medium text-gray-900">${product.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {product.inStock ? (
                      <p className="text-sm text-green-500 flex items-center">
                        <span className="mr-1.5">✓</span> In stock
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">{product.shippingDelay}</p>
                    )}
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
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
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