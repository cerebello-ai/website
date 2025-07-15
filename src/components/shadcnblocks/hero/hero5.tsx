import { Download } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

const Hero5 = ({
  title = 'Bold Features demand attention',
  description = 'Lorem ipsum dolor sit amet consectetur.',
  buttons = [{ text: 'Primary Button', href: '#' }],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg',
}: HeroProps) => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-semibold text-pretty lg:max-w-md lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-xl text-xl font-medium lg:text-2xl">
              {description}
            </p>
            <div className="flex w-full justify-center lg:justify-start">
              {buttons && buttons[0] && (
                <Button className="w-full sm:w-auto" size="lg" asChild>
                  <a href={buttons[0].href}>
                    <Download className="mr-2 size-5" />
                    {buttons[0].text}
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image}
            alt="hero image"
            className="aspect-video rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero5 };
