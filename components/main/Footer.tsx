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
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-1'>Contact</h1>

      <div
        id='footer'
        className='border border-[#7042f861] rounded-full w-[90%] px-[85px] pb-[1px] mb-4 mx-auto h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
          <div className='w-full h-full flex flex-row items-start justify-around flex-wrap'>
            {/* Contact Info */}
            <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
              <div className='font-bold text-[16px] mb-[10px]'>Email</div>

              {/* Make email clickable */}
              <div className='flex flex-row items-center my-[15px] cursor-pointer relative'>
                <RxEnvelopeClosed />
                <a
                  href='mailto:brandon.s.engineer@gmail.com'
                  className='text-[15px] ml-[6px]'>
                  brandon.s.engineer@gmail.com
                </a>
                <FaCopy
                  className='ml-[6px] text-[15px] cursor-pointer'
                  onClick={handleCopy} // Attach the click handler
                />
                {copied && (
                  <div className='absolute flex items-center left-[270px] ml-[5px] text-[12px] text-green-500'>
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
                  href='https://www.linkedin.com/in/brandon-soria-207266294/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row items-center mx-[15px] cursor-pointer'>
                  <RxLinkedinLogo />
                  <span className='text-[15px] ml-[6px]'>Linkedin</span>
                </a>

                {/* Resume */}
                <a
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row items-center mx-[15px] cursor-pointer'>
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
                href='https://github.com/Bran-Eng?tab=repositories'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-row items-center my-[15px] cursor-pointer'>
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
