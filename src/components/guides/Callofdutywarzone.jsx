import React from 'react';
import Navbar from '../Navbar';
import './Guides.css';

const Callofdutywarzone = () => {
  return (
    <div className="guides-container">
            <Navbar />
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/tiWn6Ql4fzs" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="custom-separator"></div>
            <div className="middle-image">
                <img src="/images/activision/warzoneguides1.png" alt="Apex Legends" />
            </div>
            <div className="text-section">
                <h2 className='titleguides  '>Map navigation</h2>
                <p className='text'>Like other battle royale games, Warzone drops a lobby of players in a sprawling map, where they need to find weapons and items, and fight to be the last man or squad standing. In fact, Al Mazrah supports a massive 150 players at one time.

If you’re new to the battle royale genre, every game will start with you and your squad dropping from a cargo plane and parachuting to your chosen location.
To keep things simple, the best places to land are the named locations on the map of Al Mazrah. Known as points of interest or locations, these should provide adequate loot for you and your squadmates, at least until you can obtain your custom loadouts.

If you happen to land in a hot area with players already fighting, you can angle for more secluded unnamed areas that still feature houses and other smaller complexes to get your gear.

Mastering your parachute speed and glide is integral to landing quickly, which gives you an edge in the early game.</p>
            </div>
            <div className="additional-images">
                <div className="image-block">
                    <img src="/images/activision/warzoneguides2.png" alt="First steps in Apex Legends" />
                    <h3 className='titleguides'>The Safe Zone and its circles</h3>
                    <p className='text'>Another important factor in map navigation is the Safe Zone. Staying true to the battle royale genre, the map will decrease in size periodically, thanks to a looming cloud of poisonous gas. You’ll have to head to the Safe Zone indicated by a white circle on the map, or risk taking damage.

Warzone 2.0 has added a new mechanic where the Safe Zone has a chance of splitting into multiple circles, giving you a bit more flexibility on where you can loot during the match. However, this also means that the combat area becomes smaller earlier on, a departure from most other battle royale games.

If there are multiple circles, they will eventually merge into a single Safe Zone, so you’ll need to get ready to move when that happens.</p>
                    <ul className='text'>
                        <li>Click on the “Legends” tab and check out the legends you obtain. Read about their abilities and choose the one you like the most.</li>
                        <li>As the match starts, listen to your teammates and stick with them. Good team coordination is key to victory!</li>
                        <li>Pick up the weapons and throwables you prefer. You can read about the best weapons for beginners below.</li>
                        <li>Use your abilities. For example, the scanning ability of Bloodhound can detect enemies hiding nearby!</li>
                        <li>Use our gameplay tips and tricks to keep up with your teammates and push your enemies effectively.</li>
                    </ul>
                </div>
                <div className="image-block">
                    <img src="/images/activision/warzoneguides3.png" alt="Apex Legends basic mechanics" />
                    <h3 className='titleguides'>Movement mechanics</h3>
                    <p className='text'>Movement is key to outmaneuvering your opponents and can even help you win a gunfight. On foot, you have the four basic movements of sprinting, prone, sliding, and jumping.

Sprinting (shift key/left stick press) is mainly used to cover long distances while also being a hard target for any nearby enemies. An even faster version called Tactical Sprint is activated when you press the designated command twice.

While Tactical Sprint speeds up your Operator’s pace, they will eventually slow down to the regular sprinting speed after a few seconds.

In the prone (left control key/hold circle button) position, you can hide in bushes and other cover to get the drop on unsuspecting opponents. However, you risk being a sitting duck if someone spots you.

Sliding (C key/circle button while sprinting) will help you reposition quickly during a fight or during a fast descent on any hill. You cannot shoot while sliding, so it is mainly an escape mechanic to get behind cover, rather than a way of engaging the enemy.

Jumping (Spacebar/X button) is pretty self-explanatory as a movement mechanic. If you want to get over walls and traverse through windows, you simply go up to the obstacle and press the jump button to initiate the action.

A more advanced mechanic introduced in Warzone 2.0 is dolphin diving (circle button during Tac Sprint). This move is great for closing distances with a jumping motion as well as finding cover behind a wall or building.
                        </p>
                    
                    
                </div>                
            </div>
        </div>
  )
}

export default Callofdutywarzone    