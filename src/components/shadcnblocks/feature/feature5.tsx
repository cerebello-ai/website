import { AppWindowMac, Zap } from 'lucide-react';

import { FeatureProps } from '../types/common';

import { Card } from '@/components/ui/card';

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  isLarge?: boolean;
}

interface Feature5Props extends FeatureProps {
  features?: FeatureCard[];
}

const Feature5 = ({
  features = [
    {
      icon: AppWindowMac,
      title: 'Get your team on the same page.',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut odit pariatur, ullam delectus modi excepturi ea dignissimos mollitia minima unde animi qui omnis.',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
      isLarge: true,
    },
    {
      icon: Zap,
      title: 'Fast and easy to use.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti sed.',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
      isLarge: false,
    },
  ],
}: Feature5Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className={`p-6 ${feature.isLarge ? 'lg:col-span-2' : 'flex flex-col justify-between'}`}
              >
                <div className="text-left">
                  <IconComponent className="mb-1 w-7" />
                  <h2 className="mt-4 mb-1 text-lg font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="mt-7">
                  <img
                    className={
                      feature.isLarge
                        ? 'aspect-square max-h-[500px] w-full rounded-t-md object-cover object-center'
                        : 'aspect-square rounded-t-md object-cover lg:aspect-auto lg:h-full'
                    }
                    src={feature.image}
                    alt={feature.title}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature5 };
