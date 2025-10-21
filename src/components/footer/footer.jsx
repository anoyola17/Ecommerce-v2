import React from "react";
import location from "/src/assets/location.png";
import mail from "/src/assets/mail.png";
import github from "/src/assets/github.png";
import linkedin from "/src/assets/linkedin.png";
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
                    <li><a href="/src/App.jsx">Home</a></li>
                    <li><a href="/src/pages/products-page.jsx">Product</a></li>
                    <li><a href="/src/pages/contact-page.jsx">Contact</a></li>
                </ul>
            </div> 
            <div className="footer-contact">
                <h2>CONTACT</h2>
                <ul>
                    <li><img className="flaticon-logo" src={location} alt="Icons Freepik" /> Charlotte, NC 28202,US</li>
                    <li><img className="flaticon-logo" src={mail} alt="Icons Freepik" /> Info@racerev-motorsport.org</li>
                    <li><img className="flaticon-logo" src={linkedin} alt="Icons Freepik" /><a href="https://www.linkedin.com/in/ananoyola/"> Linkedin</a></li>
                    <li><img className="flaticon-logo" src={github} alt="Icons Freepik" /><a href="https://github.com/anoyola17"> Github</a></li>
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