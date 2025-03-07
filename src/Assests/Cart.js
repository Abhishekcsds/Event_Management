import React from "react";
import "../styles/Cart.css";

const Cart = () => (
  <div className="cart-container">
    <h2>My Cart</h2>
    <p>Your selected event services will appear here.</p>
    <button className="checkout-button">Proceed to Checkout</button>
  </div>
);

export default Cart;
