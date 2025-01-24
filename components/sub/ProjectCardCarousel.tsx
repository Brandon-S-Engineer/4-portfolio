'use client';

import { formattedDescription1, formattedDescription2, formattedDescription3, formattedDescription4, formattedDescription5 } from '@/content/projectDescriptions';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx';

interface Props {
  images: { src: string; alt: string }[];
  title: string;
  technologies: string;
  descriptionKey: DescriptionKey;
  isDark?: boolean;
  webLink: string;
  repoLink: string;
}

const descriptions = {
  formattedDescription1,
  formattedDescription2,
  formattedDescription3,
  formattedDescription4,
  formattedDescription5,
} as const;

type DescriptionKey = keyof typeof descriptions;

const ProjectCardCarousel = ({ images, title, technologies, descriptionKey, isDark, webLink, repoLink }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [description, setDescription] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    setDescription(descriptions[descriptionKey]);
  }, [descriptionKey]);

  if (!description) {
    return <div>Loading...</div>;
  }

  // 1) Guard window usage
  const preloadImage = (index: number) => {
    if (typeof window === 'undefined') return;
    const image = new window.Image();
    image.src = images[index].src;
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    preloadImage(newIndex);
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    preloadImage(newIndex);
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 262);
  };

  return (
    <div className='flex flex-col overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[95%] sm:w-[90%] md:w-[80%] lg:w-[45%] lg:mx-[1%] mb-16 lg:mb-8 relative'>
      {/* Image Section */}
      <div className='relative pb-8'>
        <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={630}
            height={630}
            className='object-cover w-full h-full'
            loading='eager'
          />
        </div>

        {isDark && (
          <div
            data-testid='dark-overlay'
            className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30'></div>
        )}

        {/* Carousel Navigation */}
        <button
          onClick={handlePrevClick}
          className='absolute top-2/3 left-3 transform bg-white bg-opacity-80 rounded-full flex items-center justify-center w-8 h-8 text-lg leading-none'>
          <div className='flex items-center justify-center w-full h-full mt-[1px] mr-[3px]'>◀</div>
        </button>
        <button
          onClick={handleNextClick}
          className='absolute top-2/3 right-3 transform bg-white bg-opacity-80 rounded-full flex items-center justify-center w-8 h-8 text-lg leading-none'>
          <div className='flex items-center justify-center w-full h-full mt-[1px] ml-[4px]'>▶</div>
        </button>

        {/* Pagination Dots */}
        <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-60'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-700'}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className='p-4 flex flex-col items-center h-full overflow-hidden'>
        <h1 className='text-2xl font-semibold text-white text-center flex items-center justify-center space-x-1'>
          {title}
          <a
            href={webLink}
            target='_blank'
            rel='noopener noreferrer'
            className='ml-1 cursor-pointer'>
            <RxExternalLink className='hover:text-blue-500 transition-colors' />
          </a>
          <a
            href={repoLink}
            target='_blank'
            rel='noopener noreferrer'
            className='ml-1 cursor-pointer'>
            <RxGithubLogo className='hover:text-blue-500 transition-colors' />
          </a>
        </h1>

        <p className='text-gray-300 mb-2 text-left'>{technologies}</p>

        <div className='custom-scrollbar overflow-y-auto w-full max-h-[calc(332px-72px)]'>
          <p className='text-gray-300 mb-2 text-left'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardCarousel;
