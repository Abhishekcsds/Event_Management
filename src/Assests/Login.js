import React from "react";
import "../styles/Login.css";

const Login = () => (
  <div className="auth-container">
    <h2>Login</h2>
    <input type="text" placeholder="Username" className="auth-input" />
    <input type="password" placeholder="Password" className="auth-input" />
    <button className="auth-button">Login</button>
  </div>
);

export default Login;
