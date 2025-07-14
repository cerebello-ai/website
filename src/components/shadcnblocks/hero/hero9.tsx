import { ChevronRight } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Hero9Props extends HeroProps {
  badge?: string;
  codeExample?: string;
}

const Hero9 = ({
  title = 'Welcome to Our Website',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  buttons = [
    { text: 'Primary', href: '#', variant: 'primary' },
    { text: 'Secondary', href: '#', variant: 'outline' },
  ],
  badge = 'New Release',
  codeExample = `curl 'https://api.example.com/v1/endpoint' \\
    -X POST \\
    -u username:password \\
    -d param_1=1001 \\
    -d param_3=true \\
    -d param_2="Donec quis lorem ligula."`,
}: Hero9Props) => {
  return (
    <section className="relative py-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_60%_60%_at_65%_50%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)] [background-size:8px_8px]"></div>
      {/* Content */}
      <div className="relative container">
        <div className="flex flex-col items-start text-left">
          {badge && <Badge variant="outline">{badge}</Badge>}
          <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
            {title}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
            {description}
          </p>
          <div className="flex w-full flex-col justify-start gap-2 sm:flex-row">
            {buttons?.map((button, index) => (
              <Button
                key={index}
                variant={button.variant === 'outline' ? 'outline' : 'default'}
                className="w-full sm:w-auto"
                asChild
              >
                <a href={button.href}>
                  {button.text}
                  {index === 0 && <ChevronRight className="ml-2 size-4" />}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="relative mt-12 grid grid-cols-12 md:gap-12">
          <div className="col-span-12 md:col-span-10">
            <div className="border-border bg-background aspect-video overflow-clip rounded-lg border shadow-md">
              {/* Hero Image */}
            </div>
          </div>
          <div className="absolute inset-0">
            <div className="grid h-full grid-cols-12 md:gap-12">
              <div className="col-span-10 col-start-2 -mt-6 grid translate-y-0 items-start justify-center sm:translate-y-0 sm:items-center md:col-span-6 md:col-end-12 lg:-mt-12 lg:items-start">
                <div className="bg-primary absolute h-[140px] w-full rounded-lg p-4 shadow-lg">
                  <pre className="text-accent [mask-image:linear-gradient(to_right,#000_80%,transparent_100%)] font-mono text-xs leading-normal">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero9 };
