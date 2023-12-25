/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
function Navbar(props) {
  const navigate = useNavigate();
  let location = useLocation();
  const handleLogOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };
  const onChange=(e)=>{
    if(e.target.value===""){
      props.setSearchField("");
    }
  }
  return (
    <div>
      {location.pathname==="/" ? (
        <nav className="flex bg-indigo-600 p-4 justify-between drop-shadow-xl shadow-md h-[60px] items-center">
          <div>
            <Link to="/">
              <h1 className="font-bold text-lg lg:text-2xl body-font font-RubikDoodleShadow text-white ">
                BWI-Store
              </h1>
            </Link>
          </div>
          <form onSubmit={props.onSearch}>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-[130px] sm:w-[240px] lg:h-[40px] lg:w-[620px] flex justify-between border-gray-300 rounded-md md:rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  ">
              <input
                type="search"
                id="search"
                className="block w-full ps-5 text-sm text-gray-900 border  dark:placeholder-gray-400 rounded-s-lg outline-none border-hidden"
                placeholder="Search"
                onChange={onChange}
                required=""
              />

              <div className=" flex items-center cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-e-lg" >
              <button type="submit" >
                <svg
                  className="w-[38px] md:w-[45px] h-4 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                </button>
              </div>
            </div>
          </form>

        <div className="flex space-x-2 h-fit items-center hover:scale-105 hover:duration-100 cursor-pointer">
          <button
            className="font-semibold text-white text-sm md:text-lg "
            onClick={handleLogOut}
          >
            Logout
          </button>
          <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out w-[16px] h-[16px] md:w-[20px] md:h-[20px] "><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          </div>
        </nav>
      ) : (
        <nav className="flex bg-indigo-600 p-4 justify-between drop-shadow-xl shadow-md">
          <div>
            <Link to="/">
              <h1 className="font-bold text-lg lg:text-2xl body-font font-RubikDoodleShadow text-white ">
                BWI-Store
              </h1>
            </Link>
          </div>
          <Link to="/about">
            <h1 className="font-semibold text-white text-lg hover:scale-105 hover:duration-100">
              About
            </h1>
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
