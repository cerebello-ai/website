import { BarChart3, TrendingDown, TrendingUp } from 'lucide-react';

import { StatsProps } from '@/components/shadcnblocks/types/common';

interface Stats5Props extends StatsProps {
  backgroundColor?: boolean;
  showBorder?: boolean;
  hoverAnimation?: boolean;
}

const Stats5 = ({
  title = 'Platform Performance Insights',
  stats = [
    { label: 'Metric 1', value: '95%', description: 'TrendingUp' },
    { label: 'Metric 2', value: '95%', description: 'TrendingDown' },
    { label: 'Metric 3', value: '95%', description: 'BarChart3' },
  ],
  backgroundColor = true,
  showBorder = true,
  hoverAnimation = true,
  className,
}: Stats5Props) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case 'TrendingDown':
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      case 'BarChart3':
        return <BarChart3 className="h-5 w-5 text-blue-500" />;
      default:
        return <TrendingUp className="h-5 w-5 text-green-500" />;
    }
  };

  const parseValue = (value: string) => {
    const numericPart = value.replace(/[^0-9]/g, '');
    const suffix = value.replace(/[0-9]/g, '');
    return { numeric: numericPart, suffix };
  };

  return (
    <section
      className={`${backgroundColor ? 'bg-background/50' : ''} py-20 md:py-32 ${className || ''}`}
    >
      <div className="container flex flex-col items-start text-left">
        <h2 className="mb-12 w-full max-w-[24rem] text-3xl font-semibold text-pretty sm:text-4xl md:mb-20 md:max-w-[30rem] lg:max-w-[40rem] lg:text-5xl lg:leading-[4rem]">
          {title}
        </h2>
        <div
          className={`flex w-full flex-col gap-x-8 gap-y-12 md:flex-row ${showBorder ? 'border-border md:border-b md:pb-10' : ''}`}
        >
          {stats?.map((stat, index) => {
            const { numeric, suffix } = parseValue(stat.value);
            return (
              <div
                key={`stat-${index}`}
                className={`${hoverAnimation ? 'group' : ''} w-full`}
              >
                <div
                  className={`text-primary relative mb-4 text-6xl font-semibold md:mb-6 lg:text-7xl ${hoverAnimation ? 'transition-transform duration-300 group-hover:scale-105' : ''}`}
                >
                  <span>{numeric}</span>
                  <span className="text-4xl lg:text-5xl">{suffix}</span>
                  <div className="bg-primary absolute -bottom-2 left-0 h-1 w-12 rounded-full"></div>
                </div>
                <div className="text-muted-foreground flex items-center gap-2 md:text-lg">
                  {getIcon(stat.description || '')}
                  <span className="leading-7">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Stats5 };
