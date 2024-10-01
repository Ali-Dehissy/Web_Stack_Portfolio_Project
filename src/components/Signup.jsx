import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.css';
import Navbar from './Navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '' // Added DOB field
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', formData);
      setSuccess(response.data.message);
      setError('');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "Something went wrong");
      } else if (err.request) {
        setError("No response from the server. Please try again later.");
      } else {
        setError("An unexpected error occurred");
      }
      setSuccess('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='background'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob" // Added dob input field
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-redirect">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;