'use client';

import { Search, Lightbulb, Rocket, Users, HeadphonesIcon } from 'lucide-react';
import Image from 'next/image';

interface Stage {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FeatureRoadmapStagesProps {
  badge?: string;
  title?: string;
  description?: string;
  stages?: Stage[];
  imageUrl?: string;
  imageAlt?: string;
}

const defaultStages: Stage[] = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description:
      'We begin with in-depth discovery to understand your current state, challenges, and goals. This involves assessing legacy systems, processes, and stakeholder needs. The outcome is a clear implementation plan aligned with your business strategy and priorities, with every objective tied to measurable business outcomes.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Prototyping & Pilot',
    description:
      'Before fully investing, we test ideas on a small scale. Our team rapidly develops prototypes or MVPs and runs pilot programs in controlled environments. This de-risks the project by uncovering challenges early and ensuring the solution truly addresses your needs before larger rollout.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Full-Scale Deployment',
    description:
      'Once pilots prove successful, we manage phased rollout across the organization. A key focus is integration – ensuring new solutions work seamlessly with existing architecture and legacy systems. We establish monitoring dashboards and feedback loops to track performance and catch issues early.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Change Management & Training',
    description:
      'Even the best technology fails without adoption. We develop comprehensive change management plans including clear communications, robust training programs, and train-the-trainer sessions. Organizations with formal change management are six times more likely to meet objectives.',
    icon: Users,
  },
  {
    number: '05',
    title: 'Post-Implementation Support',
    description:
      "Our engagement doesn't end at go-live. We provide ongoing support, monitoring, and continuous improvement. We ensure knowledge transfer for long-term self-sufficiency while remaining available for periodic health checks, scalability planning, and enhancements as your business evolves.",
    icon: HeadphonesIcon,
  },
];

export const FeatureRoadmapStages = ({
  badge = 'Full Project Lifecycle',
  title = 'Our Implementation Roadmap Stages',
  description = 'From discovery to support, we cover every phase of your transformation journey',
  stages = defaultStages,
  imageUrl = 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt = 'Team collaboration on implementation roadmap',
}: FeatureRoadmapStagesProps) => {
  return (
    <section className="bg-sand-50 dark:bg-sand-50/5 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6">
              <span className="font-inter text-primary mb-2 text-sm font-medium tracking-wider uppercase">
                {badge}
              </span>
              <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="font-inter text-muted-foreground text-lg">
                {description}
              </p>
            </div>

            <div className="space-y-8">
              {stages.map((stage, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-primary text-primary-foreground font-inter-tight flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                    {stage.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-inter-tight text-foreground mb-2 text-xl font-semibold">
                      {stage.title}
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={800}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
