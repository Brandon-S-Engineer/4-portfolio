'use client';

import React, { useState } from 'react';
import { RxEnvelopeClosed, RxIdCard, RxDownload, RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';

import { FaYoutube, FaCopy, FaCheck } from 'react-icons/fa';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('brandon.s.engineer@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='flex flex-col items-center justify-center z-40'>
      <h1 className='text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-1'>Contact</h1>

      <div
        id='footer'
        className='border border-[#7042f861] rounded-full w-[90%] px-[85px] pb-[1px] mb-4 mx-auto h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
          <div className='w-full h-full flex flex-row items-start justify-around flex-wrap'>
            {/* Email */}
            <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
              <div className='font-bold text-[16px] mb-[10px]'>Email</div>
              <div className='flex flex-row items-center my-[15px] cursor-pointer relative'>
                <a
                  className='flex flex-row items-center text-[15px] ml-[6px] text-white hover:text-blue-500 transition-colors'
                  onClick={handleCopy}>
                  <RxEnvelopeClosed />
                  <span className='text-[15px] ml-[6px]'>brandon.s.engineer@gmail.com</span>

                  <FaCopy className='ml-[6px] text-[15px] cursor-pointer' />
                </a>

                {copied && (
                  <div className='absolute flex items-center left-[270px] ml-[10px] text-[12px] text-green-500'>
                    <FaCheck className='mr-[5px]' /> {/* Check icon */}
                    <span>Copied!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Social Media */}
            <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
              <div className='font-bold text-[16px] mb-[10px]'>Social Media</div>
              <div className='flex flex-row items-center mt-[15px]'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/brandon-i-soria/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row items-center mx-[15px] cursor-pointer text-white hover:text-blue-500 transition-colors'>
                  <RxLinkedinLogo />
                  <span className='text-[15px] ml-[6px]'>Linkedin</span>
                </a>

                {/* Resume */}
                <a
                  download
                  href='/0-resume/Resume-Brandon-I-Soria.pdf'
                  rel='noopener noreferrer'
                  className='flex flex-row items-center mx-[15px] cursor-pointer text-white hover:text-blue-500 transition-colors'>
                  <RxIdCard />
                  <span className='text-[15px] ml-[6px]'>Resume</span>
                  <RxDownload className='text-[15px] ml-[3px]' />
                </a>
              </div>
            </div>

            {/* GitHub Repo */}
            <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
              <div className='font-bold text-[16px] mb-[10px]'>GitHub Repository</div>
              <a
                href='https://github.com/Brandon-S-Engineer?tab=repositories&q=&type=&language=&sort=name'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-row items-center my-[15px] cursor-pointer text-white hover:text-blue-500 transition-colors'>
                <RxGithubLogo />
                <span className='text-[15px] ml-[6px]'>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
