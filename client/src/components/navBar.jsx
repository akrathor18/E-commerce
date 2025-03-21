import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import { useState, memo,useEffect  } from 'react'
import SearchBar from './searchBar'
import { Link,useNavigate } from 'react-router-dom'
import { UserPen , Heart,ShoppingCart, LogIn, LogOut   } from 'lucide-react';

import { toast } from "react-toastify";
 function NavBar() {
  
      const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Convert to boolean
  }, [localStorage.getItem("token")]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsAuthenticated(false); // Update state
    toast.success("Log-out successfully!");
    navigate("/");
  };

  return (
    <Disclosure as="nav" className="bg-secondary ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}

            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-text hover:text-hover focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <Link to={'/'}>
            <div className="flex shrink-0 items-center">
              <img
                alt="UrbanMart"
                src={logo}
                className="h-8 w-auto"
                />
            </div>
                </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

                {/*-------------------------------------------- Search products */}
                <SearchBar />



              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            {/* ------------------------------------Profile dropdown */}
            <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-gray-100 text-2xl">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF9800"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md border-text border bg-secondary text-text py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {isAuthenticated ? (
          <>
            <MenuItem>
              <Link
                to={"/profile"}
                className="flex gap-2 px-4 py-2 text-sm data-[focus]:bg-primary hover:text-hover data-[focus]:outline-none"
              >
                <UserPen className="w-5" /> Your Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to={"/mycart"}
                className="flex gap-2 px-4 py-2 text-sm data-[focus]:bg-primary hover:text-hover data-[focus]:outline-none"
              >
                <ShoppingCart fill="none" className="w-5" /> Cart
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to={"/wishlist"}
                className="flex gap-2 px-4 py-2 text-sm data-[focus]:bg-primary hover:text-hover data-[focus]:outline-none"
              >
                <Heart fill="none" className="w-5" /> Wish List
              </Link>
            </MenuItem>
            <MenuItem>
              <button
                onClick={handleLogout}
                className="flex w-full gap-2 px-4 py-2 text-sm data-[focus]:bg-primary hover:text-red-700 data-[focus]:outline-none text-red-600"
              >
                <LogOut className="w-5" /> Logout
              </button>
            </MenuItem>
          </>
        ) : (
          <MenuItem>
            <Link
              to={"/signup"}
              className="flex gap-2 px-4 py-2 text-sm data-[focus]:bg-primary hover:text-hover data-[focus]:outline-none"
            >
              <LogIn className="w-5" /> Sign-in
            </Link>
          </MenuItem>
        )}
      </MenuItems>
    </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <SearchBar />
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default memo(NavBar)