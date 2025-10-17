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

        <li><a href="#home">Home</a></li>
        <li><a href="#about">Product</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;