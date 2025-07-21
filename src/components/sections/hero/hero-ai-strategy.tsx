'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface HeroAiStrategyProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const HeroAiStrategy = ({
  badge = "Strategic AI Planning",
  title = "AI Strategy Development",
  subtitle = "Craft Your AI Strategy for Competitive Advantage", 
  description = "Develop a comprehensive AI strategy that aligns with your business goals. Our expert team helps you create actionable AI roadmaps that drive tangible results and competitive advantage.",
  primaryButtonText = "Start Your AI Strategy",
  primaryButtonHref = "/services/ai-scan",
  secondaryButtonText = "Learn More",
  secondaryButtonHref = "#overview",
  imageUrl = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=770&h=444&fit=crop&crop=entropy&auto=format&q=80",
  imageAlt = "AI Strategy Development - Team planning AI transformation"
}: HeroAiStrategyProps) => {
  return (
    <section className="bg-sand-100 overflow-hidden py-24 md:py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border bg-sand-50 px-3 py-1 text-xs font-medium text-sand-900 shadow-sm">
              {badge}
            </div>
            
            <h1 className="font-inter-tight mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
            
            <h2 className="font-inter-tight mt-2 text-2xl font-medium text-sand-700 md:text-3xl">
              {subtitle}
            </h2>
            
            <p className="font-inter mt-6 text-lg text-sand-700 md:text-xl">
              {description}
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={primaryButtonHref}>
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryButtonHref}>
                  {secondaryButtonText}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Small overlay image */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 overflow-hidden rounded-lg border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="AI Strategy Planning Session"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};