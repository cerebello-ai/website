import Link from 'next/link';

import { Mail, Shield, Zap, Users } from 'lucide-react';
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
  title: 'Samsung Case Study - AI Email Platform | Cerebello',
  description:
    'Discover how Cerebello helped Samsung transform enterprise email with a secure, on-premise AI platform that reduced workload by 50% while maintaining complete data privacy.',
  keywords:
    'Samsung case study, enterprise AI, email automation, on-premise AI, data security, Cerebello, AI transformation, enterprise email platform',
  openGraph: {
    title:
      'Samsung x Cerebello: Transforming Enterprise Email with On-Premise AI',
    description:
      'How Cerebello helped Samsung revolutionize internal communications with a secure, AI-powered email platform that reduced workload by 50% while maintaining complete data privacy.',
    type: 'article',
    publishedTime: '2024-01-15',
    authors: ['Cerebello'],
    tags: ['AI', 'Enterprise', 'Email Automation', 'Case Study', 'Samsung'],
    images: [
      {
        url: '/images/case-studies/samsung-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Samsung AI Email Platform Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samsung x Cerebello: AI Email Platform Case Study',
    description:
      '50% reduction in email workload with secure, on-premise AI. Read the full case study.',
    images: ['/images/case-studies/samsung-hero.jpg'],
  },
  alternates: {
    canonical: '/case-studies/samsung',
  },
};

const SamsungCaseStudy = () => {
  const structuredData = [
    generateArticleSchema({
      headline: 'Samsung Case Study - AI Email Platform Transformation',
      description:
        'Discover how Cerebello helped Samsung transform enterprise email with a secure, on-premise AI platform that reduced workload by 50% while maintaining complete data privacy.',
      url: '/case-studies/samsung',
      datePublished: '2024-01-15',
      dateModified: '2024-01-15',
      image: '/images/case-studies/samsung-hero.jpg',
    }),
    generateWebPageSchema({
      name: 'Samsung Case Study - AI Email Platform',
      description:
        'How Cerebello helped Samsung revolutionize internal communications with a secure, AI-powered email platform.',
      url: '/case-studies/samsung',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Samsung', url: '/case-studies/samsung' },
      ],
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <section className="py-16 md:py-24">
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
                  <BreadcrumbPage>Samsung</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative flex-col gap-10 lg:flex lg:flex-row lg:justify-between">
              <div className="lg:max-w-[692px]">
                <div className="max lg:col-span-2">
                  <div>
                    <h1 className="text-foreground mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                      Transforming Enterprise Email with On-Premise AI
                    </h1>
                    <p className="font-inter-tight text-muted-foreground mx-auto mb-8 max-w-2xl text-lg md:text-xl">
                      How Cerebello helped Samsung revolutionize internal
                      communications with a secure, AI-powered email platform
                      that reduced workload by 50% while maintaining complete
                      data privacy.
                    </p>
                    <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
                      <div className="flex flex-col gap-3">
                        <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                          50%
                        </p>
                        <p className="text-muted-foreground text-sm">
                          reduction in email response time
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                          100%
                        </p>
                        <p className="text-muted-foreground text-sm">
                          on-premise data security maintained
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                          4
                        </p>
                        <p className="text-muted-foreground text-sm">
                          departments transformed with AI
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                          &gt;90%
                        </p>
                        <p className="text-muted-foreground text-sm">
                          employee satisfaction with AI support
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="prose dark:prose-invert mb-8 max-w-full lg:max-w-prose">
                    <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                      The Challenge
                    </h2>
                    <p className="text-lg leading-6">
                      Samsung, a global leader in technology and electronics,
                      faced major communication and operational inefficiencies
                      due to email overload across departments. With sensitive
                      internal data preventing the use of cloud-based AI
                      solutions, the company needed a secure, on-premise
                      solution that could handle the complexity of their
                      operations.
                    </p>
                    <p className="text-lg leading-6">
                      Customer Support, Legal, R&D, and Marketing teams all
                      needed better tools to handle repetitive email tasks,
                      extract insights, and speed up decision-making—while
                      keeping all data securely within Samsung's infrastructure.
                    </p>

                    <Alert className="my-6">
                      <Shield className="h-4 w-4" />
                      <AlertTitle>Security First Approach</AlertTitle>
                      <AlertDescription>
                        All AI models were trained on Samsung's internal data
                        and kept fully on-premise, ensuring complete data
                        privacy and compliance with enterprise security
                        standards.
                      </AlertDescription>
                    </Alert>

                    <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                      The Solution
                    </h2>
                    <p className="text-lg leading-6">
                      Cerebello developed a custom on-premise email platform
                      enhanced with AI, designed to integrate seamlessly into
                      Samsung's existing IT infrastructure. Each department
                      received tailored modules to address their specific needs:
                    </p>

                    <h3 className="text-xl font-semibold">
                      Department-Specific Implementations
                    </h3>
                    <div>
                      <table>
                        <thead>
                          <tr>
                            <th>Department</th>
                            <th>AI Capabilities</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Customer Support</td>
                            <td>
                              Auto-classification, response suggestions,
                              intelligent routing
                            </td>
                          </tr>
                          <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Legal</td>
                            <td>
                              Contract analysis, clause flagging, legal inquiry
                              tagging
                            </td>
                          </tr>
                          <tr className="even:bg-muted m-0 border-t p-0">
                            <td>R&D</td>
                            <td>
                              Thread summarization, action item extraction,
                              issue clustering
                            </td>
                          </tr>
                          <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Marketing</td>
                            <td>
                              Sentiment analysis, theme categorization, campaign
                              insights
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                      Implementation Process
                    </h2>
                    <p className="text-lg leading-6">
                      Cerebello led discovery workshops with each department to
                      understand their unique challenges and workflows. We then
                      built the AI-enhanced mail client using an agile,
                      iterative approach:
                    </p>
                    <ul>
                      <li>Discovery workshops with key stakeholders</li>
                      <li>Custom AI model development using Samsung's data</li>
                      <li>Phased rollout across departments</li>
                      <li>Continuous training and optimization</li>
                    </ul>

                    <blockquote className="text-lg leading-7 font-semibold tracking-tight text-balance md:text-xl lg:text-2xl">
                      "Cerebello's solution transformed how our teams handle
                      email communications. The AI understands our context and
                      helps us work smarter, not harder."
                    </blockquote>

                    <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                      Key Outcomes
                    </h2>
                    <p className="text-lg leading-6">
                      The implementation delivered significant improvements
                      across all departments:
                    </p>
                    <ul>
                      <li>
                        <strong>50% reduction</strong> in time spent on
                        repetitive email tasks
                      </li>
                      <li>
                        <strong>Faster response times</strong> to critical
                        issues and customer inquiries
                      </li>
                      <li>
                        <strong>Improved employee satisfaction</strong> through
                        AI support, not replacement
                      </li>
                      <li>
                        <strong>Complete data security</strong> with all
                        sensitive communications staying within Samsung's
                        infrastructure
                      </li>
                    </ul>

                    <p className="text-lg leading-6">
                      This project illustrates how Cerebello combines strategy,
                      software, and AI to deliver high-impact, secure, and
                      department-specific automation solutions for large
                      enterprise clients. By focusing on augmenting human
                      capabilities rather than replacing them, we helped Samsung
                      create a more efficient and satisfied workforce.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-fit lg:sticky lg:top-8 lg:max-w-80">
                <img
                  src="/images/clients/samsung.svg"
                  alt="Samsung logo"
                  className="mb-8 w-36"
                />
                <p className="mb-1.5 text-sm font-semibold">Overview</p>
                <p className="text-muted-foreground mb-6 text-sm">
                  Samsung partnered with Cerebello to develop a custom
                  on-premise AI email platform that transformed internal
                  communications while maintaining complete data security and
                  privacy.
                </p>
                <p className="mb-1.5 text-sm font-semibold">Industry</p>
                <p className="text-muted-foreground mb-6 text-sm">
                  Technology & Electronics
                </p>
                <p className="mb-1.5 text-sm font-semibold">Solution</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    <Mail className="opacity-60" />
                    AI Email Platform
                  </Button>
                  <Button size="sm" variant="outline">
                    <Shield className="opacity-60" />
                    On-Premise
                  </Button>
                </div>
                <p className="mb-1.5 text-sm font-semibold">Key Technologies</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    <Zap className="opacity-60" />
                    NLP
                  </Button>
                  <Button size="sm" variant="outline">
                    <Users className="opacity-60" />
                    Custom AI Models
                  </Button>
                </div>
                <Separator className="my-6" />
                <p className="mb-4 text-sm font-semibold">
                  Ready to transform your enterprise?
                </p>
                <Button size="sm" className="w-full" asChild>
                  <Link href="/services/ai-scan">Schedule AI Scan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SamsungCaseStudy;
