import { ChevronRight, CircleCheckBig } from 'lucide-react';

import { FeatureProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface Feature11Props extends FeatureProps {
  image?: {
    src: string;
    alt: string;
    className?: string;
  };
  buttonText?: string;
  buttonHref?: string;
  checklistItems?: string[];
  imagePosition?: 'left' | 'right';
  maxWidth?: string;
}

const Feature11 = ({
  image = {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
    alt: 'Feature illustration',
    className:
      'max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2',
  },
  title = 'Built with the latest technology stack',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias unde et doloremque dignissimos error temporibus quisquam porro ducimus esse quod, a officiis.',
  buttonText = 'Learn more',
  buttonHref = '#',
  checklistItems = ['Quality', 'Multi-purpose', 'Easy to use', 'Fast'],
  imagePosition = 'left',
  maxWidth = 'max-w-6xl',
}: Feature11Props) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="py-32">
      <div className={`container ${maxWidth}`}>
        <div
          className={`flex flex-col gap-12 md:flex-row ${!isImageLeft ? 'md:flex-row-reverse' : ''}`}
        >
          {image && (
            <img
              src={image.src}
              alt={image.alt}
              className={
                image.className ||
                'max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2'
              }
            />
          )}
          <div className="lg:p-10">
            <h2 className="text-3xl font-medium text-balance md:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="text-muted-foreground mt-1 md:mt-6">
                {description}
              </p>
            )}
            {buttonText && (
              <Button variant="outline" className="mt-6" asChild>
                <a href={buttonHref}>
                  {buttonText} <ChevronRight className="ml-2 size-4" />
                </a>
              </Button>
            )}
            {checklistItems && checklistItems.length > 0 && (
              <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CircleCheckBig className="size-4" /> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature11 };
