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
  title: 'UX/UI Design | User Experience & Interface Design | Cerebello',
  description:
    'Intuitive, accessible, and visually elegant interface design for mobile apps, dashboards, and enterprise systems. User-centered design that blends business goals with exceptional user experiences.',
  keywords:
    'UX Design, UI Design, User Experience, User Interface, Mobile App Design, Dashboard Design, Enterprise UX, Design Systems, Wireframing, Prototyping, Visual Design, Interaction Design',
  openGraph: {
    title: 'UX/UI Design | Cerebello',
    description:
      'Craft exceptional digital experiences with user-centered design. From wireframes to polished interfaces that users love.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/ux-ui-design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UX/UI Design | Cerebello',
    description:
      'Intuitive interface design that transforms complex requirements into clarity, usability, and delight.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/ux-ui-design',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'enterprise-dashboard-redesign',
    quote:
      'The dashboard redesign transformed our complex data into intuitive visualizations. User satisfaction increased by 85% and training time decreased by 60% thanks to the thoughtful UX architecture.',
    author: 'Sarah Mitchell',
    company: 'Financial Analytics Platform',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'mobile-app-ux-success',
    quote:
      "Our mobile app's user-centered design resulted in 50% higher engagement and 4.8-star ratings. The design system ensures consistency across all features while maintaining brand identity.",
    author: 'Marcus Lee',
    company: 'Healthcare Mobile Solutions',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'enterprise-system-transformation',
    quote:
      'Cerebello transformed our legacy enterprise system into a modern, accessible interface. Employee productivity increased by 40% and support tickets decreased dramatically thanks to intuitive design.',
    author: 'Jennifer Adams',
    company: 'Manufacturing Corporation',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for UX/UI Design
const uxuiDesignMethodologySteps = [
  {
    step: '01',
    title: 'Discovery & Requirements',
    subtitle: 'Understanding Your Vision',
    description:
      'Understand business goals, technical constraints, and audience needs through stakeholder interviews and requirements gathering to frame the design challenge properly.',
  },
  {
    step: '02',
    title: 'User Research & Empathy',
    subtitle: 'Know Your Users',
    description:
      'Conduct interviews, create personas, and analyze competitors to uncover user needs, expectations, and pain points that guide design priorities.',
  },
  {
    step: '03',
    title: 'UX Architecture & Flow',
    subtitle: 'Structure & Navigation',
    description:
      'Define navigation patterns and user journeys through wireframes, flow diagrams, and information architecture ensuring logical structure and ease of use.',
  },
  {
    step: '04',
    title: 'Visual Design & Branding',
    subtitle: 'Bringing Ideas to Life',
    description:
      'Create polished UI mockups and scalable design systems with modern, brand-aligned visuals that ensure cohesive and intuitive experiences across devices.',
  },
  {
    step: '05',
    title: 'Prototyping & Interaction',
    subtitle: 'Interactive Validation',
    description:
      'Build interactive prototypes simulating real user behavior for testing, feedback, and iteration before development resources are committed.',
  },
  {
    step: '06',
    title: 'Validation & Hand-Off',
    subtitle: 'From Design to Development',
    description:
      'Test with users, refine based on feedback, and prepare organized design assets with documentation for smooth developer handoff and implementation support.',
  },
];

// Stats and benefits data for UX/UI Design
const uxuiDesignStats = [
  { label: 'User Satisfaction Increase', value: '85%' },
  { label: 'Training Time Reduction', value: '60%' },
  { label: 'User Engagement Improvement', value: '50%' },
  { label: 'Design to Development', value: '6 weeks' },
];

const uxuiDesignBenefits = [
  {
    title: 'User Experience Architecture',
    description:
      'Define structure and flow of applications including navigation patterns, user journeys, and key interactions for optimal usability',
  },
  {
    title: 'Wireframes & Interactive Prototypes',
    description:
      'Early-stage visual blueprints and clickable prototypes enable testing and refinement before full development begins',
  },
  {
    title: 'High-Fidelity Visual Design',
    description:
      'Polished UI designs reflecting your brand with typography, color systems, iconography, and micro-interactions that delight users',
  },
  {
    title: 'Scalable Design Systems',
    description:
      'Reusable component libraries maintaining consistency across pages, devices, and future product iterations',
  },
];

export default function UxUiDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              UX/UI Design
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Design Experiences Users Love
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                At Cerebello, we believe exceptional user experience is central
                to successful digital products. Our UX/UI Design service focuses
                on crafting intuitive, accessible, and visually elegant
                interfaces for mobile apps, dashboards, and enterprise systems.
                Whether launching a new product or refreshing an existing one,
                our design team works closely with you to turn complex
                requirements into clarity, usability, and delight.
              </p>

              <p>
                We design with empathy, blending business goals with user needs.
                Every interface we create is tailored, responsive, and built
                with consistency, accessibility, and performance in mind. By
                focusing on the entire experience – not just aesthetics – we
                help you deliver tools that users actually enjoy using, driving
                engagement and adoption through thoughtful design.
              </p>

              <p>
                Our collaborative, user-centered process ensures every design
                decision is rooted in user goals while aligning with your
                business objectives. From wireframes and prototypes to polished
                visual designs and scalable design systems, we deliver all the
                assets needed to bring exceptional digital experiences to life
                with confidence and efficiency.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to create exceptional user experiences? Discover how
                  thoughtful design can transform your digital products.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Design Consultation
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
        title="Our Design Process"
        description="Follow our user-centered approach to creating exceptional digital experiences"
        steps={uxuiDesignMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Design Impact Metrics"
        description="Our user-centered design approach delivers measurable improvements in satisfaction and efficiency"
        badge="Design Results"
        stats={uxuiDesignStats}
        benefits={uxuiDesignBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Digital Experience"
        description="Our UX/UI Design service integrates seamlessly with our development and implementation solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Design Success Stories"
        description="See how organizations have transformed their digital products through exceptional UX/UI design, achieving higher user satisfaction and improved business outcomes."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Design Exceptional Experiences?"
        description="Join organizations that have transformed their digital products through user-centered design. Create interfaces that delight users while achieving your business goals."
        primaryButtonText="Start Your Design Project"
        primaryButtonHref="/contact"
        secondaryButtonText="UX/UI Design Consultation"
        secondaryButtonHref="/contact"
        footerText="User research • Visual design • Design systems"
      />
    </>
  );
}
