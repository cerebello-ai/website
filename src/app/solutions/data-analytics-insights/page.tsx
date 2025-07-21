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
  title:
    'Data Analytics & Insights | AI-Driven Business Intelligence | Cerebello',
  description:
    'Transform data into actionable intelligence with AI-driven analytics, real-time dashboards, and predictive modeling. Unlock the full value of your enterprise data with advanced analytics and business intelligence.',
  keywords:
    'Data Analytics, Business Intelligence, AI-driven analytics, predictive modeling, real-time dashboards, data integration, machine learning, cloud analytics, data visualization, KPI tracking',
  openGraph: {
    title: 'Data Analytics & Insights | Cerebello',
    description:
      'Transform data into strategic assets with AI-driven analytics and real-time insights. From predictive modeling to interactive dashboards.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/data-analytics-insights',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Analytics & Insights | Cerebello',
    description:
      'Unlock the full value of your data with AI-driven analytics and real-time business intelligence.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/data-analytics-insights',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'samsung-ai-analytics',
    quote:
      'Cerebello helped Samsung implement analytics dashboards to monitor AI model performance in production. The real-time insights into model accuracy and user behavior created a continuous feedback loop that accelerated our AI development.',
    author: 'Dr. Kim Taehyung',
    company: 'Samsung Electronics',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'global-shipping',
    quote:
      'Our real-time supply chain dashboard consolidates data from ports, vessels, and GPS trackers. We now see container locations, delays, and bottlenecks instantly, enabling proactive rerouting and better customer service.',
    author: 'Elena Rodriguez',
    company: 'Global Maritime Logistics',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'state-health-dept',
    quote:
      'The real-time analytics dashboard helped us monitor critical public health metrics and coordinate rapid response during crisis situations. It transformed our reactive approach into proactive governance.',
    author: 'Dr. Michael Thompson',
    company: 'State Health Department',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Data Analytics & Insights
const analyticsMethodologySteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    subtitle: 'Business-Driven Analytics Planning',
    description:
      'We conduct stakeholder workshops to understand business objectives, pain points, and opportunities where data can make a difference. Our team audits your current data landscape and defines high-value use cases with clear success metrics.',
  },
  {
    step: '02',
    title: 'Architecture & Integration',
    subtitle: 'Scalable Data Foundation',
    description:
      'We design target data architecture and plan integration of all data sources into a unified pipeline. Our integration-first approach connects databases, APIs, and streaming data while addressing quality issues and governance frameworks.',
  },
  {
    step: '03',
    title: 'Advanced Analytics Development',
    subtitle: 'AI-Powered Modeling',
    description:
      'Our data scientists develop predictive models and analytics algorithms tailored to your use cases - from customer segmentation to predictive maintenance. We iterate using your data to ensure accurate, interpretable insights.',
  },
  {
    step: '04',
    title: 'Dashboard & Solution Development',
    subtitle: 'Intuitive Visualization',
    description:
      'We create user-friendly dashboards and reports with role-based visualizations. From executive KPI summaries to detailed analytical dashboards, we focus on clarity and actionable insights.',
  },
  {
    step: '05',
    title: 'Training & Enablement',
    subtitle: 'Data-Driven Culture',
    description:
      'We develop customized training programs for different user groups and identify analytics champions. Our focus is on helping users ask the right questions and incorporate analytics into decision processes.',
  },
  {
    step: '06',
    title: 'Continuous Improvement',
    subtitle: 'Evolving Analytics',
    description:
      'We establish feedback loops to monitor system performance and model accuracy. Regular reviews identify new insights and opportunities, ensuring your analytics platform evolves with your business.',
  },
];

// Stats and benefits data for Data Analytics & Insights
const analyticsStats = [
  { label: 'Data Value Captured', value: '90%' },
  { label: 'Real-Time Processing Improvement', value: '75%' },
  { label: 'Decision-Making Speed', value: '3x faster' },
  { label: 'ROI Achievement Timeline', value: '6 months' },
];

const analyticsBenefits = [
  {
    title: 'Data Integration & Single Source of Truth',
    description:
      'Break down data silos by integrating all sources into a unified platform for 360° organizational visibility',
  },
  {
    title: 'Predictive Analytics & AI Modeling',
    description:
      'Move from reactive to proactive operations with AI-powered forecasting and pattern recognition',
  },
  {
    title: 'Real-Time Dashboards & KPI Tracking',
    description:
      'Interactive dashboards with role-based insights, mobile reports, and alerting systems for immediate action',
  },
  {
    title: 'Embedded Analytics Integration',
    description:
      'Integrate analytics directly into existing workflows and applications for seamless adoption',
  },
];

export default function DataAnalyticsInsightsPage() {
  return (
    <>
      {/* Hero Section - Following Process Analysis pattern */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Data Analytics & Insights
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Transform Data into Actionable Intelligence
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Cerebello's Data Analytics & Insights service helps medium to
                large enterprises unlock the full value of their data through
                AI-driven analytics, cloud innovation, and real-time dashboards.
                In today's landscape, businesses collect vast amounts of data,
                yet studies show over two-thirds of enterprise data goes
                untapped. Our mission is to convert this dormant data into
                strategic assets that drive smarter decisions, efficiencies, and
                competitive advantage.
              </p>

              <p>
                By integrating data across silos and applying advanced
                analytics, we empower organizations to move from hindsight
                reports to foresight and real-time insight, all through a
                pragmatic, business-focused approach. We embed data and AI at
                the heart of operations and decision-making, designing solutions
                that turn raw data into actionable insights using artificial
                intelligence, machine learning, and intuitive dashboards.
              </p>

              <p>
                Our focus is not on tech for tech's sake, but on pragmatic
                business outcomes – from identifying cost-saving opportunities
                and predicting market trends to streamlining processes and
                enhancing customer experiences. We help you build a data-driven
                culture where KPIs are tracked in real time, predictions replace
                guesses, and every decision is backed by insights.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to unlock the full value of your data? Discover how
                  AI-driven analytics can transform your decision-making.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Data Assessment
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
        title="Our End-to-End Analytics Delivery"
        description="Follow our structured approach to transform data into strategic business assets"
        steps={analyticsMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Data-Driven Business Transformation"
        description="Our analytics solutions deliver measurable improvements in decision-making and operational efficiency"
        badge="Performance Metrics"
        stats={analyticsStats}
        benefits={analyticsBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Data Strategy"
        description="Our Data Analytics & Insights service works seamlessly with our other AI and automation solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Analytics Success Stories"
        description="See how organizations have transformed their operations with our data analytics and insights solutions, achieving real-time visibility and data-driven decision making."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Transform Your Data into Intelligence?"
        description="Join organizations that have unlocked the full value of their data with AI-driven analytics. Move from reactive reporting to proactive insights that drive competitive advantage."
        primaryButtonText="Start Your Analytics Journey"
        primaryButtonHref="/contact"
        secondaryButtonText="Schedule Demo"
        secondaryButtonHref="/services/ai-scan"
        footerText="Data strategy consultation • Custom analytics • Real-time insights"
      />
    </>
  );
}
