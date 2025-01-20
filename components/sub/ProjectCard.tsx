import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  isDark?: boolean;
}

const ProjectCard = ({ src, title, description, isDark }: Props) => {
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]`}>
      <div className='relative'>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className='w-full object-contain '
        />

        {isDark && <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30'></div>}
      </div>

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white text-center lg:text-start'>{title}</h1>
        <p className='mt-2 text-gray-300 hidden lg:block'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
