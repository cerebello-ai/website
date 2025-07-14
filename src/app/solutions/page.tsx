import { Metadata } from 'next';

import { Cta16 } from '@/components/shadcnblocks/cta/cta16';
import { Feature51 } from '@/components/shadcnblocks/feature/feature51';
import { Feature52 } from '@/components/shadcnblocks/feature/feature52';
import { Hero26 } from '@/components/shadcnblocks/hero/hero26';

export const metadata: Metadata = {
  title: 'AI Solutions | Cerebello',
  description:
    'Discover our comprehensive AI solutions designed to transform your business operations through intelligent automation and strategic innovation.',
};

export default function SolutionsPage() {
  return (
    <>
      <Hero26 />
      <Feature51 />
      <Feature52 />
      <Cta16 />
    </>
  );
}
