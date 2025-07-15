'use client';

import { CheckCircle2 } from 'lucide-react';

interface Feature53Props {
  features: string[];
}

export const Feature53 = ({ features }: Feature53Props) => {
  return (
    <section className="bg-sand-50 dark:bg-sand-50/5 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            What's Included
          </h2>
          <p className="font-inter text-muted-foreground mb-12 text-lg">
            Comprehensive features designed to deliver maximum value for your AI
            transformation
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background border-border flex items-center gap-3 rounded-lg border p-4"
              >
                <CheckCircle2 className="text-primary h-6 w-6 shrink-0" />
                <span className="font-inter text-foreground font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
