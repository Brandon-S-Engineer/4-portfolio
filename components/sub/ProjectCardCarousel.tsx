'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { RxExternalLink, RxGithubLogo, RxChevronLeft, RxChevronRight } from 'react-icons/rx';

import { formattedDescription1, formattedDescription2, formattedDescription3, formattedDescription4, formattedDescription5 } from '@/content/projectDescriptions';

// If you added the freelance ones, import & merge here too:
import { freelanceDescription1, freelanceDescription2, freelanceDescription3 } from '@/content/freelanceDescriptions';

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
  freelanceDescription1,
  freelanceDescription2,
  freelanceDescription3,
} as const;

type DescriptionKey = keyof typeof descriptions;

export default function ProjectCardCarousel({ images, title, technologies, descriptionKey, isDark, webLink, repoLink }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const description = descriptions[descriptionKey];

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();
  const scrollTo = (i: number) => embla?.scrollTo(i);

  return (
    <div className='flex flex-col overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[95%] sm:w-[90%] md:w-[80%] lg:w-[45%] lg:mx-[1%] mb-16 lg:mb-8 relative'>
      {/* Image Section */}
      <div className='relative'>
        <div
          className='overflow-hidden'
          ref={emblaRef}>
          <div className='flex'>
            {images.map((img, i) => (
              <div
                key={i}
                className='min-w-0 flex-[0_0_100%] relative'>
                {/* Maintain aspect ratio for CLS-free layout */}
                <div
                  className='relative w-full'
                  style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className='object-cover'
                    // First slide: priority, others lazy
                    priority={i === 0}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    // Make mobile fetch small variants
                    sizes='(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 45vw'
                  />
                  {isDark && <div className='absolute inset-0 bg-black/30 pointer-events-none' />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type='button'
          onClick={scrollPrev}
          aria-label='Previous image'
          className='absolute top-1/2 -translate-y-1/2 left-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-600/80 text-white hover:bg-gray-700/90 shadow-md'>
          <RxChevronLeft className='w-5 h-5' />
        </button>
        <button
          type='button'
          onClick={scrollNext}
          aria-label='Next image'
          className='absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-600/80 text-white hover:bg-gray-700/90 shadow-md'>
          <RxChevronRight className='w-5 h-5' />
        </button>

        {/* Dots */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full w-2.5 h-2.5 ${i === selectedIndex ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* Removed the old controls container */}

      {/* Text Section */}
      <div className='p-4 flex flex-col items-center h-full overflow-hidden'>
        <h1 className='text-2xl font-semibold text-white text-center flex items-center justify-center'>
          {title}
          <a
            href={webLink}
            target='_blank'
            rel='noopener noreferrer'
            className='ml-1'>
            <RxExternalLink className='hover:text-blue-500 transition-colors' />
          </a>
          <a
            href={repoLink}
            target='_blank'
            rel='noopener noreferrer'
            className='ml-1'>
            <RxGithubLogo className='hover:text-blue-500 transition-colors' />
          </a>
        </h1>

        <p className='text-gray-300 mb-2 text-left'>{technologies}</p>

        {/* Render the ReactNode directly */}
        <div
          className='custom-scrollbar overflow-y-auto w-full max-h-[calc(332px-72px)]'
          aria-label='project description'>
          <div className='text-gray-300 mb-2 text-left'>{description}</div>
        </div>
      </div>
    </div>
  );
}
