import { Metadata } from 'next';

import { Cta20 } from '@/components/shadcnblocks/cta/cta20';
import { Feature59 } from '@/components/shadcnblocks/feature/feature59';
import { Feature60 } from '@/components/shadcnblocks/feature/feature60';
import { Hero30 } from '@/components/shadcnblocks/hero/hero30';

export const metadata: Metadata = {
  title: 'Resources | Cerebello',
  description:
    'Access our comprehensive library of AI resources including whitepapers, case studies, guides, and industry insights.',
};

export default function ResourcesPage() {
  return (
    <>
      <Hero30 />
      <Feature59 />
      <Feature60 />
      <Cta20 />
    </>
  );
}
