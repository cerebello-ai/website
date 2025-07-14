import { StatsProps } from '@/components/shadcnblocks/types/common';
import { Button } from '@/components/ui/button';

interface Stats6Props extends StatsProps {
  buttons?: Array<{
    text: string;
    variant?: 'default' | 'outline';
    href?: string;
  }>;
  gridColumns?: number;
  backgroundColor?: boolean;
}

const Stats6 = ({
  title = 'Platform Performance Insights',
  stats = [
    { label: 'Metric 1', value: '90%' },
    { label: 'Metric 2', value: '200+' },
    { label: 'Metric 3', value: '99%' },
    { label: 'Metric 4', value: '150+' },
  ],
  buttons = [
    { text: 'Get Started', variant: 'default' },
    { text: 'Learn More', variant: 'outline' },
  ],
  gridColumns = 4,
  backgroundColor = true,
  className,
}: Stats6Props) => {
  return (
    <section
      className={`${backgroundColor ? 'bg-accent' : ''} py-32 ${className || ''}`}
    >
      <div className="container flex flex-col items-start text-left">
        <div className="mb-12 w-full md:mb-16">
          <h2 className="mb-8 w-full max-w-[24rem] text-3xl font-bold text-pretty sm:text-4xl md:max-w-[30rem] lg:max-w-[37rem] lg:text-5xl">
            {title}
          </h2>
          {buttons && buttons.length > 0 && (
            <div className="flex flex-col justify-start gap-2 sm:flex-row">
              {buttons.map((button, index) => (
                <Button
                  key={`button-${index}`}
                  variant={button.variant || 'default'}
                  className="w-full sm:w-auto"
                  asChild={!!button.href}
                >
                  {button.href ? (
                    <a href={button.href}>{button.text}</a>
                  ) : (
                    button.text
                  )}
                </Button>
              ))}
            </div>
          )}
        </div>
        <div
          className={`grid w-full grid-cols-2 gap-12 sm:w-fit sm:grid-cols-${gridColumns} lg:gap-16`}
        >
          {stats?.map((stat, index) => (
            <div key={`stat-${index}`} className="w-full">
              <div className="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-base leading-6 lg:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats6 };
