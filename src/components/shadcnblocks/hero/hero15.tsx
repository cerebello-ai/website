import { ArrowRight } from 'lucide-react';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaApple } from 'react-icons/fa';
import { SiTrustpilot } from 'react-icons/si';

import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface Rating {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface Hero15Props extends HeroProps {
  announcement?: {
    label: string;
    text: string;
    href: string;
  };
  ratings?: Rating[];
}

const Hero15 = ({
  title = 'Efficient tools that simplify your workflow.',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor assumenda voluptatem nemo magni a maiores aspernatur.',
  buttons = [{ text: 'Get started for free', href: '#', variant: 'primary' }],
  announcement = {
    label: "What's new",
    text: 'Read more',
    href: '#',
  },
  ratings = [
    { icon: BiLogoPlayStore, text: '4.7 rating on Play Store' },
    { icon: FaApple, text: '4.8 rating on App Store' },
    { icon: SiTrustpilot, text: '4.9 rating on Trustpilot' },
  ],
}: Hero15Props) => {
  return (
    <section className="py-32">
      <div className="container">
        {announcement && (
          <a
            href={announcement.href}
            className="group bg-muted hover:bg-muted/80 mx-auto mb-4 flex w-fit items-center rounded-full px-4 py-2 text-sm transition-colors"
          >
            <span className="mr-1 font-semibold">{announcement.label}</span>
            <div className="bg-muted-foreground/70 mx-2 h-3.5 w-px"></div>
            {announcement.text}
            <ArrowRight className="ml-2 inline size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        )}
        <h1 className="mx-auto my-4 mb-6 max-w-3xl text-center text-3xl font-bold lg:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-center lg:text-xl">
          {description}
        </p>
        <div className="flex justify-center">
          {buttons?.[0] && (
            <Button
              size="lg"
              className="w-full shadow-sm transition-shadow hover:shadow-md sm:w-auto lg:mt-10"
              asChild
            >
              <a href={buttons[0].href}>{buttons[0].text}</a>
            </Button>
          )}
        </div>
        {ratings && ratings.length > 0 && (
          <div className="mt-8 lg:mt-12">
            <ul className="flex flex-wrap justify-center gap-6 text-sm lg:text-base">
              {ratings.map((rating, index) => {
                const IconComponent = rating.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <IconComponent className="size-5" />
                    {rating.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export { Hero15 };
