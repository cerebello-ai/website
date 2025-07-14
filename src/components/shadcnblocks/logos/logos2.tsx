import { Shield, Lock, Globe, Database, CheckCircle2 } from 'lucide-react';

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
  {
    id: 'placeholder',
    title: '',
    subtitle: '',
    icon: null,
    description: '',
  },
];

const Logos2 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="border-border grid overflow-hidden rounded-xl border md:grid-cols-2">
          <div className="my-auto px-6 py-10 sm:px-10 sm:py-12 lg:p-16">
            <div className="w-full md:max-w-md">
              <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">
                Security you can trust
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                As a data company, we understand the importance of keeping your
                company's data secure.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="text-primary size-5" />
                  <span className="text-muted-foreground text-sm">
                    ISO 27001 certified and compliant with GDPR, HIPAA, SOC 2
                    Type II, and CCPA standards.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="text-primary size-5" />
                  <span className="text-muted-foreground text-sm">
                    Choose between secure data residency in the EU or US,
                    tailored to your needs.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-border grid grid-cols-3 border-t md:border-t-0 md:border-l">
            {certifications.map((cert) => {
              if (!cert.icon) {
                return (
                  <div
                    key={cert.id}
                    className="border-border -mb-px flex items-center justify-center border-r border-b p-5 nth-[3n]:border-r-0 sm:p-6"
                  />
                );
              }

              const IconComponent = cert.icon;
              return (
                <div
                  key={cert.id}
                  className="border-border -mb-px flex flex-col items-center justify-center border-r border-b p-5 nth-[3n]:border-r-0 sm:p-6"
                >
                  <div className="bg-muted mb-2 flex items-center justify-center rounded-full p-3">
                    <IconComponent className="text-muted-foreground size-6" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold">{cert.title}</div>
                    <div className="text-muted-foreground mt-1 text-xs">
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

export { Logos2 };
