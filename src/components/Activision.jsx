import React from 'react';
import Navbar from './Navbar';

const Activision = () => {
  return (
    <div>
      <Navbar />
      <div className="centered-container">
        <div className="image-row">
          <img src="/images/activision/activision-intro1.png" alt="Activision 1" />
          <img src="/images/activision/activision-intro2.png" alt="Activision 2" />
          <img src="/images/activision/activision-intro3.png" alt="Activision 3" />
        </div>
        <div className="text"> 
        <p>
          Activision Publishing, Inc. is an American video game publisher based in Santa Monica, California. It serves as the publishing business for its parent company, Activision Blizzard, and consists of several subsidiary studios. Activision is one of the largest third-party video game publishers in the world and was the top United States publisher in 2016.
          The company was founded as Activision, Inc. on October 1, 1979, in Sunnyvale, California, by former Atari game developers upset at their treatment by Atari in order to develop their own games for the popular Atari 2600 home video game console. Activision was the first independent, third-party, console video game developer. 
          The video game crash of 1983, in part created by too many new companies trying to follow in Activision's footsteps without the experience of Activision's founders, hurt Activision's position in console games and forced the company to diversify into games for home computers, including the acquisition of Infocom. After a management shift, with CEO Jim Levy replaced by Bruce Davis, the company renamed itself to Mediagenic and branched out into business software applications. 
          Mediagenic quickly fell into debt, and the company was bought for around US$500,000 by Bobby Kotick and a small group of investors around 1991.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Activision;
