'use client';

interface MethodologyStep {
  title: string;
  description: string;
}

interface FeatureAiMethodologyProps {
  badge?: string;
  title?: string;
  description?: string;
  steps?: MethodologyStep[];
  imageUrl?: string;
  imageAlt?: string;
}

const defaultSteps: MethodologyStep[] = [
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
];

export const FeatureAiMethodology = ({
  badge = 'Our Approach',
  title = 'Our Proven Methodology',
  description = 'Follow our systematic approach to AI strategy development that ensures success',
  steps = defaultSteps,
  imageUrl = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
  imageAlt = 'AI Strategy Development Process',
}: FeatureAiMethodologyProps) => {
  return (
    <section className="bg-sand-100 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="bg-sand-50 text-sand-900 inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium shadow-sm">
              {badge}
            </div>
            <h2 className="font-inter-tight mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="font-inter mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-sand-200 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <span className="font-inter-tight text-sand-900 text-sm font-semibold">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-inter-tight mb-2 text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="font-inter text-gray-700 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
