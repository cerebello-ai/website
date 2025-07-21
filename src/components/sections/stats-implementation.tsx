'use client';

import { Card, CardContent } from '@/components/ui/card';

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  title: string;
  description: string;
}

interface StatsImplementationProps {
  title?: string;
  description?: string;
  stats?: Stat[];
  caseStudies?: CaseStudy[];
}

const defaultStats: Stat[] = [
  {
    value: '16%',
    label: 'Industry average for successful implementations',
  },
  {
    value: '95%',
    label: 'Our client success rate with roadmap approach',
  },
  {
    value: '6x',
    label: 'Higher success with formal change management',
  },
  {
    value: '30%+',
    label: 'Average efficiency gains from our implementations',
  },
];

const defaultCaseStudies: CaseStudy[] = [
  {
    title: 'Samsung - Global Technology',
    description:
      '25% supply chain efficiency improvement through phased global automation rollout with seamless ERP integration',
  },
  {
    title: 'OceanicTransCo - Logistics',
    description:
      '40% reduction in manual work by modernizing legacy systems incrementally without disruption',
  },
  {
    title: 'Financial Services',
    description:
      'Cut account opening times by 50% with intelligent document processing and workflow automation',
  },
  {
    title: 'Public Sector',
    description:
      'Saved 1,400+ staff hours annually through strategic digital transformation initiatives',
  },
];

export const StatsImplementation = ({
  title = 'Proven Results Across Industries',
  description = 'Our Implementation Roadmap delivers measurable impact for enterprises worldwide',
  stats = defaultStats,
  caseStudies = defaultCaseStudies,
}: StatsImplementationProps) => {
  return (
    <section className="bg-mint py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="font-inter text-muted-foreground mb-12 text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Stats Grid */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-border bg-background text-center"
              >
                <CardContent className="p-6">
                  <div className="font-inter-tight text-primary mb-2 text-4xl font-bold">
                    {stat.value}
                  </div>
                  <p className="font-inter text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Studies */}
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-border bg-background">
                <CardContent className="p-6">
                  <h3 className="font-inter-tight text-foreground mb-2 text-lg font-semibold">
                    {study.title}
                  </h3>
                  <p className="font-inter text-muted-foreground text-sm">
                    {study.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
