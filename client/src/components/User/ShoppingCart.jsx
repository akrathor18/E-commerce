import { useState, useEffect } from "react"
import axios from "axios";
import API from '../../config/axios'
axios.defaults.withCredentials = true;
function ShoppingCart() {
  { document.title = 'My Cart' }
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await API.get("/users/cart");
      setProducts(response.data.cart);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Runs only once when the component mounts


  // const subtotal = products.reduce((sum, product) => sum + product.price, 0)
  const subtotal = Array.isArray(products)
  ? products.reduce((sum, item) => sum + item.product.price * (item.quantity ?? 1), 0)
  : 0;


  const handleRemove = async (productId) => {
    try {
      const response = await API.delete(`/users/cartromove/${productId}`);
    setProducts(products.filter((item) => item._id !== productId));
      console.log(response)
      console.log(products)
      console.log(`/users/cartromove/${productId}`)
      fetchData();
      
    } catch (error) {
      console.log(productId)
      console.error("Error fetching data:", error);
    }
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
            {products.map((item) => {
              const product = item.product;
              return (
                <div key={product.id} className="flex items-start py-6 border-t">
                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-6 flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-base font-medium text-text">{product.title}</h3>
                        <p className="mt-1 text-sm text-text">{product.rating?.rate ?? "No rating"}</p>
                      </div>
                      <p className="text-base font-medium text-text">₹{product.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <p className="text-sm text-green-500 flex items-center">
                        <span className="mr-1.5">✓</span> In stock
                      </p>

                      <button
                        onClick={() => handleRemove(product._id)}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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