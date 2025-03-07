import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Import Cart Context
import "../styles/MyCart.css"; // Import Cart Styles

const MyCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Access cart data

  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <button onClick={() => removeFromCart(item.name)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
