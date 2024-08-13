// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

function Home() {
  const navigate = useNavigate();

  const handleTravelPlanClick = () => {
    navigate('/destinations');
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        onClick={handleTravelPlanClick} // Add onClick handler here
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;