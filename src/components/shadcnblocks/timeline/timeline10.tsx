'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface TimelinePhase {
  id: number;
  date: string;
  title: string;
  description: string;
}

interface Timeline10Props {
  title?: string;
  subtitle?: string;
  currentPhase?: number;
  timelinePhases?: TimelinePhase[];
}

const Timeline10 = ({
  title = 'Timeline',
  subtitle = '',
  currentPhase = 2,
  timelinePhases = [
    {
      id: 0,
      date: 'January 15, 2024',
      title: 'Phase I',
      description:
        'Initial data collection and model architecture design for the AI system.',
    },
    {
      id: 1,
      date: 'March 30, 2024',
      title: 'Phase II',
      description:
        'Model training and validation with core dataset implementation.',
    },
    {
      id: 2,
      date: 'June 15, 2024',
      title: 'Phase III',
      description:
        'Integration of advanced features and performance optimization.',
    },
    {
      id: 3,
      date: 'September 1, 2024',
      title: 'Phase IV',
      description:
        'Final testing, deployment, and continuous improvement system launch.',
    },
  ],
}: Timeline10Props) => {
  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col items-center">
        <div className="mb-10 text-center">
          <h1 className="text-foreground text-3xl font-bold tracking-tighter sm:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>
          )}
        </div>
        <Card className="relative w-full border-none shadow-none md:py-16">
          <CardContent className="p-0">
            <div className="relative flex flex-col items-center md:mt-12">
              <Separator className="absolute -top-8 left-0 hidden md:block" />
              {currentPhase && (
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${(currentPhase / timelinePhases.length) * 104}%`,
                  }}
                  transition={{ ease: 'easeOut', duration: 0.5 }}
                  className={cn(
                    'bg-foreground absolute -top-[32px] left-0 hidden h-0.5 md:block',
                  )}
                />
              )}

              <div className="grid gap-6 md:grid-cols-4">
                {timelinePhases.map((phase, index) => (
                  <div key={phase.id} className="relative space-y-2">
                    <Separator
                      orientation="vertical"
                      className="absolute top-6 left-0 block md:hidden"
                    />
                    {index == 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height: currentPhase * 112,
                        }}
                        transition={{ ease: 'easeOut', duration: 0.5 }}
                        className={cn(
                          'bg-foreground absolute left-0 z-10 w-0.5 md:hidden',
                        )}
                      />
                    )}
                    <div className="bg-foreground absolute top-0 -left-[9px] z-10 mb-5 flex size-5 items-center justify-center rounded-full p-1 md:-top-10 md:left-0">
                      <div className="bg-background size-full rounded-full" />
                    </div>

                    <div className="pl-7 md:pl-0">
                      <p className="text-muted-foreground text-sm">
                        {phase.date}
                      </p>
                      <h2 className="text-foreground text-xl font-bold tracking-tighter">
                        {phase.title}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Timeline10 };
