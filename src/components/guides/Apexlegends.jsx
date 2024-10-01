import React from 'react';
import Navbar from '../Navbar';
import './Guides.css';

const Apexlegends = () => {
    return (
        <div className="guides-container">
            <Navbar />
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/MWSRp4gAp6o" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="custom-separator"></div>
            <div className="middle-image">
                <img src="/images/ea/apexguides1.png" alt="Apex Legends" />
            </div>
            <div className="text-section">
                <h2 className='titleguides'>What is Apex Legends</h2>
                <p className='text'>
                    Apex Legends is a free-to-play first-person shooter with Battle Royale as the main game mode – players in squads of two or three select a character with pre-set abilities, referred to as a Legend, and battle against other players to be the last squad standing. It’s a really beginner-friendly game as it doesn’t require any preparation for it, but basic mechanics might seem hard to learn for the first time, and this guide is created to help you with this task.
                </p>
            </div>
            <div className="additional-images">
                <div className="image-block">
                    <img src="/images/ea/apexguides2.png" alt="First steps in Apex Legends" />
                    <h3 className='titleguides'>First steps in Apex Legends</h3>
                    <p className='text'>
                        So, you saw this game and liked it, but have no idea how to play it? Best way to learn a new game is by playing it, but these five steps will help you to settle in much faster even if you are running the game for the first time:
                    </p>
                    <ul className='text'>
                        <li>Click on the “Legends” tab and check out the legends you obtain. Read about their abilities and choose the one you like the most.</li>
                        <li>As the match starts, listen to your teammates and stick with them. Good team coordination is key to victory!</li>
                        <li>Pick up the weapons and throwables you prefer. You can read about the best weapons for beginners below.</li>
                        <li>Use your abilities. For example, the scanning ability of Bloodhound can detect enemies hiding nearby!</li>
                        <li>Use our gameplay tips and tricks to keep up with your teammates and push your enemies effectively.</li>
                    </ul>
                </div>
                <div className="image-block">
                    <img src="/images/ea/apexguides3.png" alt="Apex Legends basic mechanics" />
                    <h3 className='titleguides'>Apex Legends basic mechanics</h3>
                    <p className='text'>
                        There are lots of mechanics in this game, but these are the essential ones you need to know as a beginner:
                        <br />
                        After you get knocked out, your banner will be available for your teammates to pick up and revive you at a respawn beacon.
                        <br />
                        New characters cost 12000 Legend tokens, which you gain while leveling up (600 LT per level).
                        <br />
                        Besides the health bar, each player has an armor bar. Use consumables like shield cells, syringes, or med kits to restore it.
                        <br />
                        All attachments and gear have different rarity levels, with each level offering better attributes. Here's the rarity hierarchy:
                    </p>
                    <p>
                        ⇒Level 1 is Common; ⇒Level 2 is Rare; ⇒Level 3 is Epic; ⇒Level 4 is Legendary; ⇒Level 5 is Mythic
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Apexlegends;
