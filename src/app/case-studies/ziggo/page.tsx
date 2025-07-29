import { FileText, Gauge, Headphones, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { StructuredData } from '@/components/structured-data';
import { generateArticleSchema, generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Ziggo Case Study - AI-Powered Telecom Operations | Cerebello',
  description:
    'Learn how Cerebello helped Ziggo transform customer service and operations with integrated AI automation, achieving 40% faster response times and 60% reduction in contract processing.',
  keywords:
    'Ziggo case study, telecom AI, customer service automation, document processing, NLP, Cerebello, telecommunications transformation, operations dashboard',
  openGraph: {
    title: 'Ziggo x Cerebello: Revolutionizing Telecom Operations with AI',
    description:
      'How Cerebello helped Ziggo achieve 40% faster customer response times and 60% reduction in contract processing through integrated AI automation.',
    type: 'article',
    publishedTime: '2024-01-20',
    authors: ['Cerebello'],
    tags: [
      'AI',
      'Telecommunications',
      'Customer Service',
      'Automation',
      'Case Study',
      'Ziggo',
    ],
    images: [
      {
        url: '/images/case-studies/ziggo-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Ziggo AI Automation Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ziggo x Cerebello: AI-Powered Telecom Transformation',
    description:
      '40% faster response times, 60% reduction in contract processing. Read how AI transformed Ziggo operations.',
    images: ['/images/case-studies/ziggo-hero.jpg'],
  },
  alternates: {
    canonical: '/case-studies/ziggo',
  },
};

const ZiggoCaseStudy = () => {
  const structuredData = [
    generateArticleSchema({
      headline: 'Ziggo Case Study - AI-Powered Telecom Operations',
      description:
        'Learn how Cerebello helped Ziggo transform customer service and operations with integrated AI automation, achieving 40% faster response times and 60% reduction in contract processing.',
      url: '/case-studies/ziggo',
      datePublished: '2024-01-20',
      dateModified: '2024-01-20',
      image: '/images/case-studies/ziggo-hero.jpg',
    }),
    generateWebPageSchema({
      name: 'Ziggo Case Study - AI-Powered Telecom Operations',
      description:
        'How Cerebello helped Ziggo achieve 40% faster customer response times and 60% reduction in contract processing through integrated AI automation.',
      url: '/case-studies/ziggo',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Ziggo', url: '/case-studies/ziggo' },
      ],
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <Breadcrumb className="mb-6 lg:mb-10">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/case-studies">
                    Case Studies
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Ziggo</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative flex-col gap-10 lg:flex lg:flex-row lg:justify-between">
              <div className="lg:max-w-[692px]">
                <div className="max lg:col-span-2">
                  <div>
                    <h1 className="text-foreground mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                      Revolutionizing Telecom Operations with Integrated AI
                    </h1>
                    <p className="font-inter-tight text-muted-foreground mx-auto mb-8 max-w-2xl text-lg md:text-xl">
                      How Cerebello helped Ziggo, one of the Netherlands'
                      largest telecom providers, transform customer service and
                      operations with AI automation, achieving dramatic
                      improvements in response times and operational efficiency.
                    </p>
                    <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
                      <div className="flex flex-col gap-3">
                        <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                          40%
                        </p>
                        <p className="text-muted-foreground text-sm">
                          faster customer response times
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                          60%
                        </p>
                        <p className="text-muted-foreground text-sm">
                          reduction in contract processing time
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                          100%
                        </p>
                        <p className="text-muted-foreground text-sm">
                          GDPR compliance maintained
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                          4
                        </p>
                        <p className="text-muted-foreground text-sm">
                          integrated AI solutions deployed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="prose dark:prose-invert mb-8 max-w-full lg:max-w-prose">
                    <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                      The Challenge
                    </h2>
                    <p className="text-lg leading-6">
                      As one of the largest telecommunications providers in the
                      Netherlands, Ziggo's operations teams were experiencing
                      significant bottlenecks across customer service, contract
                      processing, and internal reporting. Manual document
                      handling and disconnected data systems resulted in delays
                      and inconsistent customer experiences.
                    </p>
                    <p className="text-lg leading-6">
                      The customer support center faced long handling times and
                      backlogs, with no intelligent triage system for routing
                      customer emails or form submissions. Meanwhile, internal
                      departments like Legal and Billing relied on slow,
                      paper-heavy processes for approvals and reconciliation,
                      creating additional operational friction.
                    </p>

                    <Alert className="my-6">
                      <TrendingUp className="h-4 w-4" />
                      <AlertTitle>Scalable Integration</AlertTitle>
                      <AlertDescription>
                        All solutions were designed to integrate with Ziggo's
                        legacy systems via APIs while maintaining strict GDPR
                        compliance throughout the implementation.
                      </AlertDescription>
                    </Alert>

                    <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                      The Solution
                    </h2>
                    <p className="text-lg leading-6">
                      Cerebello deployed an integrated AI-powered automation
                      suite tailored to Ziggo's specific operational needs. The
                      comprehensive solution addressed multiple pain points
                      across the organization:
                    </p>

                    <h3 className="text-xl font-semibold">
                      AI-Powered Solutions Deployed
                    </h3>
                    <div>
                      <table>
                        <thead>
                          <tr>
                            <th>Solution</th>
                            <th>Capabilities</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Customer Support AI Triage</td>
                            <td>
                              NLP-based classification, intelligent routing,
                              issue categorization
                            </td>
                          </tr>
                          <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Intelligent Document Processing</td>
                            <td>
                              OCR with ML, automated data extraction, digital
                              storage
                            </td>
                          </tr>
                          <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Legal Workflow Automation</td>
                            <td>
                              Smart request intake, expert matching, compliance
                              tracking
                            </td>
                          </tr>
                          <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Operations Dashboard</td>
                            <td>
                              Real-time KPI tracking, bottleneck detection,
                              performance analytics
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                      Implementation Process
                    </h2>
                    <p className="text-lg leading-6">
                      Cerebello executed a phased rollout strategy, beginning
                      with discovery sessions with Ziggo's IT and operations
                      leadership. Each department received a tailored
                      implementation plan with clear KPIs and comprehensive
                      adoption support:
                    </p>
                    <ul>
                      <li>
                        Discovery sessions to map existing workflows and pain
                        points
                      </li>
                      <li>
                        Department-specific implementation plans with measurable
                        KPIs
                      </li>
                      <li>API-based integration with legacy systems</li>
                      <li>
                        Continuous monitoring and optimization post-deployment
                      </li>
                    </ul>

                    <blockquote className="text-lg leading-7 font-semibold tracking-tight text-balance md:text-xl lg:text-2xl">
                      "Cerebello's modular AI solutions transformed our
                      operations without disrupting our existing systems. The
                      results speak for themselves—faster service, happier
                      customers, and more efficient teams."
                    </blockquote>

                    <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                      Measurable Outcomes
                    </h2>
                    <p className="text-lg leading-6">
                      The implementation delivered significant, measurable
                      improvements across Ziggo's operations:
                    </p>
                    <ul>
                      <li>
                        <strong>40% faster</strong> average response time for
                        customer inquiries through intelligent triage and
                        routing
                      </li>
                      <li>
                        <strong>Over 60%</strong> of contract processing time
                        eliminated through automated document processing
                      </li>
                      <li>
                        <strong>Improved SLA compliance</strong> for legal and
                        billing workflows with automated tracking
                      </li>
                      <li>
                        <strong>Higher customer satisfaction</strong> scores and
                        significantly lower operational costs
                      </li>
                    </ul>

                    <p className="text-lg leading-6">
                      This case highlights Cerebello's ability to bring real,
                      measurable improvements to telecom operations through
                      modular AI and automation—all while working within the
                      constraints of legacy systems and strict compliance
                      standards. By focusing on integration and scalability, we
                      helped Ziggo modernize their operations without disrupting
                      their core business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-fit lg:sticky lg:top-8 lg:max-w-80">
                <img
                  src="/images/clients/ziggo.svg"
                  alt="Ziggo logo"
                  className="mb-8 w-36"
                />
                <p className="mb-1.5 text-sm font-semibold">Overview</p>
                <p className="text-muted-foreground mb-6 text-sm">
                  Ziggo partnered with Cerebello to deploy an integrated AI
                  automation suite that transformed customer service and
                  operational efficiency across multiple departments.
                </p>
                <p className="mb-1.5 text-sm font-semibold">Industry</p>
                <p className="text-muted-foreground mb-6 text-sm">
                  Telecommunications
                </p>
                <p className="mb-1.5 text-sm font-semibold">Solutions</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    <Headphones className="opacity-60" />
                    Customer Service AI
                  </Button>
                  <Button size="sm" variant="outline">
                    <FileText className="opacity-60" />
                    Document Processing
                  </Button>
                </div>
                <p className="mb-1.5 text-sm font-semibold">Key Technologies</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    <TrendingUp className="opacity-60" />
                    NLP
                  </Button>
                  <Button size="sm" variant="outline">
                    <Gauge className="opacity-60" />
                    Analytics Dashboard
                  </Button>
                </div>
                <Separator className="my-6" />
                <p className="mb-4 text-sm font-semibold">
                  Ready to transform your operations?
                </p>
                <Button size="sm" className="w-full">
                  Book AI Implementation Scan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ZiggoCaseStudy;
