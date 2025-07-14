import { ChevronRight } from 'lucide-react';

import { FeatureProps } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCard {
  content: string;
  href: string;
  buttonText: string;
  footerText: string;
  logo: {
    src: string;
    alt: string;
    className: string;
  };
}

interface Feature8Props extends FeatureProps {
  badge?: string;
  cards?: FeatureCard[];
}

const Feature8 = ({
  title = 'Welcome to our innovative training platform',
  badge = 'Studies',
  cards = [
    {
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt.',
      href: '#',
      buttonText: 'Learn more',
      footerText: 'Built with',
      logo: {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg',
        alt: 'shadcn',
        className: 'h-7',
      },
    },
    {
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt.',
      href: '#',
      buttonText: 'Learn more',
      footerText: 'Styled with',
      logo: {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg',
        alt: 'tailwind',
        className: 'h-4',
      },
    },
  ],
}: Feature8Props) => {
  return (
    <section className="py-32">
      <div className="container max-w-6xl">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {badge && <Badge variant="outline">{badge}</Badge>}
          <h1 className="max-w-2xl text-center text-3xl font-light md:text-5xl">
            {title}
          </h1>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-6 md:flex-row lg:mt-20 lg:gap-10">
          {cards?.map((card, index) => (
            <Card key={index} className="group p-6">
              <a
                href={card.href}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'ml-auto hidden w-fit cursor-pointer transition-all duration-200 group-hover:opacity-100 md:flex lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0',
                )}
              >
                {card.buttonText}
                <ChevronRight className="ml-1 h-4" />
              </a>
              <div className="mt-6 flex gap-4">
                <p className="text-lg font-light lg:text-2xl">{card.content}</p>
                <a
                  href={card.href}
                  className={cn(
                    buttonVariants({
                      variant: 'outline',
                      size: 'icon',
                    }),
                    'shrink-0 cursor-pointer md:hidden',
                  )}
                >
                  <ChevronRight className="h-4" />
                </a>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <p className="text-sm font-light lg:text-base">
                  {card.footerText}
                </p>
                <img
                  src={card.logo.src}
                  alt={card.logo.alt}
                  className={card.logo.className}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature8 };
