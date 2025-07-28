import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { FeatureProcessMethodology } from '@/components/sections/feature/feature-process-methodology';
import { RelatedSolutions } from '@/components/sections/related-solutions';
import { StatsProcessAnalysis } from '@/components/sections/stats-process-analysis';
import Testimonials from '@/components/sections/testimonials';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Mobile Solutions | Custom App Development | Cerebello',
  description:
    'High-quality native and cross-platform mobile applications tailored to your business needs. User-centered design with robust security, scalability, and performance.',
  keywords:
    'Mobile App Development, Native iOS Android, Cross-Platform Apps, Mobile Solutions, Enterprise Mobile Apps, Custom Mobile Development, React Native, Flutter, Mobile UX Design, App Store Deployment',
  openGraph: {
    title: 'Mobile Solutions | Cerebello',
    description:
      'Custom mobile applications with user-centered design and enterprise-grade performance. Native and cross-platform development expertise.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/mobile-solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Solutions | Cerebello',
    description:
      'High-quality mobile app development with user-centered design. Native iOS/Android and cross-platform solutions.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/mobile-solutions',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'field-operations-app',
    quote:
      'Our mobile field operations app transformed how our technicians access critical systems on-the-go. The intuitive design and offline capabilities increased productivity by 30% while reducing paperwork and errors.',
    author: 'Mark Johnson',
    company: 'Industrial Services Company',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'customer-engagement-app',
    quote:
      'The cross-platform customer app we built increased user engagement by 45% and drove 25% more conversions. The smooth performance across iOS and Android exceeded our expectations.',
    author: 'Sarah Chen',
    company: 'Retail Enterprise',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'executive-dashboard-mobile',
    quote:
      'Our mobile executive dashboard provides real-time access to critical metrics anywhere. The intuitive interface and rich visualizations enable faster decision-making for our leadership team.',
    author: 'David Rodriguez',
    company: 'Manufacturing Corporation',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Mobile Solutions
const mobileSolutionsMethodologySteps = [
  {
    step: '01',
    title: 'Discovery & UX Design',
    subtitle: 'User-Centered Foundation',
    description:
      'Understand your vision, business requirements, and end-user needs through stakeholder workshops. Create wireframes and interactive prototypes to validate app concept and workflows.',
  },
  {
    step: '02',
    title: 'Architecture Planning',
    subtitle: 'Technical Foundation Design',
    description:
      'Plan scalable, maintainable architecture with strategic decisions on native vs cross-platform development. Design app structure, tech stack, data storage, and integration points.',
  },
  {
    step: '03',
    title: 'Iterative Development',
    subtitle: 'Agile Implementation',
    description:
      'Implement app features in agile sprints with continuous feedback. Cross-functional teams ensure each feature meets specifications and aligns with desired user experience.',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    subtitle: 'Comprehensive Validation',
    description:
      'Rigorous testing across devices and operating systems including functional, usability, performance, and security assessments to ensure stability and reliability.',
  },
  {
    step: '05',
    title: 'Deployment & Launch',
    subtitle: 'App Store Success',
    description:
      'Handle App Store and Google Play submission process including assets preparation, review guidelines compliance, and smooth rollout management for successful launch.',
  },
  {
    step: '06',
    title: 'Support & Maintenance',
    subtitle: 'Ongoing Partnership',
    description:
      'Provide long-term support with regular updates for OS compatibility, security patches, and feature enhancements to keep your mobile solution valuable and current.',
  },
];

// Stats and benefits data for Mobile Solutions
const mobileSolutionsStats = [
  { label: 'User Engagement Increase', value: '45%' },
  { label: 'Productivity Improvement', value: '30%' },
  { label: 'Conversion Rate Boost', value: '25%' },
  { label: 'Development to Deployment', value: '16 weeks' },
];

const mobileSolutionsBenefits = [
  {
    title: 'Native & Cross-Platform Expertise',
    description:
      'Deep platform-specific knowledge for iOS and Android with cross-platform frameworks like React Native and Flutter for optimal solution choice',
  },
  {
    title: 'User-Centered Design Excellence',
    description:
      'Intuitive interfaces backed by UX research, creating mobile apps that are simple, enjoyable, and highly interactive for maximum user adoption',
  },
  {
    title: 'Enterprise-Grade Performance',
    description:
      'Scalable architecture designed for fast load times, smooth performance, and growth in users and data volume without degradation',
  },
  {
    title: 'Robust Security & Integration',
    description:
      'Secure mobile architecture with encryption, authentication, and seamless integration with backend systems and enterprise platforms',
  },
];

export default function MobileSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Mobile Solutions
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Custom Mobile App Development
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                In today's mobile-first world, robust mobile applications are
                essential for engaging customers and empowering employees.
                Cerebello's Mobile Solutions service focuses on designing and
                building high-quality native and cross-platform mobile
                applications tailored to your business needs, emphasizing
                user-centered design and enterprise-grade performance.
              </p>

              <p>
                Our team has deep expertise in both native iOS/Android
                development and modern cross-platform frameworks. We choose the
                best approach for each project – leveraging native development
                for maximum performance or using cross-platform development to
                accelerate delivery and reduce costs. This flexibility allows us
                to rapidly bring your ideas to life on all major platforms
                without compromising quality.
              </p>

              <p>
                From operational tools and customer-facing apps to internal
                productivity solutions and mobile dashboards, we build each
                mobile solution with a user-first mindset, performant and
                scalable technical foundation, and secure architecture that
                protects data. We deliver mobile apps that fulfill immediate
                requirements while delighting end-users and evolving with your
                business.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to build your mobile solution? Discover how custom
                  mobile app development can transform your business operations.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Mobile Consultation
                      <ArrowRight className="size-4 stroke-3" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <FeatureProcessMethodology
        title="Our Mobile Development Process"
        description="Follow our proven approach to creating exceptional mobile applications"
        steps={mobileSolutionsMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Mobile App Performance Metrics"
        description="Our mobile solutions deliver measurable improvements in user engagement and business outcomes"
        badge="Development Results"
        stats={mobileSolutionsStats}
        benefits={mobileSolutionsBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Digital Platform"
        description="Our Mobile Solutions service integrates seamlessly with our web development and AI implementation capabilities"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Mobile Success Stories"
        description="See how organizations have transformed their operations and customer engagement with custom mobile applications, achieving significant productivity gains and user satisfaction."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Build Your Mobile Application?"
        description="Join organizations that have transformed their mobile presence with custom applications. Create mobile solutions that deliver exceptional user experiences and drive business results."
        primaryButtonText="Start Your Mobile Project"
        primaryButtonHref="/contact"
        secondaryButtonText="Mobile Development Consultation"
        secondaryButtonHref="/contact"
        footerText="Native & cross-platform • User-centered design • Enterprise security"
      />
    </>
  );
}
