import { MoveRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Hero140 = () => {
  return (
    <section className="font-albert_sans dark">
      <div className="bg-background pb-12 md:px-8">
        <div className="flex min-h-[54.375rem] w-full flex-col items-center justify-between rounded-[4rem] bg-[url(https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-MaVm_A0xhKk-unsplash.jpg)] bg-cover bg-top-left bg-no-repeat px-8 xl:h-svh">
          <div className="mx-auto flex max-w-[23.75rem] flex-col items-center gap-6 pt-40 md:max-w-[34.375rem]">
            <div className="pb-2">
              <div className="bg-background/60 flex w-fit items-center gap-4 rounded-full px-4 py-2">
                <Badge className="bg-background rounded-full px-2 text-xs leading-none! font-medium text-black md:text-sm">
                  New
                </Badge>
                <a
                  href="#"
                  className="text-foreground group flex w-fit items-center gap-2 text-xs font-medium md:text-sm"
                >
                  <p className="group-hover:underline">
                    Check Out Our New Projects
                  </p>
                  <MoveRight className="stroke-foreground h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <h1 className="text-foreground text-center text-4xl leading-none font-bold md:text-[3.5rem]">
              Launch with ease, Scale with no limits
            </h1>
            <div className="max-w-[30rem] pb-2">
              <p className="text-foreground text-center text-sm md:text-base">
                Wave goodbye to deployment headaches. Our service lets you bring
                your coding brilliance to life quickly and effortlessly.
              </p>
            </div>
            <Button
              asChild
              className="block h-fit w-fit rounded-full px-9 py-3 text-sm font-bold"
            >
              <a href="#">Get Started</a>
            </Button>
          </div>
          <div className="max-w-[80rem] pt-20 pb-20 md:pt-40">
            <p className="text-foreground text-center text-base font-medium">
              Empowering brilliant teams to create greatness
            </p>
            <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-10">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-1.svg"
                alt=""
                className="h-7 w-auto object-contain object-center px-8 md:h-8"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-2.svg"
                alt=""
                className="hidden h-7 w-auto object-contain object-center px-8 sm:block md:h-8"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-3.svg"
                alt=""
                className="hidden h-7 w-auto object-contain object-center px-8 sm:block md:h-8"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-4.svg"
                alt=""
                className="hidden h-7 w-auto object-contain object-center px-8 sm:block md:h-8"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-5.svg"
                alt=""
                className="hidden h-7 w-auto object-contain object-center px-8 sm:block md:h-8"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-6.svg"
                alt=""
                className="hidden h-7 w-auto object-contain object-center px-8 sm:block md:h-8"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-7.svg"
                alt=""
                className="hidden h-7 w-auto object-contain object-center px-8 sm:block md:h-8"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-8.svg"
                alt=""
                className="hidden h-7 w-auto object-contain object-center px-8 sm:block md:h-8"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-9.svg"
                alt=""
                className="hidden h-7 w-auto object-contain object-center px-8 sm:block md:h-8"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-10.svg"
                alt=""
                className="hidden h-7 w-auto object-contain object-center px-8 sm:block md:h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero140 };
