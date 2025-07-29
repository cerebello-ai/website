import { Metadata } from 'next';

import StrategicPartners from '@/components/sections/strategic-partners';

export const metadata: Metadata = {
  title: 'Strategic Partners | Cerebello',
  description:
    'Discover strategic partnerships with Cerebello. Collaborate with industry leaders to deliver innovative AI solutions and drive mutual growth.',
};

export default function StrategicPartnersPage() {
  return (
    <>
      <StrategicPartners />
    </>
  );
}
