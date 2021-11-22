import React from "react";
import "./App.css";
import Header from "./Component/Header";
import ProductData from "./storage/product.json";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Component/Footer";
import HeroSection from "./Component/HeroSection";
import Product from "./Component/Product";
import CartHeader from "./Component/Cart/CartHeader";
import ProductView from "./Component/ProductView";

// console.log(ProductData);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HeroSection />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<CartHeader />} />
      </Routes>
      <Routes>
        <Route path="/product/:productId" element={<ProductView />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
