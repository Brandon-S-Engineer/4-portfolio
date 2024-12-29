'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <h1 className='text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6'>Skills & Technologies </h1>

      <div className='flex items-center space-x-4'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box font-bold py-[1px] px-[11px] border border-[#7042f88b] opacity-[0.9] mb-[10px]'>
          <h1 className='Welcome-text text-[25px]'>CSS/SASS</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Welcome-box font-bold py-[1px] px-[11px] border border-[#7042f88b] opacity-[0.9] mb-[10px]'>
          <h1 className='Welcome-text text-[25px]'>Tailwind</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Welcome-box font-bold py-[1px] px-[11px] border border-[#7042f88b] opacity-[0.9] mb-[10px]'>
          <h1 className='Welcome-text text-[25px]'>JavaScript</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Welcome-box font-bold py-[1px] px-[11px] border border-[#7042f88b] opacity-[0.9] mb-[10px]'>
          <h1 className='Welcome-text text-[25px]'>TypeScript</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Welcome-box font-bold py-[1px] px-[11px] border border-[#7042f88b] opacity-[0.9] mb-[10px]'>
          <h1 className='Welcome-text text-[25px]'>React</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Welcome-box font-bold py-[1px] px-[11px] border border-[#7042f88b] opacity-[0.9] mb-[10px]'>
          <h1 className='Welcome-text text-[25px]'>NextJS</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Welcome-box font-bold py-[1px] px-[11px] border border-[#7042f88b] opacity-[0.9] mb-[10px]'>
          <h1 className='Welcome-text text-[25px]'>GitHub</h1>
        </motion.div>
      </div>

      {/* Redux, MUI, React Testing, Jest, CMS. */}

      <div className='flex items-center space-x-4'>
        <motion.div
          variants={slideInFromTop}
          className='Secondary-box font-bold py-[0.5px] px-[8px] border border-[#42ddf85e] mb-[6px]'>
          <h1 className='Secondary-text text-[16px] text-[#42ddf8a6]'>WebPack</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Secondary-box font-bold py-[0.5px] px-[8px] border border-[#42ddf85e] mb-[6px]'>
          <h1 className='Secondary-text text-[16px] text-[#42ddf8a6]'>Axios</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Secondary-box font-bold py-[0.5px] px-[8px] border border-[#42ddf85e] mb-[6px]'>
          <h1 className='Secondary-text text-[16px] text-[#42ddf8a6]'>Redux</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Secondary-box font-bold py-[0.5px] px-[8px] border border-[#42ddf85e] mb-[6px]'>
          <h1 className='Secondary-text text-[16px] text-[#42ddf8a6]'>MUI</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Secondary-box font-bold py-[0.5px] px-[8px] border border-[#42ddf85e] mb-[6px]'>
          <h1 className='Secondary-text text-[16px] text-[#42ddf8a6]'>React Testing</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Secondary-box font-bold py-[0.5px] px-[8px] border border-[#42ddf85e] mb-[6px]'>
          <h1 className='Secondary-text text-[16px] text-[#42ddf8a6]'>Jest</h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className='Secondary-box font-bold py-[0.5px] px-[8px] border border-[#42ddf85e] mb-[6px]'>
          <h1 className='Secondary-text text-[16px] text-[#42ddf8a6]'>CMS</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillText;
