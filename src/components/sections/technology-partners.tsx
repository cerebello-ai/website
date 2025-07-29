import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, CheckCircle, Cpu, Shield, Zap } from 'lucide-react';

import { Button } from '../ui/button';

const partnerBenefits = [
  {
    icon: Cpu,
    title: 'API Integration',
    description:
      'Seamlessly integrate your technology platform with our AI solutions through robust APIs and SDKs.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Leverage enterprise-grade security and compliance standards for joint customer deployments.',
  },
  {
    icon: Zap,
    title: 'Joint Innovation',
    description:
      'Collaborate on cutting-edge AI solutions that combine your platform capabilities with our expertise.',
  },
];

const partnershipTypes = [
  {
    title: 'Platform Integration',
    description:
      'Integrate Cerebello AI capabilities directly into your existing platform or marketplace.',
    features: [
      'Pre-built connectors and APIs',
      'White-label AI solutions',
      'Joint go-to-market strategies',
      'Shared customer success programs',
    ],
  },
  {
    title: 'Technology Alliance',
    description:
      'Strategic partnerships that combine complementary technologies for enhanced customer value.',
    features: [
      'Joint solution development',
      'Shared technical resources',
      'Co-marketing opportunities',
      'Technical certification programs',
    ],
  },
];

const idealPartners = [
  'Cloud infrastructure providers (AWS, Azure, GCP)',
  'Enterprise software platforms (CRM, ERP, HCM)',
  'Data analytics and visualization platforms',
  'Business process management systems',
  'Industry-specific software solutions',
  'API and integration platform providers',
];

const TechnologyPartners = () => {
  return (
    <section className="bg-mint-50 py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl lg:translate-x-24">
          <h2 className="text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
            Technology Partners
          </h2>

          <h1 className="max-w-[600px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            Integrate cutting-edge AI capabilities into your technology
            platform.
          </h1>
        </div>

        {/* Large Image Below */}
        <div className="relative mt-12 flex items-start gap-4">
          <div className="max-lg:-translate-x-20">
            <Image
              src="/images/about/1.webp"
              alt="Technology integration and APIs"
              width={770}
              height={444}
              className="aspect-video object-cover"
            />
          </div>
          {/* Right Column - Image */}
          <div className="border-mint-50 -right-10 bottom-0 aspect-[1.5/1.4] w-[max(20vw,220px)] translate-y-20 max-lg:absolute max-lg:border-[16px] lg:-translate-y-20">
            <Image
              src="/images/about/2.webp"
              alt="Technology partnership collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Below Image */}
        <div className="mt-28 max-w-xl lg:mt-10 lg:translate-x-24">
          <p className="text-lg leading-6">
            Technology partnerships are at the heart of AI innovation. By
            integrating Cerebello's AI capabilities with your platform, we can
            deliver enhanced value to mutual customers while expanding the reach
            and impact of intelligent automation solutions across industries.
          </p>
        </div>

        <div className="mt-6 space-y-6 md:mt-8 md:space-y-8 lg:mt-10 lg:space-y-10">
          {/* Partner Benefits Section */}
          <h2 className="max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:translate-x-24">
            Why partner with Cerebello?
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

          {/* Partnership Types Section */}
          <h2 className="max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:translate-x-24">
            Partnership Models
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:translate-x-24">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-6 py-6 md:grid-cols-2 lg:py-10">
            <Image
              src="/images/about/3.webp"
              alt="Technology platform integration"
              width={600}
              height={400}
            />
            <Image
              src="/images/about/4.webp"
              alt="Joint solution development"
              width={600}
              height={400}
            />
          </div>

          {/* Ideal Partners Section */}
          <h2 className="max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:translate-x-24">
            Ideal Technology Partners
          </h2>
          <div className="max-w-xl lg:translate-x-24">
            <p className="mb-6 text-lg leading-6">
              We're actively seeking partnerships with technology companies that
              share our vision of making AI accessible and impactful. Ideal
              partners include:
            </p>
            <ul className="space-y-3">
              {idealPartners.map((partner, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-muted-foreground">{partner}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="ml-auto max-w-xl text-lg leading-6 lg:-translate-x-24">
            <p className="mb-6">
              Ready to explore how we can integrate AI capabilities into your
              platform? Let's discuss how a technology partnership can create
              new opportunities for innovation and growth.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 rounded-sm border"
            >
              <Link href="/contact" className="">
                <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                  Explore Partnership Opportunities
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

export default TechnologyPartners;
