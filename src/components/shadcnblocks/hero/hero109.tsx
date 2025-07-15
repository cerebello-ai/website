import { CreditCard, MoveRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Hero109 = () => {
  return (
    <section className="bg-background mt-10 overflow-hidden max-lg:pt-10">
      <div className="container mx-auto flex items-center justify-between gap-2 max-lg:flex-col-reverse max-lg:text-center lg:-mt-20 lg:gap-36 xl:-mt-36">
        {/* Left Side */}
        <div className="relative z-10 mt-10 w-full max-w-[440px] translate-y-1/4 sm:mt-0">
          {/* Image insice iphone */}
          <div className="absolute top-0 left-1/2 w-[75%] -translate-x-1/2 overflow-hidden rounded-[50px] sm:rounded-[75px]">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
              alt=""
              className="size-full object-cover"
            />
          </div>
          {/* Iphone Image  */}
          <img
            className="relative z-10 h-auto w-full"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png"
            alt=""
          />
          <div className="bg-background absolute top-[42%] -right-12 z-20 flex w-72 flex-col gap-3 rounded-2xl p-8 text-start shadow-2xl max-lg:w-52 max-lg:p-5">
            <div className="flex items-center gap-2">
              <CreditCard className="stroke-foreground max-xl:size-7 max-lg:size-5" />

              <span className="text-foreground text-sm font-semibold lg:text-lg xl:text-2xl">
                Worldwide
              </span>
            </div>
            <p className="text-foreground text-xs lg:text-base xl:text-lg">
              Access your debit card anywhere in the world.
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="-mb-36 flex flex-col gap-6 max-lg:items-center lg:w-[53%]">
          <span className="text-muted-foreground text-sm font-semibold">
            #1 Fintech App
          </span>
          <h1 className="bg-[linear-gradient(282deg,var(--color-muted-foreground)_0%,var(--color-foreground)_100%)] bg-clip-text text-[60px] leading-[1em] font-semibold tracking-tighter text-transparent lg:text-[76px] xl:text-[110px]">
            Own Your Finances
          </h1>
          <p className="text-muted-foreground max-w-lg text-lg">
            Seamlessly manage your finances with our intuitive platform.
            Experience the future of banking with tools designed for you.
          </p>
          <Button className="group relative mt-5 h-fit overflow-hidden rounded-xl border-none px-6 py-5 max-lg:px-5 max-lg:py-3.5 lg:self-start">
            <div className="relative z-10 flex items-center gap-2.5 text-base">
              <span>Start Your Free Trial Today</span>
              <MoveRight size={18} />
            </div>
            {/* hover effect */}
            <div className="bg-primary absolute -bottom-16 -left-16 aspect-square w-16 rounded-full transition-all duration-300 group-hover:bottom-1/2 group-hover:-left-5 group-hover:w-[110%] group-hover:translate-y-1/2"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero109 };
