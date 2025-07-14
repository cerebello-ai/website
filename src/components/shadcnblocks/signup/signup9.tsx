'use client';

import React from 'react';

import AutoScroll from 'embla-carousel-auto-scroll';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Signup9 = () => {
  const logos = [
    {
      id: 'logo-1',
      description: 'Logo 1',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
      className: 'h-6 w-auto',
    },
    {
      id: 'logo-2',
      description: 'Logo 2',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg',
      className: 'h-6 w-auto',
    },
    {
      id: 'logo-3',
      description: 'Logo 3',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg',
      className: 'h-6 w-auto',
    },
    {
      id: 'logo-4',
      description: 'Logo 4',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg',
      className: 'h-6 w-auto',
    },
    {
      id: 'logo-5',
      description: 'Logo 5',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg',
      className: 'h-6 w-auto',
    },
  ];

  return (
    <section className="bg-background">
      <div className="container flex min-h-screen items-center justify-center py-4">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-6">
          <div className="flex h-14 w-14 items-center justify-center">
            <img
              className="h-14 w-12"
              alt="Logo"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
            />
          </div>

          <h1 className="text-foreground mb-8 w-full text-center text-3xl font-medium tracking-tighter md:text-4xl">
            Create your free account
          </h1>

          <Button
            variant="outline"
            className="border-muted-foreground/30 flex h-14 w-full max-w-lg items-center justify-center gap-8 rounded-full"
          >
            <img
              className="h-5 w-5"
              alt="Google logo"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
            />
            <span className="font-medium">Sign up with Google</span>
          </Button>

          <div className="flex w-full max-w-lg items-center gap-6">
            <Separator className="flex-1" />
            <span className="font-medium tracking-tight">or</span>
            <Separator className="flex-1" />
          </div>

          <div className="w-full max-w-lg">
            <Input
              className="bg-muted h-14 rounded-full border-none px-5 py-4 font-medium"
              placeholder="Enter Your Email"
            />
          </div>

          <Button className="bg-foreground text-background hover:bg-foreground/90 h-14 w-full max-w-lg rounded-full">
            <span className="font-medium tracking-tight">Continue</span>
          </Button>

          <p className="text-foreground/40 mb-8 w-full text-center text-sm tracking-tight">
            Already have an account?{' '}
            <span className="cursor-pointer underline">Log in</span>
          </p>

          <div className="relative mx-auto flex items-center justify-center opacity-20">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ playOnInit: true })]}
            >
              <CarouselContent className="ml-0">
                {logos.map((logo) => (
                  <CarouselItem
                    key={logo.id}
                    className="flex basis-1/3 justify-center sm:basis-1/4 md:basis-1/5 lg:basis-1/4"
                  >
                    <div className="flex shrink-0 items-center justify-center lg:mx-10">
                      <div>
                        <img
                          src={logo.image}
                          alt={logo.description}
                          className={logo.className}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="from-background absolute inset-y-0 left-0 w-12 bg-linear-to-r to-transparent"></div>
            <div className="from-background absolute inset-y-0 right-0 w-12 bg-linear-to-l to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup9 };
