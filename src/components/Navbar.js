import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="sticky-nav">
            <div className="items-buttons">
                <Link className="nav-buttons" to="/">Home</Link>
                <Link className="nav-buttons" to="/services">Our Services</Link>
                <Link className="nav-buttons" to="/login">Login</Link>
                <Link className="nav-buttons" to="/signup">Sign Up</Link>
                <Link className="nav-buttons" to="/MyCart">My Cart</Link>
                <input type="text" className="nav-buttons search" placeholder="Search" />
            </div>
        </nav>
    );
};

export default Navbar;
