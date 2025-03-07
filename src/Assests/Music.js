import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Music.css";

const Music = () => {
  const navigate = useNavigate(); // Hook for navigation

  const musicOptions = [
    {
      id: 1,
      name: "DJ Beats",
      location: "Mumbai",
      price: "₹25,000",
      image: "/Photos/musical.jpg",
    },
    {
      id: 2,
      name: "Live Band",
      location: "Delhi",
      price: "₹50,000",
      image: "/Photos/games.png",
    },
    {
      id: 3,
      name: "Classical Ensemble",
      location: "Bangalore",
      price: "₹40,000",
      image: "/Photos/dance.jpg",
    },
  ];

  return (
    <div className="music-container">
      <h1 className="music-title">Choose Your Music</h1>
      <div className="music-grid">
        {musicOptions.map((music) => (
          <div
            className="music-card"
            key={music.id}
            onClick={() => navigate(`/music/${music.id}`, { state: music })} // Navigate to music details
          >
            <img src={music.image} alt={music.name} className="music-image" />
            <h3>{music.name}</h3>
            <p>{music.location}</p>
            <p>Price: {music.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
