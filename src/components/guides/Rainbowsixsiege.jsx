import React from 'react';
import Navbar from '../Navbar';
import './Guides.css';

const Rainbowsixsiege = () => {
  return (
    <div className="guides-container">
            <Navbar />
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/u5oo_QC5ILc" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="custom-separator"></div>
            <div className="middle-image">
                <img src="/images/ubisoft/rainbowsixsiegeguides1.png" alt="Game modes" />
            </div>
            <div className="text-section">
                <h2 className='titleguides  '>Game modes</h2>
                <p className='text'>
Standard is your regular five-versus-five match. Your goal is either to successfully detonate a bomb (attacking) or prevent that from happening (defending). You’ll switch between attacking and defending after the third round so you always get a chance to play both sides. To win the overall match, you have to win the best of six rounds, which means the first team to four. At the beginning of these matches, defenders will set up the base while attackers take control of vehicular drones and explore the map, giving them a chance to plan their strike.

Ranked is basically the exact same as Standard, but with a more competitive flair. It lets you compete against others around your same skill level, and you can climb the Ranked ladder and compare yourself to the playerbase as a whole. The only difference between Ranked and Standard is that if both teams have three wins, the overtime rounds end when a team wins two more rounds.

Quick Match is for quicker games, as the name implies. However, there are different subvariants: Bomb (which is technically the name of the mode featured in Standard and Ranked), Secure Area, and Hostage. Bomb is best of four rounds instead of six, and the teams swap roles at round three. Hostage is five-versus-five, and attackers have to find and recapture a hostage, then extract them to another zone. Secure Area is also five-versus-five, and the goal is for attackers to take control of an area while defenders try to protect it.

Other game modes come around from time to time. For example, Arcade contains completely different game types that are generally less tactical and more chaotic fun. These game modes include Weapon Roulette, Free For All, Deathmatch, Snipers Only, and Golden Gun. Limited-time events also bring special game modes, on occasion. These aren’t serious, and they can be a fun way to warm up or to hop on and play without thinking too much.</p></div>
            <div className="additional-images">
                <div className="image-block">
                    <img src="/images/ubisoft/rainbowsixsiegeguides2.png" alt="Guns and attachments" />
                    <h3 className='titleguides'>Guns and attachments</h3>
                    <p className='text'>There are a few ways to change up the guns that you use with each Operator. These are called your loadouts, and you can edit them by looking at each Operator when you’re not in a match.

When looking at each Operator’s specific loadout, you can customize three things: primary weapon, secondary weapon, and gadget. You can edit parts of the guns that affect how they handle, such as the sight, barrel, grip, and under barrel. These let you customize the playstyle of each weapon to fit your tastes better—but keep in mind that attachments won't drastically change any weapon, so make sure the Operators you acquire have guns that you don’t mind using.

Guns can also be customized visually using charms or skins—and attachments can be customized with skins as well, so you can create a fun gun that fits you perfectly. You'll unlock some skins simply by playing the game, but many of the weapon skins are purchased through the Shop tab.

Once you've kitted out your guns, you can also swap out your Operator's gadgets. Gadgets include grenades, flash grenades, sensors, and other useful items that aren’t special to any Operator’s unique ability.
</p></div>
                <div className="image-block">
                    <img src="/images/ubisoft/rainbowsixsiegeguides3.png" alt="Learning To Move Better" />
                    <h3 className='titleguides'>The environment and maps</h3>
                    <p className='text'>
One of the most unique parts of Rainbow Six Siege is its maps—and the ability to manipulate them. There are over 15 maps in the game, but some rotate in and out every season.

The maps themselves are very destructible, and players can break down walls and floors, make small holes, and generally manipulate the map to open it up. This means that an enemy could be lurking at pretty much any corner, so it’s important to not blindly run around on any map, no matter how well you know it. After playing more, you’ll start to get a feel for each map and its layout, along with any common parts of it that people destroy.

When you’re attacking, being able to destroy parts of the level lets you peek in from odd angles and approach from a side that the enemy team isn't guarding. It also lets you get between areas on the map quickly and in unpredictable ways, helping take the defending team by surprise.

On the flip side, if you’re defending, then opening up the map can help you watch angles that attackers might not see. And since you have some time to set up the site before the attackers get there, you can do it without making too much noise. This lets you adapt to the attackers as well, so if you have a weak side, then try and surprise them.

Speaking of which, sound is very important as well. You’ll need to listen for enemies and for anything they’re doing, like smashing walls or tearing up floors. Even when attacking, you can sometimes hear where enemies might be hiding, and any little noise they make could win you a round.

Get creative—many Rainbow Six Siege maps have verticality built into them, enabling you to go through ceilings or floors and pop up in unexpected places. This is why some people love the game, so don’t be afraid to make the map work for you. Certain Operators even help rearrange the map via their unique abilities. If this sounds interesting to you, check out Operators like Sledge.

That’s everything you need to know about Rainbow Six Siege before you jump in and play. The game can be daunting, but remember what you’ve learned from this guide and you’ll do great. The community is generally receptive to new players, so don’t be afraid to hop on comms and learn more from the people you’re playing with.</p></div>                
            </div>
        </div>  
  )
}

export default Rainbowsixsiege