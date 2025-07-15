import { Zap } from 'lucide-react';

import { CtaProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface Cta16Props extends CtaProps {
  icon?: React.ReactNode;
  badgeText?: string;
  backgroundImage?: string;
  height?: string;
  overlay?: string;
}

const Cta16 = ({
  icon = <Zap className="h-full w-7" />,
  badgeText = 'Faster',
  title = 'Build your website faster.',
  buttons = [
    { text: 'Get Started', href: '#', variant: 'secondary' },
    { text: 'Learn More', href: '#', variant: 'outline' },
  ],
  backgroundImage = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-xOLhD-qfoRI-unsplash.jpg',
  height = 'h-[620px]',
  overlay = 'rgba(0,0,0,.6)',
}: Cta16Props) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(${overlay}, ${overlay}), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        backgroundImage: `linear-gradient(${overlay}, ${overlay})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

  return (
    <section className="py-32">
      <div
        className={`flex ${height} items-center justify-center`}
        style={backgroundStyle}
      >
        <div className="container">
          <div className="text-primary-foreground flex flex-col gap-8 p-4 text-center">
            {(icon || badgeText) && (
              <div className="flex items-center justify-center gap-2 text-2xl font-medium">
                {icon} {badgeText}
              </div>
            )}
            <h2 className="text-5xl font-semibold">{title}</h2>
            {buttons && buttons.length > 0 && (
              <div className="flex flex-col justify-center gap-2 sm:flex-row">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant={
                      button.variant === 'outline'
                        ? 'outline'
                        : button.variant === 'secondary'
                          ? 'secondary'
                          : 'default'
                    }
                    className={
                      button.variant === 'outline'
                        ? 'bg-background/20 hover:bg-background/30 hover:text-primary-foreground border-0 backdrop-blur-sm'
                        : ''
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

export { Cta16 };
