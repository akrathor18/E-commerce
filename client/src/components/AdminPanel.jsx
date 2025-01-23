import React from "react";

const AdminPanel = () => {
  return (
    <div className="text-gray-800 font-inter">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
          <h2 className="font-bold text-2xl">
            LOREM <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span>
          </h2>
        </a>
        <ul className="mt-4">
          <span className="text-gray-400 font-bold">ADMIN</span>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <i className="bx bx-user mr-3 text-lg"></i>
              <span className="text-sm">Users</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </a>
            <ul className="pl-7 mt-2 hidden group-[.selected]:block">
              <li className="mb-4">
                <a
                  href="#"
                  className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  All
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Roles
                </a>
              </li>
            </ul>
          </li>
          {/* Add other sidebar items similarly */}
        </ul>
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>

      {/* Main Content */}
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
        {/* Navbar */}
        <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
          <button type="button" className="text-lg text-gray-900 font-semibold sidebar-toggle">
            <i className="ri-menu-line"></i>
          </button>

          <ul className="ml-auto flex items-center">
            <li className="mr-1 dropdown">
              <button
                type="button"
                className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="hover:bg-gray-100 rounded-full"
                  viewBox="0 0 24 24"
                  style={{ fill: "gray" }}
                >
                  <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                </svg>
              </button>
            </li>
            {/* Add other navbar items similarly */}
          </ul>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="flex items-center mb-1">
                    <div className="text-2xl font-semibold">2</div>
                  </div>
                  <div className="text-sm font-medium text-gray-400">Users</div>
                </div>
              </div>
              <a href="/users" className="text-[#f84525] font-medium text-sm hover:text-red-800">
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
