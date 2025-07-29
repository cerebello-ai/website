import Link from 'next/link';

import {
  Search,
  ChartBar,
  FileText,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Metadata } from 'next';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { StructuredData } from '@/components/structured-data';
import { generateServiceSchema, generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Scan Service - Discover AI Opportunities | Cerebello',
  description:
    'Cerebello AI Scan evaluates your operations to uncover AI automation opportunities. Get a strategic roadmap in 4-6 weeks with actionable insights for digital transformation.',
  keywords:
    'AI Scan, AI assessment, business process automation, AI opportunities, digital transformation, AI consulting, automation roadmap, Cerebello',
  openGraph: {
    title: 'AI Scan: Discover Your AI Automation Opportunities',
    description:
      'Comprehensive assessment service that identifies high-impact AI use cases for your business. Get actionable insights and a strategic roadmap in 4-6 weeks.',
    type: 'website',
    images: [
      {
        url: '/images/services/ai-scan-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Cerebello AI Scan Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Scan Service by Cerebello',
    description:
      'Discover where AI can transform your business. Comprehensive assessment with actionable roadmap.',
    images: ['/images/services/ai-scan-hero.jpg'],
  },
  alternates: {
    canonical: '/services/ai-scan',
  },
};

const AIScanPage = () => {
  const structuredData = [
    generateServiceSchema({
      name: 'AI Scan Service',
      description: 'Comprehensive AI assessment service that evaluates your operations to uncover AI automation opportunities and provides a strategic roadmap.',
      url: '/services/ai-scan',
      category: 'AI Assessment',
      serviceType: 'AI Consulting',
      offers: [
        {
          name: 'Business Process Analysis',
          description: 'In-depth analysis of current processes and pain points',
        },
        {
          name: 'AI Opportunity Identification',
          description: 'Identify high-impact AI use cases for your business',
        },
        {
          name: 'Strategic Roadmap',
          description: 'Phased implementation plan with timelines and priorities',
        },
        {
          name: 'Executive Presentation',
          description: 'Executive-ready report and presentation with clear recommendations',
        },
      ],
      aggregateRating: {
        ratingValue: '4.8',
        ratingCount: '89',
        bestRating: '5',
      },
    }),
    generateWebPageSchema({
      name: 'AI Scan Service - Discover AI Opportunities',
      description: 'Cerebello AI Scan evaluates your operations to uncover AI automation opportunities. Get a strategic roadmap in 4-6 weeks with actionable insights.',
      url: '/services/ai-scan',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'AI Scan', url: '/services/ai-scan' },
      ],
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/company-talk.jpg"
            alt="Business consultation meeting"
            className="h-full w-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-inter-tight mb-6 text-4xl font-semibold tracking-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Your AI Transformation Opportunities
            </h1>
            <p className="font-inter mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Our AI Scan service evaluates your operations and data to uncover
              high-impact opportunities for AI-driven automation. Get a
              strategic roadmap that aligns with your business goals in just 4-6
              weeks.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Schedule AI Scan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Download Sample Report
              </Button>
            </div>

            <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 border-white/20 bg-white/10 text-white"
              >
                <CheckCircle className="h-5 w-5 text-white" />
                <span>4-6 Week Timeline</span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 border-white/20 bg-white/10 text-white"
              >
                <CheckCircle className="h-5 w-5 text-white" />
                <span>Executive-Ready Report</span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 border-white/20 bg-white/10 text-white"
              >
                <CheckCircle className="h-5 w-5 text-white" />
                <span>Actionable Roadmap</span>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-mint-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h2 className="text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
                Why AI Adoption Matters Now
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <p className="font-inter-tight text-foreground font-l mb-2 text-5xl font-semibold">
                  66%
                </p>
                <p className="text-muted-foreground">
                  of companies have automated at least one process by 2024
                </p>
              </div>
              <div className="text-center">
                <p className="font-inter-tight text-foreground mb-2 text-5xl font-semibold">
                  75%
                </p>
                <p className="text-muted-foreground">
                  of executives report AI has improved decision-making
                </p>
              </div>
              <div className="text-center">
                <p className="font-inter-tight text-foreground mb-2 text-5xl font-semibold">
                  200%
                </p>
                <p className="text-muted-foreground">
                  average ROI achieved in the first year of AI implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-inter-tight text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Our Proven Methodology
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                We follow a clear, phased approach to ensure thorough and
                collaborative assessment
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Search className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Discovery Phase</CardTitle>
                  <CardDescription>Understanding your business</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We conduct stakeholder interviews, workshops, and
                    documentation reviews to grasp your current processes, pain
                    points, and objectives. Our team learns your operations in
                    depth because a solution is only as good as our
                    understanding of the problem.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <ChartBar className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Analysis Phase</CardTitle>
                  <CardDescription>
                    Identifying AI opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our experts analyze findings to spot where AI could make a
                    difference. We prioritize use cases using an
                    impact/feasibility matrix, separating quick wins from
                    long-term initiatives to deliver the most immediate value.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Reporting Phase</CardTitle>
                  <CardDescription>
                    Delivering actionable insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We synthesize insights into an executive-ready report and
                    presentation with clear recommendations, measurable KPIs,
                    and a step-by-step implementation roadmap that fits your
                    budget and capacity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-sand-100 overflow-hidden py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                What You'll Receive
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Comprehensive analysis package with big-picture strategy and
                concrete details
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="bg-background rounded-lg p-6">
                <h3 className="mb-3 text-xl font-semibold">AI Scan Report</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed 20-30 page report documenting our findings,
                  including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Executive summary of key insights
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Analysis of current state and pain points
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Identified AI use cases with expected benefits
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Detailed recommendations and next steps
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Strategic Roadmap
                </h3>
                <p className="text-muted-foreground mb-4">
                  Phased implementation plan that includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Prioritized AI initiatives with timelines
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Quick wins vs. long-term projects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Resource and budget estimates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      6, 12, and 24-month strategic planning
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Presentation & Readout
                </h3>
                <p className="text-muted-foreground mb-4">
                  Executive presentation featuring:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Visual charts and opportunity matrices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Before/after process illustrations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      ROI projections and KPIs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Live presentation to stakeholders
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Supporting Materials
                </h3>
                <p className="text-muted-foreground mb-4">
                  Additional documentation including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Process maps and workflow diagrams
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Data quality assessment results
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      AI readiness scorecard
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Workshop notes and findings
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Timeline & Process
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Get actionable insights fast with our agile assessment process
              </p>
            </div>

            <Alert className="mb-8">
              <Clock className="h-4 w-4" />
              <AlertTitle>Typical Duration: 4-6 Weeks</AlertTitle>
              <AlertDescription>
                Timeline varies based on scope. Simple department scans can be
                completed in 2-3 weeks, while enterprise-wide assessments may
                extend to 8 weeks.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-mint/20 dark:bg-mint/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <span className="font-inter-tight text-foreground text-xl font-semibold">
                    1
                  </span>
                </div>
                <h3 className="mb-2 font-semibold">Week 1</h3>
                <p className="text-muted-foreground text-sm">
                  Kickoff workshop and initial discovery sessions
                </p>
              </div>

              <div className="text-center">
                <div className="bg-mint/20 dark:bg-mint/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <span className="font-inter-tight text-foreground text-xl font-semibold">
                    2-3
                  </span>
                </div>
                <h3 className="mb-2 font-semibold">Weeks 2-3</h3>
                <p className="text-muted-foreground text-sm">
                  Analysis and opportunity identification
                </p>
              </div>

              <div className="text-center">
                <div className="bg-mint/20 dark:bg-mint/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <span className="font-inter-tight text-foreground text-xl font-semibold">
                    4-5
                  </span>
                </div>
                <h3 className="mb-2 font-semibold">Weeks 4-5</h3>
                <p className="text-muted-foreground text-sm">
                  Report preparation and roadmap development
                </p>
              </div>

              <div className="text-center">
                <div className="bg-mint/20 dark:bg-mint/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <span className="font-inter-tight text-foreground text-xl font-semibold">
                    6
                  </span>
                </div>
                <h3 className="mb-2 font-semibold">Week 6</h3>
                <p className="text-muted-foreground text-sm">
                  Final presentation and readout session
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-mint py-16 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Success Story: Samsung
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                From AI Scan to enterprise-wide email automation transformation
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-semibold">The Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    Samsung, a global technology leader, faced major
                    communication and operational inefficiencies:
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Email overload across all departments</li>
                    <li>• Sensitive data requiring on-premise solutions</li>
                    <li>• Repetitive email tasks consuming valuable time</li>
                    <li>• Need for secure, department-specific AI tools</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-semibold">
                    Our AI Scan Results
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Over 4 weeks, we identified department-specific AI
                    opportunities:
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>
                      • Customer Support: AI email classification and routing
                    </li>
                    <li>• Legal: Contract analysis and risk flagging</li>
                    <li>• R&D: Thread summarization and action extraction</li>
                    <li>
                      • Marketing: Sentiment analysis and campaign insights
                    </li>
                  </ul>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="grid gap-4 text-center sm:grid-cols-3">
                <div>
                  <p className="font-inter-tight text-foreground text-3xl font-semibold">
                    50%
                  </p>
                  <p className="text-muted-foreground text-sm">
                    reduction in response time
                  </p>
                </div>
                <div>
                  <p className="font-inter-tight text-foreground text-3xl font-semibold">
                    4
                  </p>
                  <p className="text-muted-foreground text-sm">
                    departments transformed
                  </p>
                </div>
                <div>
                  <p className="font-inter-tight text-foreground text-3xl font-semibold">
                    100%
                  </p>
                  <p className="text-muted-foreground text-sm">
                    data security maintained
                  </p>
                </div>
              </div>

              <blockquote className="mt-8 text-center text-lg leading-7 font-semibold tracking-tight text-balance">
                "The AI Scan identified precisely where AI could add value while
                respecting our security requirements. The custom on-premise
                solution delivered immediate productivity gains across all
                departments."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSimple
        title="Ready to Discover Your AI Opportunities?"
        description="Join the 75% of executives who say AI has given them a competitive edge. Let's explore how AI can transform your operations."
        primaryButtonText="Schedule Free Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Our Team"
        secondaryButtonHref="/contact"
        footerText="30-60 minute consultation • No obligation • Expert insights"
      />
    </>
  );
};

export default AIScanPage;
