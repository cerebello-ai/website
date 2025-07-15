import { ExternalLink } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Hero12Props extends HeroProps {
  logo?: string;
  supportingText?: string;
  techLogos?: {
    src: string;
    alt: string;
    href?: string;
  }[];
}

const Hero12 = ({
  title = 'Build your next project with Blocks',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  buttons = [
    { text: 'Get Started', href: '#', variant: 'primary' },
    { text: 'Learn more', href: '#', variant: 'outline' },
  ],
  logo = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
  supportingText = 'Built with open-source technologies',
  techLogos = [
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-icon.svg',
      alt: 'shadcn/ui logo',
      href: '#',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg',
      alt: 'TypeScript logo',
      href: '#',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg',
      alt: 'React logo',
      href: '#',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg',
      alt: 'Tailwind CSS logo',
      href: '#',
    },
  ],
}: Hero12Props) => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            {logo && (
              <div className="bg-background/30 rounded-xl p-4 shadow-sm backdrop-blur-sm">
                <img src={logo} alt="logo" className="h-16" />
              </div>
            )}
            <div>
              <h1 className="mb-6 text-2xl font-semibold tracking-tight text-pretty lg:text-5xl">
                {title.includes('Blocks') ? (
                  <>
                    {title.split('Blocks')[0]}
                    <span className="text-primary">Blocks</span>
                    {title.split('Blocks')[1]}
                  </>
                ) : (
                  title
                )}
              </h1>
              <p className="text-muted-foreground mx-auto max-w-3xl lg:text-xl">
                {description}
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              {buttons?.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant === 'outline' ? 'outline' : 'default'}
                  className={
                    index === 0
                      ? 'shadow-sm transition-shadow hover:shadow'
                      : 'group'
                  }
                  asChild
                >
                  <a href={button.href}>
                    {button.text}
                    {button.variant === 'outline' && (
                      <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </a>
                </Button>
              ))}
            </div>
            {(supportingText || techLogos) && (
              <div className="mt-20 flex flex-col items-center gap-5">
                {supportingText && (
                  <p className="text-muted-foreground font-medium lg:text-left">
                    {supportingText}
                  </p>
                )}
                {techLogos && techLogos.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {techLogos.map((techLogo, index) => (
                      <a
                        key={index}
                        href={techLogo.href || '#'}
                        className={cn(
                          buttonVariants({ variant: 'outline' }),
                          'group flex aspect-square h-12 items-center justify-center p-0',
                        )}
                      >
                        <img
                          src={techLogo.src}
                          alt={techLogo.alt}
                          className="h-6 saturate-0 transition-all group-hover:saturate-100"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero12 };
