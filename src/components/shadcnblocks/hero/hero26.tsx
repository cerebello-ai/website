import {
  ArrowRight,
  Blocks,
  MessagesSquare,
  MoveRight,
  Users,
} from 'lucide-react';

import { HeroProps } from '../types/common';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface InlineFeature {
  icon: React.ReactNode;
  text: string;
}

interface AnnouncementBanner {
  badge: string;
  text: string;
  href: string;
}

interface Hero26Props extends HeroProps {
  announcement?: AnnouncementBanner;
  inlineFeatures?: InlineFeature[];
  descriptionPrefix?: string;
  descriptionSuffix?: string;
  maxWidth?: string;
}

const Hero26 = ({
  announcement = {
    badge: 'NEW',
    text: 'Introducing Collaboration 2.0',
    href: '#',
  },
  title = 'Unlock the power of collaboration',
  inlineFeatures = [
    {
      icon: <Users className="mr-1 w-4 md:w-5" />,
      text: 'Teams',
    },
    {
      icon: <Blocks className="mr-1 w-5" />,
      text: 'Collaborate,',
    },
    {
      icon: <MessagesSquare className="mr-1 w-5" />,
      text: 'Communicate,',
    },
  ],
  descriptionPrefix = 'Collaboration 2.0 is the ultimate platform for',
  descriptionSuffix = 'and achieve their goals. Get a head start with our free plan. No credit card required.',
  buttons = [
    { text: 'Get started for free', href: '#', variant: 'primary' },
    { text: 'Learn more', href: '#', variant: 'ghost' },
  ],
  maxWidth = 'max-w-3xl',
}: Hero26Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          {announcement && (
            <a
              href={announcement.href}
              className="mx-auto mb-3 inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm"
            >
              <Badge className="rounded-full">{announcement.badge}</Badge>
              {announcement.text}
              <span className="bg-muted flex size-7 items-center justify-center rounded-full">
                <ArrowRight className="w-4" />
              </span>
            </a>
          )}
          <h1
            className={`mx-auto mt-4 mb-3 ${maxWidth} text-4xl font-semibold text-balance lg:mb-7 lg:text-7xl`}
          >
            {title}
          </h1>
          <p
            className={`m mx-auto ${maxWidth} text-muted-foreground lg:text-xl`}
          >
            {descriptionPrefix}
            {inlineFeatures &&
              inlineFeatures.map((feature, index) => (
                <span key={`feature-${index}`}>
                  <span className="text-primary relative top-[5px] mx-2 inline-flex font-medium md:top-[3px]">
                    {feature.icon}
                    {feature.text}
                  </span>
                  {index < inlineFeatures.length - 1 ? 'to' : ''}
                </span>
              ))}
            {descriptionSuffix}
          </p>
          {buttons && buttons.length > 0 && (
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              {buttons.map((button, index) => (
                <Button
                  key={`button-${index}`}
                  size="lg"
                  variant={button.variant === 'ghost' ? 'ghost' : 'default'}
                  asChild
                >
                  <a href={button.href}>
                    {button.text}
                    <MoveRight className="ml-2" strokeWidth={1} />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero26 };
