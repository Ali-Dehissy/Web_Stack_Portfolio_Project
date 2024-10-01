import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from './Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: formData.email,
        password: formData.password
      }, { withCredentials: true });

      if (response.status === 200) {
        setSuccess('Login successful');
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='background'>
        <div className="login-container">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>} {/* Ensure success is only related to login */}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>

          <p className="signup-redirect">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
