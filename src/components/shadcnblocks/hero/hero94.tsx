import { Check, MoveRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Hero94 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <span className="text-muted-foreground text-sm font-semibold md:text-xl">
            DECOUPLED CONTENT PLATFORM, PERFECTED
          </span>
          <h1 className="text-foreground mt-7 max-w-5xl text-5xl font-semibold tracking-tighter md:text-6xl lg:text-7xl">
            In essence, the ultimate, and high-speed{' '}
            <span className="relative">
              <span className="relative z-10 whitespace-nowrap">
                Content System
              </span>
              <span className="bg-muted-2 absolute bottom-0 left-0 h-1/3 w-full"></span>
            </span>
          </h1>
          <p className="text-foreground mt-14 max-w-4xl text-lg md:text-xl lg:text-2xl">
            This next-generation platform powers contemporary digital
            experiences. Over 25,000 organizations leverage this centralized
            solution to produce and distribute web content through APIs,
            enabling seamless scalability.
          </p>
          <div className="mt-14 flex flex-col items-stretch gap-2.5 font-semibold md:text-2xl lg:flex-row">
            <Button className="h-fit rounded px-8 py-5 text-2xl font-semibold">
              Sign up for free
            </Button>
            <Button
              variant="outline"
              className="flex h-fit items-center gap-2 rounded px-8 py-5 text-2xl font-semibold"
            >
              <span>Learn more</span>
              <MoveRight className="size-6!" />
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-5 text-sm">
            <div className="flex items-center gap-1">
              <Check className="stroke-foreground size-4" />
              <span className="text-foreground">No credit card</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="stroke-foreground size-4" />
              <span className="text-foreground">Easy setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero94 };
