import { CircleArrowOutUpRight, Files, Layout } from 'lucide-react';

interface TimelineStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Timeline1Props {
  steps?: TimelineStep[];
  maxWidth?: string;
  lineHeight?: string;
}

const Timeline1 = ({
  steps = [
    {
      icon: <Files className="size-8" strokeWidth={2} />,
      title: 'Data Integration',
      description:
        'Connect your existing tools and platforms seamlessly. Our system automatically syncs and manages your data across all integrated services.',
    },
    {
      icon: <Layout className="size-8" strokeWidth={2} />,
      title: 'Custom Configuration',
      description:
        'Tailor the platform to your needs with our intuitive interface. Create powerful workflows without any technical knowledge required.',
    },
    {
      icon: <CircleArrowOutUpRight className="size-8" strokeWidth={2} />,
      title: 'Scale Your Business',
      description:
        'Access comprehensive analytics and tools designed to help you grow. Monitor performance and make data-driven decisions effortlessly.',
    },
  ],
  maxWidth = 'sm:max-w-xl',
  lineHeight = 'h-36',
}: Timeline1Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div
          className={`mx-auto flex flex-col items-center justify-center text-center ${maxWidth}`}
        >
          {steps?.map((step, index) => (
            <div key={index}>
              <div className="flex flex-col items-center">
                <span className="border-foreground flex size-24 items-center justify-center rounded-full border-2">
                  {step.icon}
                </span>
                <h2 className="my-2 text-3xl font-medium">{step.title}</h2>
                <p className="text-muted-foreground font-mono">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <span
                  className={`my-3 ${lineHeight} w-[2px]`}
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, #000 10%, rgba(255, 255, 255, 0) 0%)',
                    backgroundPosition: 'left',
                    backgroundSize: '3px 15px',
                    backgroundRepeat: 'repeat-y',
                  }}
                ></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline1 };
