import { Boxes } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero61 = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-start gap-5 lg:mx-auto lg:w-[90%] lg:gap-9">
          <Badge className="flex h-9 items-center gap-2 rounded-full bg-muted px-3 text-sm text-muted-foreground hover:bg-muted">
            <Boxes className="size-5 stroke-[1.5px]" />
            <span>Collaborative Hub</span>
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold text-foreground lg:text-7xl">
            Centralize your group's projects and tasks
          </h1>
          <div className="flex flex-col items-start justify-between gap-5 self-stretch lg:flex-row lg:items-center">
            <p className="max-w-xl text-foreground lg:text-lg">
              Assembler enables quick development of client dashboards, contact
              management systems, in-house utilities, and various business
              solutions for your staff. Accomplish in moments what traditionally
              takes months.
            </p>
            <Button className="h-fit rounded-full px-7 py-4">
              Begin at no cost
            </Button>
          </div>
        </div>
        <div className="relative mb-20">
          <div className="absolute -bottom-1/4 left-1/2 z-20 w-full max-w-[85%] -translate-x-1/2 overflow-hidden rounded-xl shadow-2xl md:rounded-3xl">
            <AspectRatio ratio={1.577777778 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt=""
                className="size-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="relative z-10 overflow-hidden rounded-xl md:rounded-3xl">
            <AspectRatio ratio={2.226666667 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-MaVm_A0xhKk-unsplash.jpg"
                alt=""
                className="size-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero61 };
