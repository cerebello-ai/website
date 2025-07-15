'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
  })
  .required({ email: true });

function HeroFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="relative mb-1 h-fit w-full max-w-[24rem]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    id="emailInput"
                    placeholder="Enter your mail"
                    className="block h-[50px] w-full rounded-full border py-3 pr-36 pl-4"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="absolute top-[5px] right-[6px] flex items-center justify-center gap-2 rounded-full py-2 pr-3 pl-4 text-center font-medium whitespace-nowrap"
          >
            <div>Start now</div>
            <ChevronRight />
          </Button>
        </div>
      </form>
    </Form>
  );
}

const Hero105 = () => {
  return (
    <section className="">
      <div className="relative min-h-[37.5rem] overflow-hidden pb-20">
        <div className="container mx-auto">
          <div className="mx-auto mt-36 grid max-w-[67.5rem] grid-cols-[repeat(1,1fr)] items-start pb-20 md:grid-cols-[repeat(2,1fr)]">
            <div className="flex w-full max-w-[33.75rem] flex-col gap-8">
              <h1 className="relative font-sans text-[4rem] leading-none font-semibold tracking-tighter sm:text-[4.5rem] md:text-[4.2rem] lg:text-[5rem] xl:text-[5.5rem]">
                <div className="relative z-20 text-black mix-blend-overlay">
                  Use tools to speed up your revenue growth
                </div>
                <div className="absolute top-0 left-0 z-10 text-black opacity-20">
                  Use tools to speed up your revenue growth
                </div>
              </h1>
              <div>
                <p className="text-muted-foreground text-lg leading-normal">
                  Join millions of businesses of all sizes using the service to
                  accept online and in-person payments, integrate financial
                  services, power unique revenue models, and build a more
                  profitable future.
                </p>
              </div>
              <div>
                <HeroFrom />
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative left-[9.375rem] mt-[3.75rem] h-[33.5rem] w-[16.875rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-4.png"
                  alt=""
                  className="absolute z-20 h-full w-full object-center drop-shadow-2xl"
                />
                <div className="absolute top-1/2 left-1/2 z-30 w-[15rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute top-0 left-[15.8rem] w-[66.8rem] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-8-wide.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <div className="bg-muted absolute top-0 left-0 h-full w-full -translate-y-[58%] -skew-y-12 transform bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero105/background.png')] bg-cover bg-center bg-no-repeat" />
        </div>
      </div>
      <div className="container mx-auto grid max-w-[67.5rem] grid-cols-1 grid-rows-[auto] items-center justify-items-center gap-x-5 gap-y-14 pb-14 sm:grid-cols-2 lg:grid-cols-4">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
          alt=""
          className="block w-40"
        />
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
          alt=""
          className="block w-40"
        />
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
          alt=""
          className="block w-40"
        />
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg"
          alt=""
          className="block w-40"
        />
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg"
          alt=""
          className="block w-40"
        />
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg"
          alt=""
          className="block w-40"
        />
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg"
          alt=""
          className="block w-40"
        />
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
          alt=""
          className="block w-40"
        />
      </div>
    </section>
  );
};

export { Hero105 };
