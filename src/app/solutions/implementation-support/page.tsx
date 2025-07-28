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
  title: 'Implementation Support | AI & Automation Deployment | Cerebello',
  description:
    'Expert implementation support for AI and automation initiatives. From technical deployment to user adoption, we ensure successful execution and lasting impact of your digital transformation.',
  keywords:
    'Implementation Support, AI Deployment, Automation Rollout, Technical Integration, User Training, Change Management, Go-Live Support, System Integration, Project Execution, Digital Transformation',
  openGraph: {
    title: 'Implementation Support | Cerebello',
    description:
      'Turn AI and automation strategy into reality with expert implementation support. End-to-end guidance from deployment to adoption.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/implementation-support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Implementation Support | Cerebello',
    description:
      'Expert guidance for successful AI and automation implementation. From technical deployment to organizational adoption.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/implementation-support',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'government-automation-rollout',
    quote: 'Cerebello managed our end-to-end implementation of AI-powered document processing. From secure cloud setup to training hundreds of employees, they ensured smooth rollout with faster service delivery and reduced manual workload.',
    author: 'David Thompson',
    company: 'Government Agency',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'logistics-ai-deployment',
    quote: 'The phased deployment of our AI-driven route optimization system across global hubs was flawless. Cerebello\'s on-site training and continuous monitoring helped us achieve improved delivery times and lower fuel costs.',
    author: 'Maria Santos',
    company: 'Global Shipping Company',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'healthcare-rpa-launch',
    quote: 'Our RPA implementation for appointment scheduling and patient records was executed with minimal disruption. Post-launch optimization allowed our healthcare staff to focus more on patient care rather than administrative tasks.',
    author: 'Dr. Robert Kim',
    company: 'Hospital Network',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Implementation Support
const implementationSupportMethodologySteps = [
  {
    step: '01',
    title: 'Implementation Planning',
    subtitle: 'Strategic Execution Framework',
    description: 'Translate strategy into detailed implementation plan with project roadmap, timeline, resource allocation, and risk mitigation strategies. Align stakeholders and establish governance.',
  },
  {
    step: '02',
    title: 'Phased Deployment',
    subtitle: 'Risk-Managed Rollout',
    description: 'Use iterative deployment starting with pilots or proof-of-concept, gather feedback, and scale in stages. Ensure issues are addressed early and solutions refined before broader rollout.',
  },
  {
    step: '03',
    title: 'Integration & Testing',
    subtitle: 'System Validation',
    description: 'Integrate solutions with existing systems and processes, configure interfaces and data flows, then rigorously test end-to-end functionality through user acceptance testing.',
  },
  {
    step: '04',
    title: 'Training & User Enablement',
    subtitle: 'Capability Building',
    description: 'Execute comprehensive training programs for end-users, IT teams, and administrators. Build user confidence through hands-on workshops and establish support channels.',
  },
  {
    step: '05',
    title: 'Go-Live Support',
    subtitle: 'Launch Excellence',
    description: 'Provide hands-on support during solution launch with close monitoring, immediate issue resolution, and expert guidance during the critical adoption period.',
  },
  {
    step: '06',
    title: 'Ongoing Optimization',
    subtitle: 'Continuous Improvement',
    description: 'Continue post-rollout optimization through performance monitoring, user feedback analysis, and solution enhancements to deliver sustained value and increasing ROI.',
  },
];

// Stats and benefits data for Implementation Support
const implementationSupportStats = [
  { label: 'Implementation Success Rate', value: '95%+' },
  { label: 'Average User Adoption Rate', value: '85%' },
  { label: 'Time to Value Acceleration', value: '50%' },
  { label: 'Post-Launch Support Duration', value: '6 months' },
];

const implementationSupportBenefits = [
  {
    title: 'Technical Deployment & Configuration',
    description: 'Set up AI and automation solutions with best-practice architecture, security, and infrastructure configuration in cloud or on-premises environments',
  },
  {
    title: 'Systems Integration & Validation',
    description: 'Seamlessly integrate new solutions with existing IT landscape through APIs, databases, and legacy applications with rigorous testing',
  },
  {
    title: 'User Training & Change Management',
    description: 'Comprehensive training programs, workshops, and change enablement to drive user adoption and build organizational capabilities',
  },
  {
    title: 'Performance Monitoring & Optimization',
    description: 'Continuous monitoring of KPIs, performance metrics, and user feedback with ongoing tuning and optimization for peak results',
  },
];

export default function ImplementationSupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Implementation Support
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Turn Strategy Into Reality
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Cerebello's Implementation Support service ensures your AI, automation, and digital transformation initiatives are not only well-planned but successfully executed and adopted. We guide you through the full execution and rollout of new solutions, acting as a hands-on partner alongside your team from initial deployment to organization-wide adoption.
              </p>

              <p>
                Our experts combine technical know-how with change management to bridge the gap between strategy and real-world results. From technical deployment and systems integration to user training and performance monitoring, we focus on delivering tangible impact and ensuring innovative technologies seamlessly integrate into your business operations.
              </p>

              <p>
                Unlike firms that deliver plans and step away, we provide end-to-end engagement with continuity and accountability at every step. Our pragmatic, results-driven approach prioritizes high-impact actions, quick wins, and iterative improvements, ensuring your investment in AI and automation translates into lasting value with measurable business outcomes.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to execute your transformation strategy? Discover how expert implementation support ensures successful deployment and adoption.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Implementation Planning
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
        title="Our Implementation Process"
        description="Follow our structured approach to successful AI and automation deployment"
        steps={implementationSupportMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Implementation Success Metrics"
        description="Our comprehensive support delivers high success rates and rapid value realization for transformation initiatives"
        badge="Execution Results"
        stats={implementationSupportStats}
        benefits={implementationSupportBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Transformation Journey"
        description="Our Implementation Support service works seamlessly with our strategy, assessment, and optimization solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Implementation Success Stories"
        description="See how organizations have successfully deployed AI and automation solutions with our expert guidance, achieving smooth rollouts and measurable business impact."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Execute Your Transformation?"
        description="Join organizations that have successfully implemented AI and automation with expert guidance. Turn your digital transformation vision into operational reality with measurable results."
        primaryButtonText="Start Your Implementation"
        primaryButtonHref="/contact"
        secondaryButtonText="Implementation Consultation"
        secondaryButtonHref="/contact"
        footerText="Technical deployment • User training • Performance optimization"
      />
    </>
  );
}