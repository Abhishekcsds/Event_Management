import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Home from "./Assests/Home";
import Services from "./Assests/Services";
import Login from "./Assests/Login";
import Signup from "./Assests/Signup";
import Cart from "./Assests/Cart";
import Venue from "./Assests/Venue";
import Catering from "./Assests/Catering";
import Music from "./Assests/Music";
import Decoration from "./Assests/Decoration";
import VenueDetails from "./components/VenueDetails"; 
import CateringDetails from "./components/CateringDetails";
import DecorationDetails from "./components/DecorationDetails";
import MusicDetails from "./components/MusicDetails";
import MyCart from "./Assests/MyCart";
import MyComponent from "./MyComponent"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <h1>Welcome to My App</h1> {/* Keep outside Routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />

        {/* Services Routes */}
        <Route path="/services/venue" element={<Venue />} />
        <Route path="/services/catering" element={<Catering />} />
        <Route path="/services/music" element={<Music />} />
        <Route path="/services/decoration" element={<Decoration />} />

        {/* Details Pages */}
        <Route path="/venue/:id" element={<VenueDetails />} />
        <Route path="/catering/:id" element={<CateringDetails />} />
        <Route path="/decoration/:id" element={<DecorationDetails />} />
        <Route path="/music/:id" element={<MusicDetails />} />

        {/* Cart */}
        <Route path="/mycart" element={<MyCart />} />

        {/* Backend Data Test */}
        <Route path="/backend" element={<MyComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
