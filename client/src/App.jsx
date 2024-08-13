import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import FitnessHomePage  from './FitnessHomePage/FitnessHomePage';
import './index.css';
import Navbar from './Components/Navbar';
import Destinations from './DestinationPage/Destinations';
import  Register from './RegisterPage/Register';
import Login from './LoginPage/Login';
import Forget from './Forget/Forget';
import FeedbackForm from './FeedbackForm/FeedbackForm';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fitness-home" element={<FitnessHomePage />} /> 
        <Route path="/destinations" element={<Destinations/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/forget" element={<Forget/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="feedback" element={<FeedbackForm/>}/>
      </Routes>
    </div>
  );
}