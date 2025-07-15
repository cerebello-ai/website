import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { Button } from '../ui/button';

const About = () => {
  return (
    <section className="bg-mint-50 py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl lg:translate-x-24">
          <h2 className="text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
            About Us
          </h2>

          <h1 className="max-w-[600px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            We&apos;re Cerebello. We&apos;re transforming how businesses work
            through intelligent automation and AI.
          </h1>
        </div>

        {/* Large Image Below */}
        <div className="relative mt-12 flex items-start gap-4">
          <div className="max-lg:-translate-x-20">
            <Image
              src="/images/about/1.webp"
              alt="Modern workspace with an iMac displaying 'DO MORE'"
              width={770}
              height={444}
              className="aspect-video object-cover"
            />
          </div>
          {/* Right Column - Image */}
          <div className="border-mint-50 -right-10 bottom-0 aspect-[1.5/1.4] w-[max(20vw,220px)] translate-y-20 max-lg:absolute max-lg:border-[16px] lg:-translate-y-20">
            <Image
              src="/images/about/2.webp"
              alt="Person working on a laptop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Below Image */}
        <div className="mt-28 max-w-xl lg:mt-10 lg:translate-x-24">
          <p className="text-lg leading-6">
            In today&apos;s rapidly evolving business landscape, AI and
            automation are no longer optional — they&apos;re essential. We help
            organizations navigate this transformation with confidence, turning
            complex technologies into practical solutions that drive real
            results.
          </p>
        </div>

        <div className="mt-6 space-y-6 md:mt-8 md:space-y-8 lg:mt-10 lg:space-y-10">
          {/* Dynamic System Section */}
          <h2 className="max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:translate-x-24">
            We saw businesses struggling with outdated processes and untapped
            potential.
          </h2>
          <p className="max-w-xl text-lg lg:translate-x-24">
            Traditional consulting approaches weren&apos;t delivering the
            transformation businesses needed. We&apos;ve spent years
            implementing AI and automation solutions across industries,
            witnessing firsthand how the right technology can revolutionize
            operations. We believe every business deserves access to intelligent
            automation that actually works. That&apos;s why we built Cerebello —
            to bridge the gap between AI&apos;s promise and practical reality.
          </p>
          <div className="grid gap-6 py-6 md:grid-cols-2 lg:py-10">
            <Image
              src="/images/about/3.webp"
              alt="Team members collaborating"
              width={600}
              height={400}
            />
            <Image
              src="/images/about/4.webp"
              alt="Team meeting in a conference room"
              width={600}
              height={400}
            />
          </div>

          {/* Timeline Section */}
          <p className="ml-auto max-w-xl text-lg leading-6 lg:-translate-x-24">
            Founded in 2019, Cerebello emerged from a simple observation: while
            AI was transforming industries, most businesses were being left
            behind. We&apos;ve grown from a small team of AI enthusiasts to a
            trusted partner for organizations worldwide, helping them harness
            the power of intelligent automation to achieve operational
            excellence.
          </p>

          {/* Team Section */}
          <h2 className="ml-auto max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:-translate-x-24">
            We combine deep technical expertise with business acumen.
          </h2>
          <div className="ml-auto max-w-xl text-lg leading-6 lg:-translate-x-24">
            <p>
              Our team brings together AI engineers, automation specialists, and
              business strategists who understand both the technology and the
              challenges you face. We&apos;re not just consultants — we&apos;re
              partners in your transformation journey, committed to delivering
              solutions that create lasting impact. Ready to unlock your
              organization&apos;s potential?
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 mt-6 rounded-sm border md:mt-8 lg:mt-10"
            >
              <Link href="/contact" className="">
                <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                  Start Your AI Journey
                  <ArrowRight className="size-4 stroke-3" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
