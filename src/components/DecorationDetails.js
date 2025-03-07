import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/DecorationDetails.css";

const DecorationDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [popupMessage, setPopupMessage] = useState("");

  const packages = [
    {
      name: "Basic Package",
      price: "₹15,000",
      features: ["Simple Floral Arrangement", "Basic Stage Decor", "Standard Lighting"],
      image: "/Photos/deco.jpg",
    },
    {
      name: "Silver Package",
      price: "₹30,000",
      features: ["Theme-Based Decor", "Premium Floral Arrangements", "Elegant Table Centerpieces"],
      image: "/Photos/deco1.jpg",
    },
    {
      name: "Gold Package",
      price: "₹50,000",
      features: ["Luxury Theme Setup", "Grand Stage Decoration", "Custom Lighting Effects"],
      image: "/Photos/deco4.jpg",
    },
  ];

  // Function to show pop-up message when adding to cart
  const handleAddToCart = (pkg) => {
    addToCart(pkg);
    setPopupMessage(`${pkg.name} added to cart!`);

    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  };

  return (
    <div className="decoration-details-container">
      <h1>Choose Your Decoration Package</h1>

      {/* Pop-up message */}
      {popupMessage && <div className="popup-message">{popupMessage}</div>}

      <div className="package-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <img src={pkg.image} alt={pkg.name} className="package-image" />
            <h3>{pkg.name}</h3>
            <p>Price: {pkg.price}</p>
            <ul>
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => handleAddToCart(pkg)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecorationDetails;
