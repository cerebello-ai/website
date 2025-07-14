import { Button } from '@/components/ui/button';

const Hero63 = () => {
  return (
    <section className="bg-muted/50 py-24 md:py-32">
      <div className="container mx-auto flex max-w-4xl flex-col gap-8 text-center lg:items-center">
        <div className="space-y-4">
          <h1 className="text-foreground text-4xl font-semibold tracking-tight md:text-5xl lg:text-7xl">
            Accounting Software, Streamlined for Efficiency
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg lg:text-xl">
            The quick, accurate, and hassle-free method to compensate your
            staff. Rapid payroll processing, transparent pricing, skilled
            assistance.
          </p>
        </div>

        <div className="mt-2">
          <Button className="h-fit rounded-xl px-8 py-3.5 text-base font-medium shadow-sm transition-all hover:shadow-md">
            Explore MyBusiness
          </Button>
        </div>

        <span className="text-muted-foreground/80 text-sm">
          Zero onboarding charge · Guaranteed smooth transition
        </span>

        <div className="relative mx-auto my-6 max-w-[650px]">
          {/* Illustrations from https://icons8.com/illustrations/style--journal */}
          <div className="relative">
            <div className="from-primary/5 absolute inset-0 -z-10 rounded-3xl bg-linear-to-br to-transparent opacity-70 blur-3xl"></div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-geolocation-signs-on-the-globe.svg"
              alt="Global payroll system visualization"
              className="mx-auto my-14 w-full max-w-[500px]"
            />
          </div>

          <div className="bg-background/95 absolute top-28 left-4 flex flex-col items-center gap-2.5 rounded-xl p-5 text-xs shadow-lg backdrop-blur-sm transition-all hover:shadow-xl lg:text-sm">
            {/* Check svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="size-8"
            >
              <path
                fill="#4caf50"
                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
              />
              <path
                fill="#fff"
                d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"
              />
            </svg>
            <p className="font-medium">Salary sorted</p>
            <div className="h-3 w-full rounded-full bg-gray-200/80"></div>
            <div className="h-3 w-[90%] rounded-full bg-gray-200/80"></div>
          </div>

          <div className="bg-background/95 absolute top-20 right-4 flex flex-col items-center gap-2.5 rounded-xl p-5 text-xs shadow-lg backdrop-blur-sm transition-all hover:shadow-xl lg:text-sm">
            <div className="flex items-center gap-2">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg"
                alt="slack"
                className="size-6"
              />
              <span className="font-medium whitespace-nowrap">
                Slack Integration
              </span>
            </div>
            <div className="bg-primary/10 text-primary w-full rounded-md p-1.5 text-xs font-medium">
              Approve
            </div>
          </div>

          <div className="bg-background/95 absolute top-6 right-24 flex items-center gap-2.5 rounded-xl p-4 text-xs shadow-lg backdrop-blur-sm transition-all hover:shadow-xl lg:text-sm">
            <div className="relative">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                alt="Profile of John Doe"
                className="border-muted size-8 rounded-full border object-cover"
              />
              <span className="absolute -right-1 -bottom-1 size-3 rounded-full border-2 border-white bg-green-500"></span>
            </div>
            <span className="font-medium">John Doe</span>
          </div>
        </div>

        <div className="mt-4 space-y-6">
          <p className="text-muted-foreground text-base font-medium">
            Preferred by industry leaders
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 [&_img]:h-5 [&_img]:max-w-none [&_img]:opacity-60 [&_img]:transition-opacity [&_img]:hover:opacity-90 lg:[&_img]:h-8">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
              alt="Partner company logo"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
              alt="Partner company logo"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
              alt="Partner company logo"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg"
              alt="Partner company logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero63 };
