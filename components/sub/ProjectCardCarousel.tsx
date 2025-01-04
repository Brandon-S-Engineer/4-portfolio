'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx';

interface Props {
  images: { src: string; alt: string }[];
  title: string;
  technologies: string;
  description: any;
  isDark?: boolean;
  webLink: string;
  repoLink: string;
}

const ProjectCardCarousel = ({ images, title, technologies, description, isDark, webLink, repoLink }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade animation
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState<number | null>(null); // Initially null to avoid SSR issues

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth); // Set initial window width

      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const preloadImage = (index: number) => {
    const image = new window.Image(); // Explicitly use window.Image
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
      setCurrentIndex(index); // Set the current index to the clicked dot's index
      setFade(true);
    }, 262);
  };

  if (windowWidth === null) {
    // Return a placeholder or nothing during SSR to avoid mismatches
    return null;
  }

  // Dynamic height based on window width (aspect ratio)
  const imageHeight = windowWidth * 0.5625; // 16:9 aspect ratio (height = 9/16 * width)

  // Calculate text section height based on window width (example ratio 40%)
  const textHeight = windowWidth * 0.2; // 40% of the window width for text section height

  return (
    <div className='grid grid-cols-[65%_35%] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[80%] mx-auto mb-8 relative'>
      {/* Image Section */}
      <div className='relative'>
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
            data-testid='dark-overlay' //? Testing
            className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30'></div>
        )}

        {/* Carousel Navigation */}
        <button
          onClick={handlePrevClick}
          className='absolute top-2/3 left-3 transform bg-white bg-opacity-80 rounded-full flex items-center justify-center w-7 h-7 text-lg leading-none'>
          <div className='flex items-center justify-center w-full h-full mt-[1px] mr-[3px]'>◀</div>
        </button>

        <button
          onClick={handleNextClick}
          className='absolute top-2/3 right-3 transform bg-white bg-opacity-80 rounded-full flex items-center justify-center w-7 h-7 text-lg leading-none'>
          <div className='flex items-center justify-center w-full h-full mt-[1px] ml-[4px]'>▶</div>
        </button>

        {/* Pagination Dots */}
        <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-60'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className='p-4 flex flex-col items-center'>
        {/* Title */}
        <h1 className='text-2xl font-semibold text-white text-center flex items-center justify-center space-x-1'>
          {title}

          {/* Link to the live website */}
          <a
            href={webLink}
            target='_blank'
            rel='noopener noreferrer'
            className='ml-1 cursor-pointer'>
            <RxExternalLink className='hover:text-blue-500 transition-colors' />
          </a>

          {/* Link to the GitHub repository */}
          <a
            href={repoLink}
            target='_blank'
            rel='noopener noreferrer'
            className='ml-1 cursor-pointer'>
            <RxGithubLogo className='hover:text-blue-500 transition-colors' />
          </a>

          {/* <RxExternalLink className='ml-1' />
          <RxGithubLogo className='ml-1' /> */}
        </h1>
        {/* Technologies Stack */}
        <p className='text-gray-300 mb-2 text-left'>{technologies}</p>

        {/* Description */}
        <div
          className='custom-scrollbar overflow-y-auto'
          style={{ height: textHeight, paddingRight: '7px' }}>
          {/* Now adjust it with media queries lg: md: etc */}
          <p className='text-gray-300 mb-2 text-left'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardCarousel;
