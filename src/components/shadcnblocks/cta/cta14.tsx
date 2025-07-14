import { CtaProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface Cta14Props extends CtaProps {
  backgroundImage?: string;
  height?: string;
}

const Cta14 = ({
  title = 'Start your free trial today.',
  description = 'Start with a 14-day free trial. No credit card required. No setup fees. Cancel anytime.',
  buttons = [
    { text: 'Get Started', href: '#', variant: 'primary' },
    { text: 'Learn More', href: '#', variant: 'secondary' },
  ],
  backgroundImage = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg',
  height = '620px',
}: Cta14Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div
          className="flex items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center"
          style={{
            height: height,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)), url('${backgroundImage}')`,
          }}
        >
          <div className="flex flex-col gap-8 p-4 text-center">
            <h2 className="text-primary-foreground text-5xl font-bold">
              {title}
            </h2>
            <p className="text-primary-foreground text-lg">{description}</p>
            {buttons && buttons.length > 0 && (
              <div className="flex flex-col justify-center gap-2 sm:flex-row">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant={
                      button.variant === 'secondary' ? 'secondary' : 'default'
                    }
                    asChild
                  >
                    <a href={button.href}>{button.text}</a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta14 };
