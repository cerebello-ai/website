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
  title: 'Process Optimization | Business Process Reengineering | Cerebello',
  description:
    'Reengineer business processes to eliminate inefficiencies and prepare for AI automation. Leverage Lean, Six Sigma, and value stream mapping to transform workflows and maximize ROI.',
  keywords:
    'Process Optimization, Business Process Reengineering, BPR, Lean Six Sigma, Value Stream Mapping, Workflow Automation, Process Improvement, Operational Excellence, Digital Transformation, Process Efficiency',
  openGraph: {
    title: 'Process Optimization | Cerebello',
    description:
      'Eliminate process inefficiencies and prepare for automation with strategic business process reengineering. Transform workflows for maximum performance.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/process-optimization',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Optimization | Cerebello',
    description:
      'Reengineer business processes for efficiency and AI readiness. Eliminate waste, improve outcomes, and maximize automation ROI.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/process-optimization',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'logistics-shipping-process',
    quote:
      'Cerebello streamlined our shipping workflow by digitizing forms and integrating customs data. We eliminated paper-based bottlenecks and manual data entry, enabling faster turnarounds and setting the stage for RPA automation.',
    author: 'Michael Chen',
    company: 'Global Logistics Provider',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'healthcare-billing-optimization',
    quote:
      'Our patient billing process was causing frustration for staff and patients. Cerebello eliminated duplicate data entry and introduced electronic billing, significantly reducing denial rates and improving patient satisfaction.',
    author: 'Dr. Sarah Johnson',
    company: 'Regional Hospital Network',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'insurance-claims-reengineering',
    quote:
      'Claims that used to take weeks now settle in days. Cerebello unified our fragmented systems and automated routine verification, removing manual re-entry at each step. This transformation enabled AI-driven fraud detection.',
    author: 'Robert Williams',
    company: 'Major Insurance Company',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Process Optimization
const processOptimizationMethodologySteps = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    subtitle: 'Deep Operational Analysis',
    description:
      'We engage stakeholders and front-line staff to understand how work really gets done. Define clear objectives like reducing turnaround time by 50% and identify key processes aligned to business goals.',
  },
  {
    step: '02',
    title: 'Process Mapping & Analysis',
    subtitle: 'Value Stream Mapping',
    description:
      'Map current workflows using value stream mapping to pinpoint waste, bottlenecks, and delays. Analyze cycle times, handoff points, error rates, and root causes through data-driven analysis.',
  },
  {
    step: '03',
    title: 'Process Redesign & Reengineering',
    subtitle: 'Future State Design',
    description:
      'Apply Lean principles to eliminate non-value steps and Six Sigma to reduce variation. Design AI-ready processes that integrate smoothly with automation, RPA, and intelligent tools.',
  },
  {
    step: '04',
    title: 'Automation Enablement',
    subtitle: 'Technology Implementation',
    description:
      'Implement optimized workflows with appropriate technology. Enable automation where it adds value, ensuring process and technology work hand-in-hand to multiply benefits.',
  },
  {
    step: '05',
    title: 'Change Management & Training',
    subtitle: 'Organizational Adoption',
    description:
      'Clear communication, training, and support help teams adopt new ways of working. Emphasize organizational change management to ensure successful implementation.',
  },
  {
    step: '06',
    title: 'Continuous Improvement',
    subtitle: 'Performance Monitoring',
    description:
      'Establish metrics and dashboards to track impact over time. Set up feedback loops and periodic audits to foster a culture of continuous improvement and measurable ROI.',
  },
];

// Stats and benefits data for Process Optimization
const processOptimizationStats = [
  { label: 'Revenue Lost to Inefficiency', value: '20-30%' },
  { label: 'Process Cycle Time Reduction', value: '60%+' },
  { label: 'Cost Savings Achieved', value: '25%' },
  { label: 'Implementation Timeline', value: '3-6 months' },
];

const processOptimizationBenefits = [
  {
    title: 'Eliminate Manual Bottlenecks',
    description:
      'Remove paperwork, manual data entry, and redundant handoffs that slow operations and introduce errors',
  },
  {
    title: 'AI & Automation Readiness',
    description:
      'Design processes with future automation in mind, ensuring smooth integration with RPA, AI, and intelligent tools',
  },
  {
    title: 'Break Down Silos',
    description:
      'Connect fragmented workflows and systems to create unified, end-to-end processes with clear ownership',
  },
  {
    title: 'Measurable Performance Gains',
    description:
      'Track cycle time reductions, error rates, cost savings, and customer satisfaction through established KPIs',
  },
];

export default function ProcessOptimizationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Process Optimization
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Reengineer Processes for Peak Performance
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                In the quest for efficiency and agility, many organizations find
                their processes riddled with waste and delays. Process
                Optimization is Cerebello's service to help clients
                fundamentally reengineer business processes to eliminate
                inefficiencies, improve outcomes, and prepare for AI and
                automation. Studies show companies lose 20-30% of their revenue
                each year due to inefficient processes.
              </p>

              <p>
                By optimizing processes before layering on new technologies, we
                ensure automation yields true gains instead of just speeding up
                bad workflows. Our approach aligns with Business Process
                Reengineering (BPR) principles, aiming for dramatic improvements
                in cost, quality, service, and speed by redesigning underlying
                workflows. Smart transformation requires rethinking how work
                gets done, not just adding new tools.
              </p>

              <p>
                Through Process Optimization, we help clients streamline
                end-to-end operations for seamless workflow. Efficient processes
                reduce costs and cycle times while improving quality and
                customer experience. Crucially, process improvement lays the
                groundwork for successful automation and AI, delivering
                immediate performance gains and maximizing ROI on subsequent
                technology investments.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to eliminate inefficiencies and prepare for automation?
                  Discover how process optimization transforms your operations.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Process Assessment
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
        title="Our Process Optimization Method"
        description="Follow our structured approach to eliminate waste and prepare for automation"
        steps={processOptimizationMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Process Transformation Impact"
        description="Our optimization methodology delivers measurable improvements in efficiency and performance"
        badge="Performance Metrics"
        stats={processOptimizationStats}
        benefits={processOptimizationBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Optimization Journey"
        description="Our Process Optimization service integrates seamlessly with our automation and AI solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Optimization Success Stories"
        description="See how organizations have transformed their operations through process reengineering, achieving dramatic improvements in efficiency, quality, and customer satisfaction."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Transform Your Processes?"
        description="Join organizations that have eliminated inefficiencies and prepared for the future with strategic process optimization. Achieve immediate gains while building the foundation for successful automation."
        primaryButtonText="Start Your Optimization Journey"
        primaryButtonHref="/contact"
        secondaryButtonText="Process Consultation"
        secondaryButtonHref="/contact"
        footerText="Process analysis • Lean Six Sigma • Automation readiness"
      />
    </>
  );
}
