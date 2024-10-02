import React from 'react';
import Navbar from './Navbar';
import Banner from './Banners';
import GamesNews from './GamesNews';
import Homevideo from './Homevideo';
import UpcomingTournaments from './UpcomingTournaments';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Homevideo />
      <Banner />
      <UpcomingTournaments />
      <GamesNews />
    </div>
  );
}

export default Home;
