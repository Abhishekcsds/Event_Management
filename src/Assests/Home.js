import React, { useState } from "react";
import { Carousel } from "react-bootstrap"; // Import Bootstrap Carousel
import "../styles/Home.css";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How important is decor for a wedding?",
      answer:
        "The decor greatly influences a wedding's mood, ambience, and overall aesthetic. It helps create a visually appealing and coherent setting that enhances the experience for both the couple and the guests.",
    },
    {
      question: "What is the purpose of decorations?",
      answer:
        "Decorations create an atmosphere that matches the theme of the event, making it more memorable and enjoyable for attendees.",
    },
    {
      question: "What is the main goal of a wedding planner?",
      answer:
        "A wedding planner ensures that all aspects of the wedding run smoothly, from venue selection to decor, catering, and coordination on the big day.",
    },
    {
      question: "How long does it take to set up wedding decor?",
      answer:
        "Depending on the complexity, setting up wedding decor can take anywhere from a few hours to a full day.",
    },
    {
      question: "How do I choose a wedding decorator?",
      answer:
        "Look for experience, reviews, portfolio, and their ability to understand your vision and budget.",
    },
    {
      question: "When should you plan wedding decor?",
      answer:
        "Start planning at least 6-8 months in advance to ensure availability and proper execution.",
    },
    {
      question: "How much does wedding decor cost in India?",
      answer:
        "Wedding decor costs in India vary widely, ranging from ₹50,000 to ₹10,00,000 depending on the venue, theme, and customizations.",
    },
    {
      question: "Why is good decor important?",
      answer:
        "Good decor sets the tone, enhances the ambience, and creates lasting impressions for both the couple and guests.",
    },
    {
      question: "Are wedding decorations expensive?",
      answer:
        "It depends on the style and scale of the event. Simple decorations are budget-friendly, while luxury themes can be costly.",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section - Carousel */}
      <section className="hero">
        <Carousel interval={3000} pause={false}>
          <Carousel.Item>
            <img src="/Photos/sspage.jpg" className="carousel-image" alt="Event 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/Photos/ttpage.jpg" className="carousel-image" alt="Event 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/Photos/ff page.jpg" className="carousel-image" alt="Event 3" />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>At ✨ Shaadi Sajao Events ✨, we specialize in crafting unforgettable events tailored to your unique vision. From luxury weddings to grand celebrations, we bring creativity, expertise, and meticulous attention to detail to every occasion.

        Our journey began with a passion for creating magical experiences, and today, we stand as a team of dedicated professionals who transform dreams into reality. Whether it's venue selection, stunning decor, entertainment, catering, or seamless coordination, we ensure every aspect of your event is executed flawlessly.</p>

        <h2>Why Choose Us?</h2>
        <p>✨ Expertise & Experience – With years of experience in event planning, we understand what it takes to make your special day extraordinary.
        🎭 Comprehensive Services – From venues and catering to music, dance, and decoration, we provide a one-stop solution for all event needs.
       💡 Personalized Approach – Every event is unique, and we customize every detail to match your style and preferences.
       ⭐ Seamless Execution – Our team ensures smooth planning and hassle-free execution, so you can enjoy your event stress-free.

       At 💍 Shaadi Sajao Events 💍, we don’t just plan events—we create cherished memories that last a lifetime. Whether it's a wedding, birthday, or any grand celebration, let us bring your vision to life!

📍 Plan your perfect event with us today! 🚀</p>
      </section>

      {/* Showcase Section */}
      <Showcase />

      {/* FAQs Section */}
      <section className="faqs">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question" 
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                {faq.question} <span className="faq-arrow">↓</span>
              </button>
              {openFAQ === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>"Absolutely wonderful experience! Everything was managed professionally."</blockquote>
        <cite>- Abhishek</cite>
      </section>

      {/* {footer of home page} */}
      <Footer/>
    </div>
  );
};

export default Home;

