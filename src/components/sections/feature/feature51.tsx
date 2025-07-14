'use client';

import { Brain, Rocket, Settings, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const solutions = [
  {
    icon: Brain,
    title: 'AI Integration',
    description:
      'Seamlessly integrate AI solutions into your existing business processes for enhanced productivity.',
    href: '/solutions/ai-integration',
  },
  {
    icon: Settings,
    title: 'Business Automation',
    description:
      'End-to-end automation solutions that streamline operations and reduce manual workload.',
    href: '/solutions/business-automation',
  },
  {
    icon: Users,
    title: 'Strategic Consulting',
    description:
      'Expert guidance for your AI transformation journey with proven methodologies.',
    href: '/solutions/strategic-consulting',
  },
  {
    icon: Rocket,
    title: 'Custom Development',
    description:
      'Bespoke AI-powered applications tailored to your unique business requirements.',
    href: '/solutions/custom-development',
  },
];

export const Feature51 = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Core AI Solutions
          </h2>
          <p className="font-inter text-muted-foreground mb-12 text-lg">
            Choose from our comprehensive suite of AI solutions designed to
            transform your business operations
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="border-border bg-background group shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="bg-sand-100 dark:bg-sand-50 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <solution.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-inter-tight text-foreground mb-2 text-lg font-semibold">
                  <a
                    href={solution.href}
                    className="group-hover:text-primary transition-colors"
                  >
                    {solution.title}
                  </a>
                </h3>
                <p className="font-inter text-muted-foreground text-sm">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
