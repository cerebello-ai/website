import { Metadata } from 'next';

import { Cta22 } from '@/components/shadcnblocks/cta/cta22';
import { Feature63 } from '@/components/shadcnblocks/feature/feature63';
import { Feature64 } from '@/components/shadcnblocks/feature/feature64';
import { Hero32 } from '@/components/shadcnblocks/hero/hero32';
import { Testimonial22 } from '@/components/shadcnblocks/testimonial/testimonial22';

export const metadata: Metadata = {
  title: 'Case Studies | Cerebello',
  description:
    'Explore real-world success stories and see how organizations are achieving operational excellence through AI-driven automation.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Hero32 />
      <Feature63 />
      <Feature64 />
      <Testimonial22 />
      <Cta22 />
    </>
  );
}
