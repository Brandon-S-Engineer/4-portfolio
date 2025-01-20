import { Piramid_One, Piramid_Two, Piramid_Three, Piramid_Four } from '@/constants';
import React from 'react';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';

const Skills = () => {
  return (
    <section
      id='skills'
      className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-10 py-20 '
      style={{ transform: 'scale(0.9)' }}>
      <SkillText />

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Piramid_Four.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 sm:gap-10 items-center'>
        {Piramid_Three.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 sm:gap-10 items-center'>
        {Piramid_Two.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center gap-smaller'>
        {Piramid_One.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/4.mp4'
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
