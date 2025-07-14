import { ArrowRight } from 'lucide-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

const Hero65 = () => {
  return (
    <section className="to-muted2 from-muted bg-linear-to-b pt-16 text-center">
      <div className="container mx-auto flex max-w-3xl flex-col items-center">
        <h1 className="text-foreground [&>span]:bg-foreground [&>span]:text-background text-4xl leading-normal font-bold md:text-5xl md:leading-relaxed lg:text-6xl lg:leading-[1.5] [&>span]:p-1">
          Create solutions for <span>humans</span> not <span>statistics</span>
        </h1>
        <p className="text-foreground mt-6 text-lg md:text-2xl">
          Query anything about your platform—InsightPro AI analyzes your
          customer journey and provides strategic suggestions to help you
          achieve your objectives.
        </p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-8 md:flex-row">
          <Button className="h-fit w-full rounded-lg px-8 py-4 text-base font-semibold sm:w-[70%] md:w-auto">
            Schedule a showcase
          </Button>
          <Button
            asChild
            variant="link"
            className="border-foreground flex h-fit items-center gap-1.5 rounded-none border-b-2 p-0 text-base font-semibold hover:no-underline"
          >
            <a href="#">
              <span>Start at no cost</span>
              <ArrowRight className="size-4!" />
            </a>
          </Button>
        </div>
        <div className="border-muted2 mx-auto mt-8 w-full max-w-[700px] overflow-hidden rounded-t-lg border">
          <AspectRatio ratio={1.547252747 / 1}>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt=""
              className="size-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export { Hero65 };
