import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaHome } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-title">
                <h2>Shaadi Sajao Events</h2>
                <p>We are a team of professionals passionate about creative and grand events.</p>
                <div className="title-icons">
                    <FaInstagram /> <FaFacebook /> <FaLinkedin />
                </div>
            </div>
            <div className="footer-title">
                <h3>Services We Offer</h3>
                <ul>
                    <li>Wedding Events</li>
                    <li>Corporate Events</li>
                    <li>Social Events</li>
                </ul>
            </div>
            <div className="footer-title">
                <h3>Reach us</h3>
                <p>
                    <FaHome /> India: 5th Floor Sunteck Centre, Mumbai - 400057 <br />
                    <FaPhone /> 8382802806 <br />
                    <FaEnvelope /> abhi2205@gmail.com
                </p>
            </div>
        </footer>
    );
};

export default Footer;
