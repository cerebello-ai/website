import { Code, GitBranch } from 'lucide-react';

import { FeatureProps } from '../types/common';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

interface Feature4Props extends FeatureProps {
  mainFeature?: {
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    title: string;
    description: string;
    image: string;
  };
  sideFeature?: {
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    title: string;
    description: string;
    image: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    logo: string;
  };
}

const Feature4 = ({
  title = 'Get your team on the same page, literally',
  mainFeature = {
    icon: Code,
    title: 'Collaborate or co-edit together',
    description:
      'Allow others to comment or suggest edits. Just type the @ key to get their attention.',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  },
  sideFeature = {
    icon: GitBranch,
    title: 'Card Title',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  },
  testimonial = {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sint, porro consequatur illo itaque rem dolor.',
    author: 'John Doe',
    position: 'CET',
    company: 'Company Example',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg',
  },
}: Feature4Props) => {
  const MainIcon = mainFeature.icon;
  const SideIcon = sideFeature.icon;

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto xl:px-36">
          <h1 className="mx-auto mb-16 max-w-xl text-center text-4xl font-semibold text-pretty lg:text-5xl">
            {title}
          </h1>

          <div className="mt-10 flex flex-col gap-6">
            <Card>
              <CardHeader className="pb-1">
                <MainIcon className="size-5" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  {mainFeature.title}
                </h2>
                <p className="text-muted-foreground leading-snug">
                  {mainFeature.description}
                </p>
              </CardContent>
              <CardFooter className="justify-end pb-0">
                <img
                  className="h-[500px] w-full rounded-t-md object-cover object-center"
                  src={mainFeature.image}
                  alt={mainFeature.title}
                />
              </CardFooter>
            </Card>
            <div className="flex flex-col gap-6 md:flex-row">
              <Card className="w-full">
                <CardHeader className="pb-1">
                  <SideIcon className="size-5" strokeWidth={1.5} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">
                    {sideFeature.title}
                  </h2>
                  <p className="text-muted-foreground leading-snug">
                    {sideFeature.description}
                  </p>
                </CardContent>
                <CardFooter className="justify-end pr-0 pb-0">
                  <img
                    className="h-full max-h-96 w-full rounded-tl-md object-cover object-center"
                    src={sideFeature.image}
                    alt={sideFeature.title}
                  />
                </CardFooter>
              </Card>
              <Card className="flex w-full flex-col justify-between gap-10 md:gap-20">
                <CardHeader className="items-start pb-1">
                  <img
                    className="h-8"
                    src={testimonial.logo}
                    alt={testimonial.company}
                  />
                </CardHeader>
                <CardContent className="text-left">
                  <q className="text-2xl md:text-3xl">{testimonial.quote}</q>
                </CardContent>
                <CardFooter className="flex-col items-start text-xs">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature4 };
