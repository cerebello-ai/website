import { Check, ChevronRight } from 'lucide-react';

import { FeatureProps } from '@/components/shadcnblocks/types/common';
import { Badge } from '@/components/ui/badge';

interface BenefitItem {
  text: string;
}

interface ShowcaseCard {
  title: string;
  description: string;
  image: string;
  badge: string;
  benefits: string[];
  link: string;
  linkText?: string;
}

interface Feature22Props extends FeatureProps {
  benefitsColumns?: Array<BenefitItem[]>;
  showcaseCards?: ShowcaseCard[];
  gridColumns?: number;
}

const Feature22 = ({
  title = 'Build any kind of Website with our Blocks',
  benefitsColumns = [
    [
      { text: 'Responsive Design and Layout' },
      { text: 'Clean and Modern Design' },
      { text: 'Easy to Customize' },
      { text: 'Cross Browser Compatible' },
      { text: 'SEO Friendly' },
    ],
    [
      { text: 'High Performance and Speed' },
      { text: 'Clean Code and Well Documented' },
      { text: 'Fast Loading and Free Updates' },
      { text: '24/7 Support' },
      { text: 'Lifetime Access and Updates' },
    ],
  ],
  showcaseCards = [
    {
      title: 'Copy and paste Blocks',
      description:
        'Easly copy and paste any block you like and use it in your project.',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
      badge: 'Example',
      benefits: [
        'Responsive design and layout with clean and modern design',
        'Easy to customize with cross browser compatibility',
        'SEO friendly with high performance and speed for improved laod times',
      ],
      link: '#',
      linkText: 'Read more',
    },
    {
      title: 'Easy to Customize Blocks',
      description:
        'Easly customize any block you like and use it in your project.',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
      badge: 'Example',
      benefits: [
        'The blocks are clean and modern with easy to customize features',
        'All blocks are SEO friendly with cross browser compatibility',
        'Each block is responsive with high performance and speed',
      ],
      link: '#',
      linkText: 'Read more',
    },
    {
      title: 'Readymade Blocks for you to use',
      description: 'Easly use any block you like and use it in your project.',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg',
      badge: 'Example',
      benefits: [
        'Prebuilt blocks built with shadcn/ui & TailwindCSS',
        'Synced with your project theme and design with easy to customize features',
        'Various blocks to choose from with high performance and speed',
      ],
      link: '#',
      linkText: 'Read more',
    },
  ],
  gridColumns = 3,
  className,
}: Feature22Props) => {
  return (
    <section className={className || 'py-16 sm:py-24 md:py-32'}>
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
          <h2 className="mb-4 text-3xl font-medium sm:col-span-2 sm:text-4xl md:mb-0 lg:col-span-1">
            {title}
          </h2>
          {benefitsColumns?.map((column, columnIndex) => (
            <ul
              key={`column-${columnIndex}`}
              className="text-muted-foreground flex flex-col gap-3 sm:gap-4"
            >
              {column.map((benefit, benefitIndex) => (
                <li
                  key={`benefit-${columnIndex}-${benefitIndex}`}
                  className="flex items-center gap-2"
                >
                  <Check className="text-primary size-4" /> {benefit.text}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div
          className={`mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-${gridColumns}`}
        >
          {showcaseCards?.map((card, cardIndex) => (
            <div key={`card-${cardIndex}`} className="rounded-lg border">
              <div className="relative p-1">
                <img
                  src={card.image}
                  alt="placeholder"
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
                <Badge
                  variant="outline"
                  className="bg-primary-foreground absolute top-5 left-5"
                >
                  {card.badge}
                </Badge>
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-medium">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </div>
                <div className="h-px border-t border-dashed"></div>
                <ul className="text-muted-foreground">
                  {card.benefits.map((benefit, benefitIndex) => (
                    <div key={`benefit-${cardIndex}-${benefitIndex}`}>
                      <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                        <Check className="text-primary mt-1 size-4 shrink-0" />
                        {benefit}
                      </li>
                      {benefitIndex < card.benefits.length - 1 && (
                        <div className="h-px border-t border-dashed"></div>
                      )}
                    </div>
                  ))}
                </ul>
                <div className="h-px border-t border-dashed"></div>
                <a
                  href={card.link}
                  className="my-3 flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
                >
                  {card.linkText || 'Read more'}
                  <ChevronRight className="mt-0.5 size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature22 };
