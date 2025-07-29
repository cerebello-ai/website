import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import {
  ArrowRightLeft,
  Bot,
  CheckCircle2,
  Cog,
  FileText,
  Gauge,
  Mail,
  Shield,
  Users,
  Zap,
} from 'lucide-react';

import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { FeatureWorkflowBenefits } from '@/components/sections/feature/feature-workflow-benefits';
import { FeatureWorkflowCapabilities } from '@/components/sections/feature/feature-workflow-capabilities';
import { FeatureWorkflowMethodology } from '@/components/sections/feature/feature-workflow-methodology';
import { RelatedSolutions } from '@/components/sections/related-solutions';
import { StatsWorkflowAutomation } from '@/components/sections/stats-workflow-automation';
import Testimonials from '@/components/sections/testimonials';
import { Button } from '@/components/ui/button';
import { StructuredData } from '@/components/structured-data';
import { generateServiceSchema, generateWebPageSchema } from '@/lib/schema';

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

// Generate structured data
const structuredData = [
  generateServiceSchema({
    name: 'Workflow Automation',
    description:
      "Transform your business processes with Cerebello's AI-powered workflow automation. From document processing to intelligent approvals, we deliver end-to-end automation that saves time, reduces errors, and drives results.",
    url: '/solutions/workflow-automation',
    category: 'Process Automation',
    serviceType: 'AI-Powered Workflow Automation',
    offers: [
      {
        name: 'Intelligent Workflow Pipelines',
        description:
          'Orchestrated workflows connecting bots, AI services, and human tasks with automated hand-offs and progress tracking',
      },
      {
        name: 'Document Processing Automation',
        description:
          'AI-powered document processing that reads, understands, and extracts key information from invoices, contracts, and forms',
      },
      {
        name: 'Approval & Exception Handling',
        description:
          'Smart approval routing with AI decision support and automated exception handling for faster cycle times',
      },
    ],
  }),
  generateWebPageSchema({
    name: 'Workflow Automation | AI-Powered Process Automation | Cerebello',
    description:
      "Transform your business processes with Cerebello's AI-powered workflow automation. From document processing to intelligent approvals, we deliver end-to-end automation that saves time, reduces errors, and drives results.",
    url: '/solutions/workflow-automation',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Solutions', url: '/solutions' },
      { name: 'Workflow Automation', url: '/solutions/workflow-automation' },
    ],
  }),
];

// Testimonials data
const testimonials = [
  {
    slug: 'financial-services',
    quote:
      "Cerebello's workflow automation transformed our client onboarding process. We achieved 50% reduction in account opening times and saved over 10,000 hours annually.",
    author: 'Jennifer Adams',
    company: 'Premier Financial Services',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'manufacturing-corp',
    quote:
      'The AI-powered order processing system handles 190,000+ orders seamlessly. The human-centered design made adoption incredibly smooth across all departments.',
    author: 'David Martinez',
    company: 'Global Manufacturing Corp',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'healthcare-solutions',
    quote:
      'Our insurance claims processing is now 50% faster with intelligent document understanding. The ROI exceeded expectations in the first quarter.',
    author: 'Dr. Sarah Thompson',
    company: 'Healthcare Solutions Group',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Workflow benefits data
const workflowBenefits = [
  {
    title: 'AI-Infused Intelligence',
    description:
      'Beyond rule-based automation - our AI understands documents, emails, and unstructured data to make intelligent decisions',
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: 'Human-Centered Design',
    description:
      'Workflows designed with your teams in mind, keeping people in the loop where it counts for oversight and final approvals',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'End-to-End Automation',
    description:
      'Complete workflow pipelines that orchestrate all steps across systems and teams, from intake to fulfillment',
    icon: <ArrowRightLeft className="h-6 w-6" />,
  },
  {
    title: 'Integration-First Approach',
    description:
      'Seamless integration with your existing IT landscape - no rip-and-replace required',
    icon: <Cog className="h-6 w-6" />,
  },
  {
    title: 'Responsible AI & Governance',
    description:
      'Ethical, transparent, and accountable AI with strong governance, audit trails, and compliance safeguards',
    icon: <Shield className="h-6 w-6" />,
  },
];

// Workflow capabilities data
const workflowCapabilities = [
  {
    title: 'Intelligent Workflow Pipelines',
    description:
      'Orchestrated workflows connecting bots, AI services, and human tasks with automated hand-offs and progress tracking',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: 'Natural Language Document Understanding',
    description:
      'AI-powered document processing that reads, understands, and extracts key information from invoices, contracts, and forms',
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: 'Approvals & Exception Automation',
    description:
      'Smart approval routing with AI decision support and automated exception handling for faster cycle times',
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: 'Email-to-Action AI',
    description:
      'Incoming emails automatically trigger workflow actions - from support queries to order status requests',
    icon: <Mail className="h-6 w-6" />,
  },
  {
    title: 'Advanced Analytics & Optimization',
    description:
      'Real-time dashboards and continuous improvement through data-driven process optimization',
    icon: <Gauge className="h-6 w-6" />,
  },
];

// Methodology steps
const methodologySteps = [
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
];

// Stats and industry features data
const workflowStats = [
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
    value: '250,000+',
    label: 'Annual savings in logistics operations',
  },
];

const industryFeatures = [
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
];

export default function WorkflowAutomationPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      {/* Hero Section - Keep original design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900">
                  AI-Powered Process Automation
                </div>
                <h1 className="font-inter-tight mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                  Workflow Automation
                </h1>
                <p className="font-inter-tight text-muted-foreground mb-4 text-xl">
                  Empower Your Enterprise with AI-Driven, End-to-End Workflow
                  Automation
                </p>
                <p className="font-inter text-muted-foreground mb-8 text-lg">
                  Cerebello's Workflow Automation service transforms how work
                  gets done. We combine artificial intelligence with
                  human-centric design to automate entire business processes
                  from start to finish. The result? Faster cycle times, dramatic
                  cost savings, and happier teams.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/services/ai-scan">
                      Start Your AI Implementation Scan
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
                  src="https://images.unsplash.com/photo-1581092568395-d68050c2ab43?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <div className="bg-sand-100 text-sand-900 mb-4 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium">
              Our Approach
            </div>
            <h2 className="font-inter-tight mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              AI-Powered & Human-Centered Automation
            </h2>
            <p className="font-inter text-muted-foreground mb-4 text-lg">
              Our approach is professional and metrics-driven – we back our
              solutions with real-world results – yet approachable for your
              organization, ensuring smooth adoption at every step. We go beyond
              basic RPA bots by infusing workflows with cognitive AI
              capabilities that understand documents, make context-aware
              decisions, and learn from exceptions.
            </p>
            <p className="font-inter text-muted-foreground text-lg">
              By preserving human judgment in the right places and making AI
              assistance feel natural, we drive higher adoption and trust. The
              goal is to augment employees, not replace them – freeing your
              talent from drudgery so they can focus on high-value work.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <FeatureWorkflowBenefits
        title="Why Choose Our Workflow Automation"
        description="Transform your business processes with AI-powered automation designed for the enterprise"
        benefits={workflowBenefits}
      />

      {/* Key Capabilities Section */}
      <FeatureWorkflowCapabilities
        badge="Key Capabilities"
        title="Intelligent Automation in Action"
        description="Our Workflow Automation offering includes a rich set of capabilities to streamline complex processes"
        capabilities={workflowCapabilities}
      />

      {/* Methodology Section */}
      <FeatureWorkflowMethodology
        title="Our Proven Methodology"
        description="A comprehensive approach that ensures successful automation deployment and sustained value delivery"
        steps={methodologySteps}
      />

      {/* Results Section */}
      <StatsWorkflowAutomation
        title="Real Results Across Industries"
        description="Our AI-powered, human-centered automation delivers significant impact across multiple sectors"
        stats={workflowStats}
        features={industryFeatures}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Automation Journey"
        description="Our Workflow Automation service works seamlessly with our other strategic solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Workflow Automation Success Stories"
        description="See how organizations have revolutionized their operations with our AI-powered workflow automation, achieving dramatic efficiency gains and cost savings."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Transform Your Workflows?"
        description="Don't let outdated processes hold your enterprise back. Embrace the future of work with Cerebello's Workflow Automation and join industry leaders who have already saved thousands of hours and cut process times in half."
        primaryButtonText="Start Your AI Implementation Scan"
        primaryButtonHref="/services/ai-scan"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonHref="/contact"
        footerText="Process discovery • AI-powered design • Comprehensive support"
      />
    </>
  );
}
