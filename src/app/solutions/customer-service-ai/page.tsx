import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { FeatureProcessMethodology } from '@/components/sections/feature/feature-process-methodology';
import { RelatedSolutions } from '@/components/sections/related-solutions';
import { StatsProcessAnalysis } from '@/components/sections/stats-process-analysis';
import Testimonials from '@/components/sections/testimonials';
import { Button } from '@/components/ui/button';
import { StructuredData } from '@/components/structured-data';
import { generateServiceSchema, generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Customer Service AI | AI-Powered Support Automation | Cerebello',
  description:
    'Transform customer service with AI-powered chatbots, intelligent triage, and automated support. Reduce support volumes, accelerate response times, and elevate satisfaction with human-centered AI solutions.',
  keywords:
    'Customer Service AI, AI chatbots, virtual assistants, customer support automation, intelligent triage, conversational AI, generative AI support, multilingual chatbots, sentiment analysis',
  openGraph: {
    title: 'Customer Service AI | Cerebello',
    description:
      'Enhance customer engagement with AI-powered support solutions. 24/7 automated assistance with human oversight and seamless integration.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/customer-service-ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Service AI | Cerebello',
    description:
      'Transform customer support with AI-powered automation and intelligent assistance.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/customer-service-ai',
  },
};

// Generate structured data
const structuredData = [
  generateServiceSchema({
    name: 'Customer Service AI',
    description:
      'Transform customer service with AI-powered chatbots, intelligent triage, and automated support. Reduce support volumes, accelerate response times, and elevate satisfaction with human-centered AI solutions.',
    url: '/solutions/customer-service-ai',
    category: 'AI Solutions',
    serviceType: 'Customer Service Automation',
    offers: [
      {
        name: 'AI Chatbots & Virtual Assistants',
        description:
          'Intelligent conversational AI that handles customer inquiries 24/7 with natural language understanding',
      },
      {
        name: 'Automated Ticket Routing',
        description:
          'Smart classification and routing of customer support tickets to the right agents and departments',
      },
      {
        name: 'Sentiment Analysis & Insights',
        description:
          'Real-time analysis of customer sentiment and feedback to improve service quality',
      },
    ],
  }),
  generateWebPageSchema({
    name: 'Customer Service AI | AI-Powered Support Automation | Cerebello',
    description:
      'Transform customer service with AI-powered chatbots, intelligent triage, and automated support. Reduce support volumes, accelerate response times, and elevate satisfaction with human-centered AI solutions.',
    url: '/solutions/customer-service-ai',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Solutions', url: '/solutions' },
      { name: 'Customer Service AI', url: '/solutions/customer-service-ai' },
    ],
  }),
];

// Testimonials data
const testimonials = [
  {
    slug: 'samsung',
    quote:
      "Cerebello's AI customer service tools transformed our support operations. We now classify emails automatically, generate response drafts, and route queries intelligently - reducing response times by 50% while improving consistency.",
    author: 'David Park',
    company: 'Samsung Electronics',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'municipality',
    quote:
      'Our bilingual AI chatbot handles thousands of citizen inquiries 24/7 - from waste schedules to permit applications. It dramatically reduced call volumes and in-person visits while boosting citizen satisfaction.',
    author: 'Maria van der Berg',
    company: 'Municipality of Amsterdam',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'healthcare-clinic',
    quote:
      "The AI assistant answers patient FAQs about appointments and insurance instantly, allowing our medical staff to focus on patient care instead of phone calls. It's been transformative for our clinic operations.",
    author: 'Dr. Jennifer Martinez',
    company: 'Regional Healthcare Network',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Customer Service AI
const customerServiceMethodologySteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    subtitle: 'Understanding Your Support Ecosystem',
    description:
      'We run collaborative workshops to understand support workflows, volumes, tone-of-voice, escalation rules, and integration points. This comprehensive analysis ensures the AI solution aligns perfectly with your brand and processes.',
  },
  {
    step: '02',
    title: 'Prototype & Pilot',
    subtitle: 'Focused Initial Deployment',
    description:
      'We launch a pilot AI agent in a focused area (e.g., one channel or department). Early results help fine-tune intents, responses, and triage logic before broader rollout, ensuring optimal performance.',
  },
  {
    step: '03',
    title: 'Full Deployment & Integration',
    subtitle: 'Seamless System Connection',
    description:
      'We roll out the AI solution across channels and integrate with your tools (ticketing systems, CRM, knowledge bases). Whether SaaS or on-premise, we ensure seamless connectivity and data flow.',
  },
  {
    step: '04',
    title: 'Training & Change Management',
    subtitle: 'Empowering Your Team',
    description:
      'We prepare support teams with documentation, train-the-trainer sessions, and transition plans. We emphasize co-working with AI, not replacement, ensuring high adoption and team alignment.',
  },
  {
    step: '05',
    title: 'Ongoing Optimization',
    subtitle: 'Continuous Improvement',
    description:
      'Post-launch, we monitor accuracy, feedback, and satisfaction scores. We refine the AI with real data and scale it to other domains or languages, ensuring continuous improvement.',
  },
  {
    step: '06',
    title: 'Performance Analytics',
    subtitle: 'Measuring Success',
    description:
      'Track key metrics like resolution times, customer satisfaction, and automation rates. Regular performance reviews ensure the system continues to deliver value and adapt to changing needs.',
  },
];

// Stats and benefits data for Customer Service AI
const customerServiceStats = [
  { label: 'Reduction in Support Volume', value: '60%' },
  { label: 'Faster Response Times', value: '50%' },
  { label: 'Customer Satisfaction Increase', value: '35%' },
  { label: 'Available Support Coverage', value: '24/7' },
];

const customerServiceBenefits = [
  {
    title: 'AI-Powered Chatbots',
    description:
      'Conversational bots handle repetitive questions 24/7 across web chat, WhatsApp, email, and other channels',
  },
  {
    title: 'Intelligent Triage & Routing',
    description:
      'Automatically classify requests, assess urgency and sentiment, and assign tickets to the right team instantly',
  },
  {
    title: 'Suggested Replies & Knowledge',
    description:
      'Generative AI proposes accurate, brand-aligned responses based on knowledge bases and past interactions',
  },
  {
    title: 'Multilingual Capabilities',
    description:
      'Handle conversations in multiple languages automatically, improving accessibility and global reach',
  },
];

export default function CustomerServiceAIPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      {/* Hero Section - Following Process Analysis pattern */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Customer Service AI
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Enhance Customer Engagement with Intelligent AI Support
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Cerebello's Customer Service AI solution enhances how
                organizations engage with their customers, citizens, or users by
                combining natural language processing (NLP), AI-powered
                chatbots, generative AI, and intelligent triage systems into a
                cohesive support experience. Whether it's answering customer
                questions, assisting employees, or handling citizen inquiries,
                our AI solutions reduce support volumes, accelerate response
                times, and elevate satisfaction – all while ensuring human
                oversight, regulatory compliance, and seamless system
                integration.
              </p>

              <p>
                Our approach is human-centered and outcome-driven. We design
                AI-powered support agents that understand your workflows, speak
                your brand's voice, and integrate deeply into your knowledge
                base, CRM, or internal systems. From instantly answering FAQs to
                helping agents resolve complex tickets faster, our Customer
                Service AI can transform both internal efficiency and the
                external user experience. And with on-premise deployment
                options, your data stays secure – a necessity for public sector
                and highly regulated environments.
              </p>

              <p>
                What sets us apart is our focus on customization and responsible
                AI. Every solution is custom-trained on your data, policies, and
                workflows – not just a plug-and-play tool. We prioritize
                explainability, data protection, and compliance while ensuring
                seamless integration with your existing stack. The result is AI
                support that's smart, secure, and aligned with your mission.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to transform your customer service with AI? Discover how
                  intelligent automation can elevate your support experience.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule AI Assessment
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
        title="Our Customer Service AI Delivery Process"
        description="Follow our proven approach to implement AI-powered customer service solutions"
        steps={customerServiceMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Proven Impact Across Industries"
        description="Our Customer Service AI delivers measurable improvements in support efficiency and customer satisfaction"
        badge="Performance Metrics"
        stats={customerServiceStats}
        benefits={customerServiceBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your AI Transformation"
        description="Our Customer Service AI works seamlessly with our other intelligent automation solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Customer Service AI Success Stories"
        description="See how organizations have revolutionized their support operations with our AI-powered customer service solutions, achieving dramatic efficiency gains and satisfaction improvements."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Elevate Your Customer Service?"
        description="Transform your support operations with AI that understands your customers, speaks your brand's voice, and delivers exceptional experiences 24/7. Join organizations that have reduced support volumes while increasing satisfaction."
        primaryButtonText="Get Started Today"
        primaryButtonHref="/contact"
        secondaryButtonText="Schedule Demo"
        secondaryButtonHref="/services/ai-scan"
        footerText="Custom AI training • Seamless integration • Human-centered design"
      />
    </>
  );
}
