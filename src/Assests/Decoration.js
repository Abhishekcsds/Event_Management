import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Decoration.css";

const Decoration = () => {
  const navigate = useNavigate(); // Hook for navigation

  const decorationOptions = [
    {
      id: 1,
      name: "Royal Theme",
      location: "Mumbai",
      price: "₹80,000",
      image: "/Photos/deco1.jpg",
    },
    {
      id: 2,
      name: "Floral Fantasy",
      location: "Delhi",
      price: "₹60,000",
      image: "/Photos/deco2.png",
    },
    {
      id: 3,
      name: "Rustic Chic",
      location: "Bangalore",
      price: "₹50,000",
      image: "/Photos/deco4.jpg",
    },
  ];

  return (
    <div className="decoration-container">
      <h1 className="decoration-title">Choose Your Decoration</h1>
      <div className="decoration-grid">
        {decorationOptions.map((decoration) => (
          <div
            className="decoration-card"
            key={decoration.id}
            onClick={() =>
              navigate(`/decoration/${decoration.id}`, { state: decoration })
            } // Navigate to decoration details
          >
            <img
              src={decoration.image}
              alt={decoration.name}
              className="decoration-image"
            />
            <h3>{decoration.name}</h3>
            <p>{decoration.location}</p>
            <p>Price: {decoration.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Decoration;
