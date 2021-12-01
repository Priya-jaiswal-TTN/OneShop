import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import ProductData from "./storage/product.json";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Component/Footer";
import HeroSection from "./Component/HeroSection";
import Product from "./Component/Product";
import Cart from "./Component/Cart/Cart";
import ProductView from "./Component/ProductView";
import Success from "./Component/Success";

// console.log(ProductData);

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchHandler = (productName) => {
    setSearchValue(productName);
  };
  const newData = ProductData.filter((prod) => {
    if (searchValue === "") {
      return prod;
    } else {
      if (prod.name.toLowerCase().includes(searchValue.toLowerCase()))
        return prod;
    }
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={<HeroSection onSearch={onSearchHandler} />}
        />
      </Routes>
      <Routes>
        <Route path="/home" element={<Product product={newData} />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
      <Routes>
        <Route path="/success" element={<Success />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
