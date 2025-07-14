import { Button } from '@/components/ui/button';

const Hero139 = () => {
  return (
    <section className="dark bg-background relative isolate h-screen overflow-hidden px-6 pt-14 lg:px-8">
      <div className="relative container h-full">
        <div className="mx-auto max-w-3xl py-24 pt-48 text-center">
          <span className="border-muted-foreground/20 bg-muted/80 text-muted-foreground rounded-full border px-3 py-1 text-sm">
            Introducing
          </span>
          <h1 className="text-foreground text-4xl font-bold tracking-tighter sm:text-8xl">
            Unleash your data with insights
          </h1>
          <p className="text-muted-foreground mt-6 mb-14 text-lg leading-8">
            Where creativity meets functionality. Unleash the potential of your
            ideas with cutting-edge strategies and flawless execution.
          </p>
          <Button
            asChild
            className="h-fit rounded-lg px-10 py-4 text-base font-semibold shadow-sm"
          >
            <a href="#">Contact us</a>
          </Button>
          <p className="text-muted-foreground relative px-4 py-1.5 pt-44 text-sm leading-6">
            Trusted by the fastest-growing healthtech companies
          </p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt=""
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-5 w-full object-contain lg:col-span-1"
            />
            <img
              alt=""
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt=""
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt=""
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt=""
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-white.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero139/tree_patterns/lines.svg"
            alt=""
            className="pointer-events-none absolute inset-0 bottom-0 -z-10 h-full w-full opacity-10"
          />
        </div>
      </div>
      <div className="bg-muted/70 absolute right-0 -bottom-1/2 left-0 -z-10 m-auto h-[820px] w-[1440px] animate-pulse rounded-full blur-[100px]"></div>
    </section>
  );
};

export { Hero139 };
