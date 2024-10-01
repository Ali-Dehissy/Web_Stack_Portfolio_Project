import React from 'react';
import { Link } from 'react-router-dom';

const Featuring = () => {
  return (
    <div className="title-section">
      <h1 className="title">Featuring</h1>
      <div className="image-gallery">
        <Link to='/activision'>
          <img src="/images/activision/activisionlogo.png" className="gallery-image" alt="Activision" />
        </Link>
        <Link to='/ea'>
          <img src="/images/ea/ealogo.png" className="gallery-image" alt="EA" />
        </Link>
        <Link to='/valve'>
          <img src="/images/valve/valvelogo.png" className="gallery-image" alt="Valve" />
        </Link>
        <Link to='/riot'>
          <img src="/images/riotgames/riotlogo.png" className="gallery-image" alt="Riot Games" />
        </Link>
        <Link to='/epicgames'>
          <img src="/images/epicgames/epicgameslogo.png" className="gallery-image" alt="Epic Games" />
        </Link>
      </div>
    </div>
  );
};

export default Featuring;