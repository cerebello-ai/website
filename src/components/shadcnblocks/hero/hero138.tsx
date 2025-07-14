import { ArrowRight } from 'lucide-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

const Hero138 = () => {
  return (
    <section className="dark bg-background before:from-background after:from-background relative overflow-hidden pt-12 before:absolute before:top-0 before:right-0 before:z-20 before:h-full before:w-[6.25rem] before:bg-linear-to-l before:to-transparent before:content-[''] after:absolute after:bottom-0 after:left-0 after:z-20 after:block after:h-[200px] after:w-full after:bg-linear-to-t after:to-transparent after:content-[''] md:pt-20 lg:before:w-[43.75rem]">
      <div className="container w-full max-w-[75rem]">
        <div className="relative z-30">
          <h1 className="text-foreground text-3xl font-medium md:text-6xl md:leading-tight xl:text-7xl">
            <span className="text-muted-2-foreground">
              The first comprehensive, all-inclusive toolkit
            </span>
            <br />
            Designed to help you grow your scalable service.
          </h1>
          <div className="mt-10 flex flex-col-reverse justify-between gap-10 lg:flex-row">
            <div className="">
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  asChild
                  className="block h-fit w-fit rounded-xl px-6 py-3 text-center text-sm font-medium transition hover:shadow-[0_0_0_4px_#ffffff40]"
                >
                  <a href="#">Set up your service</a>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="group text-foreground hover:bg-foreground/20 flex h-fit w-fit items-center gap-2 rounded-xl px-6 py-3 text-center text-sm font-medium transition"
                >
                  <a href="#">
                    <div>See our guides</div>
                    <ArrowRight className="stroke-foreground h-[0.875rem]! w-[0.875rem]! transition group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mt-4 text-xs">
                Free until your first subscriber
              </p>
            </div>
            <div className="max-w-[32rem]">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Easily accept payments, manage tasks, communicate with clients,
                and deliver top-notch service—all through your personalized
                client portal.{' '}
                <span className="text-foreground font-medium">
                  Get started in under 5 minutes.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-32 h-[18.75rem] w-full md:h-[37.5rem]">
          <div className="absolute left-0 z-10 h-full min-w-[50rem] md:min-w-[100rem]">
            <div className="border-background h-full overflow-hidden rounded-xl border">
              <AspectRatio ratio={2.666666667 / 1}>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-8-wide.svg"
                  alt=""
                  className="w-full object-cover object-top md:border-0"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-full w-full">
            <div className="flex h-full w-full blur-[180px]">
              <div className="flex-1 -translate-x-[55%]">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-teal-200"
                />
              </div>
              <div className="flex-1 -translate-y-[33%]">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-orange-300"
                />
              </div>
              <div className="flex-1">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-cyan-300"
                />
              </div>
              <div className="flex-1 -translate-y-[20%]">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-purple-300"
                />
              </div>
              <div className="flex-1">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-pink-200"
                />
              </div>
              <div className="flex-1 -translate-y-[23%]">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-red-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero138 };
