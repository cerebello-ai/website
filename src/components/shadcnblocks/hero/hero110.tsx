import { Quote, Star } from 'lucide-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Hero110 = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container">
        <div className="flex flex-col gap-11 md:flex-row md:gap-8">
          <div className="flex flex-1 flex-col gap-9">
            <div>
              <div className="text-foreground mb-2 w-fit rounded-full border px-2 py-1 text-xs">
                Creating a more effective SaaS website
              </div>
              <h1 className="text-foreground text-[3.125rem] leading-[3.125rem] md:text-[4.25rem] md:leading-[4.25rem] lg:text-[5.5rem] lg:leading-[5.5rem]">
                Engage with customers intelligently.
              </h1>
            </div>
            <p className="text-muted-foreground max-w-[33.4rem] text-xl">
              Transform your digital presence with our comprehensive toolkit for
              SaaS and startup websites.
            </p>
            <div className="flex items-center gap-5">
              <Button
                asChild
                className="group block h-fit w-fit overflow-hidden rounded-full px-5 py-3 text-center text-base"
              >
                <a href="#">
                  <span className="block overflow-hidden">
                    <span
                      data-text="Get Started"
                      className="relative block text-nowrap transition-all group-hover:-translate-y-[110%] after:absolute after:top-[110%] after:left-0 after:h-full after:w-full after:content-[attr(data-text)]"
                    >
                      Get Started
                    </span>
                  </span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group block h-fit w-fit overflow-hidden rounded-full px-5 py-3 text-center text-base"
              >
                <a href="#">
                  <span className="block overflow-hidden">
                    <span
                      data-text="Features"
                      className="relative block text-nowrap transition-all group-hover:-translate-y-[110%] after:absolute after:top-[110%] after:left-0 after:h-full after:w-full after:content-[attr(data-text)]"
                    >
                      Features
                    </span>
                  </span>
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-[0.875rem]">
                <Avatar className="border-background flex h-12 w-12 shrink-0 rounded-full border-2 object-cover">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt=""
                  />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar className="border-background flex h-12 w-12 shrink-0 rounded-full border-2 object-cover">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp"
                    alt=""
                  />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <Avatar className="border-background flex h-12 w-12 shrink-0 rounded-full border-2 object-cover">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                    alt=""
                  />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <Avatar className="border-background flex h-12 w-12 shrink-0 rounded-full border-2 object-cover">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp"
                    alt=""
                  />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-black stroke-black" />
                  <Star className="h-4 w-4 fill-black stroke-black" />
                  <Star className="h-4 w-4 fill-black stroke-black" />
                  <Star className="h-4 w-4 fill-black stroke-black" />
                  <Star className="h-4 w-4 fill-black stroke-black" />
                </div>
                <p className="text-muted-foreground mt-2 text-xs">
                  Trusted by 2 Million users
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="w-full">
              <AspectRatio ratio={1.0730593607305936 / 1}>
                <div className="absolute top-0 left-0 w-[77%] overflow-hidden rounded-xl">
                  <AspectRatio ratio={0.9254498714652957 / 1}>
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt=""
                      className="block size-full object-cover object-center"
                    />
                  </AspectRatio>
                </div>
                <div className="absolute top-10 right-5 z-10 w-[40%] overflow-hidden rounded-xl shadow-2xl">
                  <AspectRatio ratio={1.103 / 1}>
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                      alt=""
                      className="block size-full object-cover object-center"
                    />
                  </AspectRatio>
                </div>
                <div className="absolute bottom-0 left-7 z-10 w-[32%] overflow-hidden rounded-xl shadow-2xl">
                  <AspectRatio ratio={0.8670520231213873 / 1}>
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                      alt=""
                      className="block size-full object-cover object-center"
                    />
                  </AspectRatio>
                </div>
              </AspectRatio>
            </div>
            <div className="border-muted2 mt-16 flex flex-col gap-4 rounded-lg border p-5 md:mt-14">
              <Quote className="fill-muted-foreground stroke-muted-foreground h-10 w-10" />
              <p className="text-muted-foreground text-xl">
                Our intuitive visual designer empowers you to effortlessly
                create stunning websites through simple drag and drop
                functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero110 };
