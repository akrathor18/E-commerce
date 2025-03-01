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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Products/>
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
