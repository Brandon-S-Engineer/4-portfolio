import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div
      className='relative h-full w-full flex flex-col top-[-80px] sm:top-[-80px] md:top-[-45px] lg:top-[-80px]'
      id='hero'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'>
        <source
          src='ccc.mov'
          type='video/webm'
        />
      </video>

      <HeroContent></HeroContent>
    </div>
  );
};

export default Hero;
