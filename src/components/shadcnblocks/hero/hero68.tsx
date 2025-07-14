import { ArrowRight, DollarSign, Medal, Sparkle, Zap } from 'lucide-react';

import { HeroProps } from '../types/common';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AnnouncementBanner {
  badge: string;
  text: string;
  href: string;
}

interface ActionButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline';
  indicator?: 'green-dot' | 'avatar';
  avatarSrc?: string;
}

interface FeatureBenefit {
  icon: React.ReactNode;
  text: string;
}

interface Hero68Props extends Omit<HeroProps, 'benefits'> {
  announcement?: AnnouncementBanner;
  actionButtons?: ActionButton[];
  featureBenefits?: FeatureBenefit[];
  showSparkles?: boolean;
}

const Hero68 = ({
  announcement = {
    badge: 'New',
    text: 'v2.2 is out now!',
    href: '#',
  },
  title = 'Fast websites for startups',
  description = "We craft powerful websites to accelerate your startup's growth.",
  actionButtons = [
    {
      text: 'Start your free trial',
      href: '#',
      variant: 'default',
      indicator: 'green-dot',
    },
    {
      text: 'Schedule a demo',
      href: '#',
      variant: 'outline',
      indicator: 'avatar',
      avatarSrc:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    },
  ],
  featureBenefits = [
    {
      icon: <Zap className="w-5 lg:w-6" />,
      text: '2-4 week delivery',
    },
    {
      icon: <DollarSign className="w-5 lg:w-6" />,
      text: 'Upfront, no hidden fees',
    },
    {
      icon: <Medal className="w-5 lg:w-6" />,
      text: 'Full refund if not satisfied',
    },
  ],
  showSparkles = true,
}: Hero68Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="border-x border-t border-dashed px-4 py-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            {announcement && (
              <a
                href={announcement.href}
                className="bg-muted mx-auto mb-4 flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm"
              >
                <Badge>{announcement.badge}</Badge>
                {announcement.text}
                <ArrowRight className="inline size-4" />
              </a>
            )}
            <h1 className="my-4 mb-6 text-center text-3xl font-semibold lg:text-8xl">
              {title}
            </h1>
            {description && (
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-center lg:text-xl">
                {description}
              </p>
            )}
            {actionButtons && actionButtons.length > 0 && (
              <div className="flex flex-col justify-center gap-2 sm:flex-row">
                {actionButtons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant={button.variant}
                    className="w-full gap-2 sm:w-auto lg:mt-10"
                    asChild
                  >
                    <a href={button.href}>
                      {button.indicator === 'green-dot' && (
                        <div className="size-2 rounded-full bg-green-400"></div>
                      )}
                      {button.indicator === 'avatar' && button.avatarSrc && (
                        <Avatar className="ring-input size-8 rounded-full ring-1">
                          <AvatarImage
                            src={button.avatarSrc}
                            alt="Demo avatar"
                          />
                        </Avatar>
                      )}
                      {button.text}
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
        {featureBenefits && featureBenefits.length > 0 && (
          <div className="relative grid border-x border-dashed md:grid-cols-3">
            {showSparkles && (
              <>
                <Sparkle className="fill-primary absolute top-0 right-0 h-auto w-5 translate-x-2.5 -translate-y-2.5" />
                <Sparkle className="fill-primary absolute top-0 left-0 h-auto w-5 -translate-x-2.5 -translate-y-2.5" />
              </>
            )}
            {featureBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center gap-6 border-t border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg ${
                  index === 1 ? 'border-x' : ''
                }`}
              >
                <span className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-md text-sm lg:size-12 lg:text-base">
                  {benefit.icon}
                </span>
                {benefit.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Hero68 };
