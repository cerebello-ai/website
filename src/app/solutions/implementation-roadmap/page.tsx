import type { Metadata } from 'next';

import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { Feature187 } from '@/components/sections/feature/feature187';
import { FeatureRoadmapStages } from '@/components/sections/feature/feature-roadmap-stages';
import { FeatureWhyCerebello } from '@/components/sections/feature/feature-why-cerebello';
import { HeroImplementationRoadmap } from '@/components/sections/hero/hero-implementation-roadmap';
import { OverviewSection } from '@/components/sections/overview-section';
import { RelatedSolutions } from '@/components/sections/related-solutions';
import { StatsImplementation } from '@/components/sections/stats-implementation';
import Testimonials from '@/components/sections/testimonials';

export const metadata: Metadata = {
  title: 'Implementation Roadmap | End-to-End Delivery Model | Cerebello',
  description:
    "Transform your strategic innovations from concept to reality with Cerebello's comprehensive Implementation Roadmap. Our proven methodology ensures successful digital transformation with clear planning, seamless deployment, and sustained support.",
  keywords:
    'implementation roadmap, digital transformation, project delivery, change management, deployment strategy, AI implementation, business transformation, end-to-end delivery, project methodology',
  openGraph: {
    title: 'Implementation Roadmap - Strategic Innovation Delivery | Cerebello',
    description:
      'Navigate your entire digital transformation journey with our structured Implementation Roadmap. From discovery to deployment and beyond.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/implementation-roadmap',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Implementation Roadmap - Strategic Innovation Delivery | Cerebello',
    description:
      'Transform concepts to reality with our proven implementation methodology. Only 16% of organizations report successful implementation - we help you join them.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/implementation-roadmap',
  },
};

const testimonials = [
  {
    slug: 'samsung',
    quote:
      'The Implementation Roadmap provided by Cerebello was instrumental in achieving our 25% supply chain efficiency improvement. Their phased approach ensured seamless integration across our global operations.',
    author: 'David Kim',
    company: 'Samsung Electronics',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'oceanic-transco',
    quote:
      "Cerebello's roadmap helped us modernize our legacy systems incrementally, achieving 40% reduction in manual work while maintaining full operational continuity.",
    author: 'Maria Santos',
    company: 'OceanicTransCo',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'fintech-solutions',
    quote:
      'The structured implementation approach reduced our account opening times by 50%. The change management support was exceptional - our team embraced the transformation completely.',
    author: 'Alex Thompson',
    company: 'FinTech Solutions',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

export default function ImplementationRoadmapPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroImplementationRoadmap
        badge="End-to-End Delivery Model"
        title="Implementation Roadmap"
        subtitle="Your Strategic Partner from Concept to Reality"
        description="Cerebello's Implementation Roadmap is a comprehensive, step-by-step delivery model designed to take your strategic innovations from concept to reality. Aimed at CIOs, innovation managers, and operational decision-makers in medium to large enterprises."
        primaryButtonText="Start Your Implementation Journey"
        primaryButtonHref="/services/ai-scan"
        secondaryButtonText="Learn More"
        secondaryButtonHref="#overview"
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Strategic Planning and Implementation"
      />

      {/* Overview Section */}
      <OverviewSection
        id="overview"
        badge="What to Expect"
        title="A Collaborative and Transparent Partnership"
        paragraphs={[
          "We recognize that every industry is unique, but the power of technology to drive innovation is universal. Our team leverages cross-industry experience to customize solutions for each client's domain, avoiding one-size-fits-all approaches – our solutions are as unique as your business.",
          "In today's landscape, digital transformation initiatives often falter without a clear plan – in fact, only 16% of organizations report successful implementation, a gap largely due to the lack of an effective roadmap. Cerebello's Implementation Roadmap service closes this gap by providing a structured yet flexible plan that keeps efforts aligned, measurable, and focused on delivering tangible business value."
        ]}
      />

      {/* Why Cerebello Section */}
      <FeatureWhyCerebello
        title="Why Choose Cerebello?"
        description="Choosing the right partner for implementation is as important as the technology itself. Cerebello stands out through a combination of approach and experience that de-risks your initiatives and maximizes value."
      />

      {/* Roadmap Stages Section */}
      <FeatureRoadmapStages
        badge="Full Project Lifecycle"
        title="Our Implementation Roadmap Stages"
        description="From discovery to support, we cover every phase of your transformation journey"
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Team collaboration on implementation roadmap"
      />

      {/* Our Approach Section - Using Feature187 */}
      <Feature187 />

      {/* Results Section */}
      <StatsImplementation
        title="Proven Results Across Industries"
        description="Our Implementation Roadmap delivers measurable impact for enterprises worldwide"
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Transformation Journey"
        description="Our Implementation Roadmap works seamlessly with our other strategic solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Implementation Success Stories"
        description="See how organizations have successfully transformed their operations with our proven Implementation Roadmap methodology, achieving measurable results and sustained growth."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Turn Your Vision into Reality?"
        description="Join the organizations successfully transforming with our proven Implementation Roadmap methodology. Get a clear path to success and a dedicated partner every step of the way."
        primaryButtonText="Start Your Implementation Journey"
        primaryButtonHref="/services/ai-scan"
        secondaryButtonText="Schedule a Consultation"
        secondaryButtonHref="/contact"
        footerText="Free consultation • Proven methodology • Partner for the long haul"
      />
    </>
  );
}
