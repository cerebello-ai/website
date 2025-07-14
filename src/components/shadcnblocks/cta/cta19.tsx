import { FileCode, Layers } from 'lucide-react';

import { CtaProps } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface SideLink {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface Cta19Props extends CtaProps {
  badge?: string;
  maxWidth?: string;
  sideLinks?: SideLink[];
  showSeparator?: boolean;
}

const Cta19 = ({
  badge = 'Get Started',
  title = 'Transform your workflow with our enterprise solution',
  description = 'Our platform streamlines complex operations at scale, providing comprehensive insights and intelligent automation capabilities. Achieve greater efficiency and productivity with our proven enterprise tools.',
  buttons = [
    { text: 'Start free trial', href: '#', variant: 'primary' },
    { text: 'Schedule demo', href: '#', variant: 'outline' },
  ],
  maxWidth = 'max-w-xl',
  sideLinks = [
    {
      icon: (
        <FileCode className="size-8 shrink-0 md:size-10" strokeWidth={1.5} />
      ),
      title: 'Documentation',
      description: "Learn more about our platform's features and capabilities.",
      href: '#',
    },
    {
      icon: <Layers className="size-8 shrink-0 md:size-10" strokeWidth={1.5} />,
      title: 'Interactive Demo',
      description:
        'Experience our platform firsthand with an interactive demonstration of key features.',
      href: '#',
    },
  ],
  showSeparator = true,
}: Cta19Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col rounded-xl border lg:flex-row">
          <div className="grow px-8 py-8 lg:px-16">
            {badge && <Badge variant="outline">{badge}</Badge>}
            <div className={`mt-4 ${maxWidth}`}>
              <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
              {description && (
                <p className="text-muted-foreground mt-4 md:text-lg">
                  {description}
                </p>
              )}
            </div>
            {buttons && buttons.length > 0 && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {buttons.map((button, index) => (
                  <Button
                    key={`button-${index}`}
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
          {sideLinks && sideLinks.length > 0 && (
            <div className="flex grow basis-5/12 flex-col justify-between border-t lg:border-t-0 lg:border-l">
              {sideLinks.map((link, index) => (
                <div key={`link-${index}`}>
                  <a
                    href={link.href}
                    className="hover:bg-muted/50 flex h-full items-center px-9 py-6 transition-colors lg:justify-center"
                  >
                    <div className="flex gap-4">
                      {link.icon}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold md:text-xl">
                          {link.title}
                        </h3>
                        <p className="text-muted-foreground max-w-lg md:text-lg">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                  {showSeparator && index < sideLinks.length - 1 && (
                    <Separator />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Cta19 };
