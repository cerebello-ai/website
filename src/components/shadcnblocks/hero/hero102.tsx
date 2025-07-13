import { ArrowRight, Megaphone } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero102 = () => {
  return (
    <section className="border-muted2 border-b bg-background pt-12 font-sans md:pt-20">
      <div className="container">
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-6">
          <div className="py-6">
            <Badge className="group w-fit rounded bg-muted px-4 py-1.5 hover:bg-muted">
              <a href="#" className="flex items-center gap-2">
                <Megaphone className="h-4 w-4 stroke-muted-foreground" />
                <p className="text-sm font-medium text-muted-2-foreground">
                  Announcing our new features
                </p>
                <ArrowRight className="h-4 w-4 stroke-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>
            </Badge>
          </div>
          <h1 className="text-center text-3xl leading-none font-bold text-foreground sm:text-5xl md:text-[56px]">
            Intuitive project management software
          </h1>
          <p className="text-center text-base text-muted-foreground sm:text-xl md:text-2xl">
            Our app empowers teams to identify priorities and dedicate time to
            what truly matters.
          </p>
          <div className="pt-4 md:pt-6">
            <Button
              asChild
              className="block h-fit w-fit rounded px-6 py-2 text-lg font-medium"
            >
              <a href="#">Get Started</a>
            </Button>
          </div>
        </div>
        <div className="w-full pt-12 md:pt-16">
          <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden">
            <AspectRatio ratio={2.100840336}>
              <div className="absolute top-0 left-0 h-full w-[95%] overflow-hidden rounded-tl-xl rounded-tr-xl border-t border-r border-l shadow-md">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt=""
                  className="h-full w-full object-cover object-top-left"
                />
              </div>
              <div className="absolute right-0 -bottom-[35%] z-20 w-[23%] overflow-hidden">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-1.png"
                  alt=""
                  className="relative z-20 h-full w-full"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
                  alt=""
                  className="absolute top-0 left-1/2 z-10 w-full -translate-x-1/2 rounded-[18px] md:rounded-[40px]"
                />
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero102 };
