import { CtaProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface Cta15Props extends CtaProps {
  preTitle?: string;
  image?: string;
}

const Cta15 = ({
  preTitle = 'Ready to get started?',
  title = 'Start your free trial today.',
  description = 'Start with a 14-day free trial. No credit card required. No setup fees. Cancel anytime.',
  buttons = [
    { text: 'Get Started', href: '#', variant: 'primary' },
    { text: 'Learn More', href: '#', variant: 'outline' },
  ],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg',
}: Cta15Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-20 overflow-hidden rounded-2xl border bg-[radial-gradient(ellipse_30%_60%_at_100%_80%,var(--color-gray-200),transparent)] pt-20 sm:pl-16 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_80%_at_40%_120%,var(--color-gray-200),transparent)] lg:pl-20">
          <div className="lg:texlf mx-auto max-w-md px-4 text-center md:px-0 lg:mx-0 lg:pb-20 lg:text-left">
            {preTitle && <p className="mb-6 font-medium">{preTitle}</p>}
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h2>
            <p className="text-muted-foreground text-lg">{description}</p>
            {buttons && buttons.length > 0 && (
              <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
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
          {image && (
            <div className="relative w-full pl-4 sm:pl-0">
              <div className="absolute -bottom-8 -left-8 -z-10 h-4/5 w-4/5 rounded-tl-2xl rounded-br-2xl bg-stone-900/20 blur-2xl"></div>
              <img
                src={image}
                alt="CTA illustration"
                className="relative z-10 h-full max-h-[400px] w-full rounded-tl-2xl rounded-br-2xl object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Cta15 };
