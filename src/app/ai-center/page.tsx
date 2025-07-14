import { Metadata } from 'next';

import { Cta22 } from '@/components/shadcnblocks/cta/cta22';
import { Feature65 } from '@/components/shadcnblocks/feature/feature65';
import { Feature66 } from '@/components/shadcnblocks/feature/feature66';
import { Hero33 } from '@/components/shadcnblocks/hero/hero33';
import { Testimonial23 } from '@/components/shadcnblocks/testimonial/testimonial23';

export const metadata: Metadata = {
  title: 'AI Center of Excellence | Cerebello',
  description:
    'Build internal AI competency and lead your industry with our comprehensive AI Center of Excellence programs.',
};

export default function AICenterPage() {
  return (
    <>
      <Hero33 />
      <Feature65 />
      <Feature66 />
      <Testimonial23 />
      <Cta22 />
    </>
  );
}
