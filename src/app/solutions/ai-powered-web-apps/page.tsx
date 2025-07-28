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
  title: 'AI-Powered Web Apps | Custom Intelligent Applications | Cerebello',
  description:
    'Custom-built web applications enriched with AI capabilities. From conversational chatbots to predictive analytics, we create intelligent platforms tailored to your business needs.',
  keywords:
    'AI-Powered Web Apps, Custom Web Development, Intelligent Applications, Machine Learning Integration, Chatbots, NLP, Predictive Analytics, AI Development, Full-Stack Development, Enterprise Applications',
  openGraph: {
    title: 'AI-Powered Web Apps | Cerebello',
    description:
      'Bespoke web applications with embedded AI capabilities. Custom development that combines intelligent features with intuitive user experience.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/ai-powered-web-apps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Web Apps | Cerebello',
    description:
      'Custom intelligent web applications with AI capabilities. From chatbots to predictive analytics, tailored to your needs.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/ai-powered-web-apps',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'samsung-intelligent-email',
    quote: 'Cerebello developed a secure, AI-enhanced email platform deployed entirely on-premises. Department-specific AI capabilities reduced email handling time by 50% while maintaining 100% data privacy on our servers.',
    author: 'James Park',
    company: 'Samsung Electronics',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'enterprise-customer-portal',
    quote: 'Our AI-powered customer portal with intelligent chatbots and recommendation engine increased user engagement by 40% and reduced support ticket volume by 35% through automated assistance.',
    author: 'Lisa Rodriguez',
    company: 'Enterprise Software Company',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'healthcare-workflow-app',
    quote: 'The intelligent document processing and classification system streamlined our patient record workflows. NLP-powered automation reduced manual processing time by 60% while improving accuracy.',
    author: 'Dr. Michael Thompson',
    company: 'Healthcare Network',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for AI-Powered Web Apps
const aiWebAppsMethodologySteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    subtitle: 'Requirements & AI Strategy',
    description: 'Collaborate with your team through workshops and research to understand business needs, define project scope, and identify the best opportunities where AI can add value.',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    subtitle: 'User-Centered Architecture',
    description: 'Design application architecture and user interface with wireframes and prototypes. Human-centered design approach ensures intuitive, user-friendly experience with early feedback incorporation.',
  },
  {
    step: '03',
    title: 'AI Model Integration',
    subtitle: 'Intelligence Implementation',
    description: 'Develop and adapt AI models including machine learning, NLP algorithms, and embed them into the application. Train models on relevant data for accuracy and contextual alignment.',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    subtitle: 'Comprehensive Validation',
    description: 'Rigorously test software functionality and AI outputs through functional, security, and user acceptance testing. Verify AI predictions and recommendations for reliability and accuracy.',
  },
  {
    step: '05',
    title: 'Deployment & Launch',
    subtitle: 'Production Excellence',
    description: 'Deploy to your chosen environment following DevOps best practices for scalability and security. Coordinate launch to minimize disruption with all components running smoothly.',
  },
  {
    step: '06',
    title: 'Ongoing Support & Enhancement',
    subtitle: 'Continuous Optimization',
    description: 'Provide continuous support, performance monitoring, and updates. Include training, documentation, and iterative improvements to maximize long-term benefits and user adoption.',
  },
];

// Stats and benefits data for AI-Powered Web Apps
const aiWebAppsStats = [
  { label: 'Email Processing Time Reduction', value: '50%' },
  { label: 'User Engagement Increase', value: '40%' },
  { label: 'Support Ticket Reduction', value: '35%' },
  { label: 'Development to Deployment', value: '12 weeks' },
];

const aiWebAppsBenefits = [
  {
    title: 'Conversational AI & Virtual Assistants',
    description: 'Interactive chatbots and virtual assistants providing real-time support through natural language dialogue for customer service or internal helpdesk',
  },
  {
    title: 'Natural Language Processing (NLP)',
    description: 'Advanced text analysis and understanding capabilities for document processing, intelligent search, content categorization, and automated insights',
  },
  {
    title: 'Predictive Analytics & Recommendations',
    description: 'Machine learning models for forecasting trends, personalizing user experiences, and delivering intelligent recommendations based on data patterns',
  },
  {
    title: 'Intelligent Classification & Automation',
    description: 'AI-powered systems that automatically classify, route, and process information to streamline operations and ensure nothing falls through cracks',
  },
];

export default function AiPoweredWebAppsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              AI-Powered Web Apps
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Custom Intelligent Applications
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Cerebello's AI-Powered Web Apps service delivers bespoke web applications enriched with artificial intelligence. Every solution is custom-built and tailored to your organization's needs, ensuring seamless alignment with your workflows and goals. By embedding AI capabilities directly into these applications, we help you automate complex tasks, deliver smarter user experiences, and generate real-time insights.
              </p>

              <p>
                Our development approach blends strategic planning, robust full-stack engineering, and advanced AI integration. We design each application with scalability, security, and usability in mind, making platforms both powerful and intuitive. From conversational chatbots and natural language processing to predictive analytics and intelligent automation, we create comprehensive solutions that augment your team's capabilities.
              </p>

              <p>
                Whether you need an AI-driven customer portal, intelligent internal workflow tool, or specialized business application, we combine strategy, software engineering, and artificial intelligence to deliver high-impact, secure solutions. Our focus is on AI that enhances human capabilities rather than replaces them, creating applications that drive efficiency, innovation, and measurable business value.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to build intelligent applications? Discover how custom AI-powered web apps can transform your business operations.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Development Consultation
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
        title="Our Development Process"
        description="Follow our proven approach to creating intelligent, custom web applications"
        steps={aiWebAppsMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Application Performance Metrics"
        description="Our AI-powered web applications deliver measurable improvements in efficiency and user experience"
        badge="Development Results"
        stats={aiWebAppsStats}
        benefits={aiWebAppsBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Digital Platform"
        description="Our AI-Powered Web Apps service integrates with our full suite of development and AI implementation solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Application Success Stories"
        description="See how organizations have transformed their operations with custom AI-powered web applications, achieving significant efficiency gains and enhanced user experiences."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Build Your Intelligent Application?"
        description="Join organizations that have transformed their operations with custom AI-powered web applications. Create intelligent platforms that deliver real business value and competitive advantage."
        primaryButtonText="Start Your Development Project"
        primaryButtonHref="/contact"
        secondaryButtonText="Development Consultation"
        secondaryButtonHref="/contact"
        footerText="Custom development • AI integration • Full-stack expertise"
      />
    </>
  );
}