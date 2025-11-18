import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "/src/assets/logo.png";
import hamburger from "/src/assets/hamburger.svg";
import "/src/styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) setIsOpen(false);
  };

  return (
    <header className="nav_header">
      {/* Hamburger button (mobile only) */}
      <button
        className={`open-sidebar ${isOpen ? "hidden" : ""}`}
        aria-label="open-sidebar"
        onClick={toggleMenu}
      >
        <img className="hamburger" src={hamburger} alt="menu" />
      </button>

      {/* Navigation links */}
      <nav className={`nav-bar ${isOpen ? "show" : ""}`}>
        <div className="nav_center mobile_logo_container">
          <img src={logo} alt="HorizonRev Logo" className="nav_logo" />
        </div>

        <div className="nav_right">
          <Link to="/" className="nav_link" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/product" className="nav_link" onClick={handleLinkClick}>
            Product
          </Link>
          <Link to="/contact" className="nav_link" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
