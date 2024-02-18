import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="antialiased bg-opacity-95 z-50 fixed top-0 left-0 w-full">
      <div className="  text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 mx-auto rounded-b-3xl">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <Link
              to={"/"}
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              LOGO
            </Link>
            <button
              className="md:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M7.95 11.95h32m-32 12h32m-32 12h32"
                />
              </svg>
            </button>
          </div>
          <nav
            className={`${
              open ? "block" : "hidden"
            } md:flex md:justify-center md:flex-row`}
          >
            <a
              className="block md:inline-block mt-2 md:mt-0 px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Home
            </a>
            <div className="relative group md:ml-4">
              <button className="block md:inline-block mt-2 md:mt-0 px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Services
                <svg
                  className="w-4 h-4 ml-2 inline-block text-gray-600 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    transform="rotate(180 10 10)"
                    d="M10 8a1 1 0 0 1 .707.293l4 4a1 1 0 1 1-1.414 1.414L10 10.414 6.707 13.707a1 1 0 0 1-1.414-1.414l4-4A1 1 0 0 1 10 8z"
                  />
                </svg>
              </button>
              <div className="absolute left-0 hidden mt-2 space-y-2 bg-white text-gray-700 border rounded-lg shadow-lg group-hover:block">
                <a
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                  href="#"
                >
                  Service 1
                </a>
                <a
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                  href="#"
                >
                  Service 2
                </a>
              </div>
            </div>
            <a
              className="block md:inline-block mt-2 md:mt-0 px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Properties
            </a>
            <a
              className="block md:inline-block mt-2 md:mt-0 px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
