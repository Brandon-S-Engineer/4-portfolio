import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import ProjectCardRight from '../sub/ProjectCardRight';

const AIKnowledge = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-10'
      id='ai-proficencies'>
      <h1 className='text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-3'>AI Proficencies</h1>
      <ProjectCardRight
        src='/AICertificate.jpg'
        title='AI Certification'
        description='Certified in practical AI skills, mastering ChatGPT, GitHub Copilot, and AI Voice Reader for efficient coding, content creation and workflow optimization.'
        isDark={true}
      />

      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10  mt-2'>
        <div className='flex-1 flex'>
          <ProjectCard
            src='/ChatGPT.gif'
            title='Chat GPT'
            description='Used for troubleshooting, refining code, brainstorming features, and continuous learning.'
          />
        </div>

        <div className='flex-1 flex'>
          <ProjectCard
            src='/copilot2.gif'
            title='Copilot & Copilot Chat'
            description='Used directly in the code editor for AI-driven code generation, interactive debugging, and in-context learning.'
          />
        </div>
        <div className='flex-1 flex'>
          <ProjectCard
            src='/VoiceReader.gif'
            title='AI Voice Reader'
            description='Used to accelerate technical reading and comprehension, facilitating rapid knowledge acquisition.'
          />
        </div>
      </div>
    </div>
  );
};

export default AIKnowledge;
