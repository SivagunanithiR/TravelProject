import React, { useState } from "react";
import axios from "axios";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfJourney: '',
    travelledLocation: '',
    transportationRating: '',
    tourGuideRating: '',
    overallExperience: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/feedback', formData);

      if (res.status === 200 || res.status === 201) {
        console.log('Feedback saved successfully!');
      } else {
        console.error('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className='Full'>
      <div className="feedback-form-container">
        <h2>Travel Service Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
            <label htmlFor="dateOfJourney">Date of Journey</label>
            <input
              type="date"
              id="dateOfJourney"
              name="dateOfJourney"
              value={formData.dateOfJourney}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="travelledLocation">Travelled Location</label>
            <input
              type="text"
              id="travelledLocation"
              name="travelledLocation"
              value={formData.travelledLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="transportationRating">Transportation Rating</label>
            <select
              id="transportationRating"
              name="transportationRating"
              value={formData.transportationRating}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select rating
              </option>
              <option value="1">1 - Very Bad</option>
              <option value="2">2 - Bad</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="tourGuideRating">Tour Guide Rating</label>
            <select
              id="tourGuideRating"
              name="tourGuideRating"
              value={formData.tourGuideRating}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select rating
              </option>
              <option value="1">1 - Very Bad</option>
              <option value="2">2 - Bad</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="overallExperience">Overall Experience</label>
            <select
              id="overallExperience"
              name="overallExperience"
              value={formData.overallExperience}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select rating
              </option>
              <option value="1">1 - Very Bad</option>
              <option value="2">2 - Bad</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Additional Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
