import { ChevronRight } from 'lucide-react';

import { FeatureProps } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

interface FeatureCard {
  badge?: string;
  content: string;
  buttonText?: string;
  buttonHref?: string;
}

interface Feature9Props extends FeatureProps {
  badge?: string;
  centerImage?: {
    src: string;
    alt: string;
  };
  leftCard?: FeatureCard;
  rightCard?: FeatureCard;
}

const Feature9 = ({
  badge = 'Badge',
  title = 'This is where your feature goes',
  description = 'Lorem ipsum dolor sit amet consectetur.',
  centerImage = {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
    alt: 'Feature illustration',
  },
  leftCard = {
    badge: 'Badge',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum ullam. Voluptatibus.',
    buttonText: 'Read more',
    buttonHref: '#',
  },
  rightCard = {
    badge: 'Badge',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum ullam. Voluptatibus.',
    buttonText: 'Read more',
    buttonHref: '#',
  },
}: Feature9Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          {badge && <Badge variant="outline">{badge}</Badge>}
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground lg:text-lg">{description}</p>
          )}
          <div className="mt-6 flex flex-col gap-6 lg:flex-row">
            {leftCard && (
              <Card className="flex flex-col justify-between gap-5 lg:w-1/3">
                <CardHeader className="items-start">
                  {leftCard.badge && (
                    <Badge variant="outline">{leftCard.badge}</Badge>
                  )}
                </CardHeader>
                <CardContent className="text-lg lg:text-2xl">
                  {leftCard.content}
                </CardContent>
                {leftCard.buttonText && (
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <a href={leftCard.buttonHref || '#'}>
                        {leftCard.buttonText}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            )}
            {centerImage && (
              <div className="lg:w-1/3">
                <img
                  src={centerImage.src}
                  alt={centerImage.alt}
                  className="h-full max-h-96 w-full rounded-md object-cover"
                />
              </div>
            )}
            {rightCard && (
              <Card className="flex flex-col justify-between gap-5 lg:w-1/3">
                <CardHeader className="items-start">
                  {rightCard.badge && (
                    <Badge variant="outline">{rightCard.badge}</Badge>
                  )}
                </CardHeader>
                <CardContent className="text-lg lg:text-2xl">
                  {rightCard.content}
                </CardContent>
                {rightCard.buttonText && (
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <a href={rightCard.buttonHref || '#'}>
                        {rightCard.buttonText}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature9 };
