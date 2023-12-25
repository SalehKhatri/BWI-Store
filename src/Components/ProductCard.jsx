/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
function ProductCard(props) {
  const {setCartItems,cartItems,cartTotal,setCartTotal}=props ;
  
  const price =
    props.product.price -
    (props.product.price * props.product.discountPercentage) / 100;
    const handleCart=()=>{
      console.log("hi")
      setCartItems(cartItems+1);
      setCartTotal(cartTotal+price)
      
    }
  return (
    <div className="flex md:h-[210px] h-auto  items-center justify-center px-5 md:px-1 lg:px-5  ">
      <a
        href="#"
        className=" items-center rounded-lg overflow-hidden border border-gray-200 bg-white shadow hover:bg-gray-100 md:grid md:grid-cols-2  "
      >
        <img
          className="w-full object-cover md:h-[120px] md:w-[140px] lg:w-52 md:rounded-nones "
          src={props.product.thumbnail}
          alt=""
        />
        <div className="flex flex-col items-start md:justify-between p-4 leading-normal">
          <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900">
            {props.product.brand}
          </h5>
          <p className="mb-3 text-[18px]  font-semibold text-gray-700">
            {props.product.title.slice(0, 20)}
          </p>
          <p className="mb-1 text-[14px] font-medium text-gray-700">
            Ratings:{props.product.rating}/5
          </p>
          <p className="mb-3 text-[28px] font-semibold sm:text-[22px] lg:[28px] text-gray-700">
            ${String(price).slice(0, 6)}
            <span className=" mb-2 font-medium text-[14px]">
              {" "}
              M.R.P:
              <span className="line-through">${props.product.price}</span>{" "}
              <span>({props.product.discountPercentage}% off)</span>
            </span>
          </p>
          <div className="justify-center justify-self-center mx-auto ">
          <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none text-base sm:text-xs lg:text-[16px] font-poppins" onClick={handleCart}>
            Add to cart
          </button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
