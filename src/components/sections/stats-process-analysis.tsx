'use client';

interface Stat {
  label: string;
  value: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface StatsProcessAnalysisProps {
  title?: string;
  description?: string;
  badge?: string;
  stats?: Stat[];
  benefits?: Benefit[];
}

const defaultStats: Stat[] = [
  { label: 'Average Efficiency Gain', value: '35%' },
  { label: 'Processes Analyzed', value: '500+' },
  { label: 'Automation Opportunities', value: '78%' },
  { label: 'ROI Within 6 Months', value: '250%' },
];

const defaultBenefits: Benefit[] = [
  {
    title: 'Process Optimization',
    description: 'Streamline workflows for maximum efficiency and reduced waste',
  },
  {
    title: 'Bottleneck Identification',
    description: 'Pinpoint where work gets stuck and eliminate delays',
  },
  {
    title: 'Automation Readiness',
    description: 'Identify and prioritize opportunities for AI and automation',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Evidence-based recommendations for sustainable improvement',
  },
];

export const StatsProcessAnalysis = ({
  title = "Proven Results Across Industries",
  description = "Our process analysis delivers measurable improvements for organizations worldwide",
  badge = "Performance Metrics",
  stats = defaultStats,
  benefits = defaultBenefits
}: StatsProcessAnalysisProps) => {
  return (
    <section className="bg-mint py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="inline-flex w-fit items-center rounded-full border bg-mint-50 px-3 py-1 text-xs font-medium text-mint-900 shadow-sm">
              {badge}
            </div>
            <h2 className="font-inter-tight mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
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

          {/* Benefits Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background rounded-lg p-6">
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