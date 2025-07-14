import { ChevronRight } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

const Hero8 = ({
  title = 'Build faster with Shadcnblocks',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  buttons = [
    { text: 'Get started now', href: '#', variant: 'primary' },
    { text: 'Learn more', href: '#', variant: 'secondary' },
  ],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
}: HeroProps) => {
  return (
    <section className="py-32">
      <div className="border-muted overflow-hidden border-b">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-4xl font-semibold text-pretty lg:text-7xl">
                {title}
              </h1>
              <p className="text-muted-foreground mx-auto max-w-3xl lg:text-xl">
                {description}
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                {buttons?.map((button, index) => (
                  <Button
                    key={index}
                    variant={
                      button.variant === 'secondary' ? 'ghost' : 'default'
                    }
                    asChild
                  >
                    <a href={button.href}>
                      {button.text}
                      <ChevronRight className="ml-2 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <img
            src={image}
            alt="Hero illustration"
            className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero8 };
