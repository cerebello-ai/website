import { ChevronRight, Play } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Hero21Props extends HeroProps {
  badge?: string;
  announcementText?: string;
  announcementHref?: string;
  ctaLink?: {
    text: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
}

const Hero21 = ({
  badge = 'New Release',
  announcementText = 'Get started with our new product release today',
  announcementHref = '#',
  title = 'Smart home automation and security system for you',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus fugit ab cumque consequuntur pariatur provident? Nulla consequuntur nisi eum!',
  buttons = [
    { text: 'Get Started', href: '#', variant: 'primary' },
    { text: 'Watch Demo', href: '#', variant: 'outline', icon: 'play' },
  ],
  ctaLink = {
    text: 'Schedule a call',
    href: '#',
  },
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  imageAlt = 'Hero image',
}: Hero21Props) => {
  return (
    <section className="mb-32 border-b pt-32">
      <div className="container">
        <div className="relative pb-16">
          <div className="absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
          <a
            href={announcementHref}
            className="bg-muted mx-auto flex w-fit items-center gap-2 rounded-lg p-3 sm:rounded-full sm:py-1 sm:pr-3 sm:pl-1"
          >
            {badge && <Badge className="hidden sm:block">{badge}</Badge>}
            <p className="flex items-center gap-1 text-sm">
              {announcementText}
              <ChevronRight className="mt-0.5 size-4 shrink-0" />
            </p>
          </a>
          <h1 className="mx-auto my-5 max-w-5xl text-center text-3xl text-balance md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground mx-auto max-w-3xl text-center text-sm md:text-base">
              {description}
            </p>
          )}
          {buttons && buttons.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant === 'outline' ? 'outline' : 'default'}
                  asChild
                >
                  <a href={button.href}>
                    {button.icon === 'play' && <Play className="mr-2 size-4" />}
                    {button.text}
                    {button.icon !== 'play' && (
                      <ChevronRight className="ml-2 size-4" />
                    )}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {ctaLink && (
            <div className="mt-5 flex justify-center">
              <a
                href={ctaLink.href}
                className="hover:border-primary flex items-center gap-1 border-b border-dashed text-sm hover:border-solid"
              >
                {ctaLink.text}
                <ChevronRight className="size-3.5" />
              </a>
            </div>
          )}
        </div>
        {image && (
          <div className="rounded-t-lg border-x border-t px-1 pt-1">
            <img
              src={image}
              alt={imageAlt}
              className="max-h-80 w-full rounded-t-lg object-cover md:max-h-[430px]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export { Hero21 };
