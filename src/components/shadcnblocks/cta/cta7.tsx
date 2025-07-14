import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Cta7Props {
  title?: string;
  subtitle?: string;
  features?: string[];
  buttonText?: string;
  buttonHref?: string;
}

const Cta7 = ({
  title = 'Ready to Transform Your Business?',
  subtitle = 'Experience the Difference',
  features = [
    'Easy Integration',
    '24/7 Support',
    'Customizable Design',
    'Regular Updates',
  ],
  buttonText = 'Get Started',
  buttonHref = '#',
}: Cta7Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="border-border bg-accent relative rounded-xl border px-6 py-8 2xl:grid 2xl:grid-cols-2 2xl:px-14 2xl:py-10">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <svg
              fill="none"
              width={404}
              height={384}
              viewBox="0 0 404 384"
              aria-hidden="true"
              className="absolute top-full left-full -translate-x-2/3 -translate-y-1/2 rotate-[60deg]"
            >
              <defs>
                <pattern
                  x={0}
                  y={0}
                  id="dots"
                  width={16}
                  height={16}
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx={2}
                    cy={2}
                    r={2}
                    fill="currentColor"
                    className="text-border"
                  />
                </pattern>
              </defs>
              <rect fill="url(#dots)" width={400} height={400} />
            </svg>
          </div>
          <div className="relative mb-12 2xl:mb-0">
            <h3 className="mb-6 text-2xl font-semibold md:mb-8 md:text-4xl lg:mb-12">
              {title}
            </h3>
            <p className="text-muted-foreground mb-6 text-xs tracking-widest uppercase">
              {subtitle}
            </p>
            <ul className="text-muted-foreground grid gap-x-8 gap-y-4 md:grid-cols-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-foreground size-5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-end 2xl:justify-end">
            <Button size="lg" asChild>
              <a href={buttonHref}>{buttonText}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta7 };
