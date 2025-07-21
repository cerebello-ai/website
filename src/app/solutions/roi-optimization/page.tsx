import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  BarChart3,
  DollarSign,
  Gauge,
  Shield,
  Users,
} from 'lucide-react';

import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { FeatureRoiBenefits } from '@/components/sections/feature/feature-roi-benefits';
import { FeatureRoiMethodology } from '@/components/sections/feature/feature-roi-methodology';
import { RelatedSolutions } from '@/components/sections/related-solutions';
import { StatsRoiCaseStudy } from '@/components/sections/stats-roi-case-study';
import Testimonials from '@/components/sections/testimonials';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'ROI Optimization | Maximize AI Investment Returns | Cerebello',
  description:
    "Maximize the returns of your AI investments with Cerebello's ROI Optimization service. We ensure your AI and automation projects deliver measurable value through data-driven validation and continuous optimization.",
  keywords:
    'ROI optimization, AI investment returns, automation ROI, AI business value, cost savings AI, revenue optimization, AI implementation ROI, measurable AI results',
  openGraph: {
    title: 'ROI Optimization - Maximize Your AI Investment Returns | Cerebello',
    description:
      'Ensure your AI and automation projects deliver measurable value. Our ROI Optimization service identifies high-impact opportunities and validates outcomes with data.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/roi-optimization',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI Optimization - Maximize AI Returns | Cerebello',
    description:
      'Transform AI investments into tangible business results. See 30-200% ROI improvements in the first year.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/roi-optimization',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'oceanic-transco',
    quote:
      "Cerebello's ROI Optimization service delivered exactly what they promised. We achieved 200% ROI in our first year and continue to see improvements.",
    author: 'Maria Santos',
    company: 'OceanicTransCo',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'manufacturing-corp',
    quote:
      'The methodology was thorough and the results speak for themselves. Our predictive maintenance system has saved us millions in unplanned downtime.',
    author: 'Robert Chen',
    company: 'Global Manufacturing Corp',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'logistics-solutions',
    quote:
      'From pilot to full implementation, Cerebello guided us every step of the way. The ROI optimization approach ensured we focused on what mattered most.',
    author: 'Jennifer Martinez',
    company: 'Premier Logistics Solutions',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// ROI benefits data
const roiBenefits = [
  {
    title: 'Clear ROI & Value',
    description:
      'Define solid business cases and KPIs upfront so you have a clear value target',
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: 'Reduced Costs & Complexity',
    description:
      'Prioritize high-ROI use cases and quick wins, ensuring early results fund future phases',
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    title: 'Measurable Intangibles',
    description:
      'Capture hidden returns using proxy metrics and executive-friendly dashboards',
    icon: <Gauge className="h-6 w-6" />,
  },
  {
    title: 'Data Quality & Integration',
    description:
      'Address data readiness early so AI insights are reliable and comprehensive',
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: 'User Adoption & Training',
    description:
      'Human-centered rollout with stakeholder involvement and comprehensive training',
    icon: <Users className="h-6 w-6" />,
  },
];

// Methodology steps
const methodologySteps = [
  {
    number: '01',
    title: 'Discover & Benchmark',
    description:
      'We begin with a deep dive into your business. Our consultants conduct workshops and on-site observations to map processes, pain points, and opportunities. We quantify the status quo and define clear success KPIs.',
  },
  {
    number: '02',
    title: 'Pilot & Validate',
    description:
      'Rather than a big bang, we prove the value on a small scale first. The pilot lets us validate ROI assumptions in real conditions and gather user feedback early. Seeing a successful pilot builds confidence for broader roll-out.',
  },
  {
    number: '03',
    title: 'Implement & Integrate',
    description:
      'Once a solution is proven, we scale it up seamlessly across your organization. We prefer to augment your current workflows rather than force new ones – embedding AI recommendations into the software your team already uses.',
  },
  {
    number: '04',
    title: 'Monitor & Optimize',
    description:
      "ROI Optimization isn't a one-off project, it's an ongoing discipline. We set up real-time dashboards for key performance indicators so you can monitor impact at a glance. This ensures ROI improves over time.",
  },
];

// Case study data
const caseStudyStats = [
  {
    value: '60%',
    label: 'Reduction in unexpected ship breakdowns',
  },
  {
    value: '12%',
    label: 'Reduction in fuel consumption per voyage',
  },
  {
    value: '15,000+',
    label: 'Employee hours saved annually',
  },
  {
    value: '200%',
    label: 'ROI achieved in the first year',
  },
];

const caseStudyFeatures = [
  {
    title: 'Predictive Maintenance',
    description:
      'AI-driven predictive maintenance dramatically cut unplanned downtime',
  },
  {
    title: 'Route Optimization',
    description: 'AI route optimization saved millions of dollars annually',
  },
  {
    title: 'Process Automation',
    description:
      'Automated paperwork and data entry, eliminating thousands of hours of manual work',
  },
  {
    title: 'Cultural Transformation',
    description:
      'Organization embraced human-AI collaboration through proactive change management',
  },
];

export default function ROIOptimizationPage() {
  return (
    <>
      {/* Hero Section - Keep original design */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              ROI Optimization
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Maximize the Returns of Your AI Investments
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Cerebello's ROI Optimization service ensures your AI and
                automation projects deliver measurable value to your business.
                We identify high-impact opportunities, validate outcomes with
                data, and fine-tune implementations so that every initiative
                pays off.
              </p>

              <p>
                ROI Optimization at Cerebello is all about making AI integration
                pay dividends. Too often, companies embark on AI projects
                without a clear line of sight to business value. Our approach
                flips the script: we start with your goals and work backward to
                ensure every automation or AI initiative is linked to concrete
                return on investment.
              </p>

              <p>
                Done right, AI can deliver quick, significant returns –
                organizations implementing automation often see 30–200% ROI
                improvements in the first year. Cerebello's team makes sure you
                hit those kinds of numbers by choosing the right projects,
                measuring the right things, and executing flawlessly.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to maximize your AI investment returns? Book a free
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

      {/* Benefits Section */}
      <FeatureRoiBenefits
        title="Key Challenges We Solve"
        description="Transform your AI investments into measurable business results with our comprehensive approach"
        benefits={roiBenefits}
      />

      {/* Methodology Section */}
      <FeatureRoiMethodology
        badge="Our Methodology"
        title="Our Proven Methodology"
        description="An end-to-end and iterative approach ensuring you get results fast and sustainably"
        steps={methodologySteps}
      />

      {/* Case Study Section */}
      <StatsRoiCaseStudy
        title="OceanicTransCo's ROI Transformation"
        description="A global shipping and logistics company achieved outstanding results with our ROI Optimization service"
        stats={caseStudyStats}
        features={caseStudyFeatures}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your ROI Journey"
        description="Our ROI Optimization service works seamlessly with our other strategic solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="ROI Success Stories"
        description="See how organizations have maximized their AI investments with our proven ROI Optimization methodology, achieving exceptional returns and sustainable growth."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Get Started?"
        description="Whether you have existing automation projects that aren't living up to the hype, or you're planning new AI investments and want to guarantee they hit the mark, Cerebello's ROI Optimization service will put you on the right track."
        primaryButtonText="Book an AI Implementation Scan"
        primaryButtonHref="/contact"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonHref="/contact"
        footerText="ROI Assessment • Custom Roadmap • Full Implementation Support"
      />
    </>
  );
}
