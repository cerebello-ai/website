import { Star } from 'lucide-react';

import {
  TestimonialProps,
  TestimonialItem,
} from '@/components/shadcnblocks/types/common';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface RatingPlatform {
  name: string;
  logo: string;
  rating: number;
  maxRating?: number;
}

interface Testimonial11Props extends TestimonialProps {
  ratingPlatforms?: RatingPlatform[];
  gridColumns?: number;
  showRatings?: boolean;
  maxTestimonials?: number;
}

const Testimonial11 = ({
  title = 'Testimonials',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  testimonials = [
    {
      name: 'Customer Name',
      company: 'Company Name',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt urna ac tortor molestie, sit amet lobortis massa cursus. Ut rutrum nunc sit amet tellus cursus congue.',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      role: '',
    },
    {
      name: 'Customer Name',
      company: 'Company Name',
      content: 'Sed sodales ligula non neque molestie.',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      role: '',
    },
    {
      name: 'Customer Name',
      company: 'Company Name',
      content:
        'Sed sodales ligula non neque molestie, et auctor quam fringilla. Donec placerat justo et vehicula interdum.',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      role: '',
    },
    {
      name: 'Customer Name',
      company: 'Company Name',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      role: '',
    },
    {
      name: 'Customer Name',
      company: 'Company Name',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      role: '',
    },
    {
      name: 'Customer Name',
      company: 'Company Name',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt urna ac tortor molestie, sit amet lobortis massa cursus. Ut rutrum nunc sit amet tellus cursus congue.',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      role: '',
    },
    {
      name: 'Customer Name',
      company: 'Company Name',
      content:
        'Sed sodales ligula non neque molestie, et auctor quam fringilla. Donec placerat justo et vehicula interdum.',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      role: '',
    },
    {
      name: 'Customer Name',
      company: 'Company Name',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt urna ac tortor molestie, sit amet lobortis massa cursus. Ut rutrum nunc sit amet tellus cursus congue.',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      role: '',
    },
    {
      name: 'Customer Name',
      company: 'Company Name',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      role: '',
    },
  ],
  ratingPlatforms = [
    {
      name: 'Astro',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
      rating: 4.8,
      maxRating: 5,
    },
    {
      name: 'Supabase',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg',
      rating: 4.8,
      maxRating: 5,
    },
  ],
  gridColumns = 3,
  showRatings = true,
  maxTestimonials = 9,
  className,
}: Testimonial11Props) => {
  return (
    <section
      className={`bg-accent relative bg-[linear-gradient(var(--color-accent)_0%,var(--color-background)_100%)] py-32 ${className || ''}`}
    >
      <div className="container pb-16">
        <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-32">
          <div className="flex flex-1 flex-col items-start text-left">
            <h2 className="my-6 text-2xl font-semibold text-pretty lg:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-3xl lg:text-xl">
              {description}
            </p>
          </div>
          {showRatings && ratingPlatforms && ratingPlatforms.length > 0 && (
            <div className="block shrink-0 flex-row gap-12 sm:flex sm:flex-col lg:flex-row lg:gap-24">
              {ratingPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="mr-8 mb-8 inline-block sm:mr-0 sm:mb-0"
                >
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="mb-4 h-6"
                  />
                  <div className="flex items-center">
                    <div className="mr-4 shrink-0 text-sm font-semibold">
                      {platform.rating} / {platform.maxRating || 5}
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: Math.floor(platform.rating) }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="fill-primary size-5 stroke-none"
                          />
                        ),
                      )}
                      {platform.rating % 1 !== 0 && (
                        <Star className="fill-primary/50 size-5 stroke-none" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="container mt-16 sm:mt-0">
        <div
          className={`w-full columns-1 gap-4 sm:columns-2 lg:columns-${gridColumns} lg:gap-6 [&>div:nth-child(n+5)]:hidden sm:[&>div:nth-child(n+5)]:inline-block sm:[&>div:nth-child(n+9)]:hidden lg:[&>div:nth-child(n+9)]:inline-block`}
        >
          {testimonials?.slice(0, maxTestimonials).map((testimonial, index) => (
            <div
              key={index}
              className="border-border bg-background mb-4 inline-block w-full rounded-lg border p-6 lg:mb-6"
            >
              <div className="flex flex-col">
                <p className="mb-4 text-xs">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-1 md:gap-2">
                  <Avatar className="size-8 md:size-10">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-xs font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 hidden w-full sm:block sm:h-[16.875rem] sm:bg-[linear-gradient(transparent_0%,hsl(var(--accent))_100%)] lg:h-56"></div>
    </section>
  );
};

export { Testimonial11 };
