import { CtaProps } from '../types/common';

import { Button } from '@/components/ui/button';

const Cta5 = ({
  title = 'Call to Action',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  buttons = [{ text: 'Get Started', href: '#' }],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
}: CtaProps & { image?: string }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="bg-muted flex w-full flex-col overflow-hidden rounded-lg md:rounded-xl lg:flex-row lg:items-center">
          <div className="w-full shrink-0 self-stretch lg:w-1/2">
            <img
              src={image}
              alt="CTA image"
              className="aspect-3/2 w-full rounded-t-md object-cover md:rounded-t-none md:rounded-l-md"
            />
          </div>
          <div className="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {title}
            </h3>
            <p className="text-muted-foreground mb-8 lg:text-lg">
              {description}
            </p>
            {buttons && buttons[0] && (
              <Button asChild>
                <a href={buttons[0].href}>{buttons[0].text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta5 };
