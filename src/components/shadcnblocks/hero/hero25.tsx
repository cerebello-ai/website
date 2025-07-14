import { Blocks, MoveRight, Wrench, Zap } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeatureHighlight {
  icon: React.ReactNode;
  text: string;
}

interface Hero25Props extends HeroProps {
  className?: string;
  logo?: {
    src: string;
    alt: string;
    className?: string;
  };
  badge?: string;
  highlights?: FeatureHighlight[];
  maxWidth?: string;
}

const Hero25 = ({
  className,
  logo = {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg',
    alt: 'Systems logo',
    className: 'mx-auto mb-6 w-14 md:mb-8 md:w-20 lg:mb-10 lg:w-24',
  },
  badge = 'SYSTEMS',
  title = 'A system crafted for team success and growth',
  buttons = [
    { text: 'Get started', href: '#', variant: 'primary' },
    { text: 'Read the docs', href: '#', variant: 'secondary' },
  ],
  highlights = [
    {
      icon: <Zap className="text-primary size-5" />,
      text: 'Quick setup guide',
    },
    {
      icon: <Blocks className="text-primary size-5" />,
      text: 'Fully customizable',
    },
    {
      icon: <Wrench className="text-primary size-5" />,
      text: 'Easy to use components',
    },
  ],
  maxWidth = 'max-w-4xl',
}: Hero25Props) => {
  return (
    <section className={cn('py-20 md:py-28 lg:py-36', className)}>
      <div className="container px-4 md:px-6">
        <div className={`mx-auto ${maxWidth} text-center`}>
          {logo && (
            <img
              src={logo.src}
              alt={logo.alt}
              className={
                logo.className ||
                'mx-auto mb-6 w-14 md:mb-8 md:w-20 lg:mb-10 lg:w-24'
              }
            />
          )}
          {badge && (
            <span className="text-muted-foreground mb-2 inline-block text-sm font-medium tracking-wider uppercase md:text-base">
              {badge}
            </span>
          )}
          <h1 className="mt-4 text-4xl leading-tight font-bold text-balance md:text-5xl lg:text-7xl lg:leading-[1.1]">
            {title}
          </h1>
          {buttons && buttons.length > 0 && (
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              {buttons.map((button, index) => (
                <Button
                  key={`button-${index}`}
                  size="lg"
                  variant={
                    button.variant === 'secondary' ? 'secondary' : 'default'
                  }
                  className="px-8 py-6 text-base font-medium"
                  asChild
                >
                  <a href={button.href}>
                    {button.text}
                    <MoveRight className="ml-2 size-5" strokeWidth={1.5} />
                  </a>
                </Button>
              ))}
            </div>
          )}
          {highlights && highlights.length > 0 && (
            <div className="mt-10 lg:mt-12">
              <ul className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm lg:text-base">
                {highlights.map((highlight, index) => (
                  <li
                    key={`highlight-${index}`}
                    className="flex items-center gap-2.5 whitespace-nowrap"
                  >
                    {highlight.icon}
                    {highlight.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero25 };
