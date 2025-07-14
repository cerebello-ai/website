'use client';

import { Star, Quote } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    content:
      'The AI Implementation Scan from Cerebello was eye-opening. We discovered automation opportunities we never knew existed, and their roadmap helped us achieve 40% efficiency gains in just 6 months.',
    author: 'Sarah van der Berg',
    role: 'CEO',
    company: 'TechFlow Solutions',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
  {
    id: 2,
    content:
      "Cerebello's human-centered approach to AI implementation made all the difference. Our team embraced the changes because they understood how AI would augment their work, not replace it.",
    author: 'Mark Janssen',
    role: 'Operations Director',
    company: 'Global Logistics BV',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
  {
    id: 3,
    content:
      "The ROI projections in the scan were spot-on. We've already recovered our investment in AI implementation within the first quarter. Cerebello's expertise is unmatched.",
    author: 'Lisa Chen',
    role: 'CFO',
    company: 'FinanceHub Amsterdam',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
];

export const Testimonial18 = () => {
  return (
    <section className="bg-sand-50 dark:bg-sand-50/5 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Success Stories
          </h2>
          <p className="font-inter text-muted-foreground mb-12 text-lg">
            See how businesses transformed their operations with our AI
            Implementation Scan
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-border bg-background shadow-sm"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-primary text-primary h-4 w-4"
                    />
                  ))}
                </div>

                <Quote className="text-sand-600 dark:text-sand-700 mb-4 h-8 w-8" />

                <p className="font-inter text-muted-foreground mb-6">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <AvatarFallback className="bg-sand-100 text-foreground dark:bg-sand-50">
                      {testimonial.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-inter-tight text-foreground font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="font-inter text-muted-foreground text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
