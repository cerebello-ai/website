import { Building2, MessageSquare, ClipboardList, Users } from 'lucide-react';
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
  title: 'Stadswerk072 Case Study - Smart Public Services with AI | Cerebello',
  description:
    'Discover how Cerebello helped Stadswerk072 transform municipal services in Alkmaar with AI automation, handling 70% of citizen queries autonomously while improving satisfaction.',
  keywords:
    'Stadswerk072 case study, municipal AI, public services automation, citizen services, government AI, Cerebello, smart city, Alkmaar',
  openGraph: {
    title: 'Stadswerk072 x Cerebello: Transforming Municipal Services with AI',
    description:
      'How Cerebello helped Stadswerk072 automate 70% of citizen queries and transform public services in Alkmaar through smart AI solutions.',
    type: 'article',
    publishedTime: '2024-01-18',
    authors: ['Cerebello'],
    tags: [
      'AI',
      'Government',
      'Public Services',
      'Automation',
      'Case Study',
      'Smart City',
    ],
    images: [
      {
        url: '/images/case-studies/stadswerk072-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Stadswerk072 Smart Public Services Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stadswerk072 x Cerebello: Smart Public Services with AI',
    description:
      '70% of citizen queries handled by AI. See how Alkmaar transformed municipal services.',
    images: ['/images/case-studies/stadswerk072-hero.jpg'],
  },
  alternates: {
    canonical: '/case-studies/stadswerk072',
  },
};

const Stadswerk072CaseStudy = () => {
  const structuredData = [
    generateArticleSchema({
      headline: 'Stadswerk072 Case Study - Smart Public Services with AI',
      description: 'Discover how Cerebello helped Stadswerk072 transform municipal services in Alkmaar with AI automation, handling 70% of citizen queries autonomously while improving satisfaction.',
      url: '/case-studies/stadswerk072',
      datePublished: '2024-01-18',
      dateModified: '2024-01-18',
      image: '/images/case-studies/stadswerk072-hero.jpg',
    }),
    generateWebPageSchema({
      name: 'Stadswerk072 Case Study - Smart Public Services',
      description: 'How Cerebello helped Stadswerk072 automate 70% of citizen queries and transform public services in Alkmaar through smart AI solutions.',
      url: '/case-studies/stadswerk072',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Stadswerk072', url: '/case-studies/stadswerk072' },
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
                <BreadcrumbPage>Stadswerk072</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative flex-col gap-10 lg:flex lg:flex-row lg:justify-between">
            <div className="lg:max-w-[692px]">
              <div className="max lg:col-span-2">
                <div>
                  <h1 className="text-foreground mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                    Transforming Municipal Services with Smart AI
                  </h1>
                  <p className="font-inter-tight text-muted-foreground mx-auto mb-8 max-w-2xl text-lg md:text-xl">
                    How Cerebello helped Stadswerk072, Alkmaar's municipal
                    service organization, revolutionize citizen services through
                    AI-driven automation, improving responsiveness while
                    optimizing limited resources.
                  </p>
                  <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
                    <div className="flex flex-col gap-3">
                      <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                        70%
                      </p>
                      <p className="text-muted-foreground text-sm">
                        of queries handled autonomously
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                        24/7
                      </p>
                      <p className="text-muted-foreground text-sm">
                        citizen service availability
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                        3
                      </p>
                      <p className="text-muted-foreground text-sm">
                        AI solutions deployed
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="font-inter-tight text-foreground text-4xl font-semibold sm:text-5xl">
                        100%
                      </p>
                      <p className="text-muted-foreground text-sm">
                        data compliance maintained
                      </p>
                    </div>
                  </div>
                </div>
                <div className="prose dark:prose-invert mb-8 max-w-full lg:max-w-prose">
                  <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                    The Challenge
                  </h2>
                  <p className="text-lg leading-6">
                    As the municipal service organization for the city of
                    Alkmaar, Stadswerk072 manages everything from waste
                    collection and green space maintenance to infrastructure
                    reporting and resident inquiries. The organization faced
                    rising workloads and limited resources, creating a critical
                    need for innovation.
                  </p>
                  <p className="text-lg leading-6">
                    Citizen service requests came in via multiple
                    channels—email, phone, web forms—and were routed manually,
                    often leading to delays. Administrative staff spent
                    significant time logging, categorizing, and forwarding
                    reports or documents. The organization needed to improve
                    responsiveness and better serve residents without increasing
                    headcount.
                  </p>

                  <Alert className="my-6">
                    <Building2 className="h-4 w-4" />
                    <AlertTitle>Citizen-First Design</AlertTitle>
                    <AlertDescription>
                      All solutions were designed to be intuitive for residents
                      and easy for non-technical staff to manage, with
                      governance tools for oversight.
                    </AlertDescription>
                  </Alert>

                  <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                    The Solution
                  </h2>
                  <p className="text-lg leading-6">
                    Cerebello partnered with Stadswerk072 to implement AI-driven
                    automation across key workflows, creating a comprehensive
                    smart city solution that transformed how the municipality
                    serves its citizens:
                  </p>

                  <h3 className="text-xl font-semibold">
                    AI-Powered Municipal Solutions
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
                          <td>AI Chatbot & Email Classifier</td>
                          <td>
                            Bilingual support, automatic categorization,
                            intelligent routing
                          </td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                          <td>Maintenance Report Automation</td>
                          <td>
                            Work order generation, field team assignment, issue
                            tracking
                          </td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                          <td>Document Processing</td>
                          <td>
                            Form scanning, data extraction, automated filing
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                    Implementation Process
                  </h2>
                  <p className="text-lg leading-6">
                    The implementation followed a strategic, phased approach
                    designed to deliver quick wins while building toward
                    comprehensive transformation:
                  </p>
                  <ul>
                    <li>
                      Quick-win pilot focused on waste management requests
                    </li>
                    <li>
                      Gradual expansion to green space maintenance and noise
                      complaints
                    </li>
                    <li>
                      Full rollout covering public repairs and permit processing
                    </li>
                    <li>
                      Continuous refinement based on citizen and staff feedback
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold">
                    Smart Routing in Action
                  </h3>
                  <p className="text-lg leading-6">
                    The AI system intelligently categorizes and routes citizen
                    requests:
                  </p>
                  <ul>
                    <li>
                      <strong>Waste pickup inquiries</strong> → Waste Management
                      Department
                    </li>
                    <li>
                      <strong>Pothole reports</strong> → Infrastructure Team
                    </li>
                    <li>
                      <strong>Noise complaints</strong> → Environmental Services
                    </li>
                    <li>
                      <strong>Permit applications</strong> → Planning Department
                    </li>
                  </ul>

                  <blockquote className="text-lg leading-7 font-semibold tracking-tight text-balance md:text-xl lg:text-2xl">
                    "Cerebello's AI solutions have transformed how we serve our
                    citizens. We can now respond faster, work smarter, and focus
                    our human resources where they matter most— on complex cases
                    that need personal attention."
                  </blockquote>

                  <h2 className="text-2xl leading-8 font-semibold md:text-3xl">
                    Transformative Outcomes
                  </h2>
                  <p className="text-lg leading-6">
                    The implementation delivered remarkable improvements in both
                    operational efficiency and citizen satisfaction:
                  </p>
                  <ul>
                    <li>
                      <strong>70% of routine citizen queries</strong> handled
                      autonomously by the AI chatbot or email classifier
                    </li>
                    <li>
                      <strong>Staff hours saved</strong> on triage and form
                      processing were reallocated to more complex,
                      resident-facing tasks
                    </li>
                    <li>
                      <strong>Resident satisfaction scores improved</strong> due
                      to faster response and issue resolution
                    </li>
                    <li>
                      <strong>
                        Field teams received more accurate work orders
                      </strong>
                      , reducing repeat visits and improving first-time
                      resolution rates
                    </li>
                  </ul>

                  <p className="text-lg leading-6">
                    This project demonstrates Cerebello's ability to help local
                    governments scale their citizen services through smart
                    automation—enhancing both operational efficiency and the
                    public experience while keeping costs predictable and data
                    handling compliant. By focusing on practical,
                    citizen-centric solutions, we helped Stadswerk072 become a
                    model for modern municipal service delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-fit lg:sticky lg:top-8 lg:max-w-80">
              <img
                src="/images/clients/stadswerk072.svg"
                alt="Stadswerk072 logo"
                className="mb-8 w-36"
              />
              <p className="mb-1.5 text-sm font-semibold">Overview</p>
              <p className="text-muted-foreground mb-6 text-sm">
                Stadswerk072 partnered with Cerebello to implement AI-driven
                automation across municipal services, transforming how Alkmaar
                serves its citizens while optimizing limited resources.
              </p>
              <p className="mb-1.5 text-sm font-semibold">Sector</p>
              <p className="text-muted-foreground mb-6 text-sm">
                Public Sector / Government
              </p>
              <p className="mb-1.5 text-sm font-semibold">Location</p>
              <p className="text-muted-foreground mb-6 text-sm">
                Alkmaar, Netherlands
              </p>
              <p className="mb-1.5 text-sm font-semibold">Solutions</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <Button size="sm" variant="outline">
                  <MessageSquare className="opacity-60" />
                  AI Chatbot
                </Button>
                <Button size="sm" variant="outline">
                  <ClipboardList className="opacity-60" />
                  Workflow Automation
                </Button>
              </div>
              <p className="mb-1.5 text-sm font-semibold">Key Benefits</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <Button size="sm" variant="outline">
                  <Users className="opacity-60" />
                  Citizen Satisfaction
                </Button>
                <Button size="sm" variant="outline">
                  <Building2 className="opacity-60" />
                  Smart City
                </Button>
              </div>
              <Separator className="my-6" />
              <p className="mb-4 text-sm font-semibold">
                Transform your public services?
              </p>
              <Button size="sm" className="w-full">
                Explore AI for Government
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Stadswerk072CaseStudy;
