import { Expand, Globe, MoveRight, Rocket, Wrench } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Hero24Props extends HeroProps {
  logo?: {
    src: string;
    alt: string;
    className?: string;
  };
  badge?: string;
  buttonText?: string;
  buttonHref?: string;
  features?: FeatureCard[];
  gridColumns?: number;
}

const Hero24 = ({
  logo = {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
    alt: 'Platform logo',
    className: 'mx-auto mb-5 w-16 md:mb-6 md:w-24 lg:mb-7 lg:w-28',
  },
  badge = 'PLATFORM',
  title = 'Develop, launch, and grow your service with our platform',
  buttonText = 'Start now for free',
  buttonHref = '#',
  features = [
    {
      icon: <Globe className="size-6 shrink-0" />,
      title: 'Robust Infrastructure',
      description: 'Reliable and scalable infrastructure, easy to manage.',
    },
    {
      icon: <Rocket className="size-6 shrink-0" />,
      title: 'Easy Setup',
      description: 'Quick and simple configuration for any use case.',
    },
    {
      icon: <Expand className="size-6 shrink-0" />,
      title: 'Effortless Scaling',
      description: 'Built to handle increased demand with ease.',
    },
    {
      icon: <Wrench className="size-6 shrink-0" />,
      title: 'Low Maintenance',
      description: 'Focus on building, not on maintenance tasks.',
    },
  ],
  gridColumns = 4,
}: Hero24Props) => {
  const gridCols =
    gridColumns === 3
      ? 'lg:grid-cols-3'
      : gridColumns === 2
        ? 'lg:grid-cols-2'
        : 'lg:grid-cols-4';

  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          {logo && (
            <img
              src={logo.src}
              alt={logo.alt}
              className={
                logo.className ||
                'mx-auto mb-5 w-16 md:mb-6 md:w-24 lg:mb-7 lg:w-28'
              }
            />
          )}
          {badge && (
            <span className="text-muted-foreground mb-3 text-sm tracking-widest md:text-base">
              {badge}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-semibold text-balance lg:text-6xl">
            {title}
          </h1>
          {buttonText && (
            <Button className="mt-8" size="lg" asChild>
              <a href={buttonHref}>
                {buttonText}
                <MoveRight className="ml-2" strokeWidth={1} />
              </a>
            </Button>
          )}
        </div>
        {features && features.length > 0 && (
          <div
            className={`bg-input mt-16 grid gap-px overflow-hidden rounded-lg border md:grid-cols-2 ${gridCols}`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background flex flex-col gap-3 p-5 md:gap-6"
              >
                {feature.icon}
                <div>
                  <h2 className="text-sm font-semibold md:text-base">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Hero24 };
