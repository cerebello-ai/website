import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { FeatureProcessMethodology } from '@/components/sections/feature/feature-process-methodology';
import { RelatedSolutions } from '@/components/sections/related-solutions';
import { StatsProcessAnalysis } from '@/components/sections/stats-process-analysis';
import Testimonials from '@/components/sections/testimonials';
import { Button } from '@/components/ui/button';
import { StructuredData } from '@/components/structured-data';
import { generateServiceSchema, generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Process Analysis | AI-Powered Business Optimization | Cerebello',
  description:
    'Systematic analysis of business workflows to identify AI automation opportunities and efficiency improvements. Discover hidden inefficiencies through comprehensive process analysis.',
  keywords:
    'Process Analysis, business process optimization, workflow analysis, AI automation opportunities, efficiency improvement, bottleneck identification, Cerebello',
  openGraph: {
    title: 'Process Analysis | Cerebello',
    description:
      'Discover hidden inefficiencies and automation opportunities through comprehensive process analysis.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/process-analysis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Analysis | Cerebello',
    description:
      'Discover hidden inefficiencies and automation opportunities through comprehensive process analysis.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/process-analysis',
  },
};

// Generate structured data
const structuredData = [
  generateServiceSchema({
    name: 'Process Analysis',
    description: 'Systematic analysis of business workflows to identify AI automation opportunities and efficiency improvements. Discover hidden inefficiencies through comprehensive process analysis.',
    url: '/solutions/process-analysis',
    category: 'Business Consulting',
    serviceType: 'Process Analysis & Optimization',
    offers: [
      {
        name: 'Workflow Assessment',
        description: 'Comprehensive analysis of business processes to identify bottlenecks and improvement opportunities'
      },
      {
        name: 'Automation Opportunity Identification',
        description: 'Strategic identification of processes suitable for AI and automation implementation'
      },
      {
        name: 'Efficiency Optimization',
        description: 'Data-driven recommendations to improve process efficiency and reduce operational costs'
      }
    ],
  }),
  generateWebPageSchema({
    name: 'Process Analysis | AI-Powered Business Optimization | Cerebello',
    description: 'Systematic analysis of business workflows to identify AI automation opportunities and efficiency improvements. Discover hidden inefficiencies through comprehensive process analysis.',
    url: '/solutions/process-analysis',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Solutions', url: '/solutions' },
      { name: 'Process Analysis', url: '/solutions/process-analysis' },
    ],
  }),
];

// Testimonials data
const testimonials = [
  {
    slug: 'manufacturing-excellence',
    quote:
      "Cerebello's process analysis revealed inefficiencies we never knew existed. Their methodology helped us achieve 35% efficiency gains and identified multiple automation opportunities.",
    author: 'Sarah Johnson',
    company: 'Manufacturing Excellence Corp',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'global-logistics',
    quote:
      'The detailed process mapping and analysis transformed our operations. We eliminated major bottlenecks and streamlined our workflows significantly.',
    author: 'Michael Chen',
    company: 'Global Logistics Solutions',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'financial-services',
    quote:
      'Their systematic approach to process analysis provided us with clear, data-driven insights. The automation opportunities they identified are delivering excellent ROI.',
    author: 'Emily Rodriguez',
    company: 'Premier Financial Services',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps
const methodologySteps = [
  {
    step: '01',
    title: 'Discovery',
    subtitle: 'Business Context Analysis',
    description:
      'Understand your business goals and identify target processes for analysis through stakeholder interviews and documentation review. We combine documented facts with on-the-ground insights to build a complete picture.',
  },
  {
    step: '02',
    title: 'Mapping',
    subtitle: 'Process Visualization',
    description:
      'Create detailed flowcharts and BPMN diagrams to document every step, decision point, and handoff in your workflows. This makes the invisible visible and helps spot bottlenecks.',
  },
  {
    step: '03',
    title: 'Assessment',
    subtitle: 'Performance Evaluation',
    description:
      'Analyze cycle times, throughput, error rates, and other metrics to quantify current performance and identify improvement areas. We establish baselines for measuring future improvements.',
  },
  {
    step: '04',
    title: 'Engagement',
    subtitle: 'Stakeholder Collaboration',
    description:
      'Hold collaborative workshops with cross-functional teams to validate findings and get input on solutions. This builds buy-in and ensures all perspectives are considered.',
  },
  {
    step: '05',
    title: 'Automation',
    subtitle: 'AI Opportunity Identification',
    description:
      'Identify specific tasks ideal for automation using our expertise in RPA and intelligent automation. We assess feasibility and potential ROI for each opportunity.',
  },
  {
    step: '06',
    title: 'Roadmap',
    subtitle: 'Implementation Plan',
    description:
      'Deliver a data-backed improvement roadmap with prioritized initiatives, automation opportunities, and expected ROI. Includes detailed implementation timelines and resource requirements.',
  },
];

// Stats and benefits data
const processStats = [
  { label: 'Average Efficiency Gain', value: '35%' },
  { label: 'Processes Analyzed', value: '500+' },
  { label: 'Automation Opportunities', value: '78%' },
  { label: 'ROI Within 6 Months', value: '250%' },
];

const processBenefits = [
  {
    title: 'Process Optimization',
    description:
      'Streamline workflows for maximum efficiency and reduced waste',
  },
  {
    title: 'Bottleneck Identification',
    description: 'Pinpoint where work gets stuck and eliminate delays',
  },
  {
    title: 'Automation Readiness',
    description: 'Identify and prioritize opportunities for AI and automation',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Evidence-based recommendations for sustainable improvement',
  },
];

export default function ProcessAnalysisPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      {/* Hero Section - Keep original design */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Process Analysis
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Uncover How Work Really Happens Inside Your Business
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                At Cerebello, we help you uncover how work really happens inside
                your business so you can make it faster, smarter, and ready for
                automation. Our Process Analysis service dives deep into your
                operations to identify inefficiencies, map out workflows, and
                highlight opportunities for AI and automation. The result?
                Leaner processes, fewer bottlenecks, and better alignment with
                your strategic goals.
              </p>

              <p>
                Whether you're dealing with delays, manual work, or unclear
                handoffs, we bring clarity and actionable insights. We work
                closely with your team to visualize current workflows, analyze
                performance, and co-create an improvement roadmap, often
                pinpointing areas where automation or intelligent tooling can
                deliver immediate value.
              </p>

              <p>
                What sets us apart is our blend of business insight and
                technical expertise. We don't just recommend change, we design
                it with your people in mind. Every analysis is practical,
                data-driven, and built to support long-term transformation. If
                you're looking to streamline operations, reduce cost, and
                prepare for scalable AI adoption, it starts here.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Let's simplify what's slowing you down. Book a free
                  consultation today.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Book Free Consultation
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
        title="Our Proven Methodology"
        description="Follow our systematic approach to process analysis and optimization"
        steps={methodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Proven Results Across Industries"
        description="Our process analysis delivers measurable improvements for organizations worldwide"
        badge="Performance Metrics"
        stats={processStats}
        benefits={processBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Process Transformation"
        description="Our Process Analysis service works seamlessly with our other strategic solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Process Analysis Success Stories"
        description="See how organizations have transformed their operations with our comprehensive process analysis methodology, achieving significant efficiency gains and automation readiness."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Transform Your Business?"
        description="Discover hidden efficiencies and automation opportunities through our comprehensive process analysis. Let's streamline what's slowing you down."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonHref="/services/ai-scan"
        footerText="Free consultation • Custom solution design • Proven methodologies"
      />
    </>
  );
}
