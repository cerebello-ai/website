import { TestimonialProps } from '@/components/shadcnblocks/types/common';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

interface Testimonial12Item {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  logo?: string;
  metrics?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
}

interface Testimonial12Props extends TestimonialProps {
  testimonialItems?: Testimonial12Item[];
  showMetrics?: boolean;
  backgroundColor?: boolean;
}

const Testimonial12 = ({
  title,
  description,
  testimonialItems = [
    {
      name: 'John Doe',
      role: 'CEO',
      company: 'Company Name',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nike-icon.svg',
      metrics: [
        {
          value: '2.2x',
          label: 'Monthly Active Users',
          description: 'Since last month',
        },
        {
          value: '256%',
          label: 'Increase in Revenue',
          description: 'Since last year',
        },
      ],
    },
    {
      name: 'Jane Doe',
      role: 'CTO',
      company: 'Company 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg',
      metrics: [
        {
          value: '1.5x',
          label: 'Monthly Active Users',
          description: 'Since last month',
        },
        {
          value: '150%',
          label: 'Increase in Revenue',
          description: 'Since last year',
        },
      ],
    },
  ],
  showMetrics = true,
  backgroundColor = true,
  className,
}: Testimonial12Props) => {
  return (
    <section className={`py-32 ${className || ''}`}>
      <div className="container">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="text-muted-foreground mt-4 text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        <div
          className={`${backgroundColor ? 'bg-muted' : ''} relative rounded-2xl`}
        >
          <Carousel className="static">
            <CarouselContent className="-ml-4">
              {testimonialItems?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20"
                >
                  <div>
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                      />
                    )}
                    <div className="mt-4 text-center">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-muted-foreground">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    {item.logo && (
                      <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="h-auto w-7 lg:w-11"
                        />
                        <span className="text-xl font-semibold lg:text-3xl">
                          {item.company}
                        </span>
                      </div>
                    )}
                    <p className="text-center text-xl font-semibold lg:text-left lg:text-2xl">
                      "{item.content}"
                    </p>
                    {showMetrics && item.metrics && item.metrics.length > 0 && (
                      <>
                        <Separator className="my-8 lg:my-10" />
                        <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                          {item.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex flex-col">
                              <span className="mb-4 text-4xl font-semibold md:text-6xl">
                                {metric.value}
                              </span>
                              <span className="font-medium">
                                {metric.label}
                              </span>
                              {metric.description && (
                                <span className="text-muted-foreground">
                                  {metric.description}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-6 bottom-6 z-10 lg:right-10 lg:bottom-10">
              <div className="relative flex items-center gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial12 };
