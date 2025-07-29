import { Metadata } from 'next';

import ImplementationPartners from '@/components/sections/implementation-partners';

export const metadata: Metadata = {
  title: 'Implementation Partners | Cerebello',
  description:
    'Partner with Cerebello to deliver expert AI implementation services. Join our network of certified implementation partners.',
};

export default function ImplementationPartnersPage() {
  return (
    <>
      <ImplementationPartners />
    </>
  );
}
