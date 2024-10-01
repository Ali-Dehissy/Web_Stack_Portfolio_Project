import React from 'react';
import Navbar from './Navbar';

const images = [
    { src: require('../images/apexlegends.png'), link: '/guides/apexlegends' },
    { src: require('../images/warzone.png'), link: '/guides/call-of-duty-warzone' },
    { src: require('../images/counterstrike2.png'), link: '/guides/counter-strike-2' },
    { src: require('../images/fortnite.png'), link: '/guides/fortnite' },
    { src: require('../images/leagueoflegends.png'), link: '/guides/league-of-legends' },
    { src: require('../images/overwatch2.png'), link: '/guides/overwatch-2' },
    { src: require('../images/rainbowsixsiege.png'), link: '/guides/rainbow-six-siege' },
    { src: require('../images/rocketleague.png'), link: '/guides/rocket-league' },
    { src: require('../images/valorant.png'), link: '/guides/valorant' },
];

const Guideslist = () => {
    return (
        <div>
            <Navbar />
            <div className="guides-list">
                {images.map((image, index) => (
                    <a key={index} href={image.link} className="guide-item">
                        <div className="overlay-container">
                            <img src={image.src} alt="" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Guideslist;
