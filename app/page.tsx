import AIKnowledge from '@/components/main/AIKnowledge';
import Certificates from '@/components/main/Certificates';
import Footer from '@/components/main/Footer';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        {/* <Certificates /> */}
        <AIKnowledge />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
