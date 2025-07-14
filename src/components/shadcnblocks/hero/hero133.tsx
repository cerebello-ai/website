'use client';
import { zodResolver } from '@hookform/resolvers/zod';
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
        <div className="flex max-w-[430px] items-start space-x-2 pt-8">
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
                    placeholder="email@example.com"
                    className="h-fit rounded-md bg-gray-50 px-8 py-5 focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="h-fit rounded-md border border-black bg-black px-8 py-5 text-white focus:border-none"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </Form>
  );
}

const Hero133 = () => {
  const stats = [
    { id: 1, name: 'In annual returns', value: '238k' },
    { id: 2, name: 'Rated agency', value: '#1' },
    { id: 3, name: 'In annual returns', value: '238k' },
    { id: 4, name: 'Rated agency', value: '#1' },
  ];
  return (
    <section className="bg-background relative isolate overflow-hidden">
      <svg
        aria-hidden="true"
        className="stroke-muted2 absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:flex lg:px-8 lg:pt-40 lg:pb-12">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:shrink-0 lg:pt-8">
          <h1 className="text-foreground mt-10 text-4xl font-semibold tracking-tight sm:text-8xl">
            Security for your <span className="bg-muted-2">digital</span>{' '}
            accounts.
          </h1>
          <p className="text-foreground mt-6 text-xl leading-8">
            Experience the next-generation of landing page solutions.
          </p>
          <HeroFrom />
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl">
            <img
              alt=""
              height={700}
              width={700}
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/incut-crypto-transactions-and-trading-on-a-mobile-device.svg"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pb-32 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex max-w-xs flex-col gap-y-4">
              <dt className="text-muted-foreground pl-4 text-base leading-7">
                {stat.name}
              </dt>
              <dd className="border-foreground text-foreground order-first border-l-2 border-dotted pl-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export { Hero133 };
