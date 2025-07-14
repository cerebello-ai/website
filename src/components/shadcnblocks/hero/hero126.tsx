'use client';
import { Fragment, useState } from 'react';

import { ArrowRight, Play } from 'lucide-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Hero126 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <Fragment>
      <section className="dark relative h-min min-h-96 overflow-hidden bg-[radial-gradient(50%_60%_at_50%_0%,var(--color-muted)_0%,var(--color-background)_100%)]">
        <div className="container mx-auto h-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid-2.svg')] bg-[length:83.75rem_83.75rem] bg-[center_top] bg-no-repeat py-12 md:py-20">
          <div className="flex flex-col items-center justify-center gap-16 md:gap-28">
            <div className="flex max-w-[47.5rem] flex-col items-center justify-center gap-8">
              <Badge className="bg-background/10 hover:bg-background/10 flex h-fit! w-fit items-center gap-2 rounded-full border border-white/20 px-3 py-1">
                <span className="text-foreground text-xs font-normal md:text-sm">
                  Announcing our next project.
                </span>
                <a
                  href="#"
                  className="text-foreground inline-flex items-center gap-2 text-sm font-medium"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Badge>
              <div>
                <h1 className="flex flex-col items-center text-center text-3xl font-semibold tracking-tighter text-transparent sm:text-4xl md:text-5xl md:leading-tight lg:text-[3.6rem] lg:leading-snug">
                  <div className="bg-[linear-gradient(0deg,theme(colors.muted2.foreground)_0%,var(--color-foreground)_100%)] w-fit bg-clip-text">
                    Bring your next idea to life and
                  </div>
                  <div className="bg-[linear-gradient(0deg,theme(colors.muted2.foreground)_0%,var(--color-foreground)_100%)] w-fit bg-clip-text">
                    launch your dream website.
                  </div>
                </h1>
                <p className="text-muted-foreground mx-auto mt-5 max-w-[31.25rem] text-center">
                  Zero code, maximum speed. Create professional sites easily and
                  quickly, with top-notch SEO and performance.
                </p>
              </div>
              <div className="flex w-full flex-wrap items-center gap-5 md:w-fit">
                <Button
                  asChild
                  className="block h-fit w-fit flex-1 rounded-md px-4 py-[0.625rem] text-center text-sm font-semibold text-nowrap"
                >
                  <a href="#">Get Started</a>
                </Button>
                <Button
                  onClick={() => setIsVideoOpen(true)}
                  variant="outline"
                  asChild
                  className="bg-transparnt text-foreground/60 group flex h-fit w-fit flex-1 items-center justify-center gap-2 rounded-md border border-white/30 px-4 py-[0.625rem] text-sm font-semibold transition hover:border-white"
                >
                  <a href="#">
                    <Play className="fill-foreground stroke-foreground h-4 w-4" />
                    <div className="group-hover:text-foreground text-nowrap transition">
                      Watch Video
                    </div>
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-full max-w-[81.25rem]">
              <AspectRatio
                ratio={1.779891304 / 1}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt=""
                  className="w-full object-cover object-center"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Presentation Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Presentation Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero126 };
