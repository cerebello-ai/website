import { ArrowDown, ArrowUp } from 'lucide-react';

import { StatsProps } from '@/components/shadcnblocks/types/common';
import { Progress } from '@/components/ui/progress';

interface ProgressStat {
  label: string;
  value: string;
  progressValue: number;
  trend: 'up' | 'down';
  description: string;
}

interface Stats7Props extends StatsProps {
  progressStats?: ProgressStat[];
  showBorder?: boolean;
  maxWidth?: string;
}

const Stats7 = ({
  title = 'Weekly Stats',
  progressStats = [
    {
      label: 'Work completed',
      value: '80.2%',
      progressValue: 80,
      trend: 'up',
      description: '10% more than last week',
    },
    {
      label: 'Progress metric',
      value: '55.2%',
      progressValue: 55,
      trend: 'down',
      description: '29% less than last week',
    },
    {
      label: 'Error rate',
      value: '20.1%',
      progressValue: 20,
      trend: 'down',
      description: '5% more than last week',
    },
  ],
  showBorder = true,
  maxWidth = 'max-w-3xl',
  className,
}: Stats7Props) => {
  const getTrendIcon = (trend: 'up' | 'down') => {
    return trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />;
  };

  const getTrendColor = (trend: 'up' | 'down') => {
    return trend === 'up' ? 'text-green-400' : 'text-destructive';
  };

  return (
    <section className={`py-32 ${className || ''}`}>
      <div className="container">
        <div
          className={`mx-auto ${maxWidth} ${showBorder ? 'rounded-lg border' : ''} p-6 md:p-10`}
        >
          <h2 className="mb-6 text-xl font-medium">{title}</h2>
          <div className="flex flex-col gap-8">
            {progressStats?.map((stat, index) => (
              <div key={`progress-stat-${index}`}>
                <div className="mb-2 flex justify-between">
                  <p className="font-medium">{stat.label}</p>
                  <span
                    className={`flex items-center font-medium ${getTrendColor(stat.trend)}`}
                  >
                    {stat.value} {getTrendIcon(stat.trend)}
                  </span>
                </div>
                <Progress value={stat.progressValue} />
                <p className="text-muted-foreground mt-1 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats7 };
