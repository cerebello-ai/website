'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

const BUTTON_LOGOS = [
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-1.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-3.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-4.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-5.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-6.svg',
    alt: '',
  },
];

const LOGOS = [
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-1.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-2.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-3.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-4.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-5.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-6.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-7.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-8.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-9.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-10.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-11.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-13.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-14.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-15.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-16.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-17.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-18.svg',
    alt: '',
  },
  {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-8.svg',
    alt: '',
  },
];

const Integration6 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="dark bg-background flex flex-col gap-10 overflow-hidden rounded-xl py-4 md:py-10">
          <div className="flex w-full flex-col justify-between gap-5 px-10 py-5 lg:flex-row lg:items-end">
            <div className="flex-1">
              <div className="flex w-full max-w-[32rem] flex-col gap-5">
                <h2 className="text-foreground text-[2rem] leading-none font-semibold tracking-tight md:text-[2.75rem] lg:text-5xl">
                  Build Beautiful Interfaces Fast
                </h2>
                <p className="text-muted-foreground leading-[1.4]">
                  Start designing smarter today with reusable UI blocks that
                  save time, boost consistency, and wow users.
                </p>
              </div>
            </div>
            <div className="lg:self-end">
              <Button
                asChild
                className="h-fit w-full justify-between gap-4 rounded-full p-2.5 pr-5 shadow-[0_0_0_4px_#363636] transition-shadow hover:shadow-[0_0_0_4px_#4b4b4b] sm:w-fit sm:gap-28"
                variant="secondary"
              >
                <a href="#">
                  <div className="flex items-center gap-2.5">
                    <Carousel
                      plugins={[
                        Autoplay({
                          delay: 2000,
                        }),
                      ]}
                      className="size-8 shrink-0 overflow-hidden rounded-full border border-white/20 bg-black/50"
                    >
                      <CarouselContent className="ml-0 size-7.5">
                        {BUTTON_LOGOS.map((logo, index) => (
                          <CarouselItem
                            key={index}
                            className="flex size-7.5 overflow-hidden rounded-full p-0"
                          >
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              className="m-auto block size-4.5 object-contain object-center"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                    <div>View All Components</div>
                  </div>
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <Separator />
          <Carousel
            opts={{
              loop: true,
              watchDrag: false,
              container: 'nav',
            }}
            plugins={[
              AutoScroll({
                speed: 0.5,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {LOGOS.map((logo, index) => (
                <CarouselItem key={index} className="h-8 basis-20 pl-12">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="block size-full object-contain object-center"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Separator />
        </div>
      </div>
    </section>
  );
};

export { Integration6 };
