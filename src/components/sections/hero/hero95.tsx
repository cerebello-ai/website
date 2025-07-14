'use client';

import { ArrowRight, CheckCircle2, BarChart3, Zap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Hero95 = () => {
  return (
    <section className="bg-sand-50 dark:bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 container py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="border-border bg-background mb-4">
            <BarChart3 className="mr-2 h-3 w-3" />
            AI Implementation Scan
          </Badge>

          <h1 className="font-inter-tight text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your <span className="text-primary">AI Potential</span>
          </h1>

          <p className="font-inter text-muted-foreground mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Our comprehensive AI Implementation Scan analyzes your business
            processes to identify high-impact automation opportunities. Get a
            clear roadmap to transform your operations with AI.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Your Free Scan
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-border">
              View Sample Report
            </Button>
          </div>

          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>No commitment required</span>
            </div>
            <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              <Zap className="text-primary h-5 w-5" />
              <span>Results in 48 hours</span>
            </div>
            <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>100% confidential</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="bg-mint/20 dark:bg-mint/10 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-mint/20 dark:bg-mint/10 absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl" />
    </section>
  );
};
