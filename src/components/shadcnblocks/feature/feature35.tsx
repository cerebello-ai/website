import { MoveRight } from 'lucide-react';

import { FeatureProps } from '@/components/shadcnblocks/types/common';

interface Feature35Item {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

interface Feature35Props extends FeatureProps {
  items?: Feature35Item[];
  gridColumns?: number;
}

const Feature35 = ({
  title = 'Built by the best and brightest',
  items = [
    {
      title: 'Technologies to scale',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.',
      link: '#',
      linkText: 'Learn more',
    },
    {
      title: 'Proven methodologies',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.',
      link: '#',
      linkText: 'Learn more',
    },
    {
      title: 'A culture of innovation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.',
    },
  ],
  gridColumns = 4,
  className,
}: Feature35Props) => {
  return (
    <section className={className || 'py-32'}>
      <div className="container">
        <div className={`grid gap-10 lg:grid-cols-${gridColumns} lg:gap-20`}>
          <h2 className="row-span-2 text-3xl font-semibold">{title}</h2>
          {items?.map((item, index) => (
            <div key={`item-${index}`} className="flex flex-col gap-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold lg:mb-8">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              {item.link && (
                <a
                  href={item.link}
                  className="inline-flex items-center hover:underline"
                >
                  <span>{item.linkText || 'Learn more'}</span>
                  <MoveRight strokeWidth={1} className="ml-2 size-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature35 };
