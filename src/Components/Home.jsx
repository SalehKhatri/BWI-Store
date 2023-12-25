/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import Utilities from "./Utilities";
function Home() {
  const [products, setProduct] = useState([]);
  const [jump, setJump] = useState(0);
  const [searchField, setSearchField] = useState("");
  const [totalResult, setTotalResult] = useState(0);
  const [sortBy, setSortby] = useState("");
  const [categories,setCategories]=useState([]);
  const [cartTotal,setCartTotal]=useState(0);
  const [cartItems,setCartItems]=useState(0);

  const filteredProducts = products.filter((entry) =>
    Object.values(entry).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(searchField.toLowerCase())
    )
  );

  if (sortBy === "LTH") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "HTL") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  const onSearch = (e) => {
    e.preventDefault();
    const searchEl = document.getElementById("search");
    setSearchField(searchEl.value);
  };


  return (
    <div>
      <Navbar
        setSearchField={setSearchField}
        onSearch={onSearch}
        searchField={searchField}
      />
      <Utilities cartItems={cartItems} cartTotal={cartTotal} setSortby={setSortby} categories={categories} />
      <ProductList
        products={filteredProducts}
        searchField={searchField}
        totalResult={totalResult}
        setTotalResult={setTotalResult}
        setProduct={setProduct}
        jump={jump}
        setJump={setJump}
        setCategories={setCategories}
        setCartItems={setCartItems}
        cartItems={cartItems} 
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
    </div>
  );
}

export default Home;
