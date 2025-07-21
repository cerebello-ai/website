'use client';

import { ArrowRight, Map } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface HeroImplementationRoadmapProps {
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

export const HeroImplementationRoadmap = ({
  badge = "End-to-End Delivery Model",
  title = "Implementation Roadmap",
  subtitle = "Your Strategic Partner from Concept to Reality",
  description = "Cerebello's Implementation Roadmap is a comprehensive, step-by-step delivery model designed to take your strategic innovations from concept to reality. Aimed at CIOs, innovation managers, and operational decision-makers in medium to large enterprises.",
  primaryButtonText = "Start Your Implementation Journey",
  primaryButtonHref = "/services/ai-scan",
  secondaryButtonText = "Learn More",
  secondaryButtonHref = "#overview",
  imageUrl = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt = "Strategic Planning and Implementation"
}: HeroImplementationRoadmapProps) => {
  return (
    <section className="bg-sand-100 relative overflow-hidden py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge variant="outline" className="border-border bg-background mb-6">
                <Map className="mr-2 h-3 w-3" />
                {badge}
              </Badge>
              <h1 className="font-inter-tight text-foreground mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="font-inter-tight text-sand-700 mb-4 text-xl font-medium">
                {subtitle}
              </p>
              <p className="font-inter text-muted-foreground mb-8 text-lg">
                {description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={primaryButtonHref}>
                    {primaryButtonText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sand-200 to-sand-300 opacity-30 blur-3xl" />
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={600}
                height={400}
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};