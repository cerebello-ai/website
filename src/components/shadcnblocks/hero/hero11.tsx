import { ChevronRight } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface Hero11Props extends HeroProps {
  logo?: string;
}

const Hero11 = ({
  title = 'Build your next project with Blocks',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  buttons = [{ text: 'Get Started', href: '#', variant: 'primary' }],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-8-wide.svg',
  logo = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
}: Hero11Props) => {
  return (
    <section className="py-32">
      <div className="border-b">
        <div className="container max-w-7xl">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 flex flex-col items-center gap-6 text-center">
              {logo && <img src={logo} alt="logo" className="h-10 md:h-16" />}
              <div>
                <h1 className="mb-4 text-3xl font-medium text-pretty lg:text-5xl">
                  {title}
                </h1>
                <p className="text-muted-foreground max-w-3xl lg:text-xl">
                  {description}
                </p>
              </div>
              {buttons?.[0] && (
                <Button asChild>
                  <a href={buttons[0].href}>
                    {buttons[0].text}
                    <ChevronRight className="h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          {image && (
            <img
              src={image}
              alt="Hero illustration"
              className="mt-20 aspect-video w-full rounded-t-lg object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero11 };
