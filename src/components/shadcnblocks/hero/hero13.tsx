import { Bell, PlayCircle } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Hero13Props extends HeroProps {
  badge?: {
    text: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
}

const Hero13 = ({
  title = 'Streamline your workflow experience.',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor assumenda voluptatem nemo magni a maiores aspernatur.',
  buttons = [
    { text: 'Get a demo', href: '#', variant: 'primary' },
    { text: 'Watch video', href: '#', variant: 'outline' },
  ],
  badge = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque distinctio iusto voluptas voluptatum sed!',
    icon: Bell,
  },
}: Hero13Props) => {
  const IconComponent = badge?.icon || Bell;

  return (
    <section className="py-32">
      <div className="container">
        {badge && (
          <Badge
            variant="outline"
            className="mb-4 max-w-full text-sm font-normal lg:mb-10 lg:py-2 lg:pr-5 lg:pl-2"
          >
            <span className="bg-accent mr-2 flex size-8 shrink-0 items-center justify-center rounded-full">
              <IconComponent className="size-4" />
            </span>
            <p className="truncate whitespace-nowrap">{badge.text}</p>
          </Badge>
        )}
        <h1 className="mb-6 text-4xl leading-none font-bold tracking-tighter md:text-[7vw] lg:text-8xl">
          {title}
        </h1>
        <p className="text-muted-foreground max-w-2xl md:text-[2vw] lg:text-xl">
          {description}
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">
          {buttons?.map((button, index) => (
            <Button
              key={index}
              size="lg"
              variant={button.variant === 'outline' ? 'outline' : 'default'}
              className="w-full md:w-auto"
              asChild
            >
              <a href={button.href}>
                {button.variant === 'outline' && index === 1 && (
                  <PlayCircle className="mr-2 size-4" />
                )}
                {button.text}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Hero13 };
