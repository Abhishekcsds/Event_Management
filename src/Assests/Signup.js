import React from "react";
import "../styles/Signup.css";

const Signup = () => (
  <div className="auth-container">
    <h2>Sign Up</h2>
    <input type="text" placeholder="Full Name" className="auth-input" />
    <input type="email" placeholder="Email" className="auth-input" />
    <input type="password" placeholder="Password" className="auth-input" />
    <button className="auth-button">Sign Up</button>
  </div>
);

export default Signup;
