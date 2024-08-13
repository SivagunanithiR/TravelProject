import React, { useState, useRef } from 'react';
import './Forget.css';
import { FaUser } from "react-icons/fa";
import Swal from 'sweetalert2';

const Forget = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the user data from the API
      const response = await fetch('http://localhost:3000/user');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const users = await response.json();
      const user = users.find(user => user.mail === email);

      if (!user) {
        setError('Email not found');
        return;
      }

      // Generate a 6-digit OTP
      const randomNumber = Math.floor(100000 + Math.random() * 900000);

      // Prepare the form data to send via Web3Forms
      const formData = new FormData();
      formData.append("access_key", "564df266-6e69-4c35-8007-e33148581011"); // Replace with your access key
      formData.append("subject", "Your OTP for Password Reset");
      formData.append("from_name", "Your App Name");
      formData.append("from_email", "no-reply@yourapp.com");
      formData.append("reply_to", email);
      formData.append("email", email);
      formData.append("message", `Hello ${username}, your OTP for password reset is ${randomNumber}.`);

      // Send the OTP to the user's email
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "OTP sent successfully to your email!",
          icon: "success"
        });

        // Here you could also save the OTP to your backend for verification later
        // For example:
        // await fetch('http://localhost:3000/user', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ mail: email, otp: randomNumber }),
        // });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send OTP. Please try again.",
          icon: "error"
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred while processing your request.');
    }
  };

  return (
    <div className='Full'>
      <div className='wrapper'>
        <form ref={formRef} onSubmit={handleSubmit} autoComplete="on">
          <h1>Forget Password</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className='icon' />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="button-group">
            <button type="submit">
              Get OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
