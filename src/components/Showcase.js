import React from "react";
import "../styles/Showcase.css"; // Ensure you create this CSS file

const Showcase = () => {
  const images = [
    "/Photos/SC1.jpg",
    "/Photos/sc2.jpg",
    "/Photos/sc3.jpg",
    "/Photos/sc4.jpg",
    "/Photos/sc5.jpg",
    
  ];

  return (
    <div className="showcase-container">
      <h1 className="showcase-title">SHOWCASE</h1>

      {/* Image Gallery Grid */}
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Showcase ${index + 1}`} className="gallery-image" />
        ))}
      </div>

      {/* Description Section */}
      <div className="showcase-description">
        <p>
          Luxury Weddings and Event Decorators: The process of arranging a wedding has several facets and includes a wide range of customs, 
          customers, planning, management, and implementation. It is an honor and joy for us to give you a platform where we can help you 
          completely with the planning of your dream wedding.
        </p>
      </div>
    </div>
  );
};

export default Showcase;
