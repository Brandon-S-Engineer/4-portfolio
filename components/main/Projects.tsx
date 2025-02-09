import React from 'react';
import ProjectCardCarousel from '../sub/ProjectCardCarousel';

import { formattedDescription1, formattedDescription2, formattedDescription3, formattedDescription4, formattedDescription5 } from '../../content/projectDescriptions';

const Projects = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-10 z-40'
      id='projects'>
      <h1 className='text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 text-center title-text'>Website Showcase</h1>
      <div className='flex flex-wrap justify-center w-full gap-y-8'>
        <ProjectCardCarousel
          images={[
            { src: '/1-restaurant/1.png', alt: 'Description' },
            { src: '/1-restaurant/2.png', alt: 'Description' },
            { src: '/1-restaurant/3.png', alt: 'Description' },
            { src: '/1-restaurant/4.png', alt: 'Description' },
            { src: '/1-restaurant/5.png', alt: 'Description' },
            { src: '/1-restaurant/6.png', alt: 'Description' },
            { src: '/1-restaurant/7.png', alt: 'Description' },
            { src: '/1-restaurant/8.png', alt: 'Description' },
          ]}
          title='Restaurant'
          webLink='https://1-restaurant.vercel.app/'
          repoLink='https://github.com/Brandon-S-Engineer/1-restaurant'
          technologies='JavaScript, SCSS, Animations.'
          descriptionKey='formattedDescription1'
        />
        <ProjectCardCarousel
          images={[
            { src: '/2-ai-generator/1.png', alt: 'Description' },
            { src: '/2-ai-generator/2.png', alt: 'Description' },
            { src: '/2-ai-generator/3.png', alt: 'Description' },
          ]}
          title='Image Generator AI'
          webLink='https://2-ai-image-web.vercel.app/'
          repoLink='https://github.com/Brandon-S-Engineer/2-ai-image-web'
          technologies='Tailwind, React, API, MERN'
          descriptionKey='formattedDescription2'
          isDark
        />
        <ProjectCardCarousel
          images={[
            { src: '/3-social-media/1.png', alt: 'Description' },
            { src: '/3-social-media/2.png', alt: 'Description' },
            { src: '/3-social-media/3.png', alt: 'Description' },
            { src: '/3-social-media/4.png', alt: 'Description' },
            { src: '/3-social-media/5.png', alt: 'Description' },
          ]}
          title='Social Media'
          webLink='https://3-social-media-z7ma.vercel.app/'
          repoLink='https://github.com/Brandon-S-Engineer/3-social-media'
          technologies='MUI, React, MERN'
          descriptionKey='formattedDescription3'
          isDark
        />
        <ProjectCardCarousel
          images={[
            { src: '/4-portfolio/1.png', alt: 'Description' },
            { src: '/4-portfolio/2.png', alt: 'Description' },
            { src: '/4-portfolio/3.png', alt: 'Description' },
            { src: '/4-portfolio/4.png', alt: 'Description' },
            { src: '/4-portfolio/5.png', alt: 'Description' },
          ]}
          title='Portfolio'
          webLink='https://brandon-s-engineer.com/'
          repoLink='https://github.com/Brandon-S-Engineer/4-portfolio'
          technologies='TypeScript, NextJS'
          descriptionKey='formattedDescription4'
        />
        <ProjectCardCarousel
          images={[
            { src: '/5-eCommerce/1.png', alt: 'Description' },
            { src: '/5-eCommerce/2.png', alt: 'Description' },
            { src: '/5-eCommerce/3.png', alt: 'Description' },
            { src: '/5-eCommerce/4.png', alt: 'Description' },
            { src: '/5-eCommerce/5.png', alt: 'Description' },
            { src: '/5-eCommerce/6.png', alt: 'Description' },
            { src: '/5-eCommerce/7.png', alt: 'Description' },
            { src: '/5-eCommerce/8.png', alt: 'Description' },
            { src: '/5-eCommerce/9.png', alt: 'Description' },
            { src: '/5-eCommerce/10.png', alt: 'Description' },
            { src: '/5-eCommerce/11.png', alt: 'Description' },
            { src: '/5-eCommerce/12.png', alt: 'Description' },
            { src: '/5-eCommerce/13.png', alt: 'Description' },
            { src: '/5-eCommerce/14.png', alt: 'Description' },
          ]}
          title='eCommerce & Admin Panel'
          webLink='https://ecommerce-frontend-tau-one.vercel.app/'
          repoLink='https://github.com/Brandon-S-Engineer/ecommerce-frontend'
          technologies='Tailwind, ShadCN, TypeScript, NextJS, MERN, Stripe'
          descriptionKey='formattedDescription5'
          isDark
        />
      </div>
    </div>
  );
};

export default Projects;
