'use client';

import { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description:
      'Identify repetitive tasks and processes that can be automated with AI, freeing up your team to focus on strategic initiatives.',
    details: [
      'Document processing and data extraction',
      'Email classification and response automation',
      'Invoice and receipt processing',
      'Customer service ticket routing',
    ],
    metrics: '60-80% time savings',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description:
      'Leverage your data to forecast trends, anticipate customer needs, and make proactive business decisions.',
    details: [
      'Sales forecasting and demand planning',
      'Customer churn prediction',
      'Inventory optimization',
      'Risk assessment and fraud detection',
    ],
    metrics: '25-40% accuracy improvement',
  },
  {
    id: 'intelligent-insights',
    title: 'Intelligent Business Insights',
    description:
      'Transform raw data into actionable insights with AI-powered analytics and reporting.',
    details: [
      'Real-time business intelligence dashboards',
      'Automated report generation',
      'Anomaly detection and alerts',
      'Natural language data querying',
    ],
    metrics: '10x faster insights',
  },
  {
    id: 'customer-experience',
    title: 'Enhanced Customer Experience',
    description:
      'Deploy AI to deliver personalized, responsive, and efficient customer interactions across all touchpoints.',
    details: [
      'AI-powered chatbots and virtual assistants',
      'Personalization engines',
      'Sentiment analysis and feedback processing',
      'Predictive customer service',
    ],
    metrics: '35% satisfaction increase',
  },
];

export const Feature145 = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const active = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="border-border bg-background mb-4">
            AI Solutions
          </Badge>
          <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tailored AI Solutions for Your Business
          </h2>
          <p className="font-inter text-muted-foreground mb-12 text-lg">
            Our scan identifies specific AI applications that will deliver the
            most value for your organization
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Accordion */}
          <div>
            <Accordion type="single" value={activeFeature} onValueChange={setActiveFeature}>
              {features.map((feature) => (
                <AccordionItem key={feature.id} value={feature.id}>
                  <AccordionTrigger className="text-left">
                    <span className="font-inter-tight text-foreground font-semibold">
                      {feature.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-inter text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="font-inter text-muted-foreground text-sm">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Dynamic Display Area */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="border-border bg-sand-50 dark:bg-sand-50/5 overflow-hidden rounded-lg border p-8">
                <div className="mb-4">
                  <Badge className="bg-primary text-primary-foreground mb-2">
                    {active.metrics}
                  </Badge>
                  <h3 className="font-inter-tight text-foreground text-2xl font-bold">
                    {active.title}
                  </h3>
                </div>
                <p className="font-inter text-muted-foreground mb-6">
                  {active.description}
                </p>

                {/* Visual representation */}
                <div className="from-mint/30 to-mint/10 dark:from-mint/20 dark:to-mint/5 aspect-video rounded-lg bg-gradient-to-br p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="font-inter-tight text-primary mb-4 text-6xl font-bold">
                        {active.metrics}
                      </div>
                      <p className="font-inter text-muted-foreground text-sm">
                        Average improvement for businesses implementing{' '}
                        {active.title.toLowerCase()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
