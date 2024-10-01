import React from 'react';
import Navbar from '../Navbar';
import './Guides.css';

const Overwatch2 = () => {
  return (
    <div className="guides-container">
            <Navbar />
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/RFVk-uDEQvQ" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="custom-separator"></div>
            <div className="middle-image">
                <img src="/images/activision/overwatch2guides1.png" alt="Overwatch 2" />
            </div>
            <div className="text-section">
                <h2 className='titleguides  '>Overwatch 2 ?</h2>
                <p className='text'>Overwatch 2 is finally here. While it’s extremely similar to the original game, the fact that it’s free-to-play will surely attract many who sat out the first time around. Before you jump into the sequel, we’ve listed out a few helpful pointers that the tutorial won’t teach you.

Whether you’re brand new to Overwatch or you just haven’t played in years, here are six tips and tricks that’ll help you get up to speed in no time.

</p></div>
            <div className="additional-images">
                <div className="image-block">
                    <img src="/images/activision/overwatch2guides2.png" alt="Build cover before you heal" />
                    <h3 className='titleguides'>Decide on the battle pass early</h3>
                    <p className='text'>The battle pass is brand new in Overwatch 2, and it comes with both a free and premium track. The premium track includes some cosmetics you can’t get if you play for free, but you can unlock Kiriko — the new support character — from the battle pass no matter which path you take. However, paid players will unlock Kiriko immediately. (Free players will need to get the battle pass to level 55.)

In our experience, the battle pass moves very slowly (even with the 20% increased XP you get from the premium track), so it’s best to decide early on in whether you want to invest the $10 in the season or be a free-to-play player. You can always decide later, but that’s potentially a lot of time wasted without the 20% XP buff — and without access to the new hero.

</p></div>
                <div className="image-block">
                    <img src="/images/activision/overwatch2guides3.png" alt="Learning To Move Better" />
                    <h3 className='titleguides'>Try out different roles and heroes</h3>
                    <p className='text'>Moving away from the battle pass and into the game itself, it’s important to focus on trying new things — even if it means failing. Overwatch 2 is different from your typical shooter or RPG, so just because you normally like to play a support or tank role in some games — or just prefer to focus on raw shooting — doesn’t mean you should do the same thing in Overwatch 2.

When you’re just starting out (or getting back into the series) trying queuing for a different role every match, and start out with a hero you’re unfamiliar with. You can always swap if you’re not having fun, which leads us to...

</p></div>                
            </div>
        </div>  
  )
}

export default Overwatch2