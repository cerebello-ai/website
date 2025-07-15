import { StatsProps, BenefitItem } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Stats9Props extends StatsProps {
  badge?: string;
  benefits?: BenefitItem[];
}

const Stats9 = ({
  title = 'Transform Your Digital Experience Today Together',
  description = 'Leverage cutting-edge technology to streamline your workflow and unlock new possibilities in the digital landscape.',
  badge = 'Features',
  stats = [
    { label: 'Users Served', value: '2.5M +' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'User Score', value: '4.8' },
  ],
  benefits = [
    {
      title: 'Cloud Integration',
      description: 'Seamless cloud solutions for modern business needs',
    },
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock system monitoring and support',
    },
    {
      title: 'AI-Powered Tools',
      description:
        'Advanced machine learning algorithms delivering intelligent insights',
    },
    {
      title: 'Enterprise Security',
      description: 'Military-grade encryption and advanced threat protection',
    },
  ],
}: Stats9Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
              <Badge
                variant="outline"
                className="flex w-fit items-center gap-1"
              >
                {badge}
              </Badge>
              <h1 className="mb-5 text-4xl font-semibold text-pretty">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mt-12 flex justify-center gap-7 lg:justify-start">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-foreground text-2xl font-semibold sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                  {index < stats.length - 1 && (
                    <Separator orientation="vertical" className="h-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-2.5 text-left sm:grid-cols-2 sm:text-center lg:text-left">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border-border bg-muted flex items-center gap-5 rounded-lg border p-6 sm:flex-col sm:items-start sm:p-7"
              >
                <img
                  src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-${index + 1}.svg`}
                  alt="feature icon"
                  className="mx-0 size-12 sm:mx-auto lg:mx-0"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-foreground text-sm font-semibold sm:text-base">
                    {benefit.title}
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats9 };
