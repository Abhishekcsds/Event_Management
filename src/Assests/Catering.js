import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Catering.css";

const Catering = () => {
  const navigate = useNavigate();
  const caterings = [
    { name: "Royal Feast", location: "Mumbai", image: "/Photos/food3.jpg" },
    { name: "Deluxe Dining", location: "Delhi", image: "/Photos/food2.jpg" },
  ];

  return (
    <div className="catering-container">
      <h1 className="catering-title">Choose Your Catering Service</h1>
      <div className="catering-grid">
        {caterings.map((catering, index) => (
          <div key={index} className="catering-card" onClick={() => navigate(`/catering/${index}`)}>
            <img src={catering.image} alt={catering.name} className="catering-image" />
            <h3>{catering.name}</h3>
            <p>{catering.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catering;

