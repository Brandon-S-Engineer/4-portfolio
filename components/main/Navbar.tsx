'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { RxGithubLogo, RxLinkedinLogo, RxIdCard, RxExternalLink, RxEnvelopeClosed, RxEnvelopeOpen } from 'react-icons/rx';

const Navbar = () => {
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

  const handleNavbarClick = (section: string) => {
    const element = document.getElementById(section);

    // Smooth scroll to section
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a
          href='#hero'
          className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/NavLogo.png'
            alt='Logo'
            width={70}
            height={70}
            className='hidden lg:block cursor-pointer'
          />

          <span className='font-bold ml-[10px] hidden xl:block text-gray-300'>Brandon I. Soria</span>
        </a>

        <div className='w-full sm:w-full md:w-[750px] h-full flex flex-row items-center justify-between '>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#03001480] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a
              onClick={() => handleNavbarClick('hero')}
              className='cursor-pointer hover:text-blue-500 transition-colors'>
              <span className='hidden sm:block'>About me</span>
              <span className='sm:hidden'>Home</span>
            </a>

            <a
              onClick={() => handleNavbarClick('skills')}
              className='cursor-pointer hover:text-blue-500 transition-colors hidden-until-480'>
              Skills
            </a>

            {/* <a
              className='cursor-pointer hover:text-blue-500 transition-colors'>
              Certifications
            </a> */}

            <a
              onClick={() => handleNavbarClick('ai-proficencies')}
              className='cursor-pointer hover:text-blue-500 transition-colors hidden sm:block'>
              <span>AI</span>
              <span className='hidden xl:inline'> Knowledge</span>
            </a>

            <a
              onClick={() => handleNavbarClick('projects')}
              className='cursor-pointer hover:text-blue-500 transition-colors'>
              <span className='lg:hidden'>Webs</span>
              <span className='hidden lg:block'>Website Showcase</span>
            </a>

            <a
              className='cursor-pointer hover:text-blue-500 transition-colors'
              onClick={handleContactClick}>
              Contact
            </a>
          </div>
        </div>

        <div className='flex flex-row gap-5'>
          <a
            href='https://github.com/Brandon-S-Engineer?tab=repositories&q=&type=&language=&sort=name'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-blue-500 transition-colors hidden-until-480'>
            <RxGithubLogo
              // color='white'
              className='text-[15px] size-8'
            />
          </a>

          <a
            href='https://www.linkedin.com/in/brandon-i-soria/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-blue-500 transition-colors'>
            <RxLinkedinLogo className='text-[15px] size-8' />
          </a>

          <a
            href='mailto:brandon.s.engineer@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-blue-500 transition-colors hidden md:block'>
            <RxEnvelopeClosed className='text-[15px] size-8' />
          </a>

          <a
            href='/0-resume/Resume-Brandon-I-Soria.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-blue-500 transition-colors hidden md:block'>
            <RxIdCard className='text-[15px] size-8' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
