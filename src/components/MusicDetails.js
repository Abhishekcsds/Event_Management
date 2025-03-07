import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/MusicDetails.css";

const MusicDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [popupMessage, setPopupMessage] = useState("");

  const packages = [
    {
      name: "Basic Package",
      price: "₹25,000",
      features: ["DJ Setup", "Basic Sound System", "Standard Playlist"],
      image: "/Photos/dance.jpg",
    },
    {
      name: "Silver Package",
      price: "₹50,000",
      features: ["Live Band", "Advanced Sound System", "Custom Playlist"],
      image: "/Photos/musical.jpg",
    },
    {
      name: "Gold Package",
      price: "₹1,00,000",
      features: ["Celebrity Performer", "Concert-level Setup", "Exclusive Experience"],
      image: "/Photos/games.png",
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
    <div className="music-details-container">
      <h1>Choose Your Music Package</h1>

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

export default MusicDetails;
