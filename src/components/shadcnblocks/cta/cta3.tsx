import { ArrowRight, Book, ChevronRight, File } from 'lucide-react';

import { CtaProps } from '../types/common';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Cta3Props extends CtaProps {
  resources?: Array<{
    title: string;
    description: string;
    href: string;
    icon?: 'file' | 'book';
  }>;
}

const Cta3 = ({
  title = 'Call To Action',
  description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.',
  buttons = [
    { text: 'Get Started', href: '#' },
    { text: 'Contact Sales', href: '#', variant: 'outline' },
  ],
  resources = [
    {
      title: 'Documentation',
      description: 'Lorem ipsum dolor, sit amet consectetur.',
      href: '#',
      icon: 'file',
    },
    {
      title: 'Getting Started',
      description: 'Lorem ipsum dolor, sit amet consectetur.',
      href: '#',
      icon: 'book',
    },
  ],
}: Cta3Props) => {
  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case 'file':
        return <File className="size-4" />;
      case 'book':
        return <Book className="size-4" />;
      default:
        return <File className="size-4" />;
    }
  };
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-semibold lg:text-4xl">{title}</h4>
            <p className="text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              {buttons &&
                buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || 'default'}
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a href={button.href}>
                      {button.text}
                      {index === 0 && <ArrowRight className="ml-2 size-4" />}
                    </a>
                  </Button>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {resources &&
              resources.map((resource, index) => (
                <a key={index} href={resource.href}>
                  <Card className="hover:bg-accent flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none">
                    <div className="flex items-start gap-2">
                      {getIcon(resource.icon)}
                      <div>
                        <h5 className="mb-2 leading-4 font-medium">
                          {resource.title}
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="size-6" />
                  </Card>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta3 };
