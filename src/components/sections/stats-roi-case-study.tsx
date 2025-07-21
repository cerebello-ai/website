'use client';

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  title: string;
  description: string;
}

interface StatsRoiCaseStudyProps {
  title?: string;
  description?: string;
  stats?: Stat[];
  features?: Feature[];
}

const defaultStats: Stat[] = [
  {
    value: '60%',
    label: 'Reduction in unexpected ship breakdowns',
  },
  {
    value: '12%',
    label: 'Reduction in fuel consumption per voyage',
  },
  {
    value: '15,000+',
    label: 'Employee hours saved annually',
  },
  {
    value: '200%',
    label: 'ROI achieved in the first year',
  },
];

const defaultFeatures: Feature[] = [
  {
    title: 'Predictive Maintenance',
    description: 'AI-driven predictive maintenance dramatically cut unplanned downtime',
  },
  {
    title: 'Route Optimization',
    description: 'AI route optimization saved millions of dollars annually',
  },
  {
    title: 'Process Automation',
    description: 'Automated paperwork and data entry, eliminating thousands of hours of manual work',
  },
  {
    title: 'Cultural Transformation',
    description: 'Organization embraced human-AI collaboration through proactive change management',
  },
];

export const StatsRoiCaseStudy = ({
  title = "OceanicTransCo's ROI Transformation",
  description = "A global shipping and logistics company achieved outstanding results with our ROI Optimization service",
  stats = defaultStats,
  features = defaultFeatures
}: StatsRoiCaseStudyProps) => {
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
          <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-background mb-4 rounded-lg p-6">
                  <p className="font-inter-tight text-4xl font-bold text-foreground md:text-5xl">
                    {stat.value}
                  </p>
                </div>
                <p className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-background rounded-lg p-6">
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