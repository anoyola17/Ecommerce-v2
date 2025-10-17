import React from "react";
import logo from "/src/assets/logo.png";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img id="rider-logo" src={logo} alt="Motorcycle Rider Logo" />
      </div>
      <ul className="nav-links">

        <li><a href="/src/App.jsx">Home</a></li>
        <li><a href="/src/pages/products-page.jsx">Product</a></li>
        <li><a href="/src/pages/contact-page.jsx">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;