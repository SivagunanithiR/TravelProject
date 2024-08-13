import React, { useState } from 'react';
import './Register.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const userData = {
        name: username,
        mail: email,
        password: password
      };

      fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('User registered successfully:', data);
          navigate('/login'); // Redirect to login page after successful registration
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      alert('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className='Full'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit} autoComplete="on">
          <h1>Sign-Up</h1>
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
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icon' />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FaLock className='icon' />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <button type="submit">
            Sign Up
          </button>
          <div className="register-link">
            {/* Additional links or content can go here */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
