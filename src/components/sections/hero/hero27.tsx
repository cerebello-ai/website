'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Hero27Props {
  solution: {
    title: string;
    description: string;
    content: string;
  };
}

export const Hero27 = ({ solution }: Hero27Props) => {
  return (
    <section className="bg-sand-50 dark:bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 container py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="border-border bg-background mb-4">
            <CheckCircle2 className="mr-2 h-3 w-3" />
            AI Solution
          </Badge>

          <h1 className="font-inter-tight text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {solution.title}
          </h1>

          <p className="font-inter text-muted-foreground mx-auto mb-4 max-w-2xl text-lg md:text-xl">
            {solution.description}
          </p>

          <p className="font-inter text-muted-foreground mx-auto mb-8 max-w-3xl text-base">
            {solution.content}
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-border">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="bg-mint/20 dark:bg-mint/10 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-mint/20 dark:bg-mint/10 absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl" />
    </section>
  );
};
