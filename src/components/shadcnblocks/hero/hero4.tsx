import { ArrowDownRight, Star } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface Hero4Props extends HeroProps {
  reviews?: {
    count: number;
    rating: number;
    avatars: string[];
  };
}

const Hero4 = ({
  title = 'Blocks built with Shadcn & Tailwind',
  description = 'Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
  buttons = [
    { text: 'Sign Up', href: '#' },
    { text: 'Get Started', href: '#', variant: 'outline' },
  ],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp',
    ],
  },
}: Hero4Props) => {
  return (
    <section className="py-32">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="bg-muted flex justify-end">
          <img
            src={image}
            alt="hero image"
            className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-4xl font-semibold text-pretty lg:text-6xl xl:text-7xl">
            {title}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            {description}
          </p>
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="inline-flex items-center -space-x-4">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index} className="size-12 border">
                  <AvatarImage src={avatar} alt={`Avatar ${index + 1}`} />
                </Avatar>
              ))}
            </span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="font-semibold">{reviews.rating}</span>
              </div>
              <p className="text-muted-foreground text-left font-medium">
                from {reviews.count}+ reviews
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons &&
              buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || 'default'}
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href={button.href}>
                    {button.text}
                    {button.variant === 'outline' && (
                      <ArrowDownRight className="ml-2 size-4" />
                    )}
                  </a>
                </Button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero4 };
