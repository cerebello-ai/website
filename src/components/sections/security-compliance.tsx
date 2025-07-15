import { Shield, Lock, Globe, Database, CheckCircle2 } from 'lucide-react';

const SecurityCompliance = () => {
  const certifications = [
    {
      id: 'gdpr',
      title: 'GDPR',
      subtitle: 'COMPLIANT',
      icon: Shield,
      description: 'EU General Data Protection Regulation compliant',
    },
    {
      id: 'aicpa',
      title: 'AICPA',
      subtitle: 'SOC 2 TYPE 2',
      icon: CheckCircle2,
      description: 'AICPA SOC 2 Type 2 certified',
    },
    {
      id: 'hipaa',
      title: 'HIPAA',
      subtitle: 'COMPLIANT',
      icon: Lock,
      description:
        'Health Insurance Portability and Accountability Act compliant',
    },
    {
      id: 'ccpa',
      title: 'CCPA',
      subtitle: 'COMPLIANT',
      icon: Shield,
      description: 'California Consumer Privacy Act compliant',
    },
    {
      id: 'iso27001',
      title: 'ISO 27001',
      subtitle: 'CERTIFIED',
      icon: Globe,
      description: 'ISO 27001 information security management certified',
    },
  ];

  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="container">
        <div className="grid overflow-hidden rounded-xl border border-slate-800 md:grid-cols-2">
          <div className="my-auto px-6 py-10 sm:px-10 sm:py-12 lg:p-16">
            <div className="w-full md:max-w-md">
              <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">
                Security you can trust
              </h2>
              <p className="mb-6 text-lg text-slate-300">
                As a data company, we understand the importance of keeping your
                company's data secure.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="size-5 text-blue-400" />
                  <span className="text-sm text-slate-300">
                    ISO 27001 certified and compliant with GDPR, HIPAA, SOC 2
                    Type II, and CCPA standards.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="size-5 text-blue-400" />
                  <span className="text-sm text-slate-300">
                    Choose between secure data residency in the EU or US,
                    tailored to your needs.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-slate-800 md:border-t-0 md:border-l md:border-slate-800">
            {certifications.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={cert.id}
                  className="-mb-px flex flex-col items-center justify-center border-r border-b border-slate-800 p-5 nth-[3n]:border-r-0 sm:p-6"
                >
                  <div className="mb-2 flex items-center justify-center rounded-full bg-slate-800/50 p-3">
                    <IconComponent className="size-6 text-slate-400" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-white">
                      {cert.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      {cert.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { SecurityCompliance };
