import { Metadata } from 'next';

import TechnologyPartners from '@/components/sections/technology-partners';

export const metadata: Metadata = {
  title: 'Technology Partners | Cerebello',
  description:
    'Explore technology partnerships with Cerebello. Integrate cutting-edge AI solutions with leading technology platforms.',
};

export default function TechnologyPartnersPage() {
  return (
    <>
      <TechnologyPartners />
    </>
  );
}
