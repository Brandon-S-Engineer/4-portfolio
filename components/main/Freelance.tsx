// components/sections/freelance.tsx
import React from 'react';
import ProjectCardCarousel from '../sub/ProjectCardCarousel';
import { freelanceDescription1, freelanceDescription2, freelanceDescription3 } from '../../content/freelanceDescriptions';

const Freelance = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-10 z-40'
      id='freelance'>
      <h1 className='text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 text-center title-text'>Freelance Websites</h1>

      <div className='flex flex-wrap justify-center w-full gap-y-8'>
        {/* 1) Omaleon.com Marketplace */}
        <ProjectCardCarousel
          images={[
            { src: '/ecommerce/1.png', alt: '' },
            { src: '/ecommerce/2.png', alt: '' },
            { src: '/ecommerce/3.png', alt: '' },
            { src: '/ecommerce/4.png', alt: '' },
            { src: '/ecommerce/5.png', alt: '' },
          ]}
          title='Omaleon.com Marketplace'
          webLink='https://www.Omaleon.com'
          repoLink=''
          technologies='Next.js, TypeScript, MongoDB, Stripe, Clerk, Zustand, Radix'
          descriptionKey='freelanceDescription1'
          isDark
        />

        {/* 2) Administrative Dashboard */}
        <ProjectCardCarousel
          images={[
            { src: '/admin/1.png', alt: '' },
            { src: '/admin/2.png', alt: '' },
            { src: '/admin/3.png', alt: '' },
          ]}
          title='Administrative Dashboard'
          webLink='admin.primefinds.com'
          repoLink=''
          technologies='Next.js, Mongoose, Clerk, Zod, React Hook Form, TanStack Table, Cloudinary'
          descriptionKey='freelanceDescription2'
          isDark
        />

        {/* 3) Automotive Catalog */}
        <ProjectCardCarousel
          images={[
            { src: '/catalog/1.png', alt: '' },
            { src: '/catalog/2.png', alt: '' },
            { src: '/catalog/3.png', alt: '' },
          ]}
          title='Automotive Catalog'
          webLink='https://www.edithsoria.com'
          repoLink='https://github.com/Brandon-S-Engineer/Freelance-1-Front-End'
          technologies='Next.js, Stripe, HeadlessUI, Lucide, Zustand'
          descriptionKey='freelanceDescription3'
          isDark
        />
      </div>
    </div>
  );
};

export default Freelance;
