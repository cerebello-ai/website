import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRightLeft,
  Bot,
  CheckCircle2,
  Clock,
  Cog,
  DollarSign,
  FileText,
  Gauge,
  Mail,
  RefreshCw,
  Search,
  Shield,
  Users,
  Zap,
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
  title: 'Workflow Automation | AI-Powered Process Automation | Cerebello',
  description:
    "Transform your business processes with Cerebello's AI-powered workflow automation. From document processing to intelligent approvals, we deliver end-to-end automation that saves time, reduces errors, and drives results.",
  keywords:
    'workflow automation, AI automation, process automation, intelligent workflows, business process automation, RPA, document processing, AI-powered automation, digital transformation',
  openGraph: {
    title: 'Workflow Automation - AI-Powered Process Automation | Cerebello',
    description:
      'Empower your enterprise with AI-driven, end-to-end workflow automation. Transform how work gets done with intelligent, human-centered automation solutions.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/workflow-automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workflow Automation - AI-Powered Process Automation | Cerebello',
    description:
      'Transform business processes with AI-driven automation. Faster cycle times, dramatic cost savings, and happier teams.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/workflow-automation',
  },
};

const workflowAutomationData = {
  title: 'Workflow Automation',
  subtitle:
    'Empower Your Enterprise with AI-Driven, End-to-End Workflow Automation',
  introduction:
    "Cerebello's Workflow Automation service transforms how work gets done. We combine artificial intelligence with human-centric design to automate entire business processes from start to finish. The result? Faster cycle times, dramatic cost savings, and happier teams.",
  content:
    'Our approach is professional and metrics-driven – we back our solutions with real-world results – yet approachable for your organization, ensuring smooth adoption at every step. We go beyond basic RPA bots by infusing workflows with cognitive AI capabilities that understand documents, make context-aware decisions, and learn from exceptions.',
  additionalContent:
    'By preserving human judgment in the right places and making AI assistance feel natural, we drive higher adoption and trust. The goal is to augment employees, not replace them – freeing your talent from drudgery so they can focus on high-value work.',
  benefits: [
    {
      title: 'AI-Infused Intelligence',
      description:
        'Beyond rule-based automation - our AI understands documents, emails, and unstructured data to make intelligent decisions',
      icon: <Bot className="size-6" />,
    },
    {
      title: 'Human-Centered Design',
      description:
        'Workflows designed with your teams in mind, keeping people in the loop where it counts for oversight and final approvals',
      icon: <Users className="size-6" />,
    },
    {
      title: 'End-to-End Automation',
      description:
        'Complete workflow pipelines that orchestrate all steps across systems and teams, from intake to fulfillment',
      icon: <ArrowRightLeft className="size-6" />,
    },
    {
      title: 'Integration-First Approach',
      description:
        'Seamless integration with your existing IT landscape - no rip-and-replace required',
      icon: <Cog className="size-6" />,
    },
    {
      title: 'Responsible AI & Governance',
      description:
        'Ethical, transparent, and accountable AI with strong governance, audit trails, and compliance safeguards',
      icon: <Shield className="size-6" />,
    },
  ],
  capabilities: [
    {
      title: 'Intelligent Workflow Pipelines',
      description:
        'Orchestrated workflows connecting bots, AI services, and human tasks with automated hand-offs and progress tracking',
      icon: <Zap className="size-6" />,
    },
    {
      title: 'Natural Language Document Understanding',
      description:
        'AI-powered document processing that reads, understands, and extracts key information from invoices, contracts, and forms',
      icon: <FileText className="size-6" />,
    },
    {
      title: 'Approvals & Exception Automation',
      description:
        'Smart approval routing with AI decision support and automated exception handling for faster cycle times',
      icon: <CheckCircle2 className="size-6" />,
    },
    {
      title: 'Email-to-Action AI',
      description:
        'Incoming emails automatically trigger workflow actions - from support queries to order status requests',
      icon: <Mail className="size-6" />,
    },
    {
      title: 'Advanced Analytics & Optimization',
      description:
        'Real-time dashboards and continuous improvement through data-driven process optimization',
      icon: <Gauge className="size-6" />,
    },
  ],
  methodology: [
    {
      number: '01',
      title: 'Discovery & Process Mapping',
      description:
        'Deep dive into your current workflows to map processes, identify pain points, and define success metrics. We quantify the status quo and uncover hidden inefficiencies.',
    },
    {
      number: '02',
      title: 'Solution Design (Integration First)',
      description:
        'Design automation solutions that integrate seamlessly with your existing environment. We orchestrate bots, AI models, and APIs into coherent workflows with business rules and security.',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description:
        'Configure and develop automation components with rigorous testing using real data samples. Iterative demos ensure solutions match business needs exactly.',
    },
    {
      number: '04',
      title: 'Deployment & Integration',
      description:
        'Smooth production deployment with careful system integration. Our integration-first approach ensures minimal disruption to existing operations.',
    },
    {
      number: '05',
      title: 'Training & Change Management',
      description:
        'Comprehensive training and change management support to ensure high adoption rates and smooth organizational transition.',
    },
    {
      number: '06',
      title: 'Monitoring, Support & Continuous Improvement',
      description:
        'Ongoing monitoring, real-time support, and regular optimization to ensure sustained ROI and evolving value delivery.',
    },
  ],
  process: [
    {
      title: 'Process Discovery',
      description:
        'Map current workflows and identify automation opportunities with clear ROI potential',
      icon: <Search className="size-6" />,
    },
    {
      title: 'Intelligent Design',
      description:
        'Design AI-powered workflows that integrate seamlessly with existing systems',
      icon: <Bot className="size-6" />,
    },
    {
      title: 'Rigorous Testing',
      description:
        'Comprehensive testing with real data to ensure reliable, accurate automation',
      icon: <CheckCircle2 className="size-6" />,
    },
    {
      title: 'Seamless Deployment',
      description:
        'Smooth production rollout with full integration and minimal disruption',
      icon: <Cog className="size-6" />,
    },
    {
      title: 'Continuous Optimization',
      description:
        'Ongoing monitoring and improvement for sustained performance gains',
      icon: <RefreshCw className="size-6" />,
    },
  ],
  stats: {
    title: 'Real Results Across Industries',
    subtitle:
      'Our AI-powered, human-centered automation delivers significant impact across multiple sectors',
    stats: [
      {
        value: '10,000+',
        label: 'Hours saved annually in financial services',
      },
      {
        value: '50%',
        label: 'Reduction in account opening times',
      },
      {
        value: '190,000+',
        label: 'Orders processed seamlessly in manufacturing',
      },
      {
        value: '$250,000+',
        label: 'Annual savings in logistics operations',
      },
    ],
    features: [
      {
        title: 'Financial Services',
        description:
          'Automated client onboarding with intelligent document processing and KYC verification',
      },
      {
        title: 'Manufacturing & Logistics',
        description:
          'End-to-end order processing with AI-powered predictions and automated customer updates',
      },
      {
        title: 'Healthcare',
        description:
          'Streamlined insurance claims processing and patient intake with 50% faster turnaround',
      },
      {
        title: 'Public Sector',
        description:
          'Digital workflow automation saving 1,400+ staff hours annually in government agencies',
      },
    ],
  },
  callToAction: {
    title: 'Ready to Transform Your Workflows?',
    subtitle:
      'Discover how AI-powered automation can revolutionize your business processes',
    description:
      "Don't let outdated processes hold your enterprise back. Embrace the future of work with Cerebello's Workflow Automation and join industry leaders who have already saved thousands of hours and cut process times in half.",
    buttonText: 'Start Your AI Implementation Scan',
    buttonHref: '/services/ai-scan',
  },
};

export default function WorkflowAutomationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900">
                  AI-Powered Process Automation
                </div>
                <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                  {workflowAutomationData.title}
                </h1>
                <p className="text-muted-foreground mb-4 text-xl">
                  {workflowAutomationData.subtitle}
                </p>
                <p className="text-muted-foreground mb-8 text-lg">
                  {workflowAutomationData.introduction}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href={workflowAutomationData.callToAction.buttonHref}>
                      {workflowAutomationData.callToAction.buttonText}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#overview">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-blue-300 opacity-30 blur-3xl" />
                <Image
                  src="/images/workflow-automation-hero.jpg"
                  alt="Workflow Automation Dashboard"
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
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900">
              Our Approach
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              AI-Powered & Human-Centered Automation
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              {workflowAutomationData.content}
            </p>
            <p className="text-muted-foreground text-lg">
              {workflowAutomationData.additionalContent}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Feature43
        heading="Why Choose Our Workflow Automation"
        reasons={workflowAutomationData.benefits}
      />

      {/* Key Capabilities Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900">
              Key Capabilities
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Intelligent Automation in Action
            </h2>
            <p className="text-muted-foreground text-lg">
              Our Workflow Automation offering includes a rich set of
              capabilities to streamline complex processes
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workflowAutomationData.capabilities.map((capability, index) => (
              <div key={index} className="bg-card rounded-lg border p-6">
                <div className="mb-4 flex items-center gap-3">
                  {capability.icon}
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <Feature187
        title="How It Works: From Mapping to Managed Automation"
        subtitle="We follow a proven end-to-end methodology to deliver workflow automation that fits your enterprise perfectly"
        steps={workflowAutomationData.process.map((item, index) => ({
          step: `${index + 1}`,
          title: item.title,
          description: item.description,
        }))}
      />

      {/* Methodology Section */}
      <Feature119
        title="Our Proven Methodology"
        description="A comprehensive approach that ensures successful automation deployment and sustained value delivery"
        steps={workflowAutomationData.methodology}
      />

      {/* Results Section */}
      <Stats9
        title={workflowAutomationData.stats.title}
        subtitle={workflowAutomationData.stats.subtitle}
        stats={workflowAutomationData.stats.stats}
        benefits={workflowAutomationData.stats.features}
      />

      {/* Testimonial Section */}
      <Testimonial23 />

      {/* Call to Action Section */}
      <Cta7
        title={workflowAutomationData.callToAction.title}
        subtitle={workflowAutomationData.callToAction.subtitle}
        features={[
          'Process Discovery & Mapping',
          'AI-Powered Automation Design',
          'Integration with Existing Systems',
          'Comprehensive Training & Support',
          'Continuous Optimization',
        ]}
        buttonText={workflowAutomationData.callToAction.buttonText}
        buttonHref={workflowAutomationData.callToAction.buttonHref}
      />
    </>
  );
}
