import React from 'react';
import Navbar from '../Navbar';
import './Guides.css';

const Counterstrike2 = () => {
  return (
    <div className="guides-container">
            <Navbar />
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/Go0K9BuQxa8" // Replace VIDEO_ID with the actual ID
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="custom-separator"></div>
            <div className="middle-image">
                <img src="/images/valve/counterstrike2guides1.png" alt="How To Center Your Crosshair" />
            </div>
            <div className="text-section">
                <h2 className='titleguides  '>How To Center Your Crosshair</h2>
                <p className='text'>Mechanically speaking, Counter-Strike 2 is a game about thinking and centering your crosshair. When playing your first casual matches, your primary focus should be perfecting your crosshair placementat neck level while walking around trying to find enemies.

At this level of play, correctly centering your crosshair and tapping every gun as a semi-auto will get you more kills than you can imagine. During your first CS2 game sessions, don't fear any corner and peek at everyone; you'll get killed a lot initially, but you'll get an authentic feel of how good centering can change the outcome of most gunfights.

There are two major mistakes when it comes to centering; the first and most common one is centering too low. Most players will keep their crosshairs at the hip level when checking corners. This will get you killed too many times. Get comfortable checking corners at enemies' neck level to remedy this issue.

The other major mistake is centering too close to the wall or corner you're checking. Many players place their crosshairs right on the edge of each corner, leaving them vulnerable to enemies who like to swing wide before shooting.

If an enemy goes past your crosshair during a peek, the readjustment will take time, and good players will use it to kill you. Instead of centering right on each edge, place the crosshair a bit away from the corner, where enemies will most likely stop to shoot if they peek.</p>
            </div>
            <div className="additional-images">
                <div className="image-block">
                    <img src="/images/valve/counterstrike2guides2.png" alt="How To Control Recoil Properlyends" />
                    <h3 className='titleguides'>How To Control Recoil Properly</h3>
                    <p className='text'>To better understand recoil patterns, point your gun at a wall and start shooting; first, check the recoil without moving your mouse. You'll notice that there's always a little random horizontal deviation for every shot and a predictable vertical or diagonal path.

You'll want to learn that vector-like path and practice moving your mouse in the opposite direction to counter it. If you do this perfectly, the first ten to 12 bullets should go straight. The first time won't look good, but you'll improve overtime.

However, you won't need to hit ten bullets on any target in this game. Practice two-round, three-round, and five-round bursts while waiting for warm-up timers during your casual matches; you'll see great results during actual rounds just by getting those repetitions in.

Additionally, try to solve every gunfight by using your practiced bursts for some rounds. This will teach you the maximum viable range for every burst type: five-rounders are for close targets, three-rounders are for medium-range targets, and two-rounders are helpful for long-range firefights.

If an enemy is too far away for two-round bursts to be effective, you'll have to tap your mouse to shoot your gun as a semi-automatic, letting it reset after every shot to keep yourself accurate. Slowly, you'll start nailing those headshots from those long ranges.

When you understand which burst type is better for every range and if you need to spray or tap to win a gunfight as soon as you see an enemy, you'll feel more confident in every match. After learning two to three guns this way, you can expand and study the other ones the same way, one by one.</p>
                </div>
                <div className="image-block">
                    <img src="/images/valve/counterstrike2guides3.png" alt="Learning To Move Better" />
                    <h3 className='titleguides'>Learning To Move Better</h3>
                    <p className='text'>Sound and movement are essential elements of a Counter-Strike 2 round. If you spent a reasonable amount of time focusing on centering and controlling your gun while peeking at every corner, now you'll need to slow down to pay attention to footsteps and find moments where walking will help you close plays cleanly.

When you press Shift, you'll walk slowly. While you're walking, you won't make any sounds. Good players use this to their advantage when repositioning or pushing corners. The best advice is to keep playing as aggressively as possible while learning to leverage silent movements as part of your game.

At first, you'll feel slow pushing a corner this way, but trust your centering and focus on those plays for a while; you'll start to find your groove during clutch moments sooner than you think.

After familiarizing yourself with the slow movement, try walking up to different corners slowly; when you're close to one corner, stop walking and swing wide quickly before taking your shots. You'll catch many players off-guard practicing that technique along with your centering and recoil control.

Additionally, learn to crouch-jump. This technique is used to get on top of certain surfaces that otherwise would be unreachable. To do it, press Space and then Ctrl while in midair. If you do it right, your model will literally crouch while jumping so their legs won't get in the way of some high ledges when getting on top.

You can try to crouch jump on every surface you cannot reach with regular jumps. You'll be surprised at how many spots you can reach with it. After some time practicing it, you'll be able to traverse these spots without thinking about it.</p>
                </div>                
            </div>
        </div>
  )
}

export default Counterstrike2