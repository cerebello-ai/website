import { Check } from 'lucide-react';

import { FeatureProps } from '../types/common';

interface Feature7Props extends FeatureProps {
  features?: string[];
  imagePosition?: 'left' | 'right';
}

const Feature7 = ({
  title = 'Blocks built with Shadcn & Tailwind',
  description = 'Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  features = [
    'Ready-to-use components built with Shadcn/ui',
    'Fully responsive and accessible by default',
    'Easy customization with Tailwind CSS classes',
  ],
  imagePosition = 'left',
}: Feature7Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {image && (
            <img
              src={image}
              alt="Feature showcase"
              className={`max-h-96 w-full rounded-md object-cover ${
                imagePosition === 'left'
                  ? 'order-2 lg:order-1'
                  : 'order-1 lg:order-2'
              }`}
            />
          )}
          <div
            className={`flex flex-col lg:items-start lg:text-left ${
              imagePosition === 'left'
                ? 'order-1 lg:order-2'
                : 'order-2 lg:order-1'
            }`}
          >
            <h1 className="my-6 text-3xl font-semibold text-pretty lg:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-lg">
              {description}
            </p>
            {features && features.length > 0 && (
              <ul className="ml-4 space-y-4 text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="size-5" />
                    <p className="text-muted-foreground">{feature}</p>
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

export { Feature7 };
