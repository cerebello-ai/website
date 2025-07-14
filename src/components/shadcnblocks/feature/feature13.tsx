import { FeatureProps } from '../types/common';

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

interface Feature13Props extends FeatureProps {
  features?: FeatureItem[];
  maxWidth?: string;
  gridColumns?: number;
  cardBackground?: string;
}

const Feature13 = ({
  title: heading = 'A better way to build websites',
  features = [
    {
      id: 'feature-1',
      title: 'Built for artists and designers',
      subtitle: 'FOR DESIGNERS',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
    },
    {
      id: 'feature-2',
      title: 'Built for coders and developers',
      subtitle: 'FOR DEVELOPERS',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg',
    },
  ],
  maxWidth = 'max-w-7xl',
  gridColumns = 2,
  cardBackground = 'bg-accent',
}: Feature13Props) => {
  const gridCols =
    gridColumns === 1
      ? 'lg:grid-cols-1'
      : gridColumns === 3
        ? 'lg:grid-cols-3'
        : 'lg:grid-cols-2';
  return (
    <section className="py-32">
      <div className={`container ${maxWidth}`}>
        <h2 className="text-3xl font-medium lg:text-4xl">{heading}</h2>
        {features && features.length > 0 && (
          <div className={`mt-20 grid gap-9 ${gridCols}`}>
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`flex flex-col justify-between rounded-lg ${cardBackground}`}
              >
                <div className="flex justify-between gap-10 border-b">
                  <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                    <p className="text-muted-foreground text-xs">
                      {feature.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-4xl">{feature.title}</h3>
                  </div>
                  <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-muted-foreground p-4 md:p-8">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Feature13 };
