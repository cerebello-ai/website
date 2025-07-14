import {
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import { FeatureProps } from '../types/common';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

interface FeatureCard {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  image?: string;
}

interface Feature3Props extends FeatureProps {
  cards?: FeatureCard[];
}

const Feature3 = ({
  title = 'This is where your feature goes',
  cards = [
    {
      icon: Code,
      title: 'Card Title',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: Play,
      title: 'Card Title',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: GitBranch,
      title: 'Card Title',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: List,
      title: 'Card Title',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: WandSparkles,
      title: 'Card Title',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: Sparkles,
      title: 'Card Title',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ],
}: Feature3Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="mb-6 text-4xl font-semibold text-pretty lg:text-5xl">
            {title}
          </h1>

          <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card key={index}>
                  <CardHeader className="pb-1">
                    <IconComponent className="size-4" strokeWidth={1} />
                  </CardHeader>
                  <CardContent className="text-left">
                    <h2 className="mb-1 text-lg font-semibold">{card.title}</h2>
                    <p className="text-muted-foreground leading-snug">
                      {card.description}
                    </p>
                  </CardContent>
                  <CardFooter className="justify-end pr-0 pb-0">
                    <img
                      className="h-40 w-full rounded-tl-md object-cover object-center"
                      src={
                        card.image ||
                        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg'
                      }
                      alt={card.title}
                    />
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature3 };
