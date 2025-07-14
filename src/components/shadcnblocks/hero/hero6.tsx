import { ChevronRight } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface Hero6Props extends HeroProps {
  images?: {
    main: string;
    secondary: string;
  };
  logos?: {
    src: string;
    alt: string;
    className?: string;
  }[];
}

const Hero6 = ({
  title = 'Build your next project with Blocks',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  buttons = [
    { text: 'Get started now', href: '#', variant: 'primary' },
    { text: 'Learn more', href: '#', variant: 'secondary' },
  ],
  images = {
    main: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
    secondary:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
  },
  logos = [
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg',
      alt: 'logo',
      className: 'h-6 sm:h-8',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg',
      alt: 'logo',
      className: 'h-8 sm:h-10',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg',
      alt: 'logo',
      className: 'h-4 sm:h-6',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg',
      alt: 'logo',
      className: 'h-8 sm:h-10',
    },
  ],
}: Hero6Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-8 text-center">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-semibold text-pretty lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground lg:text-xl">{description}</p>
            </div>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
              {buttons?.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant === 'secondary' ? 'ghost' : 'default'}
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
        <div className="mx-auto mt-20 max-w-7xl grid-cols-5 md:grid">
          <img
            src={images.main}
            alt="placeholder"
            className="col-span-3 h-full max-h-[500px] w-full object-cover"
          />
          <div className="relative col-span-2">
            <img
              src={images.secondary}
              alt="placeholder"
              className="h-full max-h-[500px] w-full border-t object-cover md:border-l lg:border-t-0"
            />
            <Button
              variant="outline"
              className="absolute right-5 bottom-5"
              asChild
            >
              <a href={buttons?.[1]?.href ?? '#'}>
                Learn more
                <ChevronRight className="ml-2 h-4" />
              </a>
            </Button>
          </div>
        </div>
        {logos && logos.length > 0 && (
          <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={logo.className}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Hero6 };
