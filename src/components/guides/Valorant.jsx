import React from 'react';
import Navbar from '../Navbar';
import './Guides.css';

const Valorant = () => {
    return (
        <div className="guides-container">
            <Navbar />
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/S-rxwnC7ygg" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="custom-separator"></div>
            <div className="middle-image">
                <img src="/images/riotgames/valorantguides1.png" alt="AGENTS" />
            </div>
            <div className="text-section">
                <h2 className='titleguides'>AGENTS</h2>
                <p className='text'>
                    Before you enter your first round, you’ll enter Agent Select. Here you’ll pick from a group of 24 Agents currently, all divided into four different roles based on their functionality. You'll notice that you won't have all the Agents unlocked with a new account. But the more you play, the faster you'll be able to unlock them!
                    Each Agent has their own unique set of skills designed to work alongside each other toward a win. While it’s not mandatory to have each role in your team of five, you’ll discover that you have a higher chance of winning when your team has a more diverse Agent pool where each player has a specific duty. For example, it’ll be easier to get onto a site if you have a Controller who can smoke the sight lines enemies might be watching!
                </p>
            </div>
            <div className="additional-images">
                <div className="image-block">
                    <img src="/images/riotgames/valorantguides2.png" alt="ROUNDS & ECONOMY" />
                    <h3 className='titleguides'>ROUNDS & ECONOMY</h3>
                    <p className='text'>
                        After everyone selects their Agent, you’ll jump into a random map and formally enter the first round.
                        You’ll start a round as either an attacker or defender and switch sides after 12 rounds. Before each round officially starts, you’ll have a period of time where you can buy items and skills to prepare for the round. Your Agent and playstyle should influence what you want to buy based on the amount of credits you have. Do you want to purchase a skill that heals your team or do you want a stronger weapon to defeat your enemies?
                    </p>
                </div>
                <div className="image-block">
                    <img src="/images/riotgames/valorantguides3.png" alt="WEAPONS" />
                    <h3 className='titleguides'>WEAPONS</h3>
                    <p className='text'>
                        In VALORANT, there’s a gun for every situation. When in doubt, try buying based on a weapon’s type and see how it fits your style, expertise, and your team’s strategy. Since you won’t always be able to afford the weapon you want, experiment with different ones to figure out which ones you like the most so you can be ready for every situation.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Valorant;
