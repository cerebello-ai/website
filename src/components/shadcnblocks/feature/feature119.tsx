import { Badge } from '@/components/ui/badge';

interface Feature119Props {
  badge?: string;
  title?: string;
  description?: string;
  steps?: Array<{
    title: string;
    description: string;
    number?: string;
  }>;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

const Feature119 = ({
  badge = 'Your path to success',
  title = 'Get Started with Ease',
  description,
  steps = [
    {
      title: 'Create an Account',
      description: 'Sign up quickly and choose the best plan for your needs.',
      number: '01',
    },
    {
      title: 'Set Up Integrations',
      description: 'Easily connect your tools and start gathering insights.',
      number: '02',
    },
    {
      title: 'Collaborate Effortlessly',
      description: 'Invite your team and begin working together instantly.',
      number: '03',
    },
  ],
  imageUrl = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-8-wide.svg',
  imageAlt = 'placeholder',
  className = '',
}: Feature119Props) => {
  return (
    <section className={`py-32 ${className}`}>
      <div className="container">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-2.5">
            <Badge variant="outline">{badge}</Badge>
            <h2 className="text-center text-4xl md:text-5xl">{title}</h2>
            {description && (
              <p className="text-muted-foreground max-w-2xl text-center text-lg">
                {description}
              </p>
            )}
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={`step-${index}`} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-medium">
                    {step.number || (index + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <img
            src={imageUrl}
            alt={imageAlt}
            className="aspect-video w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Feature119 };
