import { HeroProps } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Hero10Props extends HeroProps {
  badge?: string;
  supportingText?: string;
  logos?: {
    src: string;
    alt: string;
    className?: string;
  }[];
}

const Hero10 = ({
  title = 'This is a heading for your new project',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  buttons = [
    { text: 'Get Started', href: '#', variant: 'primary' },
    { text: 'Learn More', href: '#', variant: 'outline' },
  ],
  badge = 'New Release',
  supportingText = 'Powering the next generation of digital products',
  logos = [
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg',
      alt: 'ShadCN UI',
      className: 'h-7',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg',
      alt: 'Vercel',
      className: 'h-5',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg',
      alt: 'React',
      className: 'h-6',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg',
      alt: 'Supabase',
      className: 'h-6',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg',
      alt: 'Tailwind CSS',
      className: 'h-5',
    },
  ],
}: Hero10Props) => {
  return (
    <section className="relative p-0">
      <div className="absolute h-full w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid1.svg')] [mask-image:linear-gradient(to_right,white,transparent,transparent,white)] bg-contain bg-repeat opacity-100 lg:block"></div>
      <div className="container py-28 md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            {badge && (
              <Badge
                variant="outline"
                className="hover:bg-secondary/20 transition-colors"
              >
                {badge}
              </Badge>
            )}
            <div>
              <h1 className="...">{title || 'Default Title'}</h1>
              <p className="text-muted-foreground mx-auto max-w-2xl md:text-lg lg:text-xl">
                {description}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
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

            {(supportingText || logos) && (
              <div className="mt-12 flex flex-col items-center gap-4 lg:mt-16">
                {supportingText && (
                  <p className="text-muted-foreground text-center text-sm">
                    {supportingText}
                  </p>
                )}
                {logos && logos.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
                    {logos.map((logo, index) => (
                      <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        className={`${logo.className} transition-opacity hover:opacity-100`}
                      />
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

export { Hero10 };
