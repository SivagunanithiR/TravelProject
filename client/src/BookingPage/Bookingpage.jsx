import React, { useState } from "react";
import "./BookingPage.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    travelDestination: '',
    departureDate: '',
    returnDate: '',
    numberOfTravelers: '',
    travelClass: '',
    specialRequests: '',
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data submitted: ", formData);
    // Here, you would typically handle the data submission, like sending it to a server.
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Travel</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <h3>Personal Information</h3>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Travel Information</h3>
        <div className="form-group">
          <label htmlFor="travelDestination">Travel Destination</label>
          <input
            type="text"
            id="travelDestination"
            name="travelDestination"
            value={formData.travelDestination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfTravelers">Number of Travelers</label>
          <input
            type="number"
            id="numberOfTravelers"
            name="numberOfTravelers"
            value={formData.numberOfTravelers}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="travelClass">Travel Class</label>
          <select
            id="travelClass"
            name="travelClass"
            value={formData.travelClass}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select class
            </option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
          ></textarea>
        </div>

        <h3>Payment Information</h3>
        <div className="form-group">
          <label htmlFor="cardHolderName">Cardholder's Name</label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="month"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
