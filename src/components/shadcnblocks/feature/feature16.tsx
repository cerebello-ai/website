import { Timer, Zap, ZoomIn } from 'lucide-react';

import { FeatureProps } from '@/components/shadcnblocks/types/common';

interface Feature16Props extends FeatureProps {
  badge?: string;
  gridColumns?: number;
}

const Feature16 = ({
  badge = 'OUR VALUES',
  title = 'Why Choose Us?',
  features = [
    {
      title: 'Performance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.',
      icon: 'timer',
    },
    {
      title: 'Quality',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.',
      icon: 'zoom-in',
    },
    {
      title: 'Innovation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.',
      icon: 'zap',
    },
  ],
  gridColumns = 3,
  className,
}: Feature16Props) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'timer':
        return <Timer className="size-6" />;
      case 'zoom-in':
        return <ZoomIn className="size-6" />;
      case 'zap':
        return <Zap className="size-6" />;
      default:
        return <Timer className="size-6" />;
    }
  };
  return (
    <section className={className || 'py-32'}>
      <div className="container">
        {badge && (
          <p className="text-muted-foreground mb-4 text-sm lg:text-base">
            {badge}
          </p>
        )}
        <h2 className="text-3xl font-medium lg:text-4xl">{title}</h2>
        <div
          className={`mt-14 grid gap-6 lg:mt-20 lg:grid-cols-${gridColumns}`}
        >
          {features?.map((feature, index) => (
            <div key={`feature-${index}`} className="bg-accent rounded-lg p-5">
              <span className="bg-background mb-8 flex size-12 items-center justify-center rounded-full">
                {feature.icon ? (
                  getIcon(feature.icon)
                ) : (
                  <Timer className="size-6" />
                )}
              </span>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
