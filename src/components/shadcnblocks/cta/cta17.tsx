import { CtaProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface Cta17Props extends CtaProps {
  backgroundPattern?: string;
  maxWidth?: string;
}

const Cta17 = ({
  title = 'Start building your websites faster',
  description = 'Try our tools and services to build your website faster. Start with a 14-day free trial. No credit card required. No setup fees. Cancel anytime.',
  buttons = [
    { text: 'Get Started', href: '#', variant: 'primary' },
    { text: 'Learn More', href: '#', variant: 'outline' },
  ],
  backgroundPattern = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg',
  maxWidth = 'max-w-3xl',
}: Cta17Props) => {
  const backgroundStyle = backgroundPattern
    ? {
        backgroundImage: `url('${backgroundPattern}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section className="py-32">
      <div
        className="flex items-center justify-center border py-20 text-center md:p-20"
        style={backgroundStyle}
      >
        <div className="container">
          <div className={`mx-auto ${maxWidth}`}>
            <h1 className="mb-4 text-3xl font-semibold text-balance md:text-5xl">
              {title}
            </h1>
            {description && <p className="md:text-lg">{description}</p>}
            {buttons && buttons.length > 0 && (
              <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant={
                      button.variant === 'outline' ? 'outline' : 'default'
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

export { Cta17 };
