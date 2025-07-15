'use client';

import { useEffect, useRef, useState } from 'react';

import { Lightbulb } from 'lucide-react';

import { ContentProps } from '@/components/shadcnblocks/types/common';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface ContentSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface Topic {
  label: string;
}

interface Content3Props extends ContentProps {
  breadcrumbs?: BreadcrumbItem[];
  subtitle?: string;
  buttons?: { text: string; href: string; variant?: 'default' | 'outline' }[];
  topics?: Topic[];
  lastUpdated?: string;
  heroImage?: string;
  sections?: ContentSection[];
  alert?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  };
}

const Content3 = ({
  breadcrumbs = [
    { label: 'Home', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Urban Gardening', isActive: true },
  ],
  title = 'Mastering sustainable urban gardening in small spaces.',
  subtitle = 'Transform your apartment balcony or tiny yard into a thriving green oasis with our proven techniques.',
  buttons = [
    { text: 'Get Started', href: '#', variant: 'default' },
    { text: 'Gardening Guide', href: '#', variant: 'outline' },
  ],
  topics = [{ label: 'Container Gardens' }, { label: 'Vertical Systems' }],
  lastUpdated = 'April 15, 2024',
  heroImage = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  sections = [
    {
      id: 'heading1',
      title: 'Overview',
      content: (
        <p>
          This guide will help you create a thriving garden even in the smallest
          urban spaces. With strategic planning and the right plant selection,
          anyone can enjoy homegrown herbs, vegetables, and flowers, regardless
          of square footage.
        </p>
      ),
    },
    {
      id: 'heading2',
      title: 'Getting Started',
      content: (
        <>
          <p>
            Before diving into urban gardening, consider these essential
            requirements for success. This checklist will help you avoid common
            beginner mistakes and set up your garden for optimal growth.
          </p>
          <ul>
            <li>
              Basic supplies for your starter garden:
              <ul>
                <li>
                  <code>Containers</code> with proper drainage holes
                </li>
                <li>
                  <code>Soil</code> specially formulated for containers
                </li>
              </ul>
            </li>
            <li>
              Proper lighting conditions <a href="#">View lighting guide</a>
            </li>
            <li>Regular watering schedule and techniques</li>
            <li>Quality potting mix with balanced nutrients</li>
          </ul>
        </>
      ),
    },
    {
      id: 'heading3',
      title: 'Choosing Your Plants',
      content: (
        <>
          <p>
            Once you've set up, you'll need to select appropriate plants for
            your space.
          </p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Light Conditions</th>
                  <th>Recommended Plants</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full Sun</td>
                  <td>Tomatoes, Peppers, Basil</td>
                </tr>
                <tr className="even:bg-muted m-0 border-t p-0">
                  <td>Partial Sun</td>
                  <td>Lettuce, Kale, Mint</td>
                </tr>
                <tr className="even:bg-muted m-0 border-t p-0">
                  <td>Shade</td>
                  <td>Ferns, Hostas, Impatiens</td>
                </tr>
                <tr className="even:bg-muted m-0 border-t p-0">
                  <td>Indirect Light</td>
                  <td>Orchids, Peace Lily</td>
                </tr>
                <tr className="even:bg-muted m-0 border-t p-0">
                  <td>Low Light</td>
                  <td>Snake Plants, Prayer Plants</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            By matching plants to your light conditions, you'll see dramatic
            improvements in growth and yield. Remember that even in challenging
            spaces, there's always something that can thrive.
          </p>
        </>
      ),
    },
    {
      id: 'heading4',
      title: 'Vertical Solutions',
      content: (
        <>
          <p>
            When floor space is limited, the answer is to go up!{' '}
            <a href="#">Vertical gardening techniques</a> can double or triple
            your growing capacity.
          </p>
          <blockquote>
            &ldquo;The greatest limitation in urban gardening isn't space—it's
            imagination,&rdquo; says renowned urban farmer Maria Chen.
          </blockquote>
          <p>Consider these vertical options based on your available space:</p>
          <ul>
            <li>Wall-mounted pocket planters: Perfect for herbs</li>
            <li>Tiered plant stands: Ideal for small potted plants</li>
            <li>
              Trellises for climbers: Great for beans, peas, and cucumbers
            </li>
          </ul>
          <p>
            With these strategies, even a tiny balcony can produce an impressive
            harvest throughout the growing season, bringing both beauty and
            bounty to your urban dwelling.
          </p>
        </>
      ),
    },
  ],
  alert = {
    icon: <Lightbulb className="h-4 w-4" />,
    title: 'Pro Tip!',
    description:
      'Always group plants with similar water needs together to simplify maintenance and prevent overwatering',
  },
  className,
}: Content3Props) => {
  const [activeHeadings, setActiveHeadings] = useState<string[]>([]);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          setActiveHeadings((prev) =>
            prev.includes(id) ? prev : [...prev, id],
          );
        } else {
          setActiveHeadings((prev) => prev.filter((heading) => heading !== id));
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };
  return (
    <section className={className || 'py-32'}>
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <div key={`breadcrumb-${index}`} className="flex items-center">
                {index > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
                <BreadcrumbItem>
                  {crumb.isActive ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={crumb.href || '#'}>
                      {crumb.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-10 text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-xl font-medium text-balance">
            {subtitle}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="mt-8 flex items-center gap-3">
            {buttons.map((button, index) => (
              <Button
                key={`button-${index}`}
                size="lg"
                variant={button.variant === 'outline' ? 'outline' : 'default'}
                asChild
              >
                <a href={button.href}>{button.text}</a>
              </Button>
            ))}
          </div>
        )}
        <div className="relative mt-16 grid gap-10 lg:mt-28 lg:grid-cols-5">
          <aside className="top-10 flex h-fit w-full max-w-56 flex-col gap-5 lg:sticky">
            <div>
              <h2 className="font-semibold">Topics</h2>
              <ul className="mt-2 flex flex-col gap-2">
                {topics.map((topic, index) => (
                  <li key={`topic-${index}`}>
                    <p className="text-muted-foreground text-sm">
                      {topic.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold">Last Updated</h2>
              <time className="text-muted-foreground text-sm">
                {lastUpdated}
              </time>
            </div>
          </aside>
          <div className="gap-6 lg:col-span-3">
            <div className="max-w-prose lg:mx-auto">
              <img
                src={heroImage}
                alt="hero image"
                className="border-border aspect-video rounded-2xl border object-cover"
              />
              <div className="prose dark:prose-invert prose-h3:mt-14 prose-h3:scroll-mt-14 prose-h3:text-lg mt-12">
                {sections.map((section, index) => (
                  <div key={`section-${index}`}>
                    {index === 0 && (
                      <h2 className="text-4xl font-semibold">Introduction</h2>
                    )}
                    <h3
                      id={section.id}
                      ref={(ref) => addSectionRef(section.id, ref)}
                      className="text-2xl font-semibold"
                    >
                      {section.title}
                    </h3>
                    <div>{section.content}</div>
                    {alert && index === Math.floor(sections.length / 2) && (
                      <Alert>
                        {alert.icon}
                        <AlertTitle>{alert.title}</AlertTitle>
                        <AlertDescription>{alert.description}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <nav className="sticky top-10 hidden h-fit lg:block">
            <p className="text-muted-foreground text-sm">ON THIS PAGE</p>
            <ul className="text-muted-foreground mt-1.5 text-xs">
              {sections.map((section, index) => (
                <li key={`nav-${index}`}>
                  <a
                    className={cn(
                      'border-border block border-l py-1 pl-2.5 transition-colors duration-200',
                      activeHeadings.includes(section.id)
                        ? 'border-primary text-primary font-medium'
                        : 'text-muted-foreground hover:text-primary',
                    )}
                    href={`#${section.id}`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export { Content3 };
