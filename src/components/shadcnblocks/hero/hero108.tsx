import { ArrowRight, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface Hero108Props {
  data?: {
    title?: string;
    description?: string;
    benefits?: Array<{
      title: string;
      description: string;
    }>;
    buttonText?: string;
    buttonHref?: string;
  };
}

const Hero108 = ({ data }: Hero108Props) => {
  const title =
    data?.title || 'Earn income from real estate without owning property';
  const benefits = data?.benefits || [
    { title: 'Average 9% Return on Investment', description: '' },
    { title: 'Access your funds quarterly', description: '' },
    { title: 'Investments chosen by certified SGRs', description: '' },
  ];
  const buttonText = data?.buttonText || 'Start Now';
  const buttonHref = data?.buttonHref || '#';
  return (
    <section className="bg-background py-12 font-sans md:py-20">
      <div className="container flex flex-col items-center gap-8 lg:flex-row">
        <div className="flex flex-col gap-10">
          <h1 className="text-foreground text-5xl font-semibold md:text-6xl">
            {title}
          </h1>
          <ul className="flex flex-col gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="bg-accent flex h-7 w-7 rounded-full">
                  <Check
                    className="stroke-foreground m-auto size-4"
                    strokeWidth={3}
                  />
                </div>
                <div className="text-foreground">{benefit.title}</div>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="flex h-fit w-full items-center justify-center gap-2 rounded-3xl px-6 py-3 font-medium md:w-fit"
          >
            <a href={buttonHref}>
              <div>{buttonText}</div>
              <ArrowRight className="size-5" />
            </a>
          </Button>
        </div>
        <div className="w-full shrink-0 lg:w-1/2">
          <div className="bg-muted relative mx-auto h-[27.5rem] w-full max-w-[36.5rem] overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat sm:h-[39.5rem]">
            <div className="relative mx-auto mt-20 w-[12.5rem] sm:w-[18.75rem]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero108/iphone.png"
                alt=""
                className="absolute top-0 z-20 block w-full"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
                alt=""
                className="absolute top-0 block w-full rounded-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero108 };
