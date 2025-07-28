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
  title: 'Digital Transformation | AI Strategy Consulting | Cerebello',
  description:
    'Navigate your AI-driven digital transformation with strategic consulting and expert guidance. From readiness assessment to enterprise-wide AI implementation and governance.',
  keywords:
    'Digital Transformation, AI Strategy, AI Transformation, Strategic Consulting, AI Readiness Assessment, Change Management, AI Governance, Enterprise AI, Digital Strategy, AI Implementation',
  openGraph: {
    title: 'Digital Transformation | Cerebello',
    description:
      'Transform your enterprise with AI-driven digital transformation strategy. Expert guidance from vision to scaled implementation.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/digital-transformation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation | Cerebello',
    description:
      'Strategic consulting for AI-driven digital transformation. From assessment to enterprise-wide implementation.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/digital-transformation',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'global-manufacturer',
    quote:
      'Cerebello guided our AI-driven predictive maintenance transformation. We reduced unplanned equipment downtime by 25% and maintenance costs by 20%, saving millions in the first year while scaling across 10 production sites.',
    author: 'James Peterson',
    company: 'Global Manufacturing Corp',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'retail-enterprise',
    quote:
      'Our AI transformation strategy delivered a 10% boost in online conversion rates and 8% increase in average order value within 6 months. The ROI was 5x in the first year, building momentum for company-wide AI adoption.',
    author: 'Maria González',
    company: 'Omni-Channel Retail Group',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'financial-services',
    quote:
      'Cerebello helped us establish an AI Transformation Office and governance framework. We scaled from isolated pilots to 50+ coordinated AI use cases, improving fraud detection by 25% while cutting false positives by 50%.',
    author: 'David Chen',
    company: 'Global Financial Services',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Digital Transformation
const digitalTransformationMethodologySteps = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    subtitle: 'AI Readiness Evaluation',
    description:
      'We conduct comprehensive diagnostic of your digital/AI maturity, evaluating strategy alignment, data readiness, technology stack, and skillsets to identify opportunities and ground strategy in reality.',
  },
  {
    step: '02',
    title: 'Strategy Co-Creation',
    subtitle: 'Vision & Roadmap Development',
    description:
      'Interactive workshops with key stakeholders to co-create AI transformation strategy, refine vision, prioritize use cases, and gain broad organizational buy-in through collaborative approach.',
  },
  {
    step: '03',
    title: 'Roadmap & Pilot Planning',
    subtitle: 'Implementation Blueprint',
    description:
      'Develop detailed implementation roadmap with 1-3 high-impact pilot projects designed to deliver tangible value in 3-6 months, creating momentum and lessons for scaling.',
  },
  {
    step: '04',
    title: 'Execution Support',
    subtitle: 'Pilot to Scale',
    description:
      'Support pilot implementation with regular check-ins, progress monitoring, and KPI measurement. Prepare successful pilots for scale-up with operating model and governance frameworks.',
  },
  {
    step: '05',
    title: 'Governance & Change Stewardship',
    subtitle: 'Sustained Transformation',
    description:
      'Establish ongoing governance routines, dashboards, and AI governance structures. Support internal communications and training efforts to sustain cultural change and capability building.',
  },
  {
    step: '06',
    title: 'Continuous Optimization',
    subtitle: 'Long-term Success',
    description:
      'Ongoing monitoring of outcomes, adoption metrics, and risk factors. Regular strategy refinement and capability expansion to ensure transformation delivers lasting competitive advantage.',
  },
];

// Stats and benefits data for Digital Transformation
const digitalTransformationStats = [
  { label: 'Organizations Achieving AI Scale', value: '20%' },
  { label: 'Equipment Downtime Reduction', value: '25%' },
  { label: 'Average ROI from AI Initiatives', value: '5x' },
  { label: 'Pilot to Production Timeline', value: '6 months' },
];

const digitalTransformationBenefits = [
  {
    title: 'AI Readiness Assessment',
    description:
      'Comprehensive evaluation of data, technology infrastructure, and talent capabilities to establish transformation baseline',
  },
  {
    title: 'Strategic Vision & Use Case Prioritization',
    description:
      'Define AI vision aligned with business priorities and identify high-ROI use cases for maximum impact',
  },
  {
    title: 'Phased Implementation Roadmap',
    description:
      'Structured journey from quick-win pilots to enterprise-wide deployment with measurable milestones',
  },
  {
    title: 'Change Management & AI Governance',
    description:
      'Robust governance structures, ethics frameworks, and organizational change programs for sustained adoption',
  },
];

export default function DigitalTransformationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Digital Transformation
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Strategic AI Transformation Consulting
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Artificial intelligence has become a core pillar of digital
                transformation, yet many enterprises remain stuck in pilot
                projects and ad-hoc experiments. Studies show that 64% of
                business leaders anticipate AI will fundamentally change their
                operations within three years, but fewer than 20% have moved
                beyond experimentation to achieve meaningful impact at scale.
              </p>

              <p>
                Cerebello helps organizations break out of this pattern by
                providing structured, AI-focused transformation strategy. Unlike
                general digitization efforts that simply digitize existing
                processes, our AI transformation rethinks how work is done by
                embedding AI into the business core. We guide enterprises to
                harness AI in alignment with their strategic goals, ensuring
                initiatives are driven by business purpose, not hype.
              </p>

              <p>
                Our consulting service helps you assess readiness, define
                vision, and craft pragmatic roadmaps that move AI from isolated
                experiments to enterprise-wide capability delivering competitive
                advantage. We provide the strategic insight, hands-on
                experience, and partnership mentality needed to shift from
                opportunistic AI tinkering to transformative, scalable impact
                backed by executive buy-in and strong governance.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to accelerate your AI transformation? Discover how
                  strategic consulting can unlock AI's potential in your
                  enterprise.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Strategy Session
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
        title="Our Transformation Methodology"
        description="Follow our proven approach to AI-driven digital transformation"
        steps={digitalTransformationMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Transformation Impact Metrics"
        description="Our strategic guidance delivers measurable transformation outcomes across industries"
        badge="Success Metrics"
        stats={digitalTransformationStats}
        benefits={digitalTransformationBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Transformation Journey"
        description="Our Digital Transformation consulting integrates with our full suite of AI and automation solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Transformation Success Stories"
        description="See how organizations have achieved enterprise-wide AI impact with our strategic guidance, moving from pilots to scaled transformation with measurable ROI."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Transform Your Enterprise with AI?"
        description="Join leading organizations that have moved beyond AI experiments to achieve scaled, transformative impact. Let our strategic consulting guide your journey from vision to enterprise-wide AI capability."
        primaryButtonText="Start Your Transformation"
        primaryButtonHref="/contact"
        secondaryButtonText="Strategy Consultation"
        secondaryButtonHref="/contact"
        footerText="Strategic consulting • AI readiness assessment • Transformation roadmap"
      />
    </>
  );
}
