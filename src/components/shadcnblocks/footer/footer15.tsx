'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Badge } from '@/components/ui/badge';
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

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: '#',
  },
  {
    icon: Linkedin,
    href: '#',
  },
  {
    icon: Facebook,
    href: '#',
  },
  {
    icon: Twitter,
    href: '#',
  },
];

const NAVIGATION = [
  {
    title: 'Platform',
    links: [
      { name: 'Overview', href: '#' },
      { name: 'Use Cases', href: '#' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { name: 'Team', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Legal', href: '#' },
      { name: 'Security', href: '#' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { name: 'Tutorials', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Quickstart', href: '#' },
    ],
  },
];

const NewsletterFrom = () => {
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
        <div className="flex items-start gap-3">
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
                      className="placeholder-muted-foreground block h-9 w-full border bg-inherit p-7 text-lg placeholder:text-lg"
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>
          <div className="shrink-0">
            <Button
              type="submit"
              className="border-muted h-14 w-14 rounded-lg border"
              size="icon"
              variant="secondary"
            >
              <ArrowRight className="stroke-foreground size-6" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

const Footer15 = () => {
  return (
    <section className="dark bg-background py-32">
      <footer className="container flex flex-col gap-32">
        <div className="flex w-full flex-col justify-between gap-y-24 lg:flex-row">
          <div className="flex shrink-0 grow-0 basis-auto flex-col items-start justify-start gap-6">
            {/* Logo */}
            <a href="https://shadcnblocks.com">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark-white.svg"
                alt="Shadcnblocks"
                title="Shadcnblocks"
                className="h-10"
              />
            </a>
            <p className="text-muted-foreground w-full max-w-54 text-base leading-normal md:text-lg">
              Enhance and tailor your digital experiences effortlessly, at
              scale.
            </p>
            <div className="flex w-full items-center justify-start gap-7">
              {SOCIAL_LINKS.map((item, i) => (
                <a
                  href={item.href}
                  key={`social-link-${i}`}
                  className="flex size-6 opacity-100 transition-opacity hover:opacity-50"
                >
                  <item.icon className="stroke-foreground m-auto size-full" />
                </a>
              ))}
            </div>
            <div className="pt-6">
              <Badge className="border-muted bg-background text-foreground rounded-full p-0">
                <a href="#" className="flex items-center gap-2 px-3 py-2">
                  <div className="relative size-[0.4375rem]">
                    <span className="absolute top-1/2 left-1/2 z-10 size-[0.6875rem] -translate-1/2 animate-pulse rounded-full bg-green-400/50" />
                    <span className="absolute top-1/2 left-1/2 z-20 size-full -translate-1/2 rounded-full bg-green-500" />
                  </div>
                  <div className="text-[0.9375rem] leading-none font-normal">
                    All systems operational
                  </div>
                </a>
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <nav className="flex flex-wrap gap-24 md:gap-40">
              {NAVIGATION.map((section, _) => (
                <div
                  key={section.title}
                  className="flex flex-col items-start justify-start gap-6"
                >
                  <p className="text-foreground text-sm font-semibold md:text-base">
                    {section.title}
                  </p>
                  {section.links.map((link, _) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-foreground text-sm leading-none font-medium opacity-50 transition-opacity hover:opacity-100 md:text-base"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
            <div className="flex w-full flex-col flex-wrap justify-between gap-x-4 gap-y-4 md:flex-row md:gap-y-0">
              <p className="text-foreground w-full text-base leading-normal font-medium md:w-auto md:max-w-56 md:text-lg">
                Sign up for tailored insights and updates!
              </p>
              <div className="flex-1">
                <NewsletterFrom />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-4 md:flex-row">
          <div className="text-muted-foreground text-sm font-medium">
            © 2025 shadcnblocks.com
          </div>
          <div className="text-muted-foreground text-sm font-medium">
            Made with ♥️ in California
          </div>
        </div>
      </footer>
    </section>
  );
};

export { Footer15 };
