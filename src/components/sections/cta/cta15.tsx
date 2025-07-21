'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Cta15Props {
  title?: string;
  description?: string;
  benefits?: string[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const defaultBenefits = [
  'Free comprehensive AI assessment',
  'Actionable implementation roadmap',
  'ROI projections and timeline',
  'No commitment required',
];

export const Cta15 = ({
  title = "Ready to Transform Your Business with AI?",
  description = "Get your free AI Implementation Scan and discover how automation can revolutionize your operations",
  benefits = defaultBenefits,
  primaryButtonText = "Start Your Free Scan",
  primaryButtonHref = "/services/ai-scan",
  secondaryButtonText = "Schedule a Consultation",
  secondaryButtonHref = "/contact"
}: Cta15Props) => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="bg-primary relative overflow-hidden rounded-2xl px-8 py-16 md:px-16 md:py-24">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:32px_32px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="font-inter-tight text-primary-foreground mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="font-inter text-primary-foreground/90 mb-8 text-lg md:text-xl">
              {description}
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-primary-foreground flex items-center justify-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span className="font-inter text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group bg-background text-foreground hover:bg-background/90"
              >
                <a href={primaryButtonHref}>
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-inter bg-transparent"
              >
                <a href={secondaryButtonHref}>
                  {secondaryButtonText}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
