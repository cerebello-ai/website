'use client';

import {
  TrendingUp,
  Shield,
  Clock,
  Users,
  Lightbulb,
  Target,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: TrendingUp,
    title: 'ROI-Focused Analysis',
    description:
      'We prioritize AI opportunities based on potential return on investment, ensuring you focus on high-impact implementations first.',
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description:
      'Comprehensive evaluation of potential challenges and mitigation strategies for smooth AI adoption.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description:
      'Receive your complete AI implementation scan report within 48 hours of our initial assessment.',
  },
  {
    icon: Users,
    title: 'Human-Centered Approach',
    description:
      "We ensure AI augments your team's capabilities rather than replacing them, focusing on employee empowerment.",
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description:
      'Leverage cutting-edge AI technologies tailored to your specific industry and business needs.',
  },
  {
    icon: Target,
    title: 'Actionable Insights',
    description:
      'Get clear, practical recommendations you can implement immediately to start your AI journey.',
  },
];

export const Feature49 = () => {
  return (
    <section className="bg-sand-50 dark:bg-sand-50/5 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Makes Our AI Scan Different
          </h2>
          <p className="font-inter text-muted-foreground mb-12 text-lg">
            Our comprehensive approach ensures you get the most value from your
            AI implementation journey
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-background shadow-sm">
              <CardContent className="p-6">
                <div className="bg-sand-100 dark:bg-sand-50 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <feature.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-inter-tight text-foreground mb-2 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="font-inter text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
