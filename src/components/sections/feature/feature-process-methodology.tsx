'use client';

interface MethodologyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

interface FeatureProcessMethodologyProps {
  title?: string;
  description?: string;
  steps?: MethodologyStep[];
}

const defaultSteps: MethodologyStep[] = [
  {
    step: '01',
    title: 'Discovery',
    subtitle: 'Business Context Analysis',
    description: 'Understand your business goals and identify target processes for analysis through stakeholder interviews and documentation review. We combine documented facts with on-the-ground insights to build a complete picture.',
  },
  {
    step: '02',
    title: 'Mapping',
    subtitle: 'Process Visualization',
    description: 'Create detailed flowcharts and BPMN diagrams to document every step, decision point, and handoff in your workflows. This makes the invisible visible and helps spot bottlenecks.',
  },
  {
    step: '03',
    title: 'Assessment',
    subtitle: 'Performance Evaluation',
    description: 'Analyze cycle times, throughput, error rates, and other metrics to quantify current performance and identify improvement areas. We establish baselines for measuring future improvements.',
  },
  {
    step: '04',
    title: 'Engagement',
    subtitle: 'Stakeholder Collaboration',
    description: 'Hold collaborative workshops with cross-functional teams to validate findings and get input on solutions. This builds buy-in and ensures all perspectives are considered.',
  },
  {
    step: '05',
    title: 'Automation',
    subtitle: 'AI Opportunity Identification',
    description: 'Identify specific tasks ideal for automation using our expertise in RPA and intelligent automation. We assess feasibility and potential ROI for each opportunity.',
  },
  {
    step: '06',
    title: 'Roadmap',
    subtitle: 'Implementation Plan',
    description: 'Deliver a data-backed improvement roadmap with prioritized initiatives, automation opportunities, and expected ROI. Includes detailed implementation timelines and resource requirements.',
  },
];

export const FeatureProcessMethodology = ({
  title = "Our Proven Methodology",
  description = "Follow our systematic approach to process analysis and optimization",
  steps = defaultSteps
}: FeatureProcessMethodologyProps) => {
  return (
    <section className="py-24 md:py-32">
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100 mb-4">
                  <span className="font-inter-tight text-lg font-semibold text-sand-900">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-inter-tight mb-2 text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="font-inter-tight mb-3 text-sm font-medium text-sand-600">
                  {step.subtitle}
                </p>
                <p className="font-inter text-gray-700 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};