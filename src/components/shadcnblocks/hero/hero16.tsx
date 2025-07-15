import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

const Hero16 = ({
  title = 'Welcome to Our Website',
  description = 'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.',
  buttons = [
    { text: 'Primary', href: '#', variant: 'primary' },
    { text: 'Secondary', href: '#', variant: 'outline' },
  ],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
}: HeroProps) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-3 text-3xl font-semibold text-pretty sm:text-4xl md:my-6 lg:text-6xl">
          {title}
        </h1>
        <p className="text-muted-foreground mb-6 max-w-xl lg:mb-12 lg:text-2xl">
          {description}
        </p>
        <div className="mb-6 flex gap-2 lg:mb-12">
          {buttons?.map((button, index) => (
            <Button
              key={index}
              variant={button.variant === 'outline' ? 'outline' : 'default'}
              asChild
            >
              <a href={button.href}>{button.text}</a>
            </Button>
          ))}
        </div>
      </div>
      {image && (
        <div className="container">
          <div className="aspect-video [mask-image:linear-gradient(#000_80%,transparent_100%)]">
            <img
              src={image}
              alt="Hero illustration"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export { Hero16 };
