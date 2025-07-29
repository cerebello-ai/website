import React from 'react';

import Contact from '@/components/sections/contact';
import { StructuredData } from '@/components/structured-data';
import { generateContactPageSchema, generateWebPageSchema } from '@/lib/schema';

const page = () => {
  const structuredData = [
    generateContactPageSchema(),
    generateWebPageSchema({
      name: 'Contact Cerebello',
      description: 'Get in touch with Cerebello for AI and automation consulting services.',
      url: '/contact',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ],
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <Contact />
    </>
  );
};

export default page;
