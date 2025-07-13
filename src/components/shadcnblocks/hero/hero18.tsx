import { Button } from "@/components/ui/button";

const Hero18 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
          Welcome to Our Website
        </h1>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
          doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.
          Explicabo.
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
          <Button className="w-full sm:w-auto">Primary</Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Secondary
          </Button>
        </div>
      </div>
      <div className="mt-12 aspect-video overflow-clip sm:mt-32 md:aspect-auto md:h-[420px]">
        <div className="relative mx-auto flex max-w-3xl flex-col">
          {/* Left icons */}
          <div className="absolute top-0 right-[calc(100%+63px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[52px] right-[calc(100%+195px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[144px] right-[calc(100%+34px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[164px] right-[calc(100%+268px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[240px] right-[calc(100%+156px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[340px] right-[calc(100%+242px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[366px] right-[calc(100%+66px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          {/* Right icons */}
          <div className="absolute top-0 left-[calc(100%+53px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[34px] left-[calc(100%+202px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[141px] left-[calc(100%+97px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[138px] left-[calc(100%+282px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[262px] left-[calc(100%+42px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[282px] left-[calc(100%+234px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          <div className="absolute top-[365px] left-[calc(100%+112px)] hidden size-[64px] rounded-2xl bg-accent ring-1 ring-accent-foreground/10 ring-inset md:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover object-center p-3"
            />
          </div>
          {/* Hero images */}
          <div className="container mx-auto">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder hero"
              className="mt-6 flex aspect-square w-full flex-col items-center overflow-clip rounded-xl border border-border bg-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero18 };
