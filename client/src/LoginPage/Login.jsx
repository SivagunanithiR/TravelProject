import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log('Google login successful:', credentialResponse);
    // Handle the response, e.g., send the token to the backend for verification
  };

  const handleGoogleLoginFailure = () => {
    console.log('Google login failed');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/user');
      const users = response.data;

      const user = users.find(user => user.mail === email && user.password === password);

      if (user) {
        console.log('Login successful:', user);
        navigate('/'); // Redirect to Home component after successful login
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during login');
    }
  };

  return (
    <GoogleOAuthProvider clientId="your-google-client-id">
      <div className='Full'>
        <div className='wrapper'>
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="input-box">
              <input 
                type="email" 
                placeholder='Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input 
                type="password" 
                placeholder='Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <FaLock className='icon' />
            </div>

            <div className="remember-forget">
              <label><input type="checkbox" /> Remember me</label>
              <a onClick={() => navigate('/forget')} style={{cursor: 'pointer'}}>Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="social-login">
              <p>Or login with:</p>
              <div className="google-button">
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={handleGoogleLoginFailure}
                />
              </div>
            </div>

            <div className="register-link">
              <p>Don't have an account? <a onClick={() => navigate('/register')} style={{cursor: 'pointer'}}>Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
