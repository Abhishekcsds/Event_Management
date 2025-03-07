import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Venue.css";

const Venue = () => {
  const navigate = useNavigate(); // Hook for navigation

  const venues = [
    {
      id: 1,
      name: "Grand Palace",
      location: "Mumbai",
      
      image: "/Photos/pari chowk.jpg",
    },
    {
      id: 2,
      name: "Sunset Banquet",
      location: "Delhi",
      
      image: "/Photos/vsk garden.jpg",
    },
    {
      id: 3,
      name: "Royal Garden",
      location: "Bangalore",
     
      image: "/Photos/garden galeria.jpg",
    },
  ];

  return (
    <div className="venue-container">
      <h1 className="venue-title">Choose Your Venue</h1>
      <div className="venue-grid">
        {venues.map((venue) => (
          <div 
            className="venue-card" 
            key={venue.id}
            onClick={() => navigate(`/venue/${venue.id}`, { state: venue })} // Navigate to venue details
          >
            <img src={venue.image} alt={venue.name} className="venue-image" />
            <h3>{venue.name}</h3>
            <p>{venue.location}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venue;
