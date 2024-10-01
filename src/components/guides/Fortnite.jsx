import React from 'react';
import Navbar from '../Navbar';
import './Guides.css';

const Fortnite = () => {
  return (
    <div className="guides-container">
            <Navbar />
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/Psp0UL3PZcw" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="custom-separator"></div>
            <div className="middle-image">
                <img src="/images/epicgames/fortniteguides1.png" alt="v" />
            </div>
            <div className="text-section">
                <h2 className='titleguides  '>Wait as long as possible to drop from the Battle Bus</h2>
                <p className='text'>e Battle Bus’ horn will honk as soon as you’re able to drop from it onto the map below, but resist the urge to join the crowd of players who leap from it asap. Instead wait until there’s about 3 seconds to go before the Battle Bus reaches the end of its flight path, then leap out. You’ll have little to no players to compete with for landing spots, which means there’s a smaller chance of getting gunned in the face in your first two minutes of the match and less competition for loot. Aim towards a house or structure when you’re gliding as there’s a high chance of a chest being inside it, or at the very least some basic loot. Just hit the roof with your pickaxe to get in. Speaking of the glider...</p></div>
            <div className="additional-images">
                <div className="image-block">
                    <img src="/images/epicgames/fortniteguides2.png" alt="Build cover before you heal" />
                    <h3 className='titleguides'>Build cover before you heal</h3>
                    <p className='text'>While I’m on the subject of building, always, always, always build walls around you before you start to heal. Both healing and drinking shield potions take valuable seconds to consume (up to 10 seconds for a large healing kit), during which time you can’t move around, shoot, or do anything really except for twirl the camera. Which means you’re very vulnerable indeed, so those walls will stop any bullets connecting with your face. Walls can also clip into cliffs and hills, so there’s no need to find an empty bit of land.</p></div>
                <div className="image-block">
                    <img src="/images/epicgames/fortniteguides3.png" alt="Learning To Move Better" />
                    <h3 className='titleguides'>Always try to get the upper ground in a fight</h3>
                    <p className='text'>When things start to get sticky and you find yourself in a gunfight with one of the 100 people running around the map, you want to be as high as possible. No, not in that way. Make sure you are above your opponent either by building ramps up into the sky, or by jumping repeatedly (which has the added bonus of making you harder to hit). A good strategy is to build four walls around yourself in a square, then build a ramp up to the wall facing your enemy. This’ll provide you with a good sniping platform that you can retreat down when you’re reloading. Just repeat the building formula upwards (jump to build below your feet) until you’re in a makeshift tower and have the upper hand – and gun, and grenade, and so forth...</p></div>                
            </div>
        </div>  
  )
}

export default Fortnite