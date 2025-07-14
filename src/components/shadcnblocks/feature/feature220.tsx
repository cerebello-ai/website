import { ArrowRight } from 'lucide-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const CUSTOMER_DATA = {
  stats: [
    {
      number: '52%',
      text: 'boost in user retention',
    },
    {
      number: '40%',
      text: 'decrease in development time',
    },
    {
      number: '2.5x',
      text: 'increase in feature adoption',
    },
  ],
  author: {
    name: 'Lena Carter',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
    role: 'Head of Product, Brightflow',
  },
  title: 'How Brightflow Scaled UI Delivery with Reusable Blocks',
  summary:
    'Discover how Brightflow accelerated product development and improved retention by leveraging modular UI blocks across teams.',
  link: '#',
};

interface AuthorProps {
  image: string;
  name: string;
  role: string;
}

const Author = ({ image, name, role }: AuthorProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="bg-background size-10 rounded-[.5rem] border">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-0.5">
        <div className="text-muted-foreground text-sm leading-[1.4] font-medium">
          {name}
        </div>
        <div className="text-muted-foreground text-sm leading-[1.4] font-medium">
          {role}
        </div>
      </div>
    </div>
  );
};

const Feature220 = () => {
  return (
    <section className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat py-20">
      <div className="container flex flex-wrap-reverse gap-12 lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-[7.5rem]">
        <div className="flex flex-col justify-between gap-20 py-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl leading-none font-semibold tracking-tight md:text-5xl">
              Build Stunning Interfaces Faster Than Ever Before
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.4] font-medium md:text-xl">
              Drag, drop, and customize ready-made components to speed up your
              workflow and create polished UIs in no time.
            </p>
            <div>
              <Button asChild>
                <a href="#">
                  Start Building
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <a
              href={CUSTOMER_DATA.link}
              className="bg-background group flex w-full max-w-[30rem] flex-col gap-10 rounded-[.5rem] p-5 transition-shadow hover:shadow-[0_0_2px_theme('colors.gray.300')]"
            >
              <div className="flex flex-col-reverse gap-8 sm:flex-row">
                <div className="flex flex-col gap-6">
                  <p className="text-foreground text-base leading-[1.4] font-medium">
                    {CUSTOMER_DATA.summary}
                  </p>
                  <Author {...CUSTOMER_DATA.author} />
                </div>
              </div>
              <div className="flex w-full flex-col gap-8 sm:flex-row">
                {CUSTOMER_DATA.stats.map((item, i) => (
                  <div
                    className="flex flex-col gap-1"
                    key={`stats-use-case-${i}`}
                  >
                    <div className="text-xl font-semibold">{item.number}</div>
                    <div className="text-muted-foreground text-sm font-medium">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </a>
          </div>
        </div>
        <div className="w-full max-w-[46.5rem]">
          <AspectRatio
            ratio={0.873239437}
            className="overflow-hidden rounded-2xl"
          >
            <video
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-8.mp4"
              className="block size-full object-cover object-center"
              loop
              autoPlay
              muted
              controls={false}
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export { Feature220 };
