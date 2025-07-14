import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero92 = () => {
  return (
    <section className="bg-background flex flex-col items-center border-b px-9 pt-20 text-center md:px-12">
      <h1 className="text-foreground max-w-5xl text-4xl leading-tight tracking-tighter md:text-[80px]">
        <span className="text-muted-foreground font-semibold">
          Asset Compass{' '}
        </span>
        <span className="font-semibold">intelligent investment oversight</span>
      </h1>
      <div className="relative mt-10 w-full max-w-[1440px] md:mt-32">
        <div className="mx-auto w-full rounded-2xl rounded-b-none border-8 border-b-0 border-black md:rounded-[40px] md:rounded-b-none md:border-[25px] md:border-b-0">
          <AspectRatio ratio={1.647597254 / 1}>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt=""
              className="size-full rounded-3xl rounded-b-none object-cover"
            />
          </AspectRatio>
        </div>
        <div className="absolute -top-20 right-20 hidden w-[48%] max-w-[632px] overflow-hidden rounded-2xl border shadow-lg md:rounded-3xl lg:block">
          <AspectRatio ratio={1.654450262 / 1}>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt=""
              className="size-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export { Hero92 };
