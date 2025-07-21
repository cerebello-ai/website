'use client';

import { Users, Target, Settings, Map, MessageSquare } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FeatureWhyCerebelloProps {
  title?: string;
  description?: string;
  benefits?: Benefit[];
}

const defaultBenefits: Benefit[] = [
  {
    title: 'Collaborative Partnership',
    description:
      'We work with you, not just for you. From C-suite to front-line users, we involve your people in the journey for maximum buy-in and success',
    icon: Users,
  },
  {
    title: 'Business-Value Focus',
    description:
      'Everything ties back to your objectives. We prioritize initiatives that drive measurable ROI and cut through hype to deliver real results',
    icon: Target,
  },
  {
    title: 'End-to-End Expertise',
    description:
      'Deep expertise across the entire lifecycle with strategists, architects, engineers, and change specialists who deliver complex projects',
    icon: Settings,
  },
  {
    title: 'Proven Methodology',
    description:
      'Repeatable framework incorporating best practices and lessons learned, with strong project governance to keep initiatives on track',
    icon: Map,
  },
  {
    title: 'Commitment to Support',
    description:
      'Unlike firms that implement and leave, we provide full-lifecycle support and continuous improvement for sustained success',
    icon: MessageSquare,
  },
];

export const FeatureWhyCerebello = ({
  title = "Why Choose Cerebello?",
  description = "Choosing the right partner for implementation is as important as the technology itself. Cerebello stands out through a combination of approach and experience that de-risks your initiatives and maximizes value.",
  benefits = defaultBenefits
}: FeatureWhyCerebelloProps) => {
  return (
    <section className="bg-background py-16 md:py-24">
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
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-sand-100 dark:bg-sand-50 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                      <benefit.icon className="text-foreground h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-inter-tight text-foreground mb-2 text-xl font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="font-inter text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};