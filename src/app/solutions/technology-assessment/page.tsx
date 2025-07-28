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
  title: 'Technology Assessment | AI Infrastructure Readiness | Cerebello',
  description:
    'Evaluate your technology landscape for AI and automation readiness. Comprehensive assessment of systems, infrastructure, data architecture, and security to enable successful AI adoption.',
  keywords:
    'Technology Assessment, AI Infrastructure, Legacy System Modernization, Cloud Readiness, Data Architecture, API Integration, Security Compliance, Digital Transformation, IT Assessment, AI Readiness',
  openGraph: {
    title: 'Technology Assessment | Cerebello',
    description:
      'Ensure AI-ready infrastructure with comprehensive technology assessment. Identify gaps, mitigate risks, and create actionable roadmaps for transformation.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/technology-assessment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Assessment | Cerebello',
    description:
      'Comprehensive evaluation of your technology landscape for AI and automation readiness. Expert assessment and strategic roadmaps.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/technology-assessment',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'government-legacy-modernization',
    quote:
      "Cerebello's assessment of our decades-old systems provided a clear modernization roadmap. We successfully migrated from COBOL mainframes to secure cloud environments while maintaining compliance and citizen services.",
    author: 'Patricia Williams',
    company: 'Government Agency',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'logistics-cloud-migration',
    quote:
      'The Technology Assessment revealed critical bandwidth and scalability constraints before our AI implementation. The phased cloud migration strategy enabled us to process IoT data and run real-time routing algorithms without bottlenecks.',
    author: 'Roberto Martinez',
    company: 'Global Logistics Company',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'healthcare-interoperability-audit',
    quote:
      'Our interoperability assessment identified gaps in data exchange across multiple EHR systems. Implementing FHIR-standard APIs and integration middleware enabled real-time AI analytics while maintaining HIPAA compliance.',
    author: 'Dr. Michelle Chen',
    company: 'Healthcare Network',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Technology Assessment
const technologyAssessmentMethodologySteps = [
  {
    step: '01',
    title: 'Discovery & Inventory',
    subtitle: 'Comprehensive System Analysis',
    description:
      'Conduct stakeholder interviews and inventory all systems, data, and infrastructure. Understand business goals, current architecture, pain points, and ongoing digital initiatives.',
  },
  {
    step: '02',
    title: 'Architecture Mapping',
    subtitle: 'Infrastructure Documentation',
    description:
      'Document existing IT architecture including hardware, software, integrations, and data flows. Identify legacy platforms, data silos, and potential AI use cases with significant ROI.',
  },
  {
    step: '03',
    title: 'Gap Analysis',
    subtitle: 'AI Readiness Evaluation',
    description:
      'Compare current state against AI readiness criteria across cloud scalability, data quality, interoperability standards, and security protocols. Identify critical gaps and dependencies.',
  },
  {
    step: '04',
    title: 'AI-Readiness Scoring',
    subtitle: 'Maturity Assessment',
    description:
      'Assign quantitative AI-readiness scores across key domains like data infrastructure, compute capacity, integration capability, and governance. Provide clear benchmarks for transformation.',
  },
  {
    step: '05',
    title: 'Roadmap Generation',
    subtitle: 'Strategic Action Plan',
    description:
      'Deliver tailored Technology Improvement Roadmap with prioritized initiatives, quick wins, and long-term projects. Include concrete recommendations tied to business outcomes and timelines.',
  },
  {
    step: '06',
    title: 'Implementation Support',
    subtitle: 'Execution Guidance',
    description:
      'Provide ongoing support for roadmap execution including system upgrades, data pipeline enhancements, security fixes, and new platform integration as needed.',
  },
];

// Stats and benefits data for Technology Assessment
const technologyAssessmentStats = [
  { label: 'Legacy System Dependency', value: '70%+' },
  { label: 'AI Project Risk Reduction', value: '60%' },
  { label: 'Infrastructure ROI Improvement', value: '40%' },
  { label: 'Assessment to Action Timeline', value: '4 weeks' },
];

const technologyAssessmentBenefits = [
  {
    title: 'Legacy System Compatibility',
    description:
      'Evaluate existing systems for AI integration potential and identify modernization requirements or API bridge solutions',
  },
  {
    title: 'Cloud Infrastructure Readiness',
    description:
      'Assess scalability, compute capacity, and hybrid cloud capabilities needed for AI workloads and data processing',
  },
  {
    title: 'Data Architecture & Quality',
    description:
      'Analyze data silos, quality issues, and integration maturity to ensure AI models have access to reliable, unified data',
  },
  {
    title: 'Security & Compliance Posture',
    description:
      'Review security protocols, compliance requirements, and governance frameworks needed for responsible AI deployment',
  },
];

export default function TechnologyAssessmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Technology Assessment
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Ensure AI-Ready Infrastructure
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                In today's AI-driven landscape, many core systems powering
                businesses were never built to support modern technologies,
                making integration with AI solutions complex. Cerebello's
                Technology Assessment provides structured evaluation of your
                current technology landscape – systems, infrastructure, data,
                and tools – to map capabilities, pinpoint gaps, and recommend
                fixes for successful AI and automation adoption.
              </p>

              <p>
                Even the most ambitious AI initiative can stall if the
                underlying tech foundation isn't prepared. Our comprehensive
                assessment identifies hidden pitfalls like siloed data or
                brittle legacy apps before they derail projects. This upfront
                diligence aligns investments with strategy, ensuring resources
                target areas of highest impact rather than spreading efforts too
                thin.
              </p>

              <p>
                We examine everything from legacy system compatibility and cloud
                infrastructure readiness to data architecture, API integration
                maturity, and security compliance posture. The result is clear
                understanding of risks and opportunities, feeding into a
                strategic roadmap that transforms your technology landscape from
                current state to an AI-enabled future with confidence and
                minimal disruption.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to evaluate your AI readiness? Discover how
                  comprehensive technology assessment can de-risk your
                  transformation.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Technology Assessment
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
        title="Our Assessment Methodology"
        description="Follow our proven approach to evaluate and enhance your technology readiness for AI"
        steps={technologyAssessmentMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Technology Readiness Impact"
        description="Our assessments deliver measurable risk reduction and infrastructure optimization for AI success"
        badge="Assessment Results"
        stats={technologyAssessmentStats}
        benefits={technologyAssessmentBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Technology Transformation"
        description="Our Technology Assessment service integrates with our full AI implementation and infrastructure modernization capabilities"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Assessment Success Stories"
        description="See how organizations have transformed their technology foundations through comprehensive assessment, enabling successful AI adoption while maintaining security and compliance."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Assess Your AI Readiness?"
        description="Join organizations that have de-risked their AI transformation through comprehensive technology assessment. Build the foundation for successful automation and intelligent systems."
        primaryButtonText="Start Your Assessment"
        primaryButtonHref="/contact"
        secondaryButtonText="Technology Consultation"
        secondaryButtonHref="/contact"
        footerText="Technology evaluation • Infrastructure roadmap • Risk mitigation"
      />
    </>
  );
}
