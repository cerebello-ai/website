'use client';

import { Zap, FileText, CheckCircle2, Mail, Gauge } from 'lucide-react';

interface Capability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureWorkflowCapabilitiesProps {
  badge?: string;
  title?: string;
  description?: string;
  capabilities?: Capability[];
}

const defaultCapabilities: Capability[] = [
  {
    title: 'Intelligent Workflow Pipelines',
    description: 'Orchestrated workflows connecting bots, AI services, and human tasks with automated hand-offs and progress tracking',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: 'Natural Language Document Understanding',
    description: 'AI-powered document processing that reads, understands, and extracts key information from invoices, contracts, and forms',
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: 'Approvals & Exception Automation',
    description: 'Smart approval routing with AI decision support and automated exception handling for faster cycle times',
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: 'Email-to-Action AI',
    description: 'Incoming emails automatically trigger workflow actions - from support queries to order status requests',
    icon: <Mail className="h-6 w-6" />,
  },
  {
    title: 'Advanced Analytics & Optimization',
    description: 'Real-time dashboards and continuous improvement through data-driven process optimization',
    icon: <Gauge className="h-6 w-6" />,
  },
];

export const FeatureWorkflowCapabilities = ({
  badge = "Key Capabilities",
  title = "Intelligent Automation in Action",
  description = "Our Workflow Automation offering includes a rich set of capabilities to streamline complex processes",
  capabilities = defaultCapabilities
}: FeatureWorkflowCapabilitiesProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="inline-flex w-fit items-center rounded-full border bg-sand-50 px-3 py-1 text-xs font-medium text-sand-900 shadow-sm">
              {badge}
            </div>
            <h2 className="font-inter-tight mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="font-inter mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-background rounded-lg border p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100">
                    <div className="text-sand-600">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="font-inter-tight text-xl font-semibold">{capability.title}</h3>
                </div>
                <p className="font-inter text-gray-700 dark:text-gray-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};