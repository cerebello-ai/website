'use client';

import { FileSearch, Brain, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Process Analysis',
    description:
      'We conduct a thorough analysis of your current business processes, identifying bottlenecks, repetitive tasks, and areas where AI can add immediate value.',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'AI Opportunity Mapping',
    description:
      'Our experts map out specific AI solutions tailored to your needs, from intelligent automation to predictive analytics, ensuring practical and achievable implementations.',
    icon: Brain,
  },
  {
    number: '03',
    title: 'Implementation Roadmap',
    description:
      'Receive a detailed roadmap with prioritized recommendations, ROI projections, and a step-by-step plan to transform your business with AI.',
    icon: Rocket,
  },
];

export const Feature187 = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How Our AI Scan Works
          </h2>
          <p className="font-inter text-muted-foreground mb-12 text-lg">
            A proven three-step process to unlock your AI transformation
            potential
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Connection line */}
          <div className="bg-border absolute top-1/2 right-0 left-0 hidden h-0.5 -translate-y-1/2 md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="bg-primary text-primary-foreground relative mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <span className="font-inter-tight text-xl font-bold">
                      {step.number}
                    </span>
                    {/* Decorative dot */}
                    <div className="bg-sand-100 dark:bg-sand-50 absolute -z-10 h-20 w-20 rounded-full" />
                  </div>

                  {/* Icon */}
                  <div className="bg-sand-100 dark:bg-sand-50 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                    <step.icon className="text-foreground h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="font-inter-tight text-foreground mb-2 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="font-inter text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
