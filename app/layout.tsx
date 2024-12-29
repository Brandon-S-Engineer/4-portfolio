import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.scss';
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brandon I. Soria | Portfolio',
  description: 'Portfolio of Brandon I. Soria, showcasing expertise in front-end development, React, Next.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='relative'>
      <body className={`${inter.className} bg-[#000A1C] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}