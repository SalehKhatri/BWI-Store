/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Utilities(props) {
  const onChange = (e) => {
    props.setSortby(e.target.value);
  };
  const {cartItems,cartTotal}=props
  return (
    <div className="flex items-center justify-between w-full py-4 px-4">
      <div>
        <select
          id="sortBy"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onChange}
        >
          <option>Sort by</option>
          <option value="LTH">Low to high</option>
          <option value="HTL">High to low</option>
        </select>
      </div>

      <div className=" flex space-x-4 items-center">
        <div className="h-full justify-center items-center">
          <div className="relative py-2">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                {cartItems}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="file: mt-4 h-6 w-6 md:w-7 md:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
        <button className="px-3 py-[6px] transition ease-in duration-200 font-sans font-semibold  uppercase rounded-lg hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none text-xs md:text-sm shadow-md drop-shadow-md mr-2 tracking-wide">
          Cart total:-${String(cartTotal).slice(0,6)}
        </button>
      </div>
    </div>
  );
}

export default Utilities;
