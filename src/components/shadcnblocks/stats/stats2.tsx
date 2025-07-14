import { ArrowDown, ArrowUp, Infinity as InfinityIcon } from 'lucide-react';

import { StatsProps } from '@/components/shadcnblocks/types/common';
import { Card } from '@/components/ui/card';

interface Stats2Props extends StatsProps {
  gridColumns?: number;
  cardBackground?: boolean;
  cardPadding?: string;
}

const Stats2 = ({
  title = 'Platform Performance Insights',
  stats = [
    {
      label: 'Active Users',
      value: '20,000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      label: 'Projects Completed',
      value: '20+',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      label: 'Error Rate',
      value: '50%',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      label: 'Integrations',
      value: '100+',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      label: 'Uptime',
      value: '100%',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      label: 'Support',
      value: 'Forever',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ],
  gridColumns = 3,
  cardBackground = true,
  cardPadding = 'p-8 lg:p-10',
  className,
}: Stats2Props) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ArrowUp className="mr-1 h-8 text-green-400" />;
      case 1:
        return <ArrowUp className="mr-1 h-8 text-green-400" />;
      case 2:
        return <ArrowDown className="mr-1 h-8 text-red-400" />;
      case 3:
        return <ArrowUp className="mr-1 h-8 text-green-400" />;
      case 4:
        return <ArrowUp className="mr-1 h-8 text-green-400" />;
      case 5:
        return <InfinityIcon className="mr-1 h-8" />;
      default:
        return <ArrowUp className="mr-1 h-8 text-green-400" />;
    }
  };

  return (
    <section className={`py-32 ${className || ''}`}>
      <div className="container">
        <h1 className="text-center text-4xl font-semibold lg:text-6xl">
          {title}
        </h1>
        <div
          className={`grid gap-6 pt-9 text-center md:grid-cols-${gridColumns} lg:pt-20`}
        >
          {stats?.map((stat, index) => (
            <Card
              key={`stat-${index}`}
              className={`${cardBackground ? 'bg-accent' : ''} border-none ${cardPadding}`}
            >
              <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
                {getIcon(index)}
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats2 };
