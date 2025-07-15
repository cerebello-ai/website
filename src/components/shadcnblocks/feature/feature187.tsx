import React from 'react';

import { TimelineProps } from '../types/common';

type DataItem = {
  id: number;
  step?: string;
  title: string;
  description: string;
};

const DEFAULT_DATA: DataItem[] = [
  {
    id: 1,
    title: 'Step 1: Plan Your Strategy',
    description:
      'Define your goals and create a roadmap to achieve them efficiently.',
  },
  {
    id: 2,
    title: 'Step 2: Execute Your Plan',
    description:
      'Implement your strategy with precision and monitor progress in real-time.',
  },
  {
    id: 3,
    title: 'Step 3: Review and Improve',
    description:
      'Analyze results, gather feedback, and refine your approach for better outcomes.',
  },
];

type StepItemProps = {
  step: DataItem;
  isLast: boolean;
};

const StepItem: React.FC<StepItemProps> = ({ step, isLast }) => {
  return (
    <div className="max-lg:flex max-lg:gap-4">
      <div className="relative lg:py-6">
        <div
          className={`bg-muted/50 absolute h-full w-1 -translate-x-1/2 translate-y-11 bg-linear-to-b max-lg:left-1/2 lg:top-1/2 lg:h-1 lg:w-full lg:translate-x-6 lg:-translate-y-1/2 lg:bg-linear-to-r ${
            isLast ? 'from-muted/50 to-white' : ''
          }`}
        />
        <div className="bg-background relative z-0 grid size-11 place-content-center rounded-full border-4">
          <p className="text-lg font-semibold">{step.id}</p>
        </div>
      </div>
      <div className="max-lg:mt-2">
        <p className="text-lg font-semibold text-black">{step.title}</p>
        <p className="text-muted-foreground mt-2">{step.description}</p>
      </div>
    </div>
  );
};

const Feature187 = ({
  title = 'Achieve Success with Ease',
  description = 'Follow our proven steps to streamline your workflow and achieve your goals with confidence.',
  steps,
}: TimelineProps) => {
  const data = steps
    ? steps.map((step, index) => ({
        id: index + 1,
        step: step.step,
        title: step.title,
        description: step.description,
      }))
    : DEFAULT_DATA;
  return (
    <section className="py-32">
      <div className="container">
        <div>
          <h2 className="text-4xl font-medium sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="text-muted-foreground mt-8 md:text-lg">{description}</p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-6">
          {data.map((step, index) => (
            <StepItem
              key={step.id}
              step={step}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature187 };
