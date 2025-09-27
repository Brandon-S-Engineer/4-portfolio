import AIKnowledge from '@/components/main/AIKnowledge';

import Footer from '@/components/main/Footer';
import Freelance from '@/components/main/Freelance';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        <Freelance />
        <Projects />
        <AIKnowledge />
        <Footer />
      </div>
    </main>
  );
}
