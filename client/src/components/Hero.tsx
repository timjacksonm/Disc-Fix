import React from 'react';
import { ReactComponent as MainLogo } from '../assets/MainLogo.svg';
import Button from './Button';
import ComingSoon from '../assets/ComingSoon.png';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="heroContainer">
      <div className="textContainer">
        <h1>Meet other disc golf players and get your fix!</h1>
        <h2>
          Casual public disc golf events where you can join groups locally,
          skill up and have fun!
        </h2>
      </div>
      <div className="logoContainer">
        <MainLogo className="mainLogo" />
        {/* <Button /> */}
        <img className="comingsoon" height="100%" src={ComingSoon} alt="" />
      </div>
    </div>
  );
};

export default Hero;
