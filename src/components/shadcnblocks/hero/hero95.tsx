import { Button } from "@/components/ui/button";

const Hero95 = () => {
  return (
    <section className="bg-background py-12 md:pt-24">
      <div className="container">
        <div className="flex flex-col items-center gap-7">
          <div className="mb-12 max-w-3xl">
            <h1 className="text-foreground pb-6 text-center text-5xl font-semibold leading-none md:text-6xl md:leading-tight">
              Kickstart your career in digital marketing
            </h1>
            <p className="text-muted-foreground pb-10 text-center text-2xl leading-tight">
              Build the experience, guidance, and support essential to launching
              your career in digital marketing.
            </p>
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
              <Button
                asChild
                className="h-fit rounded-lg px-6 py-4 text-xl font-medium leading-normal"
              >
                <a href="#">Begin Your Career</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-fit rounded-lg px-6 py-4 text-xl font-medium leading-normal"
              >
                <a href="#">Discover Talent</a>
              </Button>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="relative h-[524px] w-full max-w-[1000px]">
            {/* Left Image with Background */}
            <div className="absolute left-0 top-2">
              <div className="bg-background relative ml-[24px] mt-[24px] h-[351px] w-[261px] overflow-hidden rounded-[20px]">
                <div className="relative h-full w-full">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    alt="Profile image"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Middle Image with Background */}
            <div className="absolute left-1/2 top-[70px] -translate-x-1/2">
              <div className="bg-background relative h-[430px] w-[319px] overflow-hidden rounded-[20px]">
                <div className="relative h-full w-full">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="Profile image"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Image with Background */}
            <div className="absolute right-0 top-[33px]">
              <div className="bg-background relative h-[351px] w-[261px] overflow-hidden rounded-[20px]">
                <div className="relative h-full w-full">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    alt="Profile image"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero95 };
