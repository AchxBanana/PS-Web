import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="#" className="text-white no-underline hover:text-gray-300">
                Logo
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
              type="button"
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul
              id="dropdown"
              className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Option 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
