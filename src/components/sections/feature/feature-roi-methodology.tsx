'use client';

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

interface FeatureRoiMethodologyProps {
  badge?: string;
  title?: string;
  description?: string;
  steps?: MethodologyStep[];
}

const defaultSteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Discover & Benchmark',
    description:
      'We begin with a deep dive into your business. Our consultants conduct workshops and on-site observations to map processes, pain points, and opportunities. We quantify the status quo and define clear success KPIs.',
  },
  {
    number: '02',
    title: 'Pilot & Validate',
    description:
      'Rather than a big bang, we prove the value on a small scale first. The pilot lets us validate ROI assumptions in real conditions and gather user feedback early. Seeing a successful pilot builds confidence for broader roll-out.',
  },
  {
    number: '03',
    title: 'Implement & Integrate',
    description:
      'Once a solution is proven, we scale it up seamlessly across your organization. We prefer to augment your current workflows rather than force new ones – embedding AI recommendations into the software your team already uses.',
  },
  {
    number: '04',
    title: 'Monitor & Optimize',
    description:
      "ROI Optimization isn't a one-off project, it's an ongoing discipline. We set up real-time dashboards for key performance indicators so you can monitor impact at a glance. This ensures ROI improves over time.",
  },
];

export const FeatureRoiMethodology = ({
  badge = 'Our Methodology',
  title = 'Our Proven Methodology',
  description = 'An end-to-end and iterative approach ensuring you get results fast and sustainably',
  steps = defaultSteps,
}: FeatureRoiMethodologyProps) => {
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

          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="bg-sand-200 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <span className="font-inter-tight text-sand-900 text-lg font-semibold">
                    {step.number}
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
        </div>
      </div>
    </section>
  );
};
