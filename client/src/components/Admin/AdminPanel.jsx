import { React, useState , lazy } from "react";
import { UserCog, Users, Plus, House, Shuffle, AlignJustify } from 'lucide-react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {NavLink , Outlet } from "react-router-dom";
import logo from "../../assets/logo.png"



const AddProduct = lazy(() => import("./AddProduct"));

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="text-text font-inter transition-all duration-300 ease-in-out">
      {/* Sidebar */}
      <div className={`fixed  left-0 top-10 z-10 w-64 h-full bg-primary p-4  transition-transform ${sidebarOpen ? '' : 'hidden'} `}>
        <a href="#" className={`flex items-center pb-4 border-b border-b-gray-400 `}>
          <h2 className="font-bold text-2xl">
            <img src={logo} alt="logo" />
          </h2>
        </a>
        <ul className="mt-4">
          <span className= "text-accent font-bold">ADMIN</span>
          <li className="mb-1 group">
            <NavLink
              to={"./dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "flex font-semibold items-center py-2 px-4 text-text  rounded-md bg-hover"
                  : "flex font-semibold items-center py-2 px-4 text-text bg-secondary hover:text-hover rounded-md group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              }
              
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <House />
              <span className="text-sm pl-3">Dashboard</span>
            </NavLink>
          </li>
          <li className="mb-1 group">
            <NavLink
              to={'./addproduct'}
              className={({ isActive }) =>
                isActive
                  ? "flex font-semibold items-center py-2 px-4 text-text  rounded-md bg-hover"
                  : "flex font-semibold items-center py-2 px-4 text-text bg-secondary hover:text-hover rounded-md group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              }
            >
              <i className="bx bx-user mr-3 text-lg"></i>
              <Plus />
              <span className="text-sm pl-2">Add Products</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </NavLink>

          </li>
          <li className="mb-1 group">
            <NavLink
              to="./orders"
              className={({ isActive }) =>
                isActive
                  ? "flex font-semibold items-center py-2 px-4 text-text  rounded-md bg-hover"
                  : "flex font-semibold items-center py-2 px-4 text-text bg-secondary hover:text-hover rounded-md group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              }
            >
              <i className="bx bx-user mr-3 text-lg"></i>
              <Shuffle />
              <span className="text-sm pl-3">Oders</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </NavLink>

          </li>
          <li className="mb-1 group">
            <NavLink
              to="ProductManagement"
              className={({ isActive }) =>
                isActive
                  ? "flex font-semibold items-center py-2 px-4 text-text  rounded-md bg-hover"
                  : "flex font-semibold items-center py-2 px-4 text-text bg-secondary hover:text-hover rounded-md group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              }
            >
              <i className="bx bx-user mr-3 text-lg"></i>
              <Users />
              <span className="text-sm pl-3">
                Product Managment</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </NavLink>

          </li>
          {/* Add other sidebar items similarly */}
        </ul>
      </div>


      {/* Main Content */}
      <main className={` z-20 w-full ${sidebarOpen ? 'md:ml-64 md:w-[calc(100%-256px)]' : ''}    bg-secondary min-h-screen transition-all main`}>
        {/* Navbar */}
        <div className="py-2 px-6 bg-primary flex items-center shadow-md shadow-gray-900 sticky top-0 left-0 z-30">
          <button
            onClick={() => setSidebarOpen(prevState => !prevState)}
            type="button" className="text-lg text-text font-semibold sidebar-toggle">
            <i className="ri-menu-line"></i>
            <AlignJustify />
          </button>

          <ul className="ml-auto flex items-center">
            <li className="mr-1 dropdown">

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* ------------------------------------Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-primary text-2xl  ">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <UserCog />

                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-primary text-text py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm  data-[focus]:bg-primary hover:text-hover data-[focus]:outline-none"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        to={"/signup"}
                        className="block px-4 py-2 text-sm  data-[focus]:bg-primary hover:text-hover data-[focus]:outline-none"
                      >
                        Loguot
                      </NavLink>
                    </MenuItem>

                  </MenuItems>
                </Menu>
              </div>
            </li>
            {/* Add other navbar items similarly */}
          </ul>
        </div>

        {/* Content */}
      <Outlet/>
      </main>
    </div>
  );
};

export default AdminPanel;
