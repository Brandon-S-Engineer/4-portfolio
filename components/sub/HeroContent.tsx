'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { RxDownload } from 'react-icons/rx';

const HeroContent = () => {
  const handleContactClick = () => {
    const footerElement = document.getElementById('footer');

    // Smooth scroll to footer
    footerElement?.scrollIntoView({ behavior: 'smooth' });

    // Add flashing border class temporarily
    footerElement?.classList.add('flash-border');
    setTimeout(() => {
      footerElement?.classList.remove('flash-border');
    }, 3000); // Remove after 3 seconds
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box font-bold py-[8px] px-[9px] border border-[#7042f88b] opacity-[0.9]'>
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'></SparklesIcon>
          <h1 className='text-white text-[26px]'>Front-End Software Engineer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
          <span>
            Creating
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Dynamic and Adaptative </span>
            Front-End Solutions
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-blue-100 my-5 max-w-[600px]'>
          I'm Brandon Israel Hurtado Soria, a Front-End Developer specializing in building responsive and user-friendly web applications with modern technologies like React, Next.js, and TypeScript. <br />
        </motion.p>

        <div className='flex justify-start space-x-4'>
          <motion.a
            variants={slideInFromLeft(1)}
            download
            href='/0-resume/Resume-Brandon-I-Soria.pdf'
            className='flex items-center mr-4 border border-[#7042f88b] font-semibold text-lg button-primary py-2 px-4 text-center text-white cursor-pointer rounded-lg max-w-[300px]'>
            Download Resume
            <RxDownload className='text-[20px] ml-[6px]' />
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1)}
            onClick={handleContactClick}
            className='border border-[#7042f88b] font-semibold text-lg button-primary py-2 px-4 text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
            Get in Touch
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'>
        <Image
          src={'/mainIconsdark.svg'}
          alt='work icons'
          height={650}
          width={650}></Image>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
