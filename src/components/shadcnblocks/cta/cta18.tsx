import { Play } from 'lucide-react';

import { CtaProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface CtaImage {
  src: string;
  alt: string;
  className?: string;
}

interface Cta18Props extends CtaProps {
  maxWidth?: string;
  backgroundImage?: CtaImage;
  decorativeImage?: CtaImage;
  contentMaxWidth?: string;
  layout?: 'left' | 'right';
}

const Cta18 = ({
  title = 'Explore Our Platform',
  description = 'Discover the full potential of our platform. Try our interactive demo or watch a comprehensive walkthrough today.',
  buttons = [
    { text: 'Try Demo', href: '#', variant: 'primary' },
    { text: 'Watch Video', href: '#', variant: 'outline', icon: 'play' },
  ],
  maxWidth = 'max-w-7xl',
  backgroundImage = {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
    alt: 'Platform demo',
    className:
      'z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm',
  },
  decorativeImage = {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg',
    alt: 'Decorative element',
    className:
      'absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]',
  },
  contentMaxWidth = 'max-w-xl',
  layout = 'left',
}: Cta18Props) => {
  const isContentLeft = layout === 'left';

  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div
          className={`relative mx-auto flex ${maxWidth} bg-muted/50 flex-col justify-between gap-6 overflow-hidden rounded-xl border ${isContentLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
          <div className={`${contentMaxWidth} self-center p-6 md:p-12`}>
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            {description && (
              <p className="text-muted-foreground mt-4 md:text-lg">
                {description}
              </p>
            )}
            {buttons && buttons.length > 0 && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {buttons.map((button, index) => (
                  <Button
                    key={`button-${index}`}
                    variant={
                      button.variant === 'outline' ? 'outline' : 'default'
                    }
                    asChild
                  >
                    <a href={button.href}>
                      {button.text}
                      {button.icon === 'play' && <Play className="ml-2" />}
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            {decorativeImage && (
              <img
                src={decorativeImage.src}
                alt={decorativeImage.alt}
                className={
                  decorativeImage.className ||
                  'absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]'
                }
              />
            )}
            {backgroundImage && (
              <img
                src={backgroundImage.src}
                alt={backgroundImage.alt}
                className={
                  backgroundImage.className ||
                  'z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm'
                }
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta18 };
