import { ArrowRight } from 'lucide-react';

import { CtaProps } from '@/components/shadcnblocks/types/common';
import { Button } from '@/components/ui/button';

interface Cta21Props extends CtaProps {
  backgroundImage?: string;
  imageAlt?: string;
  height?: string;
  heightMd?: string;
  showIcon?: boolean;
}

const Cta21 = ({
  title = 'Innovation. Control. Success.',
  buttons = [{ text: 'Get Started Now' }],
  backgroundImage = 'https://images.unsplash.com/photo-1507623457503-9743b35aea95?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt = 'placeholder',
  height = '300px',
  heightMd = '500px',
  showIcon = true,
  className,
}: Cta21Props) => {
  const primaryButton = buttons[0];

  return (
    <section className={className || 'py-32'}>
      <div className="container">
        <div
          className="relative h-[300px] overflow-hidden rounded-xl md:h-[500px]"
          style={{
            height: height !== '300px' ? height : undefined,
            ...(heightMd !== '500px' &&
              ({
                '@media (min-width: 768px)': { height: heightMd },
              } as any)),
          }}
        >
          <img
            src={backgroundImage}
            alt={imageAlt}
            className="h-full w-full bg-bottom object-cover"
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 p-6">
            <h2 className="text-center text-2xl font-semibold md:text-4xl">
              {title}
            </h2>
            {primaryButton && (
              <Button size="lg" asChild={!!primaryButton.href}>
                {primaryButton.href ? (
                  <a href={primaryButton.href}>
                    {primaryButton.text}
                    {showIcon && <ArrowRight className="ml-2" />}
                  </a>
                ) : (
                  <>
                    {primaryButton.text}
                    {showIcon && <ArrowRight className="ml-2" />}
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta21 };
