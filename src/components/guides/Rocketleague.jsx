import React from 'react';
import Navbar from '../Navbar';
import './Guides.css';

const Rocketleague = () => {
  return (
    <div className="guides-container">
            <Navbar />
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/34Q7fbXAO6k" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="custom-separator"></div>
            <div className="middle-image">
                <img src="/images/rocketleague/rocketleagueguides1.png" alt="Boost managementv" />
            </div>
            <div className="text-section">
                <h2 className='titleguides  '>Boost management</h2>
                <p className='text'>An essential part of Rocket League is boosting. Only with a full boost tank can you perform spectacular aerials or make legendary saves. Take a look at where the boost pads are distributed on the field and optimise your routes so that you always drive over the boosts. The six large boost pads are located at the edge of the map and fill the tank to 100%. They respawn after 10 seconds.</p></div>
            <div className="additional-images">
                <div className="image-block">
                    <img src="/images/rocketleague/rocketleagueguides2.png" alt="Avoid ball chasing" />
                    <h3 className='titleguides'>Avoid ball chasing</h3>
                    <p className='text'>Most beginners in Rocket League tend to always chase the ball (ballchasing). Instead, you should focus on smart positioning. Ball chasing leads to chaotic and disorganised gameplay and puts unnecessary pressure on your defence. If you see that a teammate already has a good position for the ball, trust him and let him have contact with the ball This creates a smoother flow of play and allows you to focus on your own positioning for possible passes or rebounds.
                    Avoiding ball chasing requires a lot of patience and discipline. Recognising the moments when it makes sense to chase the ball requires a lot of experience. Basically, if a teammate is already on the way to the ball, it is better to get into a strategic position to be able to react quickly.</p></div>
                <div className="image-block">
                    <img src="/images/rocketleague/rocketleagueguides3.png" alt="Team & Communication" />
                    <h3 className='titleguides'>Team & Communication</h3>
                    <p className='text'>Of course, it's best if you have other Rocket League fans in your circle of friends with whom you play the games and you can improve together. Especially the possibility to use the voice chat offers a huge advantage here. But you can also coordinate well with random teammates via the quickchat function. A simple "I got it" or "Defending..." can work wonders here. Make sure you fill your Quickchat buttons in the menu with the most important information.</p></div>                
            </div>
        </div>  
  )
}

export default Rocketleague