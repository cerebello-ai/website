'use client';

import { ArrowRight, Lightbulb, Users, Target } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

interface Solution {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface RelatedSolutionsProps {
  title?: string;
  description?: string;
  solutions?: Solution[];
}

const defaultSolutions: Solution[] = [
  {
    title: 'AI Strategy Development',
    description: 'Define your AI vision and strategy before implementation',
    href: '/solutions/ai-strategy-development',
    icon: Lightbulb,
  },
  {
    title: 'Change Management',
    description: 'Ensure successful adoption with our comprehensive change support',
    href: '/solutions/change-management',
    icon: Users,
  },
  {
    title: 'ROI Optimization',
    description: 'Maximize returns from your implementation investments',
    href: '/solutions/roi-optimization',
    icon: Target,
  },
];

export const RelatedSolutions = ({
  title = "Complete Your Transformation Journey",
  description = "Our Implementation Roadmap works seamlessly with our other strategic solutions",
  solutions = defaultSolutions
}: RelatedSolutionsProps) => {
  return (
    <section className="bg-sand-100 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            {description}
          </p>
        </div>
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Link key={index} href={solution.href}>
              <Card className="border-border hover:shadow-lg transition-shadow h-full bg-background">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-sand-100 dark:bg-sand-50 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                      <solution.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="font-inter-tight text-foreground text-xl font-semibold">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="font-inter text-muted-foreground mb-4">
                    {solution.description}
                  </p>
                  <div className="flex items-center text-primary">
                    <span className="font-inter text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};