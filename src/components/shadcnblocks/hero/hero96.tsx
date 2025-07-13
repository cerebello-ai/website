import { Button } from "@/components/ui/button";

const Hero96 = () => {
  return (
    <section className="overflow-hidden bg-background py-20 font-sans lg:pt-40">
      <div className="container max-w-[77.75rem] px-11 sm:px-16 md:px-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-7 pb-10 lg:max-w-[30rem]">
            <h1 className="text-3xl leading-snug font-semibold tracking-tighter text-foreground lg:text-4xl xl:text-5xl">
              Website performance monitoring service
            </h1>
            <p className="text-lg text-muted-foreground">
              Receive downtime alerts via phone call, SMS, email, or Slack if
              your website goes offline. Build stunning status pages and
              incident reports to keep your visitors informed.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="block h-fit rounded-md px-5 py-3 text-lg font-semibold"
              >
                <a href="#">Try for Free</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="block h-fit rounded-md px-5 py-3 text-lg font-semibold"
              >
                <a href="#">Pricing</a>
              </Button>
            </div>
            <p className="text-lg text-muted-foreground">
              No credit card required, seriously.
            </p>
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt=""
            className="border-muted2 top-0 left-1/2 w-full rounded-xl border lg:absolute lg:w-[93.75rem] lg:rotate-2 lg:skew-x-[-10deg] lg:skew-y-1"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero96 };
