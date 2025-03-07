import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/CateringDetails.css";

const CateringDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [popupMessage, setPopupMessage] = useState(""); // State for pop-up message

  const packages = [
    { name: "Base Package", price: "₹20,000", features: ["Basic Buffet", "Limited Drinks"], image: "/Photos/food.jpg" },
    { name: "Silver Package", price: "₹40,000", features: ["Deluxe Buffet", "Welcome Drinks"], image: "/Photos/food2.jpg" },
    { name: "Gold Package", price: "₹70,000", features: ["Luxury Buffet", "Live Counters", "Custom Desserts"], image: "/Photos/food3.jpg" },
  ];

  // Function to show pop-up message when adding to cart
  const handleAddToCart = (pkg) => {
    addToCart(pkg); // Add to cart
    setPopupMessage(`${pkg.name} added to cart!`); // Show message

    // Hide the message after 3 seconds
    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  };

  return (
    <div className="catering-details-container">
      <h1>Catering Packages</h1>

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

export default CateringDetails;
