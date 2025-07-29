import Image from 'next/image';
import Link from 'next/link';

import { Euro, Clock, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

import { Feature1 } from '@/components/sections/feature1';
import { Cta4 } from '@/components/shadcnblocks/cta/cta4';
import { StructuredData } from '@/components/structured-data';
import { generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Case Studies | Real AI Success Stories | Cerebello',
  description:
    'Explore real-world success stories and see how organizations across the Netherlands are achieving operational excellence through AI-driven automation.',
  keywords:
    'AI case studies, automation success stories, ROI case studies, digital transformation examples, AI implementation results',
  openGraph: {
    title: 'Case Studies - Real AI Implementation Success | Cerebello',
    description:
      "Discover how leading organizations transformed their operations with Cerebello's AI solutions. Real results, real impact.",
    type: 'article',
    url: 'https://cerebello.nl/case-studies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Success Stories | Cerebello Case Studies',
    description:
      'See how companies achieved 200% ROI and transformed their operations with AI.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/case-studies',
  },
};

const caseStudiesData = {
  overview: {
    title: 'Real Results from Real Implementations',
    description:
      "Discover how leading companies across the Netherlands and beyond are leveraging Cerebello's AI solutions to drive efficiency, reduce costs, and unlock new opportunities.",
  },
  caseStudies: [
    {
      id: 1,
      title: 'AI-Powered On-Premise Email Client for Samsung',
      description:
        'Discover how Samsung transformed their email management with AI-driven solutions',
      image:
        'https://images.unsplash.com/photo-1623588958271-8c019027feed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      companyLogo: '/images/clients/white/samsung.svg',
      href: '/case-studies/samsung',
      metrics: '75% faster response times, 100% data security compliance',
    },
    {
      id: 2,
      title: 'AI-Powered Process Automation in Telecom for Ziggo',
      description:
        'Learn how Ziggo improved operations with AI-driven automation',
      image:
        'https://images.unsplash.com/photo-1617687440536-233b5d10d43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      companyLogo: '/images/clients/white/ziggo.svg',
      href: '/case-studies/ziggo',
      metrics: '40% faster response times, 60% reduction in processing time',
    },
    {
      id: 3,
      title: 'Smart Public Services with AI for Stadswerk072',
      description:
        'See how Stadswerk072 enhanced citizen services with AI-driven automation',
      image:
        'https://images.unsplash.com/photo-1677459036397-50b237229166?q=80&w=2724&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      companyLogo: '/images/clients/white/stadswerk072.svg',
      href: '/case-studies/stadswerk072',
      metrics:
        '70% of queries handled autonomously, improved resident satisfaction',
    },
    // {
    //   id: 4,
    //   title: 'Manufacturing Process Automation',
    //   description: 'Explore how TechManu automated quality control',
    //   image: '/images/case-study-manufacturing.jpg',
    //   companyLogo: '/images/logos/techmanu.svg',
    //   href: '/case-studies/techmanu',
    //   metrics: '40% defect reduction, 25% cost savings',
    // },
    // {
    //   id: 5,
    //   title: 'Retail Inventory Intelligence',
    //   description: 'Learn how RetailMax optimized inventory management',
    //   image: '/images/case-study-retail.jpg',
    //   companyLogo: '/images/logos/retailmax.svg',
    //   href: '/case-studies/retailmax',
    //   metrics: '30% inventory reduction, 95% accuracy',
    // },
    // {
    //   id: 6,
    //   title: 'Energy Grid Optimization',
    //   description: 'See how PowerGrid enhanced energy distribution',
    //   image: '/images/case-study-energy.jpg',
    //   companyLogo: '/images/logos/powergrid.svg',
    //   href: '/case-studies/powergrid',
    //   metrics: '20% efficiency gain, €5M annual savings',
    // },
  ],
  additionalMetrics: {
    title: 'Impact Across Our Client Base',
    metrics: [
      {
        value: '€2M+',
        label: 'Total Cost Savings',
        description: 'Delivered to our clients',
        icon: Euro,
      },
      {
        value: '1.5M+',
        label: 'Hours Automated',
        description: 'Manual work eliminated',
        icon: Clock,
      },
      {
        value: '87%',
        label: 'Implementation Success',
        description: 'Projects on-time and on-budget',
        icon: CheckCircle,
      },
    ],
  },
  cta: {
    title: 'Ready to Write Your Success Story?',
    description:
      'Get a personalized AI assessment and discover how your business can achieve similar results with our proven methodology.',
    buttonText: 'Start Free AI Scan',
    buttonUrl: '/services/ai-scan',
    items: [
      '10-minute assessment',
      'Personalized recommendations',
      'Implementation roadmap',
      'ROI projections',
    ],
  },
};

export default function CaseStudiesPage() {
  const structuredData = [
    generateWebPageSchema({
      name: 'Case Studies | Real AI Success Stories | Cerebello',
      description:
        'Explore real-world success stories and see how organizations across the Netherlands are achieving operational excellence through AI-driven automation.',
      url: '/case-studies',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-studies' },
      ],
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      {/* Page Header */}
      <section className="from-mint-50 to-mint-100 bg-gradient-to-br py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {caseStudiesData.overview.title}
            </h1>
            <p className="text-sand-700 font-inter-tight mt-3 text-xl leading-8 font-medium md:text-2xl lg:text-3xl">
              {caseStudiesData.overview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Based on Casestudies1 */}
      <section className="bg-mint py-16 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto grid max-w-2xl gap-6 lg:max-w-5xl lg:grid-cols-2">
            {/* Large featured case study */}
            <Link
              href={caseStudiesData.caseStudies[0].href}
              className="group bg-card border-mint relative row-span-2 flex aspect-square h-full flex-col justify-between gap-6 overflow-hidden rounded-xl py-6 text-emerald-600 shadow-none transition-all lg:aspect-auto lg:p-10"
            >
              <Image
                src={caseStudiesData.caseStudies[0].image}
                alt={caseStudiesData.caseStudies[0].title}
                fill
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="from-foreground/80 to-foreground/10 absolute inset-0 bg-linear-to-t"></div>
              <img
                src={caseStudiesData.caseStudies[0].companyLogo}
                alt="logo"
                className="isolate h-7 w-fit"
              />
              <div className="isolate">
                <div className="text-background/80 mb-2 text-sm font-medium">
                  {caseStudiesData.caseStudies[0].metrics}
                </div>
              </div>
            </Link>

            {/* Regular case studies */}
            {caseStudiesData.caseStudies.slice(1, 3).map((study) => (
              <Link
                key={study.id}
                href={study.href}
                className="group shadow-nonemd:aspect-2/1 relative flex aspect-3/2 h-full flex-col justify-between overflow-hidden rounded-xl p-6 lg:p-10"
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="from-foreground/80 to-foreground/10 absolute inset-0 bg-linear-to-t"></div>
                <img
                  src={study.companyLogo}
                  alt="logo"
                  className="isolate h-7 w-fit"
                />
                <div className="isolate">
                  <div className="text-background/80 mb-2 text-sm font-medium">
                    {study.metrics}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Metrics Section */}
      <Feature1
        title={caseStudiesData.additionalMetrics.title}
        description=""
        metrics={caseStudiesData.additionalMetrics.metrics}
      />

      {/* Call to Action */}
      <Cta4
        title={caseStudiesData.cta.title}
        description={caseStudiesData.cta.description}
        buttonText={caseStudiesData.cta.buttonText}
        buttonUrl={caseStudiesData.cta.buttonUrl}
        items={caseStudiesData.cta.items}
      />
    </>
  );
}
