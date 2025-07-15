import {
  BookOpen,
  Calendar,
  FileSpreadsheetIcon,
  Images,
  Lightbulb,
  Plus,
  Share2,
  ShoppingBag,
} from 'lucide-react';

import { ContentProps } from '@/components/shadcnblocks/types/common';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface ContentType {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface InstructionSection {
  title: string;
  steps: string[];
}

interface Content2Props extends ContentProps {
  badge?: string;
  heroImage?: string;
  contentTypes?: ContentType[];
  gridColumns?: string;
  instructionSections?: InstructionSection[];
  alert?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  };
}

const Content2 = ({
  badge = 'Features',
  title = 'Content Management',
  description = 'Our content management system allows you to easily organize and showcase your work. Share your portfolio, products, or services with your audience.',
  heroImage = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  contentTypes = [
    {
      icon: <FileSpreadsheetIcon className="h-6 w-6 shrink-0" />,
      title: 'Projects',
      description: 'Showcase your latest work and achievements.',
      href: '#',
    },
    {
      icon: <ShoppingBag className="h-6 w-6 shrink-0" />,
      title: 'Products',
      description: 'Display your products or services.',
      href: '#',
    },
    {
      icon: <Images className="h-6 w-6 shrink-0" />,
      title: 'Gallery',
      description: 'Share photos and visual content.',
      href: '#',
    },
    {
      icon: <Calendar className="h-6 w-6 shrink-0" />,
      title: 'Events',
      description: 'Promote upcoming events and dates.',
      href: '#',
    },
    {
      icon: <Share2 className="h-6 w-6 shrink-0" />,
      title: 'Social',
      description: 'Link to your social media profiles.',
      href: '#',
    },
    {
      icon: <BookOpen className="h-6 w-6 shrink-0" />,
      title: 'Blog',
      description: 'Share your latest articles and updates.',
      href: '#',
    },
    {
      icon: <Plus className="h-6 w-6 shrink-0" />,
      title: 'Custom',
      description: 'Add any custom content or external links.',
      href: '#',
    },
  ],
  gridColumns = 'md:grid-cols-2',
  instructionSections = [
    {
      title: 'Adding Content',
      steps: [
        'Navigate to **Content** and click **New** in the top right.',
        'Choose your content type and fill in the required information.',
        'Add a description, upload media if needed, and click **Save**.',
      ],
    },
    {
      title: 'Managing Content',
      steps: [
        'Go to **Content** and locate the item you want to modify.',
        'Click the **options menu** (three dots) and select **Edit**.',
        'Update the information and click **Save**.',
      ],
    },
  ],
  alert = {
    icon: <Lightbulb className="h-4 w-4" />,
    title: 'Tip',
    description:
      'You can quickly create content by using our bulk upload feature or content templates.',
  },
  className,
}: Content2Props) => {
  return (
    <section className={className || 'py-32'}>
      <div className="container max-w-5xl">
        <div>
          <div>
            {badge && <Badge variant="outline">{badge}</Badge>}
            <h1 className="mt-3 text-3xl font-extrabold">{title}</h1>
            {description && (
              <p className="text-muted-foreground mt-2 text-lg">
                {description}
              </p>
            )}
            <img
              src={heroImage}
              alt="hero image"
              className="my-8 aspect-video w-full rounded-md object-cover"
            />
          </div>
          <section className="mb-8">
            <h2 className="mb-6 text-2xl font-semibold">Content Types</h2>
            <div className={`grid gap-4 ${gridColumns}`}>
              {contentTypes.map((contentType, index) => (
                <a
                  key={`content-type-${index}`}
                  href={contentType.href}
                  className="hover:border-primary flex items-center gap-3 rounded-xl border px-6 py-5"
                >
                  {contentType.icon}
                  <div>
                    <h2 className="font-semibold">{contentType.title}</h2>
                    <p className="text-muted-foreground text-sm">
                      {contentType.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {instructionSections.map((section, sectionIndex) => (
            <section
              key={`instruction-${sectionIndex}`}
              className="prose dark:prose-invert mb-8"
            >
              <h2>{section.title}</h2>
              <ol>
                {section.steps.map((step, stepIndex) => (
                  <li
                    key={`step-${sectionIndex}-${stepIndex}`}
                    dangerouslySetInnerHTML={{
                      __html: step.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong>$1</strong>',
                      ),
                    }}
                  />
                ))}
              </ol>
              {sectionIndex === 0 && alert && (
                <Alert>
                  {alert.icon}
                  <AlertTitle>{alert.title}</AlertTitle>
                  <AlertDescription>{alert.description}</AlertDescription>
                </Alert>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Content2 };
