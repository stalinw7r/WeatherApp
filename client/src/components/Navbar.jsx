import React from "react";
import BrandLogo from "./BrandLogo";
import { useState } from "react";

const Navbar = ({ handleValue }) => {
  const [city, setcity] = useState("Kitchener, ON");

  const Submit = (e) => {
    handleValue(city);
  };
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center  whitespace-nowrap dark:text-white">
          <BrandLogo />
        </span>

        <div className="flex md:order-2 mx-auto  md:mx-0">
          <div className="relative  md:block mt-3 md:mt-0 ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <div className="flex gap-2 items-center border">
              <input
                onChange={(e) => {
                  setcity(e.target.value);
                }}
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="City, Country"
              />
              <button
                onClick={Submit}
                type="Submit"
                className="text-white bg-teal-500 hover:bg-teal-300 focus:ring-1 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800"
              >
                Go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
