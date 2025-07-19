import React from 'react';

import { FAQ } from '@/components/sections/faq';
import Pricing from '@/components/sections/pricing';
import Pricing2 from '@/components/sections/pricing2';

const page = () => {
  return (
    <>
      <Pricing headerTag="h1" />
      <Pricing2 />
      <FAQ
        leftQuestions={[
          {
            question: 'What pricing plans do you offer?',
            answer:
              'We offer flexible pricing based on your specific needs and project scope. Contact us for a personalized quote.',
          },
          {
            question: 'Is there a free trial available?',
            answer:
              'Yes, we offer a free AI Scan assessment to help you understand your automation opportunities.',
          },
        ]}
        rightQuestions={[
          {
            question: 'How do you calculate pricing?',
            answer:
              'Pricing is based on project complexity, timeline, and required resources. We provide transparent, fixed-price quotes.',
          },
          {
            question: 'Do you offer ongoing support?',
            answer:
              'Yes, we provide maintenance and support packages to ensure your AI solutions continue to perform optimally.',
          },
        ]}
      />
    </>
  );
};

export default page;
