import { StatsProps } from '@/components/shadcnblocks/types/common';

interface Stats11Props extends StatsProps {
  highlightText?: string;
  showBorder?: boolean;
  showGrid?: boolean;
  gridColumns?: number;
  circlePosition?: string;
}

const Stats11 = ({
  title = 'Revolutionizing healthcare with AI technology.',
  description = 'Our advanced diagnostic platform helps doctors make accurate diagnoses in seconds.',
  stats = [
    { label: 'Diagnoses Made', value: '1,000,000+' },
    { label: 'Diagnostic Accuracy', value: '95%' },
    { label: 'Healthcare Providers', value: '3,000+' },
    { label: 'Latency', value: '2.5s' },
  ],
  highlightText,
  showBorder = true,
  showGrid = true,
  gridColumns = 2,
  circlePosition = 'absolute inset-0 -top-[1100px] -left-[calc(1000px-22vw)] -z-10 size-[1500px] sm:-top-[480%] sm:-left-[185%] sm:size-[2000px] md:-top-[906%] md:-left-[294%] md:size-[3500px] lg:-top-[1186%] lg:-left-[380%] lg:size-[4500px] xl:-top-[1200%] xl:-left-[350%] 2xl:-top-[1196%] 2xl:-left-[345%]',
  className,
}: Stats11Props) => {
  return (
    <section className={`py-32 ${className || ''}`}>
      <div className="container">
        <div
          className={`from-primary/10 relative isolate overflow-hidden bg-linear-to-b to-transparent ${showBorder ? 'md:border-border md:border-x' : ''}`}
        >
          {showGrid && (
            <div className="absolute right-0 -left-px -z-20 h-full w-full bg-[linear-gradient(90deg,var(--muted-foreground)_1px,transparent_1px)] [mask-image:linear-gradient(transparent_25%,black_25%,black_75%,transparent_75%)] [background-size:calc(100%/16)_100%] [mask-size:100%_16px] opacity-20 [-webkit-mask-image:linear-gradient(transparent_25%,black_25%,black_75%,transparent_75%)] [-webkit-mask-size:100%_16px]" />
          )}

          <div>
            <h2 className="mb-16 max-w-3xl text-3xl leading-10 font-semibold sm:mb-24 md:mx-10">
              {title}
              {(description || highlightText) && (
                <span className="text-primary/50 font-medium">
                  {' '}
                  {highlightText || description}
                </span>
              )}
            </h2>
            <div
              className={`relative grid max-w-2xl gap-4 pb-32 sm:gap-10 sm:pb-44 md:ml-10 ${showBorder ? 'border-border border-x md:border-0' : ''} sm:grid-cols-${gridColumns}`}
            >
              <div
                className={`border-primary bg-background rounded-full border ${circlePosition}`}
              ></div>
              {stats?.map((stat, index) => (
                <div key={`stat-${index}`} className="flex flex-col gap-2">
                  <span className="flex gap-5 text-3xl font-semibold">
                    <span className="bg-primary/50 relative -left-px w-px"></span>
                    {stat.value}
                  </span>
                  <p className="text-muted-foreground/80 pl-5 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats11 };
