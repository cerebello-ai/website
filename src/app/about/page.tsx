import { Metadata } from 'next';

import About from '@/components/sections/about';
import { StructuredData } from '@/components/structured-data';
import { generateAboutPageSchema, generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us | Cerebello',
  description:
    'Learn about Cerebello, a Netherlands-based AI consultancy specializing in business automation and strategic tech solutions.',
};

export default function AboutPage() {
  const structuredData = [
    generateAboutPageSchema(),
    generateWebPageSchema({
      name: 'About Cerebello',
      description: 'Learn about Cerebello, a Netherlands-based AI consultancy specializing in business automation and strategic tech solutions.',
      url: '/about',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ],
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <About />
    </>
  );
}
