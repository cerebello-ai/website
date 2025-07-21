import Image from 'next/image';
import type { Metadata } from 'next';
import { TrendingUp, Target, Zap } from 'lucide-react';

import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { FeatureAiBenefits } from '@/components/sections/feature/feature-ai-benefits';
import { FeatureAiMethodology } from '@/components/sections/feature/feature-ai-methodology';
import { OverviewSection } from '@/components/sections/overview-section';
import { RelatedSolutions } from '@/components/sections/related-solutions';
import Testimonials from '@/components/sections/testimonials';

export const metadata: Metadata = {
  title: 'AI Strategy Development | Strategic AI Planning & Implementation | Cerebello',
  description: 'Develop a comprehensive AI strategy that aligns with your business goals. Our expert team helps you create actionable AI roadmaps that drive tangible results and competitive advantage.',
  keywords: 'AI strategy development, artificial intelligence planning, AI roadmap, strategic AI consulting, AI implementation strategy, business AI transformation, Cerebello',
  openGraph: {
    title: 'AI Strategy Development | Cerebello',
    description: 'Develop a comprehensive AI strategy that aligns with your business goals and drives tangible results.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/ai-strategy-development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Strategy Development | Cerebello',
    description: 'Develop a comprehensive AI strategy that aligns with your business goals and drives tangible results.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/ai-strategy-development',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'tech-innovate',
    quote: 'Cerebello\'s AI Strategy helped us identify the right opportunities and avoid costly mistakes. We achieved 30% efficiency gains in our first year.',
    author: 'Sarah Chen',
    company: 'TechInnovate Solutions',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'global-manufacturing',
    quote: 'The strategic roadmap provided clear direction for our AI initiatives. We now have a competitive edge that our competitors struggle to match.',
    author: 'Michael Rodriguez',
    company: 'Global Manufacturing Corp',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'financial-services',
    quote: 'Our AI transformation was seamless thanks to Cerebello\'s methodology. The governance framework has been essential for maintaining trust.',
    author: 'Emily Watson',
    company: 'Premier Financial Services',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// AI benefits data with icons
const aiBenefits = [
  {
    title: 'Increased Efficiency & Productivity',
    description: 'By streamlining workflows with AI, your organization can significantly boost productivity (studies show AI can improve employee productivity by up to 40%). Automating repetitive tasks and augmenting human work with AI leads to faster processes, reduced costs, and employees freed to focus on higher-value activities.',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: 'Competitive Advantage',
    description: 'Harnessing AI strategically helps you leapfrog competitors. Nearly 90% of organizations see AI as key to gaining a competitive edge. A well-defined AI strategy enables you to embed AI into core products and operations, optimizing services and creating customer experiences that competitors struggle to match.',
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: 'Future Readiness',
    description: 'An AI roadmap essentially future-proofs your company. It prepares your business and workforce for industry disruptions by ensuring you can adapt to emerging technologies and evolving market demands. With a forward-looking AI strategy, you build the agility and capabilities to thrive in a rapidly changing, AI-driven world.',
    icon: <TrendingUp className="h-6 w-6" />,
  },
];

export default function AIStrategyDevelopmentPage() {
  return (
    <>
      {/* Hero Section - Based on about.tsx structure */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="max-w-xl lg:translate-x-24">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              AI Strategy Development
            </h2>

            <h1 className="font-inter-tight max-w-[600px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Craft Your AI Strategy for Competitive Advantage
            </h1>
          </div>

          {/* Large Image Below */}
          <div className="relative mt-12 flex items-start gap-4">
            <div className="max-lg:-translate-x-20">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=770&h=444&fit=crop&crop=entropy&auto=format&q=80"
                alt="AI Strategy Development - Team planning AI transformation"
                width={770}
                height={444}
                className="aspect-video rounded-lg object-cover"
              />
            </div>
            {/* Right Column - Image */}
            <div className="border-sand-100 -right-10 bottom-0 aspect-[1.5/1.4] w-[max(20vw,220px)] translate-y-20 max-lg:absolute max-lg:border-[16px] lg:-translate-y-20">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="AI Strategy Planning Session"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Introduction Content */}
          <div className="mt-28 max-w-3xl lg:mt-10 lg:translate-x-24">
            <h2 className="font-inter-tight mb-6 text-2xl leading-8 font-semibold md:text-3xl">
              Introduction
            </h2>
            <div className="font-inter space-y-6 text-lg leading-6">
              <p>In today's fast-paced digital landscape, a well-crafted AI strategy is no longer a luxury—it's a necessity. Artificial intelligence has gone mainstream, with 77% of companies now using or exploring AI and 83% naming AI as a top strategic priority. Forward-thinking organizations are leveraging AI to reshape customer experiences and operations – achieving significant revenue growth, cost savings, and competitive advantages in the process.</p>
              <p>Developing a clear strategy is key to capturing these benefits by aligning AI initiatives with business goals and laying out a roadmap for implementation. Yet without a well-defined strategy, even the most promising AI projects can lose focus or stall in pilot mode. In fact, organizations that follow a structured AI roadmap report 62% higher success rates in AI implementation compared to those taking an ad-hoc approach.</p>
              <p>Our company helps you avoid these pitfalls by collaborating closely to define a tailored, actionable AI roadmap. We cut through the hype to identify real opportunities and create a step-by-step plan that drives tangible results for your business.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <FeatureAiBenefits
        title="Transform Your Business with Strategic AI"
        description="Unlock the full potential of artificial intelligence with a comprehensive strategy that drives measurable results"
        benefits={aiBenefits}
      />

      {/* Methodology Section */}
      <FeatureAiMethodology
        badge="Our Approach"
        title="Our Proven Methodology"
        description="Follow our systematic approach to AI strategy development that ensures success"
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
        imageAlt="AI Strategy Development Process"
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your AI Transformation"
        description="Our AI Strategy Development works seamlessly with our other strategic solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="AI Strategy Success Stories"
        description="See how organizations have transformed their operations with our proven AI Strategy methodology, achieving sustainable competitive advantages and measurable growth."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to actively shape your company's future with AI?"
        description="Contact us today to learn more or schedule a consultation – and take the first step toward a future-proof AI strategy."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Get AI Assessment"
        secondaryButtonHref="/services/ai-scan"
        footerText="Free consultation • Strategic roadmap • Expert guidance"
      />
    </>
  );
}