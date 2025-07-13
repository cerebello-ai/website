import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero77 = () => {
  return (
    <section className="container mx-auto bg-background py-36 text-center">
      <div className="flex flex-col gap-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 pt-8 text-center md:px-6 lg:px-8 lg:pt-0">
          <h1 className="text-[clamp(2.1rem,7vw,4.2rem)] leading-[1.1] font-bold -tracking-[1.7px] text-balance text-foreground">
            Master message mayhem
          </h1>
          <h2 className="max-w-[48rem] text-[clamp(1.2rem,3.8vw,1.7rem)] leading-[1.4] font-medium tracking-tight text-balance text-foreground lg:text-wrap">
            Break free from workplace chatter clutter — accelerate progress with
            clearer, structured, and more meaningful team discussions
          </h2>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              asChild
              className="group relative inline-flex h-12 shrink-0 items-center justify-center rounded-full px-4.5 px-6! py-3 text-lg font-medium"
            >
              <a draggable="false" data-state="closed" href="#">
                <span className="relative z-2 flex items-center gap-2">
                  <span>Start for free</span>
                </span>
              </a>
            </Button>
            <p className="text-tertiary text-sm font-medium text-foreground">
              or
            </p>
            <Button
              variant="secondary"
              asChild
              className="group relative inline-flex h-12 shrink-0 items-center justify-center rounded-full px-6! text-lg font-medium"
            >
              <a
                draggable="false"
                data-state="closed"
                href="/switch-from-slack"
              >
                <span className="relative z-2 flex items-center gap-1.5">
                  <span className="inline-flex flex-none justify-center">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg"
                      alt=""
                      className="size-5"
                    />
                  </span>
                  <span>Switch from Slack</span>
                </span>
              </a>
            </Button>
          </div>
          <p className="text-quaternary text-sm font-normal">
            2-week test drive, no payment info needed
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-0 [&_img]:h-8 [&_img]:opacity-50">
            <div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-6 lg:px-8">
          <div className="w-full overflow-hidden rounded-2xl shadow-[0_0_0_0.5px_rgb(0_0_0/0.1)]">
            <AspectRatio ratio={4.4 / 3}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-MaVm_A0xhKk-unsplash.jpg"
                className="size-full object-cover"
                alt=""
              />
              <video
                preload="auto"
                draggable="false"
                className="absolute right-0 bottom-0 z-20 size-full object-cover lg:size-[90%] lg:rounded-tl-lg"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-4.mp4" type="video/mp4" />
              </video>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero77 };
