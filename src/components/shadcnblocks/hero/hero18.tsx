import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface FloatingIcon {
  src: string;
  alt: string;
  position: {
    side: 'left' | 'right';
    top: string;
    offset: string;
  };
}

interface Hero18Props extends HeroProps {
  floatingIcons?: FloatingIcon[];
}

const Hero18 = ({
  title = 'Welcome to Our Website',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  buttons = [
    { text: 'Primary', href: '#', variant: 'primary' },
    { text: 'Secondary', href: '#', variant: 'outline' },
  ],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  floatingIcons = [
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
      alt: 'icon 1',
      position: { side: 'left', top: '0', offset: '63px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg',
      alt: 'icon 2',
      position: { side: 'left', top: '52px', offset: '195px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg',
      alt: 'icon 3',
      position: { side: 'left', top: '144px', offset: '34px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg',
      alt: 'icon 4',
      position: { side: 'left', top: '164px', offset: '268px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg',
      alt: 'icon 5',
      position: { side: 'left', top: '240px', offset: '156px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg',
      alt: 'icon 6',
      position: { side: 'left', top: '340px', offset: '242px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
      alt: 'icon 7',
      position: { side: 'left', top: '366px', offset: '66px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg',
      alt: 'icon 8',
      position: { side: 'right', top: '0', offset: '53px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg',
      alt: 'icon 9',
      position: { side: 'right', top: '34px', offset: '202px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg',
      alt: 'icon 10',
      position: { side: 'right', top: '141px', offset: '97px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg',
      alt: 'icon 11',
      position: { side: 'right', top: '138px', offset: '282px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg',
      alt: 'icon 12',
      position: { side: 'right', top: '262px', offset: '42px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
      alt: 'icon 13',
      position: { side: 'right', top: '282px', offset: '234px' },
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg',
      alt: 'icon 14',
      position: { side: 'right', top: '365px', offset: '112px' },
    },
  ],
}: Hero18Props) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
          {title}
        </h1>
        <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
          {description}
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
          {buttons?.map((button, index) => (
            <Button
              key={index}
              variant={button.variant === 'outline' ? 'outline' : 'default'}
              className="w-full sm:w-auto"
              asChild
            >
              <a href={button.href}>{button.text}</a>
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-12 aspect-video overflow-clip sm:mt-32 md:aspect-auto md:h-[420px]">
        <div className="relative mx-auto flex max-w-3xl flex-col">
          {/* Floating icons */}
          {floatingIcons?.map((icon, index) => (
            <div
              key={index}
              className={`absolute top-[${icon.position.top}] ${icon.position.side === 'left' ? 'right' : 'left'}-[calc(100%+${icon.position.offset})] bg-accent ring-accent-foreground/10 hidden size-[64px] rounded-2xl ring-1 ring-inset md:block`}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-full w-full rounded-md object-cover object-center p-3"
              />
            </div>
          ))}
          {/* Hero image */}
          {image && (
            <div className="container mx-auto">
              <img
                src={image}
                alt="Hero illustration"
                className="border-border bg-accent mt-6 flex aspect-square w-full flex-col items-center overflow-clip rounded-xl border"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero18 };
