import React, { useState, useEffect } from 'react';


const images = [
  '/images/banners/apexlegends.png',
  '/images/banners/counterstrike2.png',
  '/images/banners/fortnite.png',
  '/images/banners/leagueoflegends.png',
  '/images/banners/overwatch2.png',
  '/images/banners/rainbowsixsiege.png',
  '/images/banners/rocketleague.png',
  '/images/banners/valorant.png',
  '/images/banners/callofdutywarzone.png'
];

const Banners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <h1 className="banner-title">COMPETE INTO YOUR FAVORITE GAMES</h1> {}
      <div className="banner-images">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner ${index}`}
            className={`banner-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banners;
