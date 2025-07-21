'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface CtaSimpleProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  footerText?: string;
}

export const CtaSimple = ({
  title = 'Ready to Discover Your AI Opportunities?',
  description = "Join the 75% of executives who say AI has given them a competitive edge. Let's explore how AI can transform your operations.",
  primaryButtonText = 'Schedule Free Consultation',
  primaryButtonHref = '/contact',
  secondaryButtonText = 'Contact Our Team',
  secondaryButtonHref = '/contact',
  footerText = '30-60 minute consultation • No obligation • Expert insights',
}: CtaSimpleProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter-tight mb-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="font-inter mb-8 text-lg font-medium text-gray-700 dark:text-gray-300">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href={primaryButtonHref}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-6 text-sm">{footerText}</p>
        </div>
      </div>
    </section>
  );
};
