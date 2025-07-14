'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { z } from 'zod';

import { CtaProps } from '@/components/shadcnblocks/types/common';
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

interface Cta22Props extends CtaProps {
  downloadTitle?: string;
  iosButtonText?: string;
  androidButtonText?: string;
  newsletterTitle?: string;
  newsletterDescription?: string;
  newsletterButtonText?: string;
  emailPlaceholder?: string;
  phoneImage?: string;
  phoneBackgroundImage?: string;
  onSubmit?: (values: { email: string }) => void;
}

const Cta22 = ({
  downloadTitle = 'Download the notes app of tomorrow today.',
  iosButtonText = 'Download for iOS',
  androidButtonText = 'Download for Android',
  newsletterTitle = 'Subscribe to our weekly newsletter',
  newsletterDescription = 'Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit phasellus.',
  newsletterButtonText = 'Subscribe',
  emailPlaceholder = 'Enter your email',
  phoneImage = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png',
  phoneBackgroundImage = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg',
  onSubmit,
  className,
}: Cta22Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    if (onSubmit) {
      onSubmit(values);
    } else {
      console.log(values);
    }
  }

  return (
    <section className={className || 'py-32'}>
      <div className="container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="dark bg-background relative h-[350px] overflow-hidden rounded-xl text-white md:col-span-2">
            <div className="flex h-full flex-row p-4 sm:p-8 md:p-12">
              <div className="relative z-10 w-full self-center px-2 text-center sm:w-auto sm:flex-1 sm:px-0 md:text-left">
                <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-2xl md:text-3xl">
                  {downloadTitle}
                </h1>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
                  <Button>
                    <FaApple />
                    <span>{iosButtonText}</span>
                  </Button>
                  <Button variant="outline" className="border border-white">
                    <FaGooglePlay />
                    <span>{androidButtonText}</span>
                  </Button>
                </div>
              </div>
              {/* Phone section */}
              <div className="relative z-10 hidden md:block">
                <div className="absolute top-0 left-1/2 h-[120%] w-[69%] -translate-x-1/2 overflow-hidden rounded-t-[32px]">
                  <img
                    src={phoneBackgroundImage}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-10 h-[350px] overflow-hidden">
                  <img
                    className="h-[600px] w-auto max-w-none"
                    src={phoneImage}
                    width={340}
                    height={600}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted hidden h-[350px] items-center justify-center rounded-xl p-6 sm:flex sm:p-8 md:p-12">
            <div className="w-full">
              <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
                {newsletterTitle}
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                {newsletterDescription}
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="w-full"
                >
                  <div className="space-y-4">
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
                              placeholder={emailPlaceholder}
                              className="bg-background w-full focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      {newsletterButtonText}{' '}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta22 };
