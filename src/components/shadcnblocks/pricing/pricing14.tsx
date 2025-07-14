import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Pricing14 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="bg-muted mx-auto max-w-5xl rounded-lg p-6 md:p-10">
          <div className="mb-12 flex items-center gap-3">
            <span className="text-2xl font-bold">Standard Plan</span>
            <Badge
              variant="outline"
              className="border-green-200 bg-green-100 text-green-600"
            >
              20% off
            </Badge>
          </div>
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <h2 className="max-w-xl text-3xl font-bold md:text-4xl">
              Launch your idea in minutes with this plan
            </h2>
            <div className="md:text-right">
              <span className="text-3xl font-bold md:text-5xl">$1999</span>
              <p className="text-muted-foreground">
                Starting price per project
              </p>
            </div>
          </div>
          <Separator className="my-8" />
          <div>
            <p className="text-muted-foreground mb-5">
              Launch your project with the following features:
            </p>
            <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-20">
              <ul className="grid gap-x-20 gap-y-4 font-medium md:grid-cols-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4" />
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4" />
                  Live chat support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4" />
                  Live Collaboration
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4" />
                  Custom domain
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4" />
                  Unlimited users
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4" />
                  Unlimited storage
                </li>
              </ul>
              <div className="flex flex-col gap-4">
                <Button size="lg">Book a demo</Button>
                <Button variant="outline" size="lg">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing14 };
