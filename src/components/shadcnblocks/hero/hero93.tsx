import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Hero93 = () => {
  return (
    <section className="bg-background flex flex-col items-center px-4 py-28 text-center md:px-16">
      <h1 className="text-foreground max-w-7xl text-4xl leading-tight font-medium tracking-tighter md:text-5xl lg:text-[88px]">
        Company formation and{' '}
        <span className="font-serif font-normal">specialized financial</span>
        <span className="relative inline-block -space-x-[10%]">
          <Avatar className="border-muted inline-block size-14 rounded-full border-4 align-middle lg:size-24">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="border-muted inline-block size-14 rounded-full border-4 align-middle lg:size-24">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="border-muted inline-block size-14 rounded-full border-4 align-middle lg:size-24">
            <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </span>
        guidance for thriving enterprises
      </h1>
      <div className="mt-10 flex items-stretch gap-4">
        <Button className="h-fit rounded-full px-6 py-3 text-base font-medium lg:text-lg">
          Get Started
        </Button>
        <Button
          variant="outline"
          className="h-fit rounded-full px-6 py-3 text-base font-medium lg:text-lg"
        >
          Schedule a call
        </Button>
      </div>
      <div className="border-muted2 mt-16 w-full overflow-hidden rounded-2xl border">
        <AspectRatio ratio={1.454545455 / 1}>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt=""
            className="size-full object-cover"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export { Hero93 };
