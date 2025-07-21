'use client';

import { Bot, Users, ArrowRightLeft, Cog, Shield } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureWorkflowBenefitsProps {
  title?: string;
  description?: string;
  benefits?: Benefit[];
}

const defaultBenefits: Benefit[] = [
  {
    title: 'AI-Infused Intelligence',
    description: 'Beyond rule-based automation - our AI understands documents, emails, and unstructured data to make intelligent decisions',
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: 'Human-Centered Design',
    description: 'Workflows designed with your teams in mind, keeping people in the loop where it counts for oversight and final approvals',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'End-to-End Automation',
    description: 'Complete workflow pipelines that orchestrate all steps across systems and teams, from intake to fulfillment',
    icon: <ArrowRightLeft className="h-6 w-6" />,
  },
  {
    title: 'Integration-First Approach',
    description: 'Seamless integration with your existing IT landscape - no rip-and-replace required',
    icon: <Cog className="h-6 w-6" />,
  },
  {
    title: 'Responsible AI & Governance',
    description: 'Ethical, transparent, and accountable AI with strong governance, audit trails, and compliance safeguards',
    icon: <Shield className="h-6 w-6" />,
  },
];

export const FeatureWorkflowBenefits = ({
  title = "Why Choose Our Workflow Automation",
  description = "Transform your business processes with AI-powered automation designed for the enterprise",
  benefits = defaultBenefits
}: FeatureWorkflowBenefitsProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-inter-tight text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="font-inter mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sand-100">
                  <div className="text-sand-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-inter-tight mb-3 text-xl font-semibold">
                  {benefit.title}
                </h3>
                <p className="font-inter text-gray-700 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};