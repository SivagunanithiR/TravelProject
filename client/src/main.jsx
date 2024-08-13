import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Destinations from './DestinationPage/Destinations';
import Register from './RegisterPage/Register'
import FeedbackForm from './FeedbackForm/FeedbackForm'
import FitnessHomePage from './FitnessHomePage/FitnessHomePage'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './LoginPage/Login';
import BookingPage from './BookingPage/Bookingpage';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="699508312796-v89ilvoarp0m3ncc2ljf97gne5iig6cr.apps.googleusercontent.com">
   <App/>
 </GoogleOAuthProvider>
  </BrowserRouter>
);