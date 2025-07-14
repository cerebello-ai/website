import { Metadata } from 'next';

import { Cta15 } from '@/components/sections/cta/cta15';
import { Feature145 } from '@/components/sections/feature/feature145';
import { Feature187 } from '@/components/sections/feature/feature187';
import { Feature49 } from '@/components/sections/feature/feature49';
import { Hero95 } from '@/components/sections/hero/hero95';
import { Testimonial18 } from '@/components/sections/testimonial/testimonial18';

export const metadata: Metadata = {
  title: 'AI Implementation Scan | Cerebello',
  description:
    'Discover your AI potential with our comprehensive implementation scan. We analyze your processes to identify high-impact automation opportunities.',
};

export default function ImplementationPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero95 />

      {/* Process Steps */}
      <Feature187 />

      {/* Main Features */}
      <Feature49 />

      {/* Interactive Features */}
      <Feature145 />

      {/* Testimonials */}
      <Testimonial18 />

      {/* Call to Action */}
      <Cta15 />
    </>
  );
}
