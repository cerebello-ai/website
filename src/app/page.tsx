import { FAQ } from '@/components/sections/faq';
import { Feature1 } from '@/components/sections/feature1';
import { Feature2 } from '@/components/sections/feature2';
import { Feature3 } from '@/components/sections/feature3';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import Pricing from '@/components/sections/pricing';
import Testimonials from '@/components/sections/testimonials';
import { Logos2 } from '@/components/shadcnblocks/logos/logos2';

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Feature1 />
      {/* <Feature2 />
      <Feature3 /> */}
      <Logos2 />
      <Testimonials />
      <FAQ />
    </>
  );
}
