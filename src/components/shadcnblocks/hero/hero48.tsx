"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const trustedBy = [
  {
    name: "React",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark-white.svg",
  },
  {
    name: "Shadcn UI",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark-white.svg",
  },
  {
    name: "Supabase",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-white.svg",
  },
  {
    name: "Tailwind",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-white.svg",
  },
  {
    name: "Vercel",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark-white.svg",
  },
  {
    name: "React",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark-white.svg",
  },
  {
    name: "Shadcn UI",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark-white.svg",
  },
  {
    name: "Supabase",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-white.svg",
  },
  {
    name: "Tailwind",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-white.svg",
  },
  {
    name: "Vercel",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark-white.svg",
  },
];

const Hero48 = () => {
  return (
    <section className="bg-background dark pt-28 text-center">
      <div className="container relative mx-auto flex flex-col items-center">
        <h2 className="text-foreground mb-6 max-w-5xl text-4xl leading-none lg:text-[5.5rem]">
          Transform client insights into client delight
        </h2>
        <p className="text-foreground mb-10 max-w-4xl lg:text-lg">
          MyBusiness empowers multi-platform retail innovators seeking to craft
          personalized and dynamic consumer interactions during pivotal moments,
          seamlessly across all digital interfaces.
        </p>
        <div className="flex items-stretch justify-center gap-4 text-sm lg:text-base">
          <Button className="h-fit rounded border px-6 py-3.5">Try Free</Button>
          <Button
            variant="outline"
            className="text-foreground hover:bg-background/80 h-fit rounded border border-white bg-transparent px-6 py-3.5 hover:text-black"
          >
            Get in touch
          </Button>
        </div>
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[
            AutoScroll({
              speed: 1,
            }),
            Autoplay({
              playOnInit: true,
              delay: 1000,
            }),
          ]}
          className="before:bg-linear-to-r before:from-background after:bg-linear-to-l after:from-background absolute -bottom-32 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:to-transparent after:content-['']"
        >
          <CarouselContent className="items-center">
            {trustedBy.map((item, index) => (
              <CarouselItem
                key={`${item.name}-${index}`}
                className="w-fit basis-auto px-7"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-6 w-full object-fill lg:h-8"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="mx-auto mt-20 flex max-w-7xl justify-center overflow-hidden">
        <img
          className="w-full max-w-[600px] object-cover opacity-60 invert md:object-fill"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
          alt="background"
        />
      </div>
    </section>
  );
};

export { Hero48 };
