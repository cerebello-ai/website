'use client';

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  title: string;
  description: string;
}

interface StatsWorkflowAutomationProps {
  title?: string;
  description?: string;
  stats?: Stat[];
  features?: Feature[];
}

const defaultStats: Stat[] = [
  {
    value: '10,000+',
    label: 'Hours saved annually in financial services',
  },
  {
    value: '50%',
    label: 'Reduction in account opening times',
  },
  {
    value: '190,000+',
    label: 'Orders processed seamlessly in manufacturing',
  },
  {
    value: '$250,000+',
    label: 'Annual savings in logistics operations',
  },
];

const defaultFeatures: Feature[] = [
  {
    title: 'Financial Services',
    description:
      'Automated client onboarding with intelligent document processing and KYC verification',
  },
  {
    title: 'Manufacturing & Logistics',
    description:
      'End-to-end order processing with AI-powered predictions and automated customer updates',
  },
  {
    title: 'Healthcare',
    description:
      'Streamlined insurance claims processing and patient intake with 50% faster turnaround',
  },
  {
    title: 'Public Sector',
    description:
      'Digital workflow automation saving 1,400+ staff hours annually in government agencies',
  },
];

export const StatsWorkflowAutomation = ({
  title = 'Real Results Across Industries',
  description = 'Our AI-powered, human-centered automation delivers significant impact across multiple sectors',
  stats = defaultStats,
  features = defaultFeatures,
}: StatsWorkflowAutomationProps) => {
  return (
    <section className="bg-mint py-24 md:py-32">
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

          {/* Stats Grid */}
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-background mb-4 rounded-lg p-6">
                  <p className="font-inter-tight text-foreground text-4xl font-bold md:text-5xl">
                    {stat.value}
                  </p>
                </div>
                <p className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Industry Features Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-background rounded-lg p-4">
                <h3 className="font-inter-tight mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
