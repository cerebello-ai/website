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
  title: 'System Integration | Enterprise Integration Solutions | Cerebello',
  description:
    'Unify disparate systems into cohesive workflows. Connect ERPs, CRMs, AI models, and legacy systems with secure APIs, middleware, and hybrid cloud integration solutions.',
  keywords:
    'System Integration, Enterprise Integration, API Integration, Legacy System Integration, Hybrid Cloud Integration, Middleware, ERP Integration, CRM Integration, Data Integration, Enterprise Architecture',
  openGraph: {
    title: 'System Integration | Cerebello',
    description:
      'Connect all your enterprise systems into a seamless ecosystem. From legacy modernization to hybrid cloud integration.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/system-integration',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'System Integration | Cerebello',
    description:
      'Unify enterprise systems with secure integration solutions. Break down data silos and enable seamless workflows.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/system-integration',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'erp-crm-integration',
    quote:
      'Cerebello unified our ERP, CRM, and analytics platforms into one seamless ecosystem. We eliminated manual data entry and reduced processing time by 60% while maintaining complete data consistency across departments.',
    author: 'Alexandra Martinez',
    company: 'Manufacturing Enterprise',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'legacy-modernization',
    quote:
      'Our 20-year-old legacy system now works seamlessly with modern cloud applications. The API wrapper approach preserved our critical operations while enabling new digital capabilities without massive capital expenditure.',
    author: 'Thomas Chen',
    company: 'Financial Services Group',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'hybrid-cloud-integration',
    quote:
      'The hybrid integration solution bridges our on-premise database with cloud-based SaaS platforms flawlessly. Secure, high-performance data flow enables real-time decision-making across all business units.',
    author: 'Jennifer Rodriguez',
    company: 'Healthcare Network',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for System Integration
const systemIntegrationMethodologySteps = [
  {
    step: '01',
    title: 'Architecture Analysis',
    subtitle: 'Comprehensive IT Assessment',
    description:
      'Thoroughly analyze current IT architecture, business workflows, and requirements. Identify all systems, data sources, and pain points to design optimal integration architecture.',
  },
  {
    step: '02',
    title: 'Connector Design',
    subtitle: 'Integration Interface Planning',
    description:
      'Design connectors and interfaces for each integration point using RESTful APIs, web services, or middleware. Ensure compatibility and optimal performance between systems.',
  },
  {
    step: '03',
    title: 'Data Mapping & Transformation',
    subtitle: 'Unified Data Language',
    description:
      'Map data fields and business logic between systems, creating transformation rules to ensure information is interpretable across all applications with maintained integrity.',
  },
  {
    step: '04',
    title: 'Implementation & Security',
    subtitle: 'Robust Solution Development',
    description:
      'Implement integration solutions with custom code, middleware components, and security measures including authentication, encryption, and access controls.',
  },
  {
    step: '05',
    title: 'Testing & Validation',
    subtitle: 'Comprehensive Quality Assurance',
    description:
      'Conduct rigorous testing including unit tests, integration tests, and user acceptance testing to verify data integrity, performance, and business process functionality.',
  },
  {
    step: '06',
    title: 'Optimization & Deployment',
    subtitle: 'Production Excellence',
    description:
      'Deploy to production with performance monitoring and optimization. Provide ongoing support, documentation, and continuous improvement as business needs evolve.',
  },
];

// Stats and benefits data for System Integration
const systemIntegrationStats = [
  { label: 'Data Processing Time Reduction', value: '60%' },
  { label: 'Manual Entry Elimination', value: '85%' },
  { label: 'System Uptime Improvement', value: '99.9%' },
  { label: 'Integration Delivery Time', value: '12 weeks' },
];

const systemIntegrationBenefits = [
  {
    title: 'Seamless Enterprise Connectivity',
    description:
      'Robust integrations linking core systems (ERP, CRM, databases) and SaaS applications into one interoperable network with unified data views',
  },
  {
    title: 'API Orchestration & Middleware',
    description:
      'Custom APIs and middleware that orchestrate communication between services with standardized, real-time interactions and easy scalability',
  },
  {
    title: 'Legacy System Modernization',
    description:
      'Extend legacy system value through API wrappers and modern interfaces without altering core code or requiring costly full replacements',
  },
  {
    title: 'Secure Hybrid Cloud Integration',
    description:
      'Bridge cloud and on-premise environments with encrypted data pipelines, access controls, and compliance-ready security frameworks',
  },
];

export default function SystemIntegrationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              System Integration
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Unify Your Enterprise Systems
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                In today's complex IT landscape, businesses rely on a multitude
                of applications – from ERPs and CRMs to data analytics tools,
                RPA bots, and AI models – that often operate in isolation.
                System Integration is the process of unifying these disparate
                systems into a cohesive workflow, making data sharing seamless
                and ensuring consistency across your organization.
              </p>

              <p>
                Cerebello's System Integration services connect all your
                enterprise systems, data platforms, automation tools, AI
                components, and third-party services into a unified ecosystem.
                By connecting different systems, organizations can eliminate
                manual data entry, reduce duplicate efforts, and automate
                repetitive tasks – saving time and minimizing errors while
                creating a single source of truth for better decision-making.
              </p>

              <p>
                Our integration solutions emphasize secure data flow across
                cloud and on-premises environments, ensuring legacy and modern
                platforms work together seamlessly. We break down data silos and
                unify processes, enabling real-time information exchange through
                robust APIs, middleware, and hybrid cloud integration approaches
                that scale with your business needs.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to unify your enterprise systems? Discover how
                  comprehensive integration can transform your operational
                  efficiency.
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
        title="Our Integration Process"
        description="Follow our proven approach to unifying enterprise systems securely and efficiently"
        steps={systemIntegrationMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Integration Performance Impact"
        description="Our system integration solutions deliver measurable improvements in efficiency and data consistency"
        badge="Integration Results"
        stats={systemIntegrationStats}
        benefits={systemIntegrationBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Integration Strategy"
        description="Our System Integration service works seamlessly with our API development, data analytics, and automation solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Integration Success Stories"
        description="See how organizations have unified their enterprise systems, eliminating data silos and achieving seamless workflows with significant efficiency improvements."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Unify Your Enterprise Systems?"
        description="Join organizations that have transformed their operations through comprehensive system integration. Break down data silos and create seamless workflows that drive efficiency and innovation."
        primaryButtonText="Start Your Integration Project"
        primaryButtonHref="/contact"
        secondaryButtonText="Integration Consultation"
        secondaryButtonHref="/contact"
        footerText="Enterprise integration • Secure data flow • Legacy modernization"
      />
    </>
  );
}
