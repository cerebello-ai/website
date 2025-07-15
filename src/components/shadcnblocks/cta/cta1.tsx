import { ArrowRight, Sparkles } from 'lucide-react';

import { CtaProps } from '../types/common';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Cta1 = ({
  title = 'Call to Action',
  description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.',
  buttons = [{ text: 'Get Started', href: '#' }],
  className = '',
}: CtaProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <Card className="border-muted flex flex-col justify-between pb-0 md:flex-row md:py-6">
          <div className="p-6 md:max-w-96">
            <div className="mb-2 flex items-center gap-2">
              <span className="bg-muted flex size-7 items-center justify-center rounded-full">
                <Sparkles className="size-4" strokeWidth={1.5} />
              </span>
              <h4 className="text-2xl font-semibold">{title}</h4>
            </div>
            <p className="text-muted-foreground">{description}</p>
            {buttons && buttons[0] && (
              <Button className="mt-8" asChild>
                <a href={buttons[0].href || '#'}>
                  {buttons[0].text} <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            )}
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="aspect-video object-cover md:max-w-96"
          />
        </Card>
      </div>
    </section>
  );
};

export { Cta1 };
