'use client';
import { Fragment, useState } from 'react';

import AutoScroll from 'embla-carousel-auto-scroll';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowUpRight, Play, Sparkles } from 'lucide-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Hero114 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <section className="bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero114/background.png')] bg-cover bg-no-repeat py-12 font-sans md:py-20">
        <div className="container">
          <div className="mx-auto flex max-w-[46.875rem] flex-col items-center justify-center gap-8">
            <Badge className="bg-background hover:bg-background flex w-fit items-center gap-3 rounded-full px-2 py-1.5 shadow-[0_1px_4px_var(--color-neutral-300)]">
              <div className="flex items-center gap-1">
                <Sparkles className="stroke-muted-foreground h-4 w-4" />
                <p className="text-muted-foreground text-xs leading-normal">
                  We released a new version
                </p>
              </div>
              <a href="#" className="flex w-fit items-center gap-1">
                <p className="text-foreground text-xs leading-normal">
                  Read More
                </p>
                <ArrowUpRight className="stroke-foreground h-4 w-4" />
              </a>
            </Badge>
            <div className="flex w-full flex-col items-center gap-6">
              <h1 className="text-foreground text-center text-2xl leading-tight font-semibold md:text-5xl lg:text-6xl">
                All your AI tools together on one unified platform
              </h1>
              <p className="text-muted-foreground max-w-[37.5rem] text-center text-lg leading-snug lg:text-xl">
                Cultivate a collaborative space where teams can oversee all
                their AI tools on one cohesive platform.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                asChild
                onClick={() => setIsVideoOpen(true)}
                variant="secondary"
                className="border-muted2 flex h-fit w-fit items-center gap-2 rounded-full border px-4 py-2.5 text-base leading-normal font-medium"
              >
                <a href="#">
                  <Play className="size-5!" />
                  <p>Watch Demo</p>
                </a>
              </Button>
              <Button
                asChild
                className="block h-fit w-fit items-center gap-2 rounded-full px-4 py-2.5 text-base leading-normal font-medium"
              >
                <a href="#">Try for Free</a>
              </Button>
            </div>
          </div>
          <div className="bg-background mx-auto mt-14 w-full max-w-[68.8rem] rounded-xl p-4 md:mt-20 md:rounded-3xl md:p-6">
            <AspectRatio ratio={1.383458647 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt=""
                className="block h-full w-full rounded-xl object-cover md:rounded-3xl"
              />
            </AspectRatio>
          </div>
          <div className="mx-auto w-full max-w-[68.8rem] py-20">
            <p className="text-muted-foreground text-center text-base font-semibold">
              Used by thusands of fast-growing startups.
            </p>
            <div className="py-16">
              <Carousel
                opts={{
                  loop: true,
                  align: 'center',
                }}
                plugins={[
                  AutoScroll({
                    speed: 1,
                  }),
                  Autoplay({
                    playOnInit: true,
                    delay: 1000,
                  }),
                ]}
                className="relative w-full max-w-(--breakpoint-2xl) overflow-hidden"
              >
                <CarouselContent className="items-center">
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                  <CarouselItem className="w-fit basis-auto px-7">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                      alt=""
                      className="h-8 w-full object-fill opacity-70"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[50rem]">
          <DialogHeader>
            <DialogTitle>Presentation Video</DialogTitle>
          </DialogHeader>
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Presentation Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero114 };
