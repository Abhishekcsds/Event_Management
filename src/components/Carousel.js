import React from "react";
import "../styles/Carousel.css";

const Carousel = () => (
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/Photos/ff page.jpg" className="d-block w-100" alt="Slide 1" />
      </div>
     
    </div>
  </div>
);

export default Carousel;


