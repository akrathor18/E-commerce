import { React, useState, Suspense, lazy } from "react";
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
import NavBar from "./components/navBar";
// import { BrowserRouter, Routes, Route, useLocation, Link, Outlet } from "react-router-dom";
import ProtectedRoute from './auth/ProtectedRoute'
// Lazy-loaded components
const SignUp = lazy(() => import("./components/SignUp"));
const Products = lazy(() => import("./components/products"));
const SignIn = lazy(() => import("./components/SignIn"));
const NotFound = lazy(() => import("./components/404"));
const UserProfile = lazy(() => import("./components/User/UserProfile"));
const ShoppingCart = lazy(() => import("./components/User/ShoppingCart"));
const Wishlist = lazy(() => import("./components/User/Wishlist"));
const CheckoutPage = lazy(() => import("./components/User/checkout-page"));
const OrderConfirmationPage = lazy(() => import("./components/User/order-confirmation-page"));

import AdminPanel from "./components/Admin/AdminPanel";
const AddProduct = lazy(() => import("./components/Admin/AddProduct"));
const Dashboard = lazy(() => import("./components/Admin/Dashboard"));
const Orders = lazy(() => import("./components/Admin/Orders"));
const ProductManagement = lazy(() => import("./components/Admin/ProductManagement/ProductManagement"));




const App = () => {
  const productDetail = [
    {
      "id": 1,
      "title": "Men's Casual T-Shirt",
      "price": 499,
      "description": "Comfortable and stylish T-shirt for everyday wear, made from high-quality cotton.",
      "detailedDescription": "This men's casual T-shirt is made from soft, breathable cotton, perfect for casual outings or lounging at home. It offers a relaxed fit and a range of colors to suit your personal style.",
      "category": "Clothing",
      "image": "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
      "rating": {
        "rate": 4.2,
        "count": 120
      },
      "stock": 200
    },
    {
      "id": 2,
      "title": "Women's Running Shoes",
      "price": 2999,
      "description": "Lightweight running shoes with excellent grip and cushioning for long-lasting comfort.",
      "detailedDescription": "These women's running shoes are designed for maximum comfort with breathable mesh fabric, superior cushioning, and a non-slip rubber sole, ideal for daily workouts or long runs.",
      "category": "Footwear",
      "image": "https://cdn.pixabay.com/photo/2018/01/25/00/18/sneakers-3105120_1280.jpg",
      "rating": {
        "rate": 2.5,
        "count": 200
      },
      "stock": 150
    },
    {
      "id": 3,
      "title": "Wireless Earbuds",
      "price": 1999,
      "description": "True wireless earbuds with superior sound quality and long battery life.",
      "detailedDescription": "These wireless earbuds provide crystal clear sound, a snug fit, and up to 8 hours of battery life. Perfect for listening to music, podcasts, or hands-free calls on the go.",
      "category": "Electronics",
      "image": "https://cdn.pixabay.com/photo/2020/06/10/13/22/headphones-5282687_1280.jpg",
      "rating": {
        "rate": 4.7,
        "count": 350
      },
      "stock": 300
    },
    {
      "id": 4,
      "title": "Ceramic Coffee Mug",
      "price": 299,
      "description": "Stylish ceramic mug ideal for coffee, tea, and other beverages.",
      "detailedDescription": "This ceramic coffee mug is perfect for your morning coffee or tea. Its ergonomic handle and sturdy build ensure a comfortable grip and long-lasting use.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2019/01/10/20/48/mug-3926033_1280.jpg",
      "rating": {
        "rate": 4.3,
        "count": 95
      },
      "stock": 100
    },
    {
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
    {
      "id": 6,
      "title": "Men's Leather Wallet",
      "price": 799,
      "description": "Premium leather wallet with multiple compartments for cards and cash.",
      "detailedDescription": "This men's leather wallet features a slim design, multiple card slots, and a coin pocket, crafted from high-quality leather for durability and a stylish look.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2014/10/19/11/10/purse-494169_1280.jpg",
      "rating": {
        "rate": 4.4,
        "count": 145
      },
      "stock": 50
    },
    {
      "id": 7,
      "title": "Gaming Mouse",
      "price": 1499,
      "description": "High-precision gaming mouse with customizable DPI settings and RGB lighting.",
      "detailedDescription": "This gaming mouse features adjustable DPI for precise control, customizable RGB lighting, and ergonomic design for long gaming sessions without strain.",
      "category": "Gaming",
      "image": "https://cdn.pixabay.com/photo/2017/01/22/10/13/mouse-1999471_1280.jpg",
      "rating": {
        "rate": 4.8,
        "count": 400
      },
      "stock": 120
    },
    {
      "id": 8,
      "title": "Cookware Set",
      "price": 3999,
      "description": "Non-stick cookware set including frying pan, saucepan, and kadai for versatile cooking.",
      "detailedDescription": "This cookware set includes a non-stick frying pan, saucepan, and kadai, making it perfect for preparing a variety of meals. The set is designed for durability and ease of cleaning.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2013/09/16/10/56/cookware-182788_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 250
      },
      "stock": 40
    },
    {
      "id": 9,
      "title": "Yoga Mat",
      "price": 999,
      "description": "Eco-friendly yoga mat with excellent grip and cushioning for all types of exercises.",
      "detailedDescription": "This yoga mat provides a non-slip surface, excellent cushioning for joints, and is made from eco-friendly materials. Perfect for yoga, Pilates, or general fitness workouts.",
      "category": "Fitness",
      "image": "https://cdn.pixabay.com/photo/2015/03/30/08/53/yoga-698114_1280.jpg",
      "rating": {
        "rate": 4.4,
        "count": 190
      },
      "stock": 200
    },
    {
      "id": 10,
      "title": "Smartphone Stand",
      "price": 399,
      "description": "Adjustable smartphone stand for hands-free video calls and viewing.",
      "detailedDescription": "This adjustable smartphone stand holds your phone at the perfect angle for video calls, watching videos, or browsing, freeing up your hands for multitasking.",
      "category": "Accessories",
      "image": "https://m.media-amazon.com/images/I/51u2MqPaQwL._SL1200_.jpg",
      "rating": {
        "rate": 4.3,
        "count": 135
      },
      "stock": 150
    },
    {
      "id": 11,
      "title": "Bluetooth Speaker",
      "price": 1599,
      "description": "Portable Bluetooth speaker with high-quality sound and long battery life.",
      "detailedDescription": "This Bluetooth speaker offers crisp, clear sound and up to 12 hours of playback. Its compact, portable design makes it ideal for both indoor and outdoor use.",
      "category": "Electronics",
      "image": "https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_1280.jpg",
      "rating": {
        "rate": 4.6,
        "count": 320
      },
      "stock": 80
    },
    {
      "id": 12,
      "title": "Men's Hoodie",
      "price": 999,
      "description": "Warm and cozy hoodie made from soft fleece material.",
      "detailedDescription": "This hoodie provides maximum warmth and comfort with its soft fleece lining and adjustable drawstrings. Ideal for chilly weather and casual wear.",
      "category": "Clothing",
      "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSq6XO2BkEwuqvfrjifs1UUN7CUxjIueYVQQ-E_eu5Nq52xKSj4SvixvP3_Gs7Z-eIFYFy7WJ55a3RAwXA3YGPZQ4UWhwWxCd093l7tXyyUxuAdzUcrcWYX",
      "rating": {
        "rate": 4.4,
        "count": 220
      },
      "stock": 180
    },
    {
      "id": 13,
      "title": "Women's Handbag",
      "price": 1499,
      "description": "Elegant handbag with spacious compartments for everyday use.",
      "detailedDescription": "This handbag is both stylish and functional, offering multiple compartments for your essentials. Made from durable material, it's perfect for both casual and formal occasions.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2015/08/10/20/14/handbag-883113_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 160
      },
      "stock": 70
    },
    {
      "id": 14,
      "title": "Office Chair",
      "price": 5999,
      "description": "Ergonomic office chair with adjustable height and lumbar support.",
      "detailedDescription": "This office chair offers exceptional comfort with its ergonomic design, adjustable height, and lumbar support. Perfect for long hours of work or study.",
      "category": "Furniture",
      "image": "https://cdn.pixabay.com/photo/2020/05/12/12/05/office-5162607_960_720.jpg",
      "rating": {
        "rate": 4.7,
        "count": 210
      },
      "stock": 50
    },
    {
      "id": 15,
      "title": "Electric Kettle",
      "price": 1299,
      "description": "Compact electric kettle for boiling water quickly and efficiently.",
      "detailedDescription": "This electric kettle has a 1.5-liter capacity and fast boiling technology, making it ideal for tea, coffee, or instant noodles.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2014/08/08/21/36/electric-kettle-413744_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 180
      },
      "stock": 120
    },
    {
      "id": 16,
      "title": "Dumbbell Set",
      "price": 3499,
      "description": "Set of 2 dumbbells with interchangeable weights for various exercises.",
      "detailedDescription": "This dumbbell set includes two dumbbells with adjustable weight options, allowing you to customize your workout for different strength training exercises.",
      "category": "Fitness",
      "image": "https://cdn.pixabay.com/photo/2017/03/30/03/50/fitness-equipment-2187127_960_720.jpg",
      "rating": {
        "rate": 4.6,
        "count": 150
      },
      "stock": 100
    },
    {
      "id": 17,
      "title": "Gaming Headset",
      "price": 1999,
      "description": "Noise-canceling gaming headset with a built-in microphone for immersive gameplay.",
      "detailedDescription": "This gaming headset offers noise cancellation, clear sound, and a built-in microphone for clear communication during your gaming sessions.",
      "category": "Gaming",
      "image": "https://cdn.pixabay.com/photo/2022/04/01/19/26/technology-7105517_960_720.jpg",
      "rating": {
        "rate": 4.7,
        "count": 270
      },
      "stock": 130
    },
    {
      "id": 18,
      "title": "Study Desk",
      "price": 4999,
      "description": "Compact wooden desk ideal for studying or working from home.",
      "detailedDescription": "This study desk features a sleek design with ample space for books, a laptop, and stationery. Perfect for your home office or study corner.",
      "category": "Furniture",
      "image": "https://www.homeone.store/cdn/shop/products/OT-03.png?v=1679729769&width=2048",
      "rating": {
        "rate": 4.5,
        "count": 190
      },
      "stock": 70
    },
    {
      "id": 19,
      "title": "LED Desk Lamp",
      "price": 799,
      "description": "Adjustable LED desk lamp with touch controls and brightness settings.",
      "detailedDescription": "This LED desk lamp offers adjustable brightness levels and a sleek design. Perfect for studying or working late into the night.",
      "category": "Accessories",
      "image": "https://m.media-amazon.com/images/I/61QPRxJk3dL.jpg",
      "rating": {
        "rate": 4.4,
        "count": 140
      },
      "stock": 150
    },
    {
      "id": 20,
      "title": "Men's Sports Watch",
      "price": 2499,
      "description": "Durable sports watch with water resistance and stopwatch functionality.",
      "detailedDescription": "This sports watch is designed to withstand tough conditions. It includes a stopwatch, water resistance, and is perfect for outdoor activities.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 165
      },
      "stock": 90
    },
    {
      "id": 21,
      "title": "Wireless Keyboard",
      "price": 1799,
      "description": "Compact wireless keyboard with ergonomic design and long battery life.",
      "detailedDescription": "This wireless keyboard offers a comfortable typing experience with its ergonomic design, long battery life, and fast Bluetooth connectivity.",
      "category": "Electronics",
      "image": "https://m.media-amazon.com/images/I/618gntt98eL._AC_UF1000,1000_QL80_.jpg",
      "rating": {
        "rate": 4.5,
        "count": 210
      },
      "stock": 110
    },
    {
      "id": 22,
      "title": "Men's Joggers",
      "price": 899,
      "description": "Comfortable and stylish joggers for everyday use and workouts.",
      "detailedDescription": "These men's joggers offer comfort and flexibility, ideal for exercise, casual wear, or lounging at home. Soft material and a modern fit.",
      "category": "Clothing",
      "image": "https://aestheticnation.co.in/cdn/shop/files/FleecetechJoggersKhakhi_2.jpg?v=1694788921",
      "rating": {
        "rate": 4.4,
        "count": 170
      },
      "stock": 150
    },
    {
      "id": 23,
      "title": "Smartwatch",
      "price": 3499,
      "description": "Feature-packed smartwatch with heart rate monitoring and GPS tracking.",
      "detailedDescription": "This smartwatch comes with heart rate monitoring, GPS tracking, and sleep analysis. Perfect for fitness tracking and staying connected on the go.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2015/08/15/15/21/smart-watch-889639_640.jpg",
      "rating": {
        "rate": 4.6,
        "count": 250
      },
      "stock": 80
    },
    {
      "id": 24,
      "title": "Wall Clock",
      "price": 599,
      "description": "Modern wall clock with a silent movement and elegant design.",
      "detailedDescription": "This modern wall clock is designed for both functionality and style, with a silent movement that makes it ideal for bedrooms, offices, or living rooms.",
      "category": "Furniture",
      "image": "https://cdn.pixabay.com/photo/2017/08/12/15/09/clock-2634551_1280.png",
      "rating": {
        "rate": 4.4,
        "count": 120
      },
      "stock": 140
    },
    {
      "id": 25,
      "title": "Cooking Knife Set",
      "price": 1299,
      "description": "Set of sharp and durable cooking knives for all your kitchen needs.",
      "detailedDescription": "This cooking knife set includes high-quality stainless steel knives for chopping, slicing, and dicing. Perfect for home chefs and cooking enthusiasts.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2016/11/19/12/37/knives-1839061_640.jpg",
      "rating": {
        "rate": 4.5,
        "count": 190
      },
      "stock": 60
    },
    {
      "id": 26,
      "title": "Resistance Bands",
      "price": 499,
      "description": "Set of resistance bands for versatile strength and fitness training.",
      "detailedDescription": "This set of resistance bands is perfect for full-body workouts, stretching, and strengthening exercises. Ideal for home or gym use.",
      "category": "Fitness",
      "image": "https://m.media-amazon.com/images/I/31tnozVY82L._AC_UF894,1000_QL80_.jpg",
      "rating": {
        "rate": 4.3,
        "count": 100
      },
      "stock": 150
    },
    {
      "id": 27,
      "title": "Women's Flats",
      "price": 799,
      "description": "Stylish and comfortable flats for casual and formal occasions.",
      "detailedDescription": "These women's flats offer comfort and elegance, making them perfect for both casual and formal occasions. Soft and flexible for all-day wear.",
      "category": "Footwear",
      "image": "https://m.media-amazon.com/images/I/61uYSpP+c1L._AC_UY1000_.jpg",
      "rating": {
        "rate": 4.2,
        "count": 95
      },
      "stock": 120
    },
    {
      "id": 28,
      "title": "Gaming Keyboard",
      "price": 2499,
      "description": "Mechanical gaming keyboard with customizable RGB lighting.",
      "detailedDescription": "This mechanical keyboard offers responsive key switches, customizable RGB lighting, and anti-ghosting features for an enhanced gaming experience.",
      "category": "Gaming",
      "image": "https://i.pcmag.com/imagery/reviews/01LnwPzDtlJP9XzLBk9qdbq-1.fit_lim.size_919x518.v1613506210.png",
      "rating": {
        "rate": 4.7,
        "count": 270
      },
      "stock": 150
    },
    {
      "id": 29,
      "title": "Men's Formal Shirt",
      "price": 999,
      "description": "Premium quality formal shirt suitable for office and formal events.",
      "detailedDescription": "This men's formal shirt is made from breathable, wrinkle-resistant fabric. Perfect for business meetings, office wear, or formal events.",
      "category": "Clothing",
      "image": "https://crosscreek.in/cdn/shop/products/1_1_103b3dd5-4975-4b18-94cc-1a010e09a214.jpg?v=1633763212",
      "rating": {
        "rate": 4.5,
        "count": 145
      },
      "stock": 100
    },
    {
      "id": 30,
      "title": "Women's Backpack",
      "price": 1299,
      "description": "Lightweight and spacious backpack with multiple compartments.",
      "detailedDescription": "This women's backpack is perfect for daily use. It has multiple compartments to organize your essentials, with adjustable straps for comfort.",
      "category": "Accessories",
      "image": "https://sslimages.shoppersstop.com/sys-master/images/h41/hde/33247470125086/A2443BPMEN01WH1_WHITE.jpg_2000Wx3000H",
      "rating": {
        "rate": 4.4,
        "count": 160
      },
      "stock": 90
    },
    {
      "id": 31,
      "title": "Indoor Plant Pot",
      "price": 499,
      "description": "Elegant ceramic pot perfect for indoor plants and home decor.",
      "detailedDescription": "This ceramic pot is ideal for small plants. It features a sleek and modern design that adds a touch of elegance to your home or office.",
      "category": "Furniture",
      "image": "https://cdn.pixabay.com/photo/2022/01/18/16/03/pigmyweeds-6947384_640.jpg",
      "rating": {
        "rate": 4.6,
        "count": 100
      },
      "stock": 75
    },
    {
      "id": 32,
      "title": "Electric Blender",
      "price": 1999,
      "description": "Compact and efficient electric blender for smoothies and shakes.",
      "detailedDescription": "This electric blender comes with multiple speed settings, making it perfect for smoothies, shakes, or even soups. It’s easy to clean and use.",
      "category": "Kitchenware",
      "image": "https://cdn.pixabay.com/photo/2017/02/25/10/46/blender-2097431_1280.jpg",
      "rating": {
        "rate": 4.5,
        "count": 210
      },
      "stock": 80
    },
    {
      "id": 33,
      "title": "Push-Up Bars",
      "price": 599,
      "description": "Durable and ergonomic push-up bars for strength training.",
      "detailedDescription": "These push-up bars are ergonomically designed to reduce wrist strain and enhance push-up performance. Ideal for home fitness routines.",
      "category": "Fitness",
      "image": "https://images-cdn.ubuy.co.in/634e4b190339f20e193a09e7-push-up-bars-home-workout-equipment.jpg",
      "rating": {
        "rate": 4.4,
        "count": 80
      },
      "stock": 90
    },
    {
      "id": 34,
      "title": "Wireless Charger",
      "price": 1299,
      "description": "Fast and reliable wireless charger compatible with most devices.",
      "detailedDescription": "This wireless charger is compatible with most smartphones, offering fast charging capabilities and a sleek design that fits any desk or bedside table.",
      "category": "Electronics",
      "image": "https://cdn.pixabay.com/photo/2020/02/23/20/39/charging-phone-4874592_640.jpg",
      "rating": {
        "rate": 4.5,
        "count": 150
      },
      "stock": 100
    },
    {
      "id": 35,
      "title": "Men's Leather Belt",
      "price": 699,
      "description": "High-quality leather belt with adjustable buckle for a perfect fit.",
      "detailedDescription": "This men's leather belt offers durability and style. The adjustable buckle ensures a perfect fit, making it a must-have accessory for your wardrobe.",
      "category": "Accessories",
      "image": "https://cdn.pixabay.com/photo/2017/03/15/17/49/belt-2146914_1280.jpg",
      "rating": {
        "rate": 4.6,
        "count": 160
      },
      "stock": 130
    }
  ];
  
  

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Products initialProducts={productDetail} />
        </Suspense>
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <SignIn />
        </Suspense>
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <SignUp />
        </Suspense>
      </>
    ),
  },

  // Protect user profile & cart routes
  {
    path: "/profile",
    element: <ProtectedRoute />, // 👈 Wrap with ProtectedRoute
    children: [
      {
        path: "",
        element: (
          <>
            <NavBar />
            <Suspense fallback={<Loader />}>
              <UserProfile />
            </Suspense>
          </>
        ),
      },
    ],
  },
  {
    path: "/Mycart",
    element: <ProtectedRoute />, // 👈 Wrap with ProtectedRoute
    children: [
      {
        path: "",
        element: (
          <>
            <NavBar />
            <Suspense fallback={<Loader />}>
              <ShoppingCart />
            </Suspense>
          </>
        ),
      },
    ],
  },
  {
    path: "/wishlist",
    element: <ProtectedRoute />, // 👈 Wrap with ProtectedRoute
    children: [
      {
        path: "",
        element: (
          <>
            <NavBar />
            <Suspense fallback={<Loader />}>
            <Wishlist/>
            </Suspense>
          </>
        ),
      },
    ],
  },
  {
    path: "/checkout",
    element: <ProtectedRoute />, // 👈 Wrap with ProtectedRoute
    children: [
      {
        path: "",
        element: (
          <>
            <NavBar />
            <Suspense fallback={<Loader />}>
            <CheckoutPage/>
            </Suspense>
          </>
        ),
      },
    ],
  },
  {
    path: "/orderconfirmation",
    element: <ProtectedRoute />, // 👈 Wrap with ProtectedRoute
    children: [
      {
        path: "",
        element: (
          <>
            <NavBar />
            <Suspense fallback={<Loader />}>
            <OrderConfirmationPage/>
            </Suspense>
          </>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },

  // Protect admin routes
  {
    path: "/admin",
    element:(
      <>
       <AdminPanel/>
      </>
    ), // 👈 Wrap with ProtectedRoute
    children: [
      {
        path: "addproduct",
        element: (
          <Suspense fallback={<Loader />}>
            <AddProduct />
          </Suspense>
        ),
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<Loader />}>
            <Orders />
          </Suspense>
        ),
      },
      {
        path: "ProductManagement",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductManagement />
          </Suspense>
        ),
      },
    ],
  },
]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

// Wrap App in BrowserRouter at the root level


export default App;
