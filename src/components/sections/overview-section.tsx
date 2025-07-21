'use client';

interface OverviewSectionProps {
  id?: string;
  badge?: string;
  title?: string;
  paragraphs?: string[];
}

export const OverviewSection = ({
  id = "overview",
  badge = "What to Expect",
  title = "A Collaborative and Transparent Partnership",
  paragraphs = [
    "We recognize that every industry is unique, but the power of technology to drive innovation is universal. Our team leverages cross-industry experience to customize solutions for each client's domain, avoiding one-size-fits-all approaches – our solutions are as unique as your business.",
    "In today's landscape, digital transformation initiatives often falter without a clear plan – in fact, only 16% of organizations report successful implementation, a gap largely due to the lack of an effective roadmap. Cerebello's Implementation Roadmap service closes this gap by providing a structured yet flexible plan that keeps efforts aligned, measurable, and focused on delivering tangible business value."
  ]
}: OverviewSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="font-inter text-primary mb-4 inline-block text-sm font-medium tracking-wider uppercase">
            {badge}
          </span>
          <h2 className="font-inter-tight text-foreground mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={`font-inter text-muted-foreground text-lg ${index < paragraphs.length - 1 ? 'mb-4' : ''}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};