import React from "react";
import { Link } from "react-router-dom";
import youtube from "/src/assets/youtube.png";
import instagram from "/src/assets/instagram.png";
import github from "/src/assets/github.png";
import linkedin from "/src/assets/linkedin.png";
import "/src/styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-about">
          <h2>HORIZON RIDE</h2>
          <p>
            Supporting riders of all levels with the right gear, equipment, and
            expert guidance
          </p>
        </div>
        <div className="footer-links">
          <h2>USEFUL LINKS</h2>
          <ul>
            <li>
              <Link to="/" className="nav_link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="nav_link">
                Product
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav_link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2>SOCIAL MEDIA</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/ananoyola/" target="_blank">
                <img
                  className="flaticon-logo"
                  src={linkedin}
                  alt="Linkedin icon"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/anoyola17" target="_blank">
                <img className="flaticon-logo" src={github} alt="GitHub icon" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img
                  className="flaticon-logo"
                  src={instagram}
                  alt="Instagram icon"
                />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <img
                  className="flaticon-logo"
                  src={youtube}
                  alt="YouTube icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 HorizonRide Motorsport | All rights reserved</p>
      </div>
    </footer>
  );
}
