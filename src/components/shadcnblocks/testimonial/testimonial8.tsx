'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const defaultTestimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Operations Director',
    avatar:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    content:
      "Cerebello's process analysis identified 40% time savings in our approval workflows. The automation roadmap they provided led to a 250% ROI within 6 months.",
  },
  {
    name: 'Marcus Chen',
    role: 'CEO',
    avatar:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
    content:
      "The bottleneck analysis was eye-opening. We discovered hidden inefficiencies that were costing us thousands monthly. Cerebello's recommendations were practical and immediately actionable.",
  },
  {
    name: 'Linda Rodriguez',
    role: 'Process Manager',
    avatar:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
    content:
      'Their systematic approach to process mapping revealed automation opportunities we never knew existed. The implementation roadmap was clear and delivered measurable results.',
  },
  {
    name: 'David Thompson',
    role: 'VP of Operations',
    avatar:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
    content:
      "Cerebello's process analysis transformed our customer service workflows. Response times improved by 60% and customer satisfaction scores increased significantly.",
  },
  {
    name: 'Jennifer Kim',
    role: 'Business Analyst',
    avatar:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp',
    content:
      'The data-driven insights from their process analysis helped us eliminate redundant steps and reduce processing time by 35%. Excellent work and clear communication.',
  },
  {
    name: 'Michael Torres',
    role: 'COO',
    avatar:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp',
    content:
      "Working with Cerebello was a game-changer for our operations. They identified bottlenecks we didn't even know existed and provided a clear roadmap for improvement.",
  },
  {
    name: 'Anna Williams',
    role: 'Quality Manager',
    avatar:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp',
    content:
      'The process analysis uncovered quality issues in our workflows that were causing delays. Their recommendations led to a 45% improvement in our quality metrics.',
  },
  {
    name: 'Robert Davis',
    role: 'IT Director',
    avatar:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp',
    content:
      "Cerebello's technical expertise combined with business acumen helped us prioritize automation initiatives based on real ROI potential. Highly recommended.",
  },
];

interface Testimonial8Props {
  title?: string;
  description?: string;
  badge?: string;
  testimonials?: Array<{
    name: string;
    role: string;
    avatar: string;
    content: string;
  }>;
}

const Testimonial8 = ({
  title = 'Success Stories from Process Analysis',
  description = 'See how our process analysis transformed businesses across industries',
  badge = 'Client Results',
  testimonials = defaultTestimonials,
}: Testimonial8Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline">{badge}</Badge>
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <div className="after:from-background relative mt-14 w-full after:absolute after:inset-x-0 after:-bottom-2 after:h-96 after:bg-linear-to-t">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {testimonials.map((testimonial, idx) => {
                return (
                  <Card
                    key={idx}
                    className={cn(
                      'p-5',
                      idx > 3 && idx <= 5 && 'hidden md:block',
                      idx > 5 && 'hidden lg:block',
                    )}
                  >
                    <div className="flex gap-4 leading-5">
                      <Avatar className="ring-input size-9 rounded-full ring-1">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="text-foreground/70 mt-8 leading-7">
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export { Testimonial8 };
