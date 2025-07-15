import Image from 'next/image';
import Link from 'next/link';

import {
  BarChart3,
  DollarSign,
  FlaskConical,
  Gauge,
  Puzzle,
  RefreshCw,
  Search,
  Shield,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';

import { Cta7 } from '@/components/shadcnblocks/cta/cta7';
import { Feature119 } from '@/components/shadcnblocks/feature/feature119';
import { Feature187 } from '@/components/shadcnblocks/feature/feature187';
import { Feature43 } from '@/components/shadcnblocks/feature/feature43';
import { Stats9 } from '@/components/shadcnblocks/stats/stats9';
import { Testimonial23 } from '@/components/shadcnblocks/testimonial/testimonial23';
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

const roiOptimizationData = {
  title: 'ROI Optimization',
  subtitle: 'Maximize the Returns of Your AI Investments',
  introduction:
    "Cerebello's ROI Optimization service ensures your AI and automation projects deliver measurable value to your business. We identify high-impact opportunities, validate outcomes with data, and fine-tune implementations so that every initiative pays off.",
  content:
    'ROI Optimization at Cerebello is all about making AI integration pay dividends. Too often, companies embark on AI projects without a clear line of sight to business value. Our approach flips the script: we start with your goals and work backward to ensure every automation or AI initiative is linked to concrete return on investment.',
  additionalContent:
    "Done right, AI can deliver quick, significant returns – organizations implementing automation often see 30–200% ROI improvements in the first year. Cerebello's team makes sure you hit those kinds of numbers by choosing the right projects, measuring the right things, and executing flawlessly.",
  benefits: [
    {
      title: 'Clear ROI & Value',
      description:
        'Define solid business cases and KPIs upfront so you have a clear value target',
      icon: <BarChart3 className="size-6" />,
    },
    {
      title: 'Reduced Costs & Complexity',
      description:
        'Prioritize high-ROI use cases and quick wins, ensuring early results fund future phases',
      icon: <DollarSign className="size-6" />,
    },
    {
      title: 'Measurable Intangibles',
      description:
        'Capture hidden returns using proxy metrics and executive-friendly dashboards',
      icon: <Gauge className="size-6" />,
    },
    {
      title: 'Data Quality & Integration',
      description:
        'Address data readiness early so AI insights are reliable and comprehensive',
      icon: <Shield className="size-6" />,
    },
    {
      title: 'User Adoption & Training',
      description:
        'Human-centered rollout with stakeholder involvement and comprehensive training',
      icon: <Users className="size-6" />,
    },
  ],
  methodology: [
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
  ],
  process: [
    {
      title: 'Discover & Benchmark',
      description:
        'Deep dive into your business to map processes and define clear success KPIs',
      icon: <Search className="size-6" />,
    },
    {
      title: 'Pilot & Validate',
      description:
        'Prove value on a small scale first with real-world testing and user feedback',
      icon: <FlaskConical className="size-6" />,
    },
    {
      title: 'Implement & Integrate',
      description:
        'Scale solutions seamlessly across your organization with full integration',
      icon: <Puzzle className="size-6" />,
    },
    {
      title: 'Monitor & Optimize',
      description:
        'Continuous monitoring and optimization for sustained ROI improvement',
      icon: <RefreshCw className="size-6" />,
    },
  ],
  stats: {
    title: "OceanicTransCo's ROI Transformation",
    subtitle:
      'A global shipping and logistics company achieved outstanding results with our ROI Optimization service',
    stats: [
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
    ],
    features: [
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
    ],
  },
  callToAction: {
    title: 'Ready to Get Started?',
    subtitle: 'Turn your AI initiatives into real business results',
    description:
      "Whether you have existing automation projects that aren't living up to the hype, or you're planning new AI investments and want to guarantee they hit the mark, Cerebello's ROI Optimization service will put you on the right track.",
    buttonText: 'Book an AI Implementation Scan',
    buttonHref: '/contact',
  },
};

export default function ROIOptimizationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-mint-50 to-mint-100 relative overflow-hidden bg-gradient-to-br py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="bg-mint-100 text-mint-900 mb-6 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium">
                  Maximize Your AI Returns
                </div>
                <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                  {roiOptimizationData.title}
                </h1>
                <p className="text-muted-foreground mb-4 text-xl">
                  {roiOptimizationData.subtitle}
                </p>
                <p className="text-muted-foreground mb-8 text-lg">
                  {roiOptimizationData.introduction}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href={roiOptimizationData.callToAction.buttonHref}>
                      {roiOptimizationData.callToAction.buttonText}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#overview">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="from-mint-200 to-mint-300 absolute inset-0 bg-gradient-to-tr opacity-30 blur-3xl" />
                <Image
                  src="/images/roi-dashboard.jpg"
                  alt="ROI Optimization Dashboard"
                  width={600}
                  height={400}
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <div className="bg-mint-100 text-mint-900 mb-4 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium">
              Overview
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Making AI Integration Pay Dividends
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              {roiOptimizationData.content}
            </p>
            <p className="text-muted-foreground text-lg">
              {roiOptimizationData.additionalContent}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Feature43
        heading="Key Challenges We Solve"
        reasons={roiOptimizationData.benefits}
      />

      {/* Approach Section */}
      <Feature187
        title="Our Approach: Human-Centered, AI-Informed"
        subtitle="We combine strategic consulting with hands-on implementation, following a proven methodology that is informed by data and AI at every step."
        steps={roiOptimizationData.process.map((item, index) => ({
          step: `${index + 1}`,
          title: item.title,
          description: item.description,
        }))}
      />

      {/* Methodology Section */}
      <Feature119
        title="Our Proven Methodology"
        description="An end-to-end and iterative approach ensuring you get results fast and sustainably"
        steps={roiOptimizationData.methodology}
      />

      {/* Case Study Section */}
      <Stats9
        title={roiOptimizationData.stats.title}
        subtitle={roiOptimizationData.stats.subtitle}
        stats={roiOptimizationData.stats.stats}
        benefits={roiOptimizationData.stats.features}
      />

      {/* Testimonial Section */}
      <Testimonial23 />

      {/* Call to Action Section */}
      <Cta7
        title={roiOptimizationData.callToAction.title}
        subtitle={roiOptimizationData.callToAction.subtitle}
        features={[
          'ROI Opportunity Assessment',
          'Customized ROI Roadmap',
          'Defined KPIs & Measurement Framework',
          'Full Implementation Support',
        ]}
        buttonText={roiOptimizationData.callToAction.buttonText}
        buttonHref={roiOptimizationData.callToAction.buttonHref}
      />
    </>
  );
}
