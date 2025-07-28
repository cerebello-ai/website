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
  title: 'API Integration | Enterprise System Integration | Cerebello',
  description:
    'Connect and orchestrate your enterprise systems through robust, secure APIs. Enable seamless data exchange, automate workflows, and break down data silos with our API integration services.',
  keywords:
    'API Integration, System Integration, Enterprise APIs, RESTful APIs, Microservices, Legacy System Integration, Cloud Integration, Data Synchronization, API Management, System Interoperability',
  openGraph: {
    title: 'API Integration | Cerebello',
    description:
      'Transform fragmented processes into intelligent workflows with secure API integration. Connect systems, automate data flows, and enable real-time synchronization.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/api-integration',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API Integration | Cerebello',
    description:
      'Enable seamless system connectivity and automated workflows with enterprise API integration solutions.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/api-integration',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'government-permit-workflow',
    quote:
      'Cerebello integrated our citizen-facing portal with back-end permitting systems, eliminating redundant data entry across departments. Permit approval times decreased significantly while improving transparency for citizens.',
    author: 'Sarah Mitchell',
    company: 'Municipal Government Services',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'logistics-order-fulfillment',
    quote:
      'Our e-commerce platform now seamlessly connects to warehouse management, ERP, and delivery tracking systems. Orders move from purchase to delivery without manual hand-offs, eliminating delays and errors.',
    author: 'Marcus Chen',
    company: 'Global Logistics Solutions',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'healthcare-ehr-integration',
    quote:
      'We integrated our EHR system with patient mobile apps, lab systems, and IoT medical devices. Providers now have a 360° view of patient information in real time while maintaining strict HIPAA compliance.',
    author: 'Dr. Jennifer Adams',
    company: 'Regional Healthcare Network',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for API Integration
const apiIntegrationMethodologySteps = [
  {
    step: '01',
    title: 'Assessment & Strategy',
    subtitle: 'Integration Planning',
    description:
      'We conduct an in-depth assessment of your current systems, data flows, and pain points. Our team identifies integration opportunities that align with your business goals and automation vision.',
  },
  {
    step: '02',
    title: 'Architecture & Design',
    subtitle: 'Integration Blueprint',
    description:
      'Our architects design tailored integration solutions choosing the right approach for each use case. We define data models, API specifications, error handling, and security measures.',
  },
  {
    step: '03',
    title: 'Development & Orchestration',
    subtitle: 'API Implementation',
    description:
      'We develop custom APIs, configure integration platforms, and build the connections between systems. Our agile approach ensures incremental progress with regular reviews.',
  },
  {
    step: '04',
    title: 'Testing & Validation',
    subtitle: 'Quality Assurance',
    description:
      'Rigorous testing includes unit testing of APIs, integration testing, performance testing, and security validation. We ensure reliability, accuracy, and security under all conditions.',
  },
  {
    step: '05',
    title: 'Deployment & Training',
    subtitle: 'Go-Live Support',
    description:
      'We handle production deployment with minimal downtime and provide training to your team. Clear documentation ensures your organization can own and maintain the solution.',
  },
  {
    step: '06',
    title: 'Ongoing Support & Optimization',
    subtitle: 'Continuous Improvement',
    description:
      'Post-deployment support includes monitoring, performance tuning, and iterative enhancements. We help your integration ecosystem continuously evolve with your business.',
  },
];

// Stats and benefits data for API Integration
const apiIntegrationStats = [
  { label: 'Manual Effort Reduction', value: '85%' },
  { label: 'Process Cycle Time Improvement', value: '70%' },
  { label: 'Data Accuracy Increase', value: '95%' },
  { label: 'Integration Delivery Time', value: '8 weeks' },
];

const apiIntegrationBenefits = [
  {
    title: 'Custom & Third-Party API Connectivity',
    description:
      'Seamlessly integrate internal applications and external platforms with robust RESTful APIs and modern integration patterns',
  },
  {
    title: 'Legacy System Integration',
    description:
      'Unlock the value in existing systems by connecting legacy platforms with modern applications through API wrappers',
  },
  {
    title: 'Real-Time & Batch Data Synchronization',
    description:
      'Support both instant updates and scheduled data transfers with consistent data integrity across all systems',
  },
  {
    title: 'Secure API Governance',
    description:
      'Implement robust security, traffic management, version control, and monitoring with industry-standard governance frameworks',
  },
];

export default function ApiIntegrationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              API Integration
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Connect Systems, Automate Workflows
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Cerebello's API Integration services connect and orchestrate
                your enterprise systems through robust, secure APIs. By
                leveraging application programming interfaces to integrate
                software applications, platforms, and workflows, we enable
                seamless exchange of data and services across your organization.
                This breaks down data silos and creates unified ecosystems where
                information flows effortlessly.
              </p>

              <p>
                When systems communicate in real time, you can automate
                intelligent workflows that were previously manual and
                disconnected. Our integrations connect independent applications
                to create automated business processes, enabling real-time data
                flow between databases and enterprise applications. The result
                is reduced manual effort, faster processes, better system
                interoperability, and a scalable architecture that grows with
                your needs.
              </p>

              <p>
                Whether connecting custom legacy systems or third-party
                platforms like ERP, CRM, SaaS applications, and IoT devices, we
                transform fragmented processes into intelligent workflows. Our
                integration-first approach ensures analytics solutions that
                enhance, not uproot, your current operations while protecting
                your IT investments and accelerating time-to-value.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to connect your systems and automate your workflows?
                  Discover how API integration can transform your operations.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Integration Assessment
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
        title="Our API Integration Approach"
        description="Follow our proven methodology to connect systems and automate workflows"
        steps={apiIntegrationMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Integration Success Metrics"
        description="Our API integration solutions deliver measurable improvements in efficiency and accuracy"
        badge="Performance Results"
        stats={apiIntegrationStats}
        benefits={apiIntegrationBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Automation Strategy"
        description="Our API Integration service works seamlessly with our other automation and AI solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Integration Success Stories"
        description="See how organizations have streamlined operations and eliminated manual processes with our API integration solutions, achieving seamless connectivity and automated workflows."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Connect Your Systems?"
        description="Join organizations that have eliminated data silos and automated workflows with secure API integration. Transform fragmented processes into intelligent, connected operations."
        primaryButtonText="Start Your Integration Journey"
        primaryButtonHref="/contact"
        secondaryButtonText="Schedule Demo"
        secondaryButtonHref="/contact"
        footerText="Integration strategy consultation • Custom APIs • Seamless connectivity"
      />
    </>
  );
}
