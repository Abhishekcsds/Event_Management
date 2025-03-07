import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/VenueDetails.css";

const VenueDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [popupMessage, setPopupMessage] = useState("");

  const packages = [
    {
      name: "Base Package",
      price: "₹1,00,000",
      features: ["Indoor Hall", "Basic Seating Arrangement", "Standard Lighting"],
      image: "/Photos/pari chowk.jpg",
    },
    {
      name: "Silver Package",
      price: "₹1,50,000",
      features: ["Outdoor & Indoor Venue", "Premium Decor", "Basic Sound System"],
      image: "/Photos/vsk garden.jpg",
    },
    {
      name: "Gold Package",
      price: "₹2,50,000",
      features: ["Luxury Banquet Hall", "Exclusive Theme Decor", "Stage & Advanced Sound System"],
      image: "/Photos/garden galeria.jpg",
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
    <div className="venue-details-container">
      <h1>Choose Your Venue</h1>

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

export default VenueDetails;
