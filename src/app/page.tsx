import { FAQ } from '@/components/sections/faq';
import { Feature1 } from '@/components/sections/feature1';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
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
