import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

const Services = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const services = [
    {
      title: "Venue",
      description: "Find the perfect venue for your event.",
      image: "/Photos/vlogo.jpg",  // Ensure this image exists in public/Images
      path: "/services/venue", // ✅ Must match the Route path in App.js
    },
    {
      title: "Catering",
      description: "Delicious food and beverages for all types of events.",
      image: "/Photos/Catlogo.jpg",
      path: "/services/catering",
    },

    {
        title: "Decoration",
        description: "Transform your venue with beautiful themes and decorations.",
        image: "/Photos/Dlogo.jpg",
        path: "/services/decoration",
      },
      {
        title: "Music & Entertainment",
        description: "Make your event lively with our best music and entertainment services.",
        image: "/Photos/Mlogo.jpg",
        path: "/services/music",
      },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            onClick={() => navigate(service.path)} // ✅ Navigates to the correct path
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
