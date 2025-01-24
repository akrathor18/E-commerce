import React from "react";
import { UserCog } from 'lucide-react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const AdminPanel = () => {
  return (
    <div className="text-text font-inter">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-primary p-4 z-50 sidebar-menu transition-transform">
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
          <h2 className="font-bold text-2xl">
           <img src={logo} alt="logo"/>
          </h2>
        </a>
        <ul className="mt-4">
          <span className="text-accent font-bold">ADMIN</span>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex font-semibold items-center py-2 px-4 text-text bg-secondary hover:text-hover rounded-md group-[.active]:bg-hover group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex font-semibold items-center py-2 px-4 text-text bg-secondary hover:text-hover rounded-md group-[.active]:bg-hover group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <i className="bx bx-user mr-3 text-lg"></i>
              <span className="text-sm">Add Products</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </a>
           
          </li>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex font-semibold items-center py-2 px-4 text-text bg-secondary hover:text-hover rounded-md group-[.active]:bg-hover group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <i className="bx bx-user mr-3 text-lg"></i>
              <span className="text-sm">Oders</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </a>
           
          </li>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex font-semibold items-center py-2 px-4 text-text bg-secondary hover:text-hover rounded-md group-[.active]:bg-hover group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <i className="bx bx-user mr-3 text-lg"></i>
              <span className="text-sm">Users</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </a>
           
          </li>
          {/* Add other sidebar items similarly */}
        </ul>
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-text z-40 md:hidden sidebar-overlay">hh</div>

      {/* Main Content */}
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-secondary min-h-screen transition-all main">
        {/* Navbar */}
        <div className="py-2 px-6 bg-primary flex items-center shadow-md shadow-gray-900 sticky top-0 left-0 z-30">
          <button type="button" className="text-lg text-gray-900 font-semibold sidebar-toggle">
            <i className="ri-menu-line"></i>
          </button>

          <ul className="ml-auto flex items-center">
            <li className="mr-1 dropdown">
             
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

{/* ------------------------------------Profile dropdown */}
<Menu as="div" className="relative ml-3">
  <div>
    <MenuButton className="relative flex rounded-full bg-secondry text-2xl  ">
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Open user menu</span>
      <UserCog />

    </MenuButton>
  </div>
  <MenuItems
    transition
    className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-secondary text-text py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
      <Link
       to={"/signup"}
        className="block px-4 py-2 text-sm  data-[focus]:bg-primary hover:text-hover data-[focus]:outline-none"
      >
        Loguot
      </Link>
    </MenuItem>

  </MenuItems>
</Menu>
</div>
            </li>
            {/* Add other navbar items similarly */}
          </ul>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-primary rounded-md border border-gray-500 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="flex items-center mb-1">
                    <div className="text-2xl font-semibold">2</div>
                  </div>
                  <div className="text-sm font-medium text-gray-300">Users</div>
                </div>
              </div>
              <a href="/users" className="text-accent font-medium text-sm hover:text-green-400">
                View
              </a>
            </div>
            {/* Add other content cards similarly */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
