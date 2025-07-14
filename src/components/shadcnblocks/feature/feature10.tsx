import { PersonStanding, Timer, Zap, ZoomIn } from 'lucide-react';

import { FeatureProps } from '../types/common';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Feature10Props extends FeatureProps {
  preTitle?: string;
  features?: FeatureItem[];
  columns?: number;
}

const Feature10 = ({
  preTitle = 'Why Us?',
  title = 'A better way to build websites',
  features = [
    {
      icon: <Timer className="size-5 md:size-6" />,
      title: 'Performance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.',
    },
    {
      icon: <Zap className="size-5 md:size-6" />,
      title: 'Innovation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.',
    },
    {
      icon: <ZoomIn className="size-5 md:size-6" />,
      title: 'Quality',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.',
    },
    {
      icon: <PersonStanding className="size-5 md:size-6" />,
      title: 'Accessibility',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.',
    },
  ],
  columns = 4,
}: Feature10Props) => {
  const gridCols =
    columns === 3
      ? 'lg:grid-cols-3'
      : columns === 2
        ? 'lg:grid-cols-2'
        : 'lg:grid-cols-4';

  return (
    <section className="py-32">
      <div className="container">
        {preTitle && (
          <p className="text-muted-foreground mb-4 text-xs">{preTitle}</p>
        )}
        <h2 className="text-3xl font-medium lg:text-4xl">{title}</h2>
        <div className={`mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 ${gridCols}`}>
          {features?.map((feature, index) => (
            <div
              key={index}
              className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5"
            >
              <span className="bg-accent mb-8 flex size-10 shrink-0 items-center justify-center rounded-full md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  {feature.title}
                  <span className="bg-primary absolute -left-px hidden h-6 w-px md:inline-block"></span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature10 };
