'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ChartBar,
  Files,
  ReceiptText,
  Sparkles,
  Timer,
  UserCircle,
} from 'lucide-react';
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

const HeroFrom = () => {
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
        <div className="border-muted2 relative mx-auto mt-8 w-full max-w-96 rounded-lg border">
          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      id="emailInput"
                      placeholder="Enter your email"
                      className="placeholder-muted-foreground block h-9 w-full border-none bg-inherit pr-[132px] pl-3"
                    />
                  </FormControl>
                  <FormMessage className="absolute -bottom-6 left-0 z-10 text-sm" />
                </FormItem>
              )}
            />
          </div>
          <div className="absolute top-1 right-3 z-10">
            <Button
              type="submit"
              className="h-7 rounded-md px-4 text-sm font-medium"
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

const Hero72 = () => {
  return (
    <section className="bg-background flex flex-col overflow-hidden border-b text-center">
      <div className="flex w-[90%] flex-col items-center self-center">
        <h1 className="text-foreground mt-16 max-w-5xl text-5xl font-semibold md:mt-20 lg:text-6xl">
          Your company's monetary command center
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
          Document organization, instant revenue/expense monitoring, and
          effortless accounting prep, enhanced by AI-driven search and sorting
          capabilities
        </p>
        <HeroFrom />
        <div className="m-auto mt-12 grid grid-cols-3 gap-[32px] md:grid-cols-6">
          <div className="w-[100px] text-center leading-tight">
            <div className="border-muted2 mb-2 flex h-[65px] w-[100px] items-center justify-center rounded-lg border">
              <UserCircle className="stroke-foreground h-6 w-6" />
            </div>
            <span className="text-muted-foreground text-sm">Open source</span>
          </div>
          <div className="w-[100px] text-center leading-tight">
            <div className="border-muted2 mb-2 flex h-[65px] w-[100px] items-center justify-center rounded-lg border">
              <ChartBar className="stroke-foreground h-6 w-6" />
            </div>
            <span className="text-muted-foreground text-sm">
              Live profit/loss
            </span>
          </div>
          <div className="w-[100px] text-center leading-tight">
            <div className="border-muted2 mb-2 flex h-[65px] w-[100px] items-center justify-center rounded-lg border">
              <Files className="stroke-foreground h-6 w-6" />
            </div>
            <span className="text-muted-foreground text-sm">Vault</span>
          </div>
          <div className="w-[100px] text-center leading-tight">
            <div className="border-muted2 mb-2 flex h-[65px] w-[100px] items-center justify-center rounded-lg border">
              <ReceiptText className="stroke-foreground h-6 w-6" />
            </div>
            <span className="text-muted-foreground text-sm">
              Receipt linking
            </span>
          </div>
          <div className="w-[100px] text-center leading-tight">
            <div className="border-muted2 mb-2 flex h-[65px] w-[100px] items-center justify-center rounded-lg border">
              <Timer className="stroke-foreground h-6 w-6" />
            </div>
            <span className="text-muted-foreground text-sm">Time tracking</span>
          </div>
          <div className="w-[100px] text-center leading-tight">
            <div className="border-muted2 mb-2 flex h-[65px] w-[100px] items-center justify-center rounded-lg border">
              <Sparkles className="stroke-foreground h-6 w-6" />
            </div>
            <span className="text-muted-foreground text-sm">
              AI-enhanced filter &amp; search
            </span>
          </div>
        </div>
      </div>
      <div className="relative mt-10 h-[500px] md:flex">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          className="-left-5 mx-auto h-[500px] w-[94%] rounded-xl rounded-br-none border border-b-0 object-cover object-[50%_0%] shadow-xl md:absolute md:mx-0 md:w-1/2 md:object-top-right"
          alt=""
        />
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          className="border-b-none absolute top-10 -right-5 hidden h-[500px] w-1/2 rounded-xl border object-cover object-top-left shadow-xl md:block"
          alt=""
        />
      </div>
    </section>
  );
};

export { Hero72 };
