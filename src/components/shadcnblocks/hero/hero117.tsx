import { MoveRight } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero117 = () => {
  return (
    <section className="bg-background">
      <div className="container flex flex-col justify-between gap-10 py-12 lg:flex-row">
        <div className="flex flex-col items-start gap-6 lg:w-[45%]">
          <p className="flex items-center gap-2 text-lg font-medium text-foreground">
            <span>We raise a $10 million Series B</span>
            <MoveRight className="size-6" />
          </p>
          <h1 className="text-4xl font-semibold text-foreground md:text-6xl">
            Simplify Invoicing and Payments
          </h1>
          <p className="text-lg font-medium text-muted-foreground">
            Simplified invoice processing, revenue collection and cash flow
            enhancement, unified in a single user-friendly system for small to
            medium enterprises, financial advisors and ledger specialists
          </p>
          <div className="flex items-center gap-4 self-stretch">
            <Button className="h-fit max-w-52 flex-1 rounded-full px-6 py-3 text-lg">
              Get Started
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-base font-medium"
            >
              <span>Talk to sales</span>
              <MoveRight className="size-6!" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:max-w-[668px]">
          <AspectRatio ratio={1.374485597}>
            <div className="gird-cols-2 grid size-full grid-rows-2 gap-5">
              <div>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt=""
                  className="border-muted2 size-full rounded-xl border object-cover"
                />
              </div>
              <div className="col-start-2 row-span-2">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt=""
                  className="border-muted2 size-full rounded-xl border object-cover"
                />
              </div>
              <div>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                  alt=""
                  className="border-muted2 size-full rounded-xl border object-cover"
                />
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export { Hero117 };
