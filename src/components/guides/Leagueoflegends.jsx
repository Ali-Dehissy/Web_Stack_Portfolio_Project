import React from 'react';
import Navbar from '../Navbar';
import './Guides.css';

const Leagueoflegends = () => {
  return (
    <div className="guides-container">
            <Navbar />
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/tQbo2X2Qysc" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="custom-separator"></div>
            <div className="middle-image">
                <img src="/images/riotgames/lolguides1.png" alt="Try out every role to find the one you like the most" />
            </div>
            <div className="text-section">
                <h2 className='titleguides'>Try out every role to find the one you like the most</h2>
                <p className='text'>When you load into Summoner’s Rift for the first time, you’ll notice there are three different lanes: top, middle, and bottom, as well as a sprawling jungle which populates the space between them. Players will then take their chosen champion into the lane which, depending on the game mode they play, they themselves have picked, or the game has chosen for them.

Spread between the three lanes and jungle are LoL’s five roles. Each role offers a completely different way to experience the game, so trying each one out and getting a feel for how they impact the game is the best way to decide on where you want to set up shop long term.</p></div>
            <div className="additional-images">
                <div className="image-block">
                    <img src="/images/riotgames/lolguides2.png" alt="Learn a few different champions for your main role, and one or two for off-roles" />
                    <h3 className='titleguides'>Learn a few different champions for your main role, and one or two for off-roles</h3>
                    <p className='text'>There are three main modes for Summoner’s Rift: Normal Blind, Normal Draft, and LoL ranked which you won’t unlock until you hit level 30 and own 20 or more champions. When you first start queuing up for games, you’ll probably try a vast variety of champions once or twice, or simply stick to the first champion which initially jumps out at you.

As LoL’s Normal Draft and ranked queues operate a draft format, with each team getting five bans a piece, there is every chance that your favorite champion will get banned out – especially if it’s one of the best LoL champions. You may also find that your opponents keep picking champions which counter yours, making for a frustrating time in lane.

As such, it’s worth building a small but dedicated champion pool, with a focus on getting super comfortable with two or three champions in your preferred role. This way, you’ll always have an alternative in case the draft phase doesn’t look so hot, and will be able to play a losing matchup well enough even if you do end up being countered.</p></div>
                <div className="image-block">
                    <img src="/images/riotgames/lolguides3.png" alt="Take advantage of the practice tool" />
                    <h3 className='titleguides'>Take advantage of the practice tool</h3>
                    <p className='text'>League of Legends’ practice tool is an under-utilized space for a lot of players, with all sorts of uses. If you’re having a tough time learning to last-hit minions while under pressure from your opponent, then you can set up a game either with bots or completely devoid of other champions so you can focus on getting the fundamentals down.

If you want to practice champion combos or experiment with different item builds, then the practice tool also lets you spawn target dummies to whack away at. What’s more, you can give yourself infinite mana, and remove the cooldowns from your abilities so you have complete freedom to whittle away without being inconvenienced by running out of resources.

If you’ve decided to become a jungler, the practice tool will allow you to work on your clear times, helping you get through your camps with blistering pace, and out onto the rest of the map to help your teammates in a real game.

A final, though more intermediate example of how the practice tool can benefit you is that it allows you to master sneaky, pixel-perfect warding spots on the map. Although you shouldn’t worry about this too much when you’re starting out, certain bushes can be warded from the unlikeliest of locations… if you issue the command to place your ward in just the right spot.</p></div>                
            </div>
        </div>  
  )
}

export default Leagueoflegends