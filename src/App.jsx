import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "/src/pages/home.jsx";
import Product from "/src/pages/product.jsx";
import Contact from "/src/pages/contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
