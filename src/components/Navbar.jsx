import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/profile', { withCredentials: true })
      .then((response) => {
        setIsAuthenticated(true);
        setUsername(response.data.name);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });
      setIsAuthenticated(false);
      setUsername('');
      console.log('Logging out, redirecting to home...');
      navigate('/');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className='navbar'>
      <Link to='/'>
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </Link>

      <div className='navbar-links'>
      <Link to="/worldwide-tournaments" className='nav-item'>
          <p>Worldwide Tournaments</p>
        </Link>
        <Link to="/tournaments" className='nav-item'>
          <p>Create a Tournament</p>
        </Link>

        <Link to="/guideslist" className='nav-item'>
          <p>Guides</p>
        </Link>
        
        <Link to="/forum" className='nav-item'>
          <p>Forum</p>
        </Link>
        
        <Link to="/purchase" className='nav-item'>
          <p>Purchase</p>
        </Link>
        
        <Link to="/contact" className='nav-item'>
          <p>Contact</p>
        </Link>
      </div>

      <div className="auth-buttons">
        {isAuthenticated ? (
          <div className='auth-button'>
            <Link to="/profile" className='btn username'>{username}</Link>
            <button className='btn logout-btn' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" className='auth-button'>
              <button className='btn login-btn'>Login</button>
            </Link>
            <Link to="/signup" className='auth-button'>
              <button className='btn signup-btn'>Signup</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
