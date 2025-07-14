import { CheckCircle } from 'lucide-react';

import { FeatureProps } from '../types/common';

interface FeatureItem {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  number: string;
}

interface Feature14Props extends FeatureProps {
  features?: FeatureItem[];
  containerBorder?: boolean;
}

const Feature14 = ({
  features = [
    {
      title: 'Secure Payments',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur modi et recusandae ducimus eligendi eveniet soluta reprehenderit nostrum expedita omnis.',
      benefits: [
        'Secure payment gateway integration with Stripe',
        'SSL encryption for secure transactions',
      ],
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
      number: '01',
    },
    {
      title: 'Automated Invoicing',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur modi et recusandae ducimus eligendi eveniet soluta reprehenderit nostrum expedita omnis.',
      benefits: ['Automated invoicing for easy billing'],
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
      number: '02',
    },
  ],
  containerBorder = true,
}: Feature14Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div
          className={`space-y-10 py-10 md:px-4 ${containerBorder ? 'rounded-lg border' : ''}`}
        >
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className="grid rounded-lg border md:grid-cols-2"
            >
              <div className="flex flex-col px-6 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-20">
                <h3 className="mb-3 text-2xl font-medium sm:mb-5 md:text-3xl lg:text-4xl">
                  {feature.title}
                </h3>
                <div className="text-muted-foreground mb-8 text-sm sm:mb-10 md:text-base">
                  {feature.description}
                </div>
                {feature.benefits && feature.benefits.length > 0 && (
                  <ul className="mt-auto space-y-2 sm:space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={`benefit-${index}-${benefitIndex}`}
                        className="flex gap-x-3"
                      >
                        <CheckCircle className="mt-0.5 size-4 shrink-0 sm:mt-1" />
                        <p className="text-sm md:text-base">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative order-first max-h-80 md:order-last md:max-h-[500px]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover"
                />
                <span className="bg-primary text-primary-foreground absolute top-5 left-5 flex size-6 items-center justify-center rounded-sm font-mono text-xs md:top-10 md:left-10">
                  {feature.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature14 };
