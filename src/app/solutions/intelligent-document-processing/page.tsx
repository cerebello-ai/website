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
  title: 'Intelligent Document Processing | AI-Powered Document Automation | Cerebello',
  description:
    'Transform your document workflows with AI-powered intelligent document processing. Extract, classify, and process documents automatically with advanced OCR, NLP, and machine learning capabilities.',
  keywords:
    'Intelligent Document Processing, IDP, document automation, OCR, NLP, document AI, automated data extraction, document classification, machine learning, AI document processing',
  openGraph: {
    title: 'Intelligent Document Processing | Cerebello',
    description:
      'Automate document processing with AI. Extract data, classify documents, and streamline workflows with intelligent automation.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/intelligent-document-processing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligent Document Processing | Cerebello',
    description:
      'Transform document workflows with AI-powered intelligent processing and automation.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/intelligent-document-processing',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'financial-services-bank',
    quote: 'Cerebello\'s intelligent document processing transformed our loan application workflow. We now process documents 75% faster with 99% accuracy, eliminating manual data entry entirely.',
    author: 'Amanda Thompson',
    company: 'Premier Financial Bank',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'healthcare-system',
    quote: 'The AI document processing handles insurance claims, patient forms, and medical records seamlessly. Our administrative staff can now focus on patient care instead of paperwork.',
    author: 'Dr. Michael Rodriguez',
    company: 'Regional Healthcare System',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'logistics-corp',
    quote: 'Processing thousands of shipping documents daily used to be our biggest bottleneck. Now our AI system handles everything automatically - invoices, bills of lading, customs forms - with incredible accuracy.',
    author: 'Jennifer Liu',
    company: 'Global Logistics Corp',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for IDP
const idpMethodologySteps = [
  {
    step: '01',
    title: 'Document Assessment',
    subtitle: 'Understanding Your Document Landscape',
    description: 'We analyze your current document types, volumes, sources, and processing requirements. Our team evaluates formats, languages, quality variations, and existing workflows to understand the full scope of your document processing needs.',
  },
  {
    step: '02',
    title: 'AI Model Training',
    subtitle: 'Custom AI Development',
    description: 'Using your sample documents, we train specialized AI models for classification, data extraction, and validation. Our machine learning engineers fine-tune models to recognize your specific document layouts, fields, and business rules with high accuracy.',
  },
  {
    step: '03',
    title: 'Integration Design',
    subtitle: 'Seamless System Integration',
    description: 'We design the integration architecture to connect document processing with your existing systems - ERP, CRM, databases, and workflows. This ensures processed documents flow automatically to the right destinations without manual intervention.',
  },
  {
    step: '04',
    title: 'Processing Pipeline',
    subtitle: 'End-to-End Automation',
    description: 'Deploy the complete document processing pipeline including intake, classification, data extraction, validation, and routing. The system handles exceptions intelligently and provides human-in-the-loop capabilities for complex cases.',
  },
  {
    step: '05',
    title: 'Quality Assurance',
    subtitle: 'Continuous Monitoring',
    description: 'Implement comprehensive quality controls with confidence scoring, automated validation rules, and exception handling. We establish monitoring dashboards to track accuracy, processing times, and system performance.',
  },
  {
    step: '06',
    title: 'Optimization',
    subtitle: 'Performance Enhancement',
    description: 'Continuously improve the system through machine learning feedback loops, model retraining, and process optimization. Regular performance reviews ensure the system adapts to new document types and maintains peak accuracy.',
  },
];

// Stats and benefits data for IDP
const idpStats = [
  { label: 'Processing Speed Improvement', value: '85%' },
  { label: 'Data Extraction Accuracy', value: '99%' },
  { label: 'Manual Effort Reduction', value: '90%' },
  { label: 'ROI Achievement Timeline', value: '6 months' },
];

const idpBenefits = [
  {
    title: 'Automated Data Extraction',
    description: 'AI-powered extraction of structured and unstructured data from any document type with exceptional accuracy',
  },
  {
    title: 'Intelligent Classification',
    description: 'Automatic document classification and routing based on content, context, and business rules',
  },
  {
    title: 'Exception Handling',
    description: 'Smart handling of document variations, poor quality images, and edge cases with human-in-the-loop workflows',
  },
  {
    title: 'Scalable Processing',
    description: 'Handle thousands of documents daily with consistent quality and performance across all document types',
  },
];

export default function IntelligentDocumentProcessingPage() {
  return (
    <>
      {/* Hero Section - Following Process Analysis pattern */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Intelligent Document Processing
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Transform Documents into Actionable Data with AI
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Cerebello's Intelligent Document Processing service leverages advanced AI to automatically extract, classify, and process your business documents. From invoices and contracts to forms and reports, our solution transforms unstructured documents into structured, actionable data - eliminating manual data entry and accelerating your business processes.
              </p>

              <p>
                Whether you're handling thousands of invoices, processing insurance claims, or managing legal contracts, our AI-powered system understands document context, extracts critical information with 99% accuracy, and integrates seamlessly with your existing workflows. Say goodbye to manual document processing bottlenecks and hello to straight-through processing.
              </p>

              <p>
                What sets our approach apart is the combination of cutting-edge AI technology with practical business implementation. We don't just deploy generic tools - we train custom models on your specific document types, understand your business rules, and create intelligent workflows that handle exceptions gracefully while maintaining human oversight where it matters most.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to eliminate manual document processing? Discover how AI can transform your document workflows.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Free Assessment
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
        title="Our Proven IDP Methodology"
        description="Follow our systematic approach to intelligent document processing implementation"
        steps={idpMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Document Processing Excellence"
        description="Our intelligent document processing delivers exceptional results across industries and document types"
        badge="Performance Metrics"
        stats={idpStats}
        benefits={idpBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Digital Transformation"
        description="Our Intelligent Document Processing service works seamlessly with our other automation solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Document Processing Success Stories"
        description="See how organizations have revolutionized their document workflows with our intelligent processing solutions, achieving dramatic efficiency gains and cost savings."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Automate Your Document Processing?"
        description="Transform your document-heavy processes with AI-powered automation. Join organizations that have eliminated manual data entry and accelerated their operations with intelligent document processing."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="Schedule Demo"
        secondaryButtonHref="/services/ai-scan"
        footerText="Free document assessment • Custom AI models • Seamless integration"
      />
    </>
  );
}