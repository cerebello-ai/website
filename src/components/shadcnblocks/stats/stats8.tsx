import { ArrowRight } from 'lucide-react';

import { StatsProps } from '@/components/shadcnblocks/types/common';

interface Stats8Props extends StatsProps {
  link?: {
    text: string;
    url: string;
  };
  gridColumns?: number;
}

const Stats8 = ({
  title = 'Platform performance insights',
  description = 'Ensuring stability and scalability for all users',
  stats = [
    { label: 'average growth in user engagement', value: '250%+' },
    { label: 'annual savings per enterprise partner', value: '$2.5m' },
    { label: 'integrations with top industry platforms', value: '200+' },
    { label: 'customer satisfaction over the last year', value: '99.9%' },
  ],
  link = {
    text: 'Read the full impact report',
    url: 'https://www.shadcnblocks.com',
  },
  gridColumns = 4,
  className,
}: Stats8Props) => {
  return (
    <section className={`py-32 ${className || ''}`}>
      <div className="container">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
          <p>{description}</p>
          {link && (
            <a
              href={link.url}
              className="flex items-center gap-1 font-bold hover:underline"
            >
              {link.text}
              <ArrowRight className="h-auto w-4" />
            </a>
          )}
        </div>
        <div
          className={`mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-${gridColumns}`}
        >
          {stats?.map((stat, index) => (
            <div key={`stat-${index}`} className="flex flex-col gap-5">
              <div className="text-6xl font-bold">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats8 };
