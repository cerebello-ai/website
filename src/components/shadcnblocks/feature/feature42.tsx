import { FeatureProps } from '@/components/shadcnblocks/types/common';

interface Feature42Props extends FeatureProps {
  gridColumns?: number;
}

const Feature42 = ({
  title = 'Our Values and Principles',
  features = [
    {
      title: 'Team Spirit',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.',
    },
    {
      title: 'Innovation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.',
    },
    {
      title: 'Quality',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.',
    },
    {
      title: 'Integrity',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.',
    },
  ],
  gridColumns = 3,
  className,
}: Feature42Props) => {
  return (
    <section className={className || 'py-32'}>
      <div className="container">
        <div className={`grid gap-8 lg:grid-cols-${gridColumns}`}>
          <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
            {title}
          </h2>
          {features?.map((feature, index) => (
            <div key={`feature-${index}`}>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature42 };
