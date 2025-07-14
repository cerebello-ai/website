import { Metadata } from 'next';

import { Cta18 } from '@/components/shadcnblocks/cta/cta18';
import { Feature55 } from '@/components/shadcnblocks/feature/feature55';
import { Feature56 } from '@/components/shadcnblocks/feature/feature56';
import { Hero28 } from '@/components/shadcnblocks/hero/hero28';

export const metadata: Metadata = {
  title: 'Services | Cerebello',
  description:
    'Explore our comprehensive AI and automation services designed to transform your business operations and drive sustainable growth.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero28 />
      <Feature55 />
      <Feature56 />
      <Cta18 />
    </>
  );
}
