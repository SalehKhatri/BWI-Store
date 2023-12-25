/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";
function ProductList(props) {
  const navigate = useNavigate();
  const {setCartItems,cartItems,cartTotal,setCartTotal}=props
  const [jump, setJump] = useState(0);

  const getCategories=async ()=>{
    const res=await fetch('https://dummyjson.com/products/categories')
    const json=await res.json();
    props.setCategories(json);
  }

  const getProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=100`
    );
    const json = await response.json();
    props.setTotalResult(json.total);
    props.setProduct(json.products);
      setJump(jump+10);
  };


  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProducts();
      getCategories();
    } else {
      navigate("/login");
    }
  }, []);


  return (

    <div>
      <h1 className="text-center font-bold md:text-3xl pt-14 pb-2 md:pt-0 md:pb-4 font-poppins text-2xl md:tracking-wider">Todays deals!</h1>

      {props.products.length ? (
        <div className="grid my-4 grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-4 mx-6 sm:gap- sm:gap-y-32 xl:gap-x-0 justify-items-center">
          {props.products.map((product) => {
            return <ProductCard cartItems={cartItems} cartTotal={cartTotal} setCartItems={setCartItems} setCartTotal={setCartTotal} product={product} key={Math.random()} />;
          })}
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <ClipLoader color="#5850EC" />
        </div>
      )}
    </div>
  );
}

export default ProductList;
