'use client';

import { TrendingUp, Target, Zap } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureAiBenefitsProps {
  title?: string;
  description?: string;
  benefits?: Benefit[];
}

const defaultBenefits: Benefit[] = [
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

export const FeatureAiBenefits = ({
  title = "Transform Your Business with Strategic AI",
  description = "Unlock the full potential of artificial intelligence with a comprehensive strategy that drives measurable results",
  benefits = defaultBenefits
}: FeatureAiBenefitsProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-inter-tight text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="font-inter mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sand-100">
                  <div className="text-sand-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-inter-tight mb-3 text-xl font-semibold">
                  {benefit.title}
                </h3>
                <p className="font-inter text-gray-700 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};