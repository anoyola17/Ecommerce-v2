import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-inner">
            <div className="footer-about">
                <h2>RACEREV MOTORSPORT</h2>
                <p>Supporting riders of all levels with the right gear, equipment, and expert guidance</p>
            </div>
            <div className="footer-links">
                <h2>USEFUL LINKS</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div> 
            <div className="footer-contact">
                <h2>CONTACT</h2>
                <ul>
                    <li>Charlotte, NC 28202,US</li>
                    <li>info@racerev-motorsport.org</li>
                    <li><a href="https://www.linkedin.com/in/ananoyola/">Linkedin</a></li>
                    <li><a href="https://github.com/anoyola17">Github</a></li>
                </ul>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>&copy; 2025 RaceRev Motorsport | All rights reserved</p>
        </div>
    </footer>
  );
}

export default Footer;