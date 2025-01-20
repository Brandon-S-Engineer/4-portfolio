import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  isDark?: boolean;
}

const ProjectCardRight = ({ src, title, description, isDark }: Props) => {
  return (
    <div className='grid grid-cols-2 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] md:max-w-[95%] lg:max-w-3xl mx-auto mb-3'>
      {/* Image Section */}
      <div className='relative'>
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className='object-contain'
        />
        {isDark && (
          <div
            data-testid='dark-overlay' // Testing
            className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30'></div>
        )}
      </div>

      {/* Text Section */}
      <div className='relative p-4 flex flex-col justify-start items-center'>
        {/* Title */}
        <h1 className='text-2xl font-semibold text-white text-center text-smaller-2'>{title}</h1>
        {/* Description */}
        <p className='text-gray-300 mb-2 text-center hidden sm:block'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCardRight;
