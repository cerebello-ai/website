import { ChevronRight } from 'lucide-react';

import { FeatureProps } from '@/components/shadcnblocks/types/common';
import { Button } from '@/components/ui/button';

interface Feature50Card {
  title: string;
  description?: string;
  badge: string;
  image: string;
  link: string;
  buttonText?: string;
  layout?: 'full' | 'compact' | 'wide';
  showButton?: boolean;
}

interface Feature50Props extends FeatureProps {
  ctaButton?: {
    text: string;
    variant?: 'default' | 'outline';
  };
  cards?: Feature50Card[];
}

const Feature50 = ({
  title = 'Built your dream project with our blocks',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat odit sunt eaque ex, natus vel maxime tenetur odio? Nemo.',
  ctaButton = {
    text: 'Get started for free',
    variant: 'outline',
  },
  cards = [
    {
      title: 'Ready to use blocks for your project',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae similique atque laboriosam a illum ad sit. Natus, iste voluptatem!',
      badge: 'COPY AND PASTE',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
      link: '#',
      buttonText: 'Learn more',
      layout: 'full',
      showButton: true,
    },
    {
      title: 'Customize and build your project',
      badge: 'EASY TO USE',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg',
      link: '#',
      layout: 'compact',
      showButton: false,
    },
    {
      title: 'Blocks for every project',
      badge: 'A BLOCK FOR EVERYTHING',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg',
      link: '#',
      buttonText: 'Learn more',
      layout: 'wide',
      showButton: true,
    },
  ],
  className,
}: Feature50Props) => {
  const getCardLayout = (layout: string) => {
    switch (layout) {
      case 'full':
        return 'col-span-7 grid overflow-hidden rounded-lg sm:grid-cols-2';
      case 'compact':
        return 'group bg-muted relative overflow-hidden rounded-lg lg:col-span-3';
      case 'wide':
        return 'bg-muted grid overflow-hidden rounded-lg sm:grid-cols-2 lg:col-span-4';
      default:
        return 'col-span-7 grid overflow-hidden rounded-lg sm:grid-cols-2';
    }
  };

  const renderCard = (card: Feature50Card, index: number) => {
    if (card.layout === 'compact') {
      return (
        <a
          key={`card-${index}`}
          href={card.link}
          className={getCardLayout(card.layout)}
        >
          <Button
            variant="outline"
            size="sm"
            className="absolute top-7 right-10 transition-all duration-200 group-hover:opacity-100 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0"
          >
            <ChevronRight className="h-4" />
          </Button>
          <img
            src={card.image}
            alt="placeholder"
            className="max-h-72 w-full border-b object-cover"
          />
          <div className="p-8 lg:p-12">
            <div className="text-muted-foreground mb-4 text-xs">
              {card.badge}
            </div>
            <h3 className="mb-2 text-xl font-medium lg:text-2xl">
              {card.title}
            </h3>
          </div>
        </a>
      );
    }

    return (
      <a
        key={`card-${index}`}
        href={card.link}
        className={`bg-muted ${getCardLayout(card.layout)}`}
      >
        <div className="flex flex-col justify-between p-8 lg:p-12">
          <div>
            <div className="text-muted-foreground mb-4 text-xs">
              {card.badge}
            </div>
            <h3 className="mb-2 text-xl font-medium lg:text-2xl">
              {card.title}
            </h3>
            {card.description && (
              <p className="text-muted-foreground text-sm lg:text-base">
                {card.description}
              </p>
            )}
          </div>
          {card.showButton && (
            <div className="mt-6 sm:mt-8">
              <Button variant="outline">
                {card.buttonText || 'Learn more'}
                <ChevronRight className="ml-1 h-4" />
              </Button>
            </div>
          )}
        </div>
        <img
          src={card.image}
          alt="placeholder"
          className={
            card.layout === 'wide'
              ? 'aspect-video h-full max-h-96 w-full border-b object-cover sm:aspect-auto lg:max-h-none lg:border-r lg:border-b-0'
              : 'order-first aspect-video h-full max-h-96 w-full border-b object-cover sm:order-last sm:aspect-auto lg:max-h-none lg:border-b-0 lg:border-l'
          }
        />
      </a>
    );
  };

  return (
    <section className={className || 'py-32'}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h2 className="mb-2 text-center text-3xl font-semibold text-balance lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-center lg:text-lg">
            {description}
          </p>
          <Button variant={ctaButton.variant || 'outline'} className="mt-6">
            {ctaButton.text}
            <ChevronRight className="ml-1 h-4" />
          </Button>
        </div>
        <div className="mx-auto mt-20 flex max-w-5xl grid-cols-1 flex-col gap-6 lg:grid lg:grid-cols-7">
          {cards?.map((card, index) => renderCard(card, index))}
        </div>
      </div>
    </section>
  );
};

export { Feature50 };
