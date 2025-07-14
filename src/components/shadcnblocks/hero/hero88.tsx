import { ArrowDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Hero88 = () => {
  return (
    <section className="font-dm_sans bg-background py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-20">
          <div>
            <div className="flex w-full flex-col gap-6">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="bg-linear-to-t from-green-500 to-green-300 bg-clip-text text-transparent">
                  Hi, we're Company
                </span>
                <br />
                <span className="text-black dark:text-white">
                  Transforming ideas into stunning digital experiences.
                </span>
              </h1>

              {/* Description */}
              <p className="text-muted-foreground text-xl sm:text-3xl">
                With over <b>20 years of expertise</b>, we specialize in
                crafting high-quality digital products that captivate your
                audience and drive business growth.
              </p>

              {/* Buttons and Links */}
              <div className="flex flex-col items-center gap-4 py-4 sm:flex-row">
                <Button className="w-full rounded-full px-8 py-6 text-lg font-bold sm:w-fit sm:px-12 sm:py-8">
                  Let's Collaborate
                </Button>
                <span className="text-muted-foreground text-lg sm:text-xl">
                  or explore our work
                </span>
                <ArrowDown className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero88 };
