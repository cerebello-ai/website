'use client';

import { BarChart3, DollarSign, Gauge, Shield, Users } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureRoiBenefitsProps {
  title?: string;
  description?: string;
  benefits?: Benefit[];
}

const defaultBenefits: Benefit[] = [
  {
    title: 'Clear ROI & Value',
    description: 'Define solid business cases and KPIs upfront so you have a clear value target',
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: 'Reduced Costs & Complexity',
    description: 'Prioritize high-ROI use cases and quick wins, ensuring early results fund future phases',
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    title: 'Measurable Intangibles',
    description: 'Capture hidden returns using proxy metrics and executive-friendly dashboards',
    icon: <Gauge className="h-6 w-6" />,
  },
  {
    title: 'Data Quality & Integration',
    description: 'Address data readiness early so AI insights are reliable and comprehensive',
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: 'User Adoption & Training',
    description: 'Human-centered rollout with stakeholder involvement and comprehensive training',
    icon: <Users className="h-6 w-6" />,
  },
];

export const FeatureRoiBenefits = ({
  title = "Key Challenges We Solve",
  description = "Transform your AI investments into measurable business results with our comprehensive approach",
  benefits = defaultBenefits
}: FeatureRoiBenefitsProps) => {
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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