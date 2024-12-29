import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Certificates = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-10'
      id='certifications'>
      <h1 className='text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6'>Courses Certifications</h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10'>
        <ProjectCard
          src='/EnglishCertificate.jpeg'
          title='English - 49 Hours'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          isDark={true}
        />

        <ProjectCard
          src='/CSSCertificate.jpg'
          title='CSS - 23 Hours'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          isDark={true}
        />

        <ProjectCard
          src='/SpaceWebsite.png'
          title='Tailwind Course'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>

      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10'>
        <ProjectCard
          src='/NextWebsite.png'
          title='JavaScript Course'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/CardImage.png'
          title='TypeScript Course'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/SpaceWebsite.png'
          title='React Course'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>

      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/NextWebsite.png'
          title='NextJS Course'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/CardImage.png'
          title='Git & GitHub Course'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <ProjectCard
          src='/SpaceWebsite.png'
          title='MERN Stack, NodeJS | Basic'
          description='ADD: WILLING TO LEARN'
        />
      </div>
    </div>
  );
};

export default Certificates;
