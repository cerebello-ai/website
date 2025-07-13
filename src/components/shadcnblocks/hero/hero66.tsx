import { Calendar } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hero66 = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto flex flex-col items-center gap-14 py-10 text-center lg:py-44">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-small.svg"
          alt=""
          className="size-14 rounded-full shadow-xl"
        />
        <div className="flex max-w-4xl flex-col items-center gap-4">
          <h1 className="text-4xl text-foreground lg:text-6xl">
            Outstanding Web Presence for High-Growth Ventures
          </h1>
          <p className="font-light text-foreground">
            Attract prospects and differentiate yourself with a cutting-edge
            Construct website that aligns with your company vision and
            communicates effectively, quickly and effortlessly
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <Button className="flex h-fit items-center gap-3 rounded-full px-7 py-3 text-base">
            <Calendar className="size-5!" />
            <span>Schedule a consultation</span>
          </Button>
          <div className="flex flex-col gap-2">
            <div className="flex -space-x-1">
              <Avatar className="size-8 rounded-full border border-muted object-cover">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar className="size-8 rounded-full border border-muted object-cover">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
                <AvatarFallback>B</AvatarFallback>
              </Avatar>

              <Avatar className="size-8 rounded-full border border-muted object-cover">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <Avatar className="size-8 rounded-full border border-muted object-cover">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp" />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <Avatar className="size-8 rounded-full border border-muted object-cover">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp" />
                <AvatarFallback>E</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-xs text-muted-foreground">
              Endorsed by market pioneers
            </span>
          </div>
        </div>
      </div>
      <div className="relative container mx-auto max-w-7xl">
        <div className="contents overflow-hidden rounded-[34px] border-8 border-black bg-neutral-600 p-12 lg:block">
          <AspectRatio
            ratio={1.348314607 / 1}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              className="size-full object-cover"
              alt=""
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export { Hero66 };
