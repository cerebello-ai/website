'use client';

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

interface FeatureWorkflowMethodologyProps {
  title?: string;
  description?: string;
  steps?: MethodologyStep[];
}

const defaultSteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Discovery & Process Mapping',
    description: 'Deep dive into your current workflows to map processes, identify pain points, and define success metrics. We quantify the status quo and uncover hidden inefficiencies.',
  },
  {
    number: '02',
    title: 'Solution Design (Integration First)',
    description: 'Design automation solutions that integrate seamlessly with your existing environment. We orchestrate bots, AI models, and APIs into coherent workflows with business rules and security.',
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'Configure and develop automation components with rigorous testing using real data samples. Iterative demos ensure solutions match business needs exactly.',
  },
  {
    number: '04',
    title: 'Deployment & Integration',
    description: 'Smooth production deployment with careful system integration. Our integration-first approach ensures minimal disruption to existing operations.',
  },
  {
    number: '05',
    title: 'Training & Change Management',
    description: 'Comprehensive training and change management support to ensure high adoption rates and smooth organizational transition.',
  },
  {
    number: '06',
    title: 'Monitoring, Support & Continuous Improvement',
    description: 'Ongoing monitoring, real-time support, and regular optimization to ensure sustained ROI and evolving value delivery.',
  },
];

export const FeatureWorkflowMethodology = ({
  title = "Our Proven Methodology",
  description = "A comprehensive approach that ensures successful automation deployment and sustained value delivery",
  steps = defaultSteps
}: FeatureWorkflowMethodologyProps) => {
  return (
    <section className="bg-sand-100 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="font-inter-tight text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="font-inter mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand-200">
                  <span className="font-inter-tight text-lg font-semibold text-sand-900">
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