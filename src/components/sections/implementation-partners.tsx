import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';

import { Button } from '../ui/button';

const partnerBenefits = [
  {
    icon: Users,
    title: 'Certified Training',
    description:
      'Comprehensive training programs to certify your team in our AI implementation methodologies and best practices.',
  },
  {
    icon: Award,
    title: 'Partner Certification',
    description:
      'Become a certified Cerebello implementation partner with access to exclusive resources and support.',
  },
  {
    icon: Zap,
    title: 'Revenue Opportunities',
    description:
      'Expand your service offerings and create new revenue streams with our proven AI solutions.',
  },
];

const partnerRequirements = [
  'Proven track record in technology consulting or system implementation',
  'Technical team with experience in AI, automation, or business process optimization',
  'Commitment to Cerebello training and certification programs',
  'Established client base in target industries',
  'Alignment with our values of excellence and client success',
];

const ImplementationPartners = () => {
  return (
    <section className="bg-mint-50 py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl lg:translate-x-24">
          <h2 className="text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
            Implementation Partners
          </h2>

          <h1 className="max-w-[600px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            Join our network of certified implementation partners and help
            businesses transform with AI.
          </h1>
        </div>

        {/* Large Image Below */}
        <div className="relative mt-12 flex items-start gap-4">
          <div className="max-lg:-translate-x-20">
            <Image
              src="/images/about/1.webp"
              alt="Implementation partners collaborating"
              width={770}
              height={444}
              className="aspect-video object-cover"
            />
          </div>
          {/* Right Column - Image */}
          <div className="border-mint-50 -right-10 bottom-0 aspect-[1.5/1.4] w-[max(20vw,220px)] translate-y-20 max-lg:absolute max-lg:border-[16px] lg:-translate-y-20">
            <Image
              src="/images/about/2.webp"
              alt="Partner training session"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Below Image */}
        <div className="mt-28 max-w-xl lg:mt-10 lg:translate-x-24">
          <p className="text-lg leading-6">
            As the demand for AI implementation grows, organizations need
            trusted partners who can deliver expert guidance and seamless
            execution. Our implementation partner program connects experienced
            consultants and technology firms with the training, tools, and
            support needed to successfully deploy Cerebello solutions at scale.
          </p>
        </div>

        <div className="mt-6 space-y-6 md:mt-8 md:space-y-8 lg:mt-10 lg:space-y-10">
          {/* Partner Benefits Section */}
          <h2 className="max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:translate-x-24">
            Why become a Cerebello implementation partner?
          </h2>

          <div className="grid gap-8 md:grid-cols-3 lg:translate-x-24">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-start space-y-4">
                <benefit.icon className="text-primary h-8 w-8" />
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 py-6 md:grid-cols-2 lg:py-10">
            <Image
              src="/images/about/3.webp"
              alt="Partner certification training"
              width={600}
              height={400}
            />
            <Image
              src="/images/about/4.webp"
              alt="Implementation partner success"
              width={600}
              height={400}
            />
          </div>

          {/* Requirements Section */}
          <h2 className="max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:translate-x-24">
            Partner Requirements
          </h2>
          <div className="max-w-xl lg:translate-x-24">
            <p className="mb-6 text-lg leading-6">
              We're looking for experienced technology partners who share our
              commitment to delivering exceptional AI implementation services.
              Ideal partners should have:
            </p>
            <ul className="space-y-3">
              {partnerRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-muted-foreground">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="max-w-xl text-lg leading-6 lg:translate-x-24">
            <p className="mb-6">
              Ready to expand your service offerings and help businesses
              transform with AI? Join our growing network of certified
              implementation partners and unlock new opportunities for growth.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 rounded-sm border"
            >
              <Link href="/contact" className="">
                <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                  Apply to Become a Partner
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

export default ImplementationPartners;
