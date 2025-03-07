import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ServiceDetail.css";

const serviceDetails = {
  venue: {
    title: "Venue Selection",
    description: "We provide the best venues for all types of events, from weddings to corporate functions.",
    features: ["Banquet Halls", "Outdoor Gardens", "Beach Resorts", "Luxury Hotels"],
    image: "/Images/venue.jpg",
  },
  catering: {
    title: "Catering Services",
    description: "Delicious and high-quality food options tailored to your event needs.",
    features: ["Multi-Cuisine Menu", "Live Counters", "Customized Menus", "Dessert Stations"],
    image: "/Images/catering.jpg",
  },
  music: {
    title: "Music & Entertainment",
    description: "We offer a variety of entertainment options to keep your guests engaged.",
    features: ["Live Bands", "DJ Services", "Dance Performances", "Sound & Light Show"],
    image: "/Images/music.jpg",
  },
  decoration: {
    title: "Event Decoration",
    description: "Transform your event with stunning decorations and unique themes.",
    features: ["Theme-Based Decor", "Floral Arrangements", "Stage Setup", "Lighting Effects"],
    image: "/Images/decoration.jpg",
  },
  booking: {
    title: "Booking & Management",
    description: "Easily manage all your event bookings in one place with our service.",
    features: ["Venue Booking", "Service Coordination", "Guest Management", "Online Invitations"],
    image: "/Images/booking.jpg",
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div className="service-detail-container">
      <h1 className="service-detail-title">{service.title}</h1>
      <img src={service.image} alt={service.title} className="service-detail-image" />
      <p className="service-detail-description">{service.description}</p>
      <h3>Features:</h3>
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetail;
