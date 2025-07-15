import { ArrowDownRight } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Hero2 = ({
  title = 'Blocks built with Shadcn & Tailwind',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  badges = ['New Release'],
  buttons = [
    { text: 'Primary Button', href: '#' },
    { text: 'Secondary Button', href: '#', variant: 'outline' },
  ],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
}: HeroProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="bg-muted flex justify-end">
            <img
              src={image}
              alt="hero image"
              className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
            />
          </div>
          <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
            {badges && badges[0] && (
              <Badge variant="secondary">
                {badges[0]}
                <ArrowDownRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-4xl font-semibold text-pretty md:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons &&
                buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || 'default'}
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a href={button.href}>
                      {button.text}
                      {button.variant === 'outline' && (
                        <ArrowDownRight className="size-4" />
                      )}
                    </a>
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero2 };
