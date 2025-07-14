import { Metadata } from 'next';

import About from '@/components/sections/about';

export const metadata: Metadata = {
  title: 'About Us | Cerebello',
  description:
    'Learn about Cerebello, a Netherlands-based AI consultancy specializing in business automation and strategic tech solutions.',
};

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}
