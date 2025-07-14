import Image from 'next/image';

import { TrendingUp, Target, Zap } from 'lucide-react';
import { Metadata } from 'next';

import { Cta7 } from '@/components/shadcnblocks/cta/cta7';
import { Feature119 } from '@/components/shadcnblocks/feature/feature119';
import { Feature43 } from '@/components/shadcnblocks/feature/feature43';

export const metadata: Metadata = {
  title:
    'AI Strategy Development | Strategic AI Planning & Implementation | Cerebello',
  description:
    'Develop a comprehensive AI strategy that aligns with your business goals. Our expert team helps you create actionable AI roadmaps that drive tangible results and competitive advantage.',
  keywords:
    'AI strategy development, artificial intelligence planning, AI roadmap, strategic AI consulting, AI implementation strategy, business AI transformation, Cerebello',
  openGraph: {
    title: 'AI Strategy Development | Cerebello',
    description:
      'Develop a comprehensive AI strategy that aligns with your business goals and drives tangible results.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/ai-strategy-development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Strategy Development | Cerebello',
    description:
      'Develop a comprehensive AI strategy that aligns with your business goals and drives tangible results.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/ai-strategy-development',
  },
};

// AI Strategy Development data
const aiStrategyData = {
  title: 'AI Strategy Development',
  introduction: {
    title: 'Introduction',
    content: `In today's fast-paced digital landscape, a well-crafted AI strategy is no longer a luxury—it's a necessity. Artificial intelligence has gone mainstream, with 77% of companies now using or exploring AI and 83% naming AI as a top strategic priority. Forward-thinking organizations are leveraging AI to reshape customer experiences and operations – achieving significant revenue growth, cost savings, and competitive advantages in the process.
    
    Developing a clear strategy is key to capturing these benefits by aligning AI initiatives with business goals and laying out a roadmap for implementation. Yet without a well-defined strategy, even the most promising AI projects can lose focus or stall in pilot mode. In fact, organizations that follow a structured AI roadmap report 62% higher success rates in AI implementation compared to those taking an ad-hoc approach.
    
    Our company helps you avoid these pitfalls by collaborating closely to define a tailored, actionable AI roadmap. We cut through the hype to identify real opportunities and create a step-by-step plan that drives tangible results for your business.`,
  },
  benefits: [
    {
      title: 'Increased Efficiency & Productivity',
      description:
        'By streamlining workflows with AI, your organization can significantly boost productivity (studies show AI can improve employee productivity by up to 40%). Automating repetitive tasks and augmenting human work with AI leads to faster processes, reduced costs, and employees freed to focus on higher-value activities.',
      icon: <Zap className="size-6" />,
    },
    {
      title: 'Competitive Advantage',
      description:
        'Harnessing AI strategically helps you leapfrog competitors. Nearly 90% of organizations see AI as key to gaining a competitive edge. A well-defined AI strategy enables you to embed AI into core products and operations, optimizing services and creating customer experiences that competitors struggle to match.',
      icon: <Target className="size-6" />,
    },
    {
      title: 'Future Readiness',
      description:
        'An AI roadmap essentially future-proofs your company. It prepares your business and workforce for industry disruptions by ensuring you can adapt to emerging technologies and evolving market demands. With a forward-looking AI strategy, you build the agility and capabilities to thrive in a rapidly changing, AI-driven world.',
      icon: <TrendingUp className="size-6" />,
    },
  ],
  methodology: [
    {
      title: 'Assessment',
      description:
        'We begin with a comprehensive assessment of your current state. This involves evaluating your data landscape, IT infrastructure, team capabilities, and even governance maturity to benchmark your AI readiness. By understanding where you stand, we identify gaps and opportunities that inform the rest of the strategy.',
    },
    {
      title: 'Opportunity Identification',
      description:
        'Next, we work with your stakeholders to identify and define high-impact AI use cases that are relevant to your business. We focus on the critical processes and pain points where AI can add the most value. The outcome is a curated list of promising AI opportunities tailored to your strategic objectives.',
    },
    {
      title: 'Prioritization',
      description:
        'Not every AI initiative will deliver equal value, so prioritization is crucial. We evaluate the potential use cases and rank them based on expected business value and feasibility. This way, you tackle the most impactful and achievable projects first – ensuring quick wins and maximum return on investment.',
    },
    {
      title: 'Governance',
      description:
        'A solid AI strategy must include responsible governance. We help you establish an AI governance framework by defining the necessary policies, ethical guidelines, and compliance measures from the outset. Setting clear "rules of the road" for AI ensures risks are managed and that your AI initiatives are transparent, accountable, and trusted.',
    },
    {
      title: 'Implementation Roadmap',
      description:
        'Finally, we develop a phased implementation roadmap to bring the strategy to life. This roadmap outlines the step-by-step plan for executing your AI initiatives – including timelines, ownership, required resources, and key milestones for each phase. The result is an actionable, enterprise-ready plan that guides you from initial pilots to scaled AI solutions.',
    },
  ],
  callToAction: {
    title: "Ready to actively shape your company's future with AI?",
    description:
      'Contact us today to learn more or schedule a consultation – and take the first step toward a future-proof AI strategy.',
    buttonText: 'Schedule Consultation',
    buttonHref: '/contact',
  },
};

export default function AIStrategyDevelopmentPage() {
  return (
    <>
      {/* Hero Section - Based on about.tsx structure */}
      <section className="bg-mint-50 py-24 md:py-32">
        <div className="container">
          <div className="max-w-xl lg:translate-x-24">
            <h2 className="text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              {aiStrategyData.title}
            </h2>

            <h1 className="max-w-[600px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
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
            <div className="border-mint-50 -right-10 bottom-0 aspect-[1.5/1.4] w-[max(20vw,220px)] translate-y-20 max-lg:absolute max-lg:border-[16px] lg:-translate-y-20">
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
            <h2 className="mb-6 text-2xl leading-8 font-semibold md:text-3xl">
              {aiStrategyData.introduction.title}
            </h2>
            <div className="space-y-6 text-lg leading-6">
              {aiStrategyData.introduction.content
                .split('\n    \n    ')
                .map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Using Feature43 */}
      <Feature43
        heading="Transform Your Business with Strategic AI"
        reasons={aiStrategyData.benefits.map((benefit) => ({
          title: benefit.title,
          description: benefit.description,
          icon: benefit.icon,
        }))}
      />

      {/* Methodology Section - Using Feature119 */}
      <Feature119
        badge="Our Approach"
        title="Our Proven Methodology"
        description="Follow our systematic approach to AI strategy development that ensures success"
        steps={aiStrategyData.methodology.map((step, index) => ({
          title: step.title,
          description: step.description,
          number: (index + 1).toString().padStart(2, '0'),
        }))}
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
        imageAlt="AI Strategy Development Process"
      />

      {/* Call to Action Section - Using Cta7 */}
      <Cta7
        title={aiStrategyData.callToAction.title}
        subtitle="Future-Proof Your Business"
        features={[
          'Free Strategy Assessment',
          'Custom AI Roadmap',
          'Expert Guidance',
          'Proven Methodology',
          'Ongoing Support',
        ]}
        buttonText={aiStrategyData.callToAction.buttonText}
        buttonHref={aiStrategyData.callToAction.buttonHref}
      />
    </>
  );
}
