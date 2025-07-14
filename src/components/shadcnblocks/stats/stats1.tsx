import { StatsProps } from '../types/common';

interface StatItem {
  label: string;
  value: string;
  description: string;
}

interface Stats1Props extends StatsProps {
  stats?: StatItem[];
}

const Stats1 = ({
  title = 'Platform Performance Insights',
  stats = [
    {
      label: 'Reduce your time to hire by',
      value: '4x',
      description: 'quicker',
    },
    {
      label: 'Clients have seen a decrease in',
      value: '50%',
      description: 'in time to hire',
    },
    {
      label: 'The average number of hires per',
      value: '3',
      description: 'months',
    },
  ],
}: Stats1Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <h1 className="text-center text-4xl font-semibold lg:text-6xl">
          {title}
        </h1>
        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
              <p className="pt-4 text-7xl font-semibold lg:pt-10">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-2xl font-semibold">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats1 };
