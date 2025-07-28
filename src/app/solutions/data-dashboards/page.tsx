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
  title: 'Data Dashboards | Custom Analytics Visualization | Cerebello',
  description:
    'Custom data dashboards that turn raw data into actionable insights. Real-time visualizations, interactive KPI monitoring, and executive summaries for data-driven decision making.',
  keywords:
    'Data Dashboards, Custom Dashboards, Data Visualization, Real-time Analytics, KPI Monitoring, Executive Dashboards, Interactive Charts, Business Intelligence, Operational Dashboards, Data Engineering',
  openGraph: {
    title: 'Data Dashboards | Cerebello',
    description:
      'Transform raw data into actionable insights with custom dashboards. Real-time visualizations and KPI monitoring for informed decision-making.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/data-dashboards',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Dashboards | Cerebello',
    description:
      'Custom data dashboards with real-time insights and interactive visualizations. Turn data into actionable business intelligence.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/data-dashboards',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'operations-dashboard-success',
    quote: 'Our real-time operations dashboard transformed decision-making across departments. Interactive visualizations and KPI monitoring enabled 40% faster response times to operational issues and improved overall efficiency.',
    author: 'Maria González',
    company: 'Manufacturing Enterprise',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'executive-analytics-portal',
    quote: 'The executive dashboard provides instant visibility into company-wide performance metrics. High-level summaries and drill-down capabilities support strategic decisions with confidence and speed.',
    author: 'Robert Chen',
    company: 'Financial Services Group',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'multi-source-integration',
    quote: 'Consolidating data from multiple systems into one coherent dashboard eliminated information silos. Our teams now have unified visibility across finance, operations, and customer metrics in real-time.',
    author: 'Jennifer Park',
    company: 'Retail Corporation',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Data Dashboards
const dataDashboardsMethodologySteps = [
  {
    step: '01',
    title: 'Requirements Discovery',
    subtitle: 'Goals & Success Criteria',
    description: 'Conduct in-depth consultations to understand your goals, data sources, and success criteria. Identify key metrics, end-users, and critical decisions the dashboard should support.',
  },
  {
    step: '02',
    title: 'UX Design & Prototyping',
    subtitle: 'User-Centric Interface',
    description: 'Create intuitive UX layouts and wireframes with design-first philosophy. Develop interactive prototypes for early feedback, ensuring user-friendly and aligned final product.',
  },
  {
    step: '03',
    title: 'Data Integration',
    subtitle: 'Seamless Connectivity',
    description: 'Connect dashboard to all relevant data sources with secure integrations. Consolidate and transform data from multiple systems, setting up pipelines for accurate real-time reporting.',
  },
  {
    step: '04',
    title: 'Dashboard Development',
    subtitle: 'Interactive Implementation',
    description: 'Build interactive visualizations, filters, and custom features through iterative agile sprints. Develop role-based views and drill-down analytics tailored to specifications.',
  },
  {
    step: '05',
    title: 'Validation & Testing',
    subtitle: 'Quality Assurance',
    description: 'Rigorously test for accuracy, performance, and usability. Verify data calculations, KPI formulas, and real-time updates through comprehensive user acceptance testing.',
  },
  {
    step: '06',
    title: 'Deployment & Enhancement',
    subtitle: 'Ongoing Evolution',
    description: 'Deploy to production environment with smooth rollout and user training. Provide continuous support, monitoring, and iterative improvements as business needs evolve.',
  },
];

// Stats and benefits data for Data Dashboards
const dataDashboardsStats = [
  { label: 'Decision Response Time Improvement', value: '40%' },
  { label: 'Executive Meeting Efficiency', value: '50%' },
  { label: 'Data Accessibility Increase', value: '75%' },
  { label: 'Development to Deployment', value: '8 weeks' },
];

const dataDashboardsBenefits = [
  {
    title: 'Real-Time Data Visibility',
    description: 'Live data feeds ensure dashboards always reflect current information, enabling immediate action on issues and opportunities as they happen',
  },
  {
    title: 'Interactive Visualizations',
    description: 'Rich charts, graphs, and maps with drill-down capabilities that transform raw data into clear visuals highlighting patterns and insights',
  },
  {
    title: 'Executive Summary Views',
    description: 'High-level summaries and snapshots tailored for quick leadership review, distilling critical metrics and trends in concise format',
  },
  {
    title: 'Comprehensive KPI Monitoring',
    description: 'Track Key Performance Indicators with targets, thresholds, and alert indicators to immediately see performance status and trigger responses',
  },
];

export default function DataDashboardsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Data Dashboards
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Transform Data Into Visual Insights
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Cerebello's Data Dashboards service focuses on designing and developing custom dashboards that turn raw data into actionable insights. Our dashboards provide a consolidated, real-time view of key metrics and performance indicators, enabling quick, data-driven decisions at every level. Instead of sifting through spreadsheets or static reports, your team gets an interactive visual interface where complex data is presented clearly and intuitively.
              </p>

              <p>
                Our solutions are versatile and industry-agnostic, building operational dashboards for day-to-day performance tracking, executive dashboards offering high-level summaries for leadership, and comprehensive analytics portals that aggregate enterprise-wide data. Whether you need company-wide visibility or department-specific reporting, each solution is tailored to deliver the right information to the right people.
              </p>

              <p>
                Every dashboard is crafted with intuitive user experience in mind, ensuring insights are not only available but easily accessible and meaningful for all stakeholders. We combine innovative visualization, solid data engineering, and thoughtful design to deliver dashboards that drive informed decisions and measurable business outcomes, transforming your data into a strategic asset.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to visualize your data insights? Discover how custom dashboards can accelerate your decision-making processes.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Dashboard Consultation
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
        title="Our Dashboard Development Process"
        description="Follow our proven approach to creating effective data visualization solutions"
        steps={dataDashboardsMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Dashboard Performance Impact"
        description="Our custom dashboards deliver measurable improvements in decision speed and data accessibility"
        badge="Visualization Results"
        stats={dataDashboardsStats}
        benefits={dataDashboardsBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Data Strategy"
        description="Our Data Dashboards service integrates seamlessly with our analytics, integration, and AI solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Dashboard Success Stories"
        description="See how organizations have transformed their decision-making with custom data dashboards, achieving faster response times and improved operational visibility."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Visualize Your Data Insights?"
        description="Join organizations that have transformed their decision-making with custom data dashboards. Turn complex data into clear, actionable insights that drive business results."
        primaryButtonText="Start Your Dashboard Project"
        primaryButtonHref="/contact"
        secondaryButtonText="Dashboard Design Consultation"
        secondaryButtonHref="/contact"
        footerText="Custom visualization • Real-time data • Interactive insights"
      />
    </>
  );
}