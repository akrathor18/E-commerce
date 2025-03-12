import { useState, useEffect } from "react"
import { Star, StarHalf, Heart, Eye, ShoppingCart } from "lucide-react"
import API from '../config/axios.js'
import{Link} from 'react-router-dom'

import { toast } from "react-toastify";

function Products() {
  { document.title = 'UrbanMart - an E-commarce website for online shopping' }
  const [cartItems, setCartItems] = useState([])

  
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [ratingFilter, setRatingFilter] = useState("All")
  const [categories, setCategories] = useState([])
  const fetchData = async () => {
    try {
      const response = await API.get("/product/getProducts");
      setProducts(response.data);
      setFilteredProducts(response.data); // Set filtered products initially
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await API.get("/product/categories"); // Call the new route to get categories
      setCategories(["All", ...response.data]); 
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const fetchFilteredProducts = async () => {
    try {
      const response = await API.get("/product/filter", {
        params: {
          category: categoryFilter,
          rating: ratingFilter
        }  
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  useEffect(() => {
    fetchFilteredProducts(); // Apply filters
  }, [categoryFilter, ratingFilter]); // Only re-fetch when filters change

  const renderRating = (rating) => {
    const maxStars = 5; // Maximum 5 stars
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    const safeFullStars = Math.max(0, Math.min(fullStars, maxStars));
    const safeEmptyStars = Math.max(0, Math.min(emptyStars, maxStars - safeFullStars));


    return (
      <div className="flex items-center">
      {[...Array(safeFullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
      {[...Array(safeEmptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
      <span className="ml-1 text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
    )
  }

  const toggleFavorite = (productId) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
    console.log(favorites)
  }
  const getFavorite = async () => {
    try {
      const response = await API.get("/users/wishlist");
  
      console.log("Wishlist Response:", response.data); // Verify the response structure
      if (Array.isArray(response.data) && response.data.length > 0) {
        // Extract product IDs from the array
        const favoriteIds = response.data.map((item) => item.product._id);
        setFavorites(favoriteIds);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    getFavorite();
  }, []);
  
  const addToCart = async(product) => {
   console.log(product._id)
   try {
    const response =await API.post('/users/cart',{
      productId: product._id
    })
    console.log(response.data.message)
    toast.success(response.data.message); 
   } catch (error) {
    console.log(error)
   }
    };


  return (
    <div className="container mx-auto px-4 py-8 text-text">
       {/* Floating cart button  */}
       <Link to={"/mycart"}>
      <div 
      title='Viwe Cart'
      className="flex text-text bg-accent outline-red-200 hover:bg-hover transition-all duration-300 ease-in-out p-3 rounded-full fixed z-20 bottom-0 right-0 m-20">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </button>
        <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300  bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Viwe cart <span> </span></span>
      </div>
        </Link>
        {/* Category and rating filters */}
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex justify-between mb-4  text-text">
        <select
          className="p-2 border rounded bg-secondary"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select className="p-2 border rounded bg-secondary text-text" value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="All">All Ratings</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="2">2+ Stars</option>
          <option value="1">1+ Star</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          
          <div key={product._id} className="border rounded-lg text-text bg-secondary shadow-md flex flex-col">
            <div className="relative">
              <img
                src={product.image || `/placeholder.svg?height=200&width=200`}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button
                className="absolute top-2 right-2 p-1 bg-white rounded-full"
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart className={favorites.includes(product._id) ? "fill-red-500 text-red-500" : "text-gray-500"} />
              </button>
            </div>
            <div className="p-4 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <span className="px-2 py-1 bg-accent text-text text-sm rounded">{product.category}</span>
              </div>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <div className="mb-2">{renderRating(product.rating.rate)}</div>
              <p className="text-lg font-bold">₹{product.price.toFixed(2)}</p>
            </div>
            <div className="p-4 flex justify-between">
              <button className="p-2 border rounded" onClick={() => setQuickViewProduct(product)}>
                <Eye className="w-4 h-4" />
              </button>
              <button
                className="flex-grow ml-2 bg-blue-500 text-white p-2 rounded flex items-center justify-center"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-primary p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{quickViewProduct.title}</h2>
            <img
              src={quickViewProduct.image || `/placeholder.svg?height=300&width=300`}
              alt={quickViewProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{quickViewProduct.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">₹{quickViewProduct.price.toFixed(2)}</span>
              {renderRating(quickViewProduct.rating.rate)}
            </div>
            <button
              className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center"
              onClick={() => {
                addToCart(quickViewProduct)
                setQuickViewProduct(null)
              }}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </button>
            <button className="w-full mt-2 border p-2 rounded" onClick={() => setQuickViewProduct(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


export default Products