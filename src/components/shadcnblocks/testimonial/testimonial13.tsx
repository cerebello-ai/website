import {
  TestimonialProps,
  TestimonialItem,
} from '@/components/shadcnblocks/types/common';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial13Props extends TestimonialProps {
  trustText?: string;
  quote?: string;
  backgroundColor?: boolean;
}

const Testimonial13 = ({
  title,
  description,
  testimonials = [
    {
      name: 'SB',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    },
    {
      name: 'RA',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
    },
    {
      name: 'JS',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
    },
  ],
  trustText = 'Trusted by visionary designers',
  quote = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  backgroundColor = true,
  className,
}: Testimonial13Props) => {
  return (
    <section
      className={`${backgroundColor ? 'bg-accent' : ''} py-32 ${className || ''}`}
    >
      <div className="container">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="text-muted-foreground mt-4 text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="flex flex-col items-center text-center">
          <div className="bg-background mb-8 flex items-center rounded-full p-1 shadow-md">
            {testimonials?.map((testimonial, index) => (
              <Avatar
                key={index}
                className={`size-10 ${index > 0 ? '-ml-3' : ''}`}
              >
                <AvatarImage src={testimonial.avatar} />
                <AvatarFallback>{testimonial.name}</AvatarFallback>
              </Avatar>
            ))}
            <div className="mx-2 text-xs font-medium">{trustText}</div>
          </div>
          <p className="max-w-4xl text-xl font-medium lg:text-2xl">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export { Testimonial13 };
