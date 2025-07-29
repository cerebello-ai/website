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
  title:
    'Business Model Innovation | AI-Driven Strategy Consulting | Cerebello',
  description:
    'Reimagine your business model with AI and intelligent automation. Transform how you create value, generate revenue, and compete in the AI-driven economy through strategic innovation.',
  keywords:
    'Business Model Innovation, AI Strategy, Digital Transformation, Revenue Models, AI-as-a-Service, Platform Business Models, Data Monetization, Strategic Innovation, Business Reinvention, Competitive Advantage',
  openGraph: {
    title: 'Business Model Innovation | Cerebello',
    description:
      'Fundamentally reimagine your business with AI-enabled innovation. From products to services, traditional to AI-driven revenue models.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/business-model-innovation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Model Innovation | Cerebello',
    description:
      'Transform your business model with AI strategy. Create new value propositions and revenue streams through intelligent innovation.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/business-model-innovation',
  },
};

// Generate structured data
const structuredData = [
  generateServiceSchema({
    name: 'Business Model Innovation',
    description: 'Reimagine your business model with AI and intelligent automation. Transform how you create value, generate revenue, and compete in the AI-driven economy through strategic innovation.',
    url: '/solutions/business-model-innovation',
    category: 'Strategic Consulting',
    serviceType: 'Business Model Innovation',
    offers: [
      {
        name: 'AI-as-a-Service Model Development',
        description: 'Transform products into continuous service offerings with subscription or usage-based revenue models'
      },
      {
        name: 'Data Monetization Strategy',
        description: 'Convert operational data into valuable insights and analytics services, creating new revenue streams'
      },
      {
        name: 'Platform Business Model Design',
        description: 'Build intelligent platforms that connect stakeholders using AI to match supply and demand'
      }
    ],
  }),
  generateWebPageSchema({
    name: 'Business Model Innovation | AI-Driven Strategy Consulting | Cerebello',
    description: 'Reimagine your business model with AI and intelligent automation. Transform how you create value, generate revenue, and compete in the AI-driven economy through strategic innovation.',
    url: '/solutions/business-model-innovation',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Solutions', url: '/solutions' },
      { name: 'Business Model Innovation', url: '/solutions/business-model-innovation' },
    ],
  }),
];

// Testimonials data
const testimonials = [
  {
    slug: 'professional-services-saas',
    quote:
      'Cerebello helped us transform our internal AI tool into a client-facing SaaS offering. This productization of our services opened a fresh revenue stream and positioned us as a tech-enabled leader in our industry.',
    author: 'Alexandra Davis',
    company: 'Professional Services Provider',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'logistics-data-monetization',
    quote:
      'We turned our operational data into a customer-facing analytics service. By leveraging AI to generate predictive insights, we converted data exhaust into profit while strengthening customer loyalty.',
    author: 'Thomas Rodriguez',
    company: 'Global Logistics Company',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'manufacturing-outcome-based',
    quote:
      'Moving from selling machines to guaranteeing uptime as a service transformed our relationship with customers. AI-driven predictive maintenance enables us to deliver on our promises while creating recurring revenue.',
    author: 'Jennifer Kim',
    company: 'Industrial Manufacturing Corp',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Business Model Innovation
const businessModelInnovationMethodologySteps = [
  {
    step: '01',
    title: 'Opportunity Identification',
    subtitle: 'Strategic Market Analysis',
    description:
      'Analyze your business and market for transformative opportunities. Assess emerging technologies, customer pain points, and untapped data assets where AI and automation could enable new models.',
  },
  {
    step: '02',
    title: 'Strategic Framing',
    subtitle: 'Business Model Design',
    description:
      'Shape high-potential ideas into viable business models. Define value propositions, revenue mechanisms, and cost structures while ensuring alignment with your overall strategy.',
  },
  {
    step: '03',
    title: 'Rapid Experimentation',
    subtitle: 'MVP Development',
    description:
      'Build minimal viable products and simulations with intelligent technology. Employ rapid prototyping and pilot programs to test new models quickly and cost-effectively.',
  },
  {
    step: '04',
    title: 'Validation & Refinement',
    subtitle: 'Evidence-Driven Optimization',
    description:
      'Evaluate pilot results against success metrics. Interpret customer response data, validate assumptions, and adjust the model through evidence-driven refinement.',
  },
  {
    step: '05',
    title: 'Execution & Integration',
    subtitle: 'Full-Scale Implementation',
    description:
      'Transform validated models into reality with detailed implementation roadmaps. Support technology integration, change management, and staff training for seamless deployment.',
  },
  {
    step: '06',
    title: 'Continuous Optimization',
    subtitle: 'Ongoing Innovation',
    description:
      'Monitor performance and market evolution to continuously refine and expand your innovation. Establish feedback loops for sustained competitive advantage.',
  },
];

// Stats and benefits data for Business Model Innovation
const businessModelInnovationStats = [
  { label: 'AI Pilot Project Failure Rate', value: '80%' },
  { label: 'Revenue Stream Diversification', value: '40%+' },
  { label: 'Time to Market', value: '6 months' },
  { label: 'Innovation ROI', value: '300%+' },
];

const businessModelInnovationBenefits = [
  {
    title: 'AI-as-a-Service Models',
    description:
      'Transform products into continuous service offerings with subscription or usage-based revenue models and latest intelligent features',
  },
  {
    title: 'Data Monetization',
    description:
      'Convert operational data into valuable insights and analytics services, creating new revenue streams from existing information assets',
  },
  {
    title: 'Platform Business Models',
    description:
      'Build intelligent platforms that connect stakeholders using AI to match supply and demand or personalize offerings in real-time',
  },
  {
    title: 'Outcome-Based Services',
    description:
      'Shift from selling products to guaranteeing outcomes using AI-driven predictive capabilities and intelligent automation',
  },
];

export default function BusinessModelInnovationPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Business Model Innovation
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Reimagine Your Business with AI
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                In today's AI and automation-driven landscape, business
                reinvention is not optional – it's essential. Artificial
                intelligence is reshaping industries, offering unprecedented
                opportunities for growth, innovation, and efficiency. The
                organizations that thrive are those willing to rethink how they
                create and capture value, fundamentally reimagining their
                business rather than just automating the status quo.
              </p>

              <p>
                However, leveraging AI is not just a tech upgrade – it requires
                strategic alignment. Without adapting the underlying business
                model, even advanced AI initiatives can stall. Studies show up
                to 80% of AI pilot projects fail to scale due to misalignment
                with broader business strategy. Business Model Innovation means
                exploring new ways of delivering value and generating revenue
                enabled by intelligent technology.
              </p>

              <p>
                From AI-as-a-Service offerings and data monetization to platform
                business models and outcome-based services, we help you evolve
                your business model to fully harness AI and automation. Our
                strategic consulting ensures your innovation investments
                translate into tangible results, unlocking new value streams and
                competitive advantages in the AI-driven economy.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to reimagine your business with AI? Discover how
                  strategic innovation can transform your value creation and
                  competitive position.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Innovation Assessment
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
        title="Our Innovation Methodology"
        description="Follow our structured approach to business model transformation with AI"
        steps={businessModelInnovationMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Innovation Impact Metrics"
        description="Our strategic approach delivers measurable business transformation and competitive advantage"
        badge="Innovation Results"
        stats={businessModelInnovationStats}
        benefits={businessModelInnovationBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Innovation Journey"
        description="Our Business Model Innovation service integrates with our full AI transformation and implementation capabilities"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Innovation Success Stories"
        description="See how organizations have transformed their business models with AI, creating new revenue streams and competitive advantages through strategic innovation."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Innovate Your Business Model?"
        description="Join forward-thinking organizations that are reimagining their business with AI. Transform how you create value, generate revenue, and compete in the intelligent economy."
        primaryButtonText="Start Your Innovation Journey"
        primaryButtonHref="/contact"
        secondaryButtonText="Innovation Consultation"
        secondaryButtonHref="/contact"
        footerText="Strategic innovation • AI-driven models • Revenue transformation"
      />
    </>
  );
}
