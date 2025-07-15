import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface Hero27Props extends HeroProps {
  titleWords?: string[];
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  maxWidth?: string;
  showDecorativeBlur?: boolean;
  animatedHover?: boolean;
}

const Hero27 = ({
  titleWords = ['High', 'Scale', 'Heading.'],
  subtitle = 'Small\nSubheading',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, optio quis? Veniam accusamus quaerat illum dolorem eos atque reiciendis numquam. Veniam accusamus quaerat illum',
  buttonText = 'Get Started',
  buttonHref = '#',
  maxWidth = 'max-w-6xl',
  showDecorativeBlur = true,
  animatedHover = true,
}: Hero27Props) => {
  const hoverClass = animatedHover
    ? 'transition-transform duration-300 hover:translate-x-1'
    : '';

  return (
    <section className="relative overflow-hidden py-32">
      {/* Decorative background element */}
      <div className="from-background to-background/80 absolute inset-0 -z-10 bg-linear-to-br" />
      {showDecorativeBlur && (
        <div className="bg-primary/10 absolute top-1/2 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full blur-3xl" />
      )}

      <div className="relative container">
        <div
          className={`mx-auto flex ${maxWidth} flex-col items-start justify-between gap-10 md:gap-20 lg:flex-row lg:items-end`}
        >
          <h1 className="relative text-6xl font-semibold tracking-tighter md:text-[8vw] lg:w-3/5 2xl:text-9xl">
            {titleWords.map((word, index) => (
              <span key={`word-${index}`}>
                <span className={`relative inline-block ${hoverClass}`}>
                  {word}
                </span>
                {index < titleWords.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <div className="lg:max-w-auto max-w-lg space-y-5 lg:mb-4 lg:w-2/5">
            {subtitle && (
              <p className="text-xl font-semibold md:text-4xl">
                {subtitle.split('\n').map((line, index, array) => (
                  <span key={`subtitle-${index}`}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </span>
                ))}
              </p>
            )}
            {description && (
              <p className="text-muted-foreground text-lg">{description}</p>
            )}
            {buttonText && (
              <Button
                className="group relative mt-8 overflow-hidden"
                size="lg"
                asChild
              >
                <a href={buttonHref}>
                  <span className="relative z-10">{buttonText}</span>
                  <span className="bg-primary/10 absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero27 };
