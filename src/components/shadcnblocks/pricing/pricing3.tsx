'use client';

import { useState } from 'react';

import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const Pricing3 = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-bold text-pretty lg:text-6xl">
            Our affordable pricing
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            Check out our pricing plans to find the best fit for you.
          </p>
          <div className="mt-10 flex items-center gap-3 font-medium">
            <Switch
              onCheckedChange={() => setIsYearly(!isYearly)}
              checked={isYearly}
            />
            Annual billing
          </div>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex flex-col justify-between gap-10 rounded-lg border p-6">
              <div>
                <p className="mb-2 text-lg font-semibold">Basic Plan</p>
                <p className="mb-4 text-4xl font-semibold">$0</p>
                <p className="text-muted-foreground text-sm">
                  Ideal for individuals getting started with our service. No
                  credit card required.
                </p>
              </div>
              <Button variant="outline" className="w-full">
                Start for Free
              </Button>
            </div>
            <ul className="mt-8 px-6">
              <li className="flex gap-2">
                <Check className="w-4" />
                <p className="text-muted-foreground text-sm">
                  <span className="text-primary mr-1 font-semibold">
                    Limited access to features:
                  </span>
                  3 users, 1 project, 1GB storage
                </p>
              </li>
              <Separator className="my-4" />
              <li className="flex gap-2">
                <Check className="w-4" />
                <p className="text-muted-foreground text-sm">
                  <span className="text-primary mr-1 font-semibold">
                    Basic support:
                  </span>
                  Email support only for 30 days after signup
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col justify-between gap-10 rounded-lg border p-6">
              <div>
                <p className="mb-2 text-lg font-semibold">Standard Plan</p>
                <p className="mb-4 text-4xl font-semibold">
                  {isYearly ? '$199' : '$20'}
                  <span className="text-muted-foreground ml-1 text-sm font-normal">
                    per user
                  </span>
                </p>
                <p className="text-muted-foreground text-sm">
                  Perfect for small businesses looking to grow. Start with a
                  30-day free trial.
                </p>
              </div>
              <Button className="w-full">Try for Free</Button>
            </div>
            <ul className="mt-8 px-6">
              <li className="flex gap-2">
                <Check className="w-4" />
                <p className="text-muted-foreground text-sm">
                  <span className="text-primary mr-1 font-semibold">
                    Access to all standard features:
                  </span>
                  10 users, 5 projects, 5GB storage
                </p>
              </li>
              <Separator className="my-4" />
              <li className="flex gap-2">
                <Check className="w-4" />
                <p className="text-muted-foreground text-sm">
                  <span className="text-primary mr-1 font-semibold">
                    Priority support:
                  </span>
                  Email and phone support for 30 days after signup
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col justify-between gap-10 rounded-lg border p-6">
              <div>
                <p className="mb-2 text-lg font-semibold">Premium Plan</p>
                <p className="mb-4 text-4xl font-semibold">Custom</p>
                <p className="text-muted-foreground text-sm">
                  Best for large organizations with advanced needs. Contact us
                  for a custom quote.
                </p>
              </div>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
            <ul className="mt-8 px-6">
              <li className="flex gap-2">
                <Check className="w-4" />
                <p className="text-muted-foreground text-sm">
                  <span className="text-primary mr-1 font-semibold">
                    Dedicated support:
                  </span>
                  24/7 email and phone support
                </p>
              </li>
              <Separator className="my-4" />
              <li className="flex gap-2">
                <Check className="w-4" />
                <p className="text-muted-foreground text-sm">
                  <span className="text-primary mr-1 font-semibold">
                    Custom integrations:
                  </span>
                  Tailored to your organization&apos;s needs
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing3 };
