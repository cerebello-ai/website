'use client';

import { useEffect, useRef, useState } from 'react';

import {
  AlignLeft,
  GalleryVerticalEnd,
  Lightbulb,
  ListChecks,
  RefreshCcw,
} from 'lucide-react';

import { ContentProps } from '@/components/shadcnblocks/types/common';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TableRow {
  col1: string;
  col2: string;
}

interface ArticleSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface Content1Props extends ContentProps {
  badge?: string;
  heroImage?: string;
  processSteps?: ProcessStep[];
  tableData?: {
    headers: [string, string];
    rows: TableRow[];
  };
  sections?: ArticleSection[];
  alert?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  };
  navTitle?: string;
  navIcon?: React.ReactNode;
}

const Content1 = ({
  badge = 'Kingdom Tales',
  title = 'The Great Joke Tax',
  description = 'In a kingdom far away, where laughter once flowed freely, a peculiar tale unfolded about a king who decided to tax the very essence of joy itself - jokes and jest.',
  heroImage = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  processSteps = [
    {
      icon: <RefreshCcw className="h-3.5 w-3.5" />,
      title: 'Registering Your Jokes',
      description:
        'All citizens must register their jokes at the Royal Jest Office. Each joke is carefully cataloged and assigned a tax bracket based on its humor level.',
    },
    {
      icon: <GalleryVerticalEnd className="h-3.5 w-3.5" />,
      title: 'Classification Process',
      description:
        'The Royal Jesters evaluate each joke based on wit, delivery, and audience reaction. Higher ratings mean higher taxes, making the finest jokes a luxury few can afford.',
    },
    {
      icon: <ListChecks className="h-3.5 w-3.5" />,
      title: 'Tax Collection',
      description:
        "Royal tax collectors roam the streets, listening for laughter. Anyone caught telling an unregistered joke faces steep fines or time in the kingdom's least amusing dungeon.",
    },
  ],
  tableData = {
    headers: ["King's Treasury", "People's happiness"],
    rows: [
      { col1: 'Empty', col2: 'Overflowing' },
      { col1: 'Modest', col2: 'Satisfied' },
      { col1: 'Full', col2: 'Ecstatic' },
    ],
  },
  sections = [
    {
      id: 'section2',
      title: "The People's Rebellion",
      content: (
        <>
          <p>
            The people of the kingdom, feeling uplifted by the laughter, started
            to tell jokes and puns again, and soon the entire kingdom was in on
            the joke.
          </p>
          <p>
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax. Jokester was declared a
            hero, and the kingdom lived happily ever after.
          </p>
        </>
      ),
    },
    {
      id: 'section3',
      title: "The King's Plan",
      content: (
        <>
          <p>
            The king thought long and hard, and finally came up with{' '}
            <a href="#">a brilliant plan</a>: he would tax the jokes in the
            kingdom.
          </p>
          <blockquote>
            &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
            joke, so it's only fair that they should pay for the
            privilege.&rdquo;
          </blockquote>
          <p>
            The king's subjects were not amused. They grumbled and complained,
            but the king was firm:
          </p>
          <ul>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <p>
            As a result, people stopped telling jokes, and the kingdom fell into
            a gloom. But there was one person who refused to let the king's
            foolishness get him down: a court jester named Jokester.
          </p>
        </>
      ),
    },
  ],
  alert = {
    icon: <Lightbulb className="h-4 w-4" />,
    title: 'Royal Decree!',
    description:
      'Remember, all jokes must be registered at the Royal Jest Office before telling them',
  },
  navTitle = 'On this page',
  navIcon = <AlignLeft className="h-4 w-4" />,
  className,
}: Content1Props) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
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
      <div className="container max-w-7xl">
        <div className="relative grid-cols-3 gap-20 lg:grid">
          <div className="lg:col-span-2">
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
            <section
              id="section1"
              ref={(ref) => addSectionRef('section1', ref)}
              className="prose dark:prose-invert mb-8"
            >
              <h2>Process Overview</h2>
              <div className="ml-3.5">
                {processSteps.map((step, index) => (
                  <div
                    key={`step-${index}`}
                    className="relative flex items-start pb-2"
                  >
                    {index < processSteps.length - 1 && (
                      <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                    )}
                    <div className="absolute ml-[-14px] py-2">
                      <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                        {step.icon}
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        {step.title}
                      </h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {sections.map((section, index) => (
              <section
                key={`section-${index}`}
                id={section.id}
                ref={(ref) => addSectionRef(section.id, ref)}
                className="prose dark:prose-invert mb-8"
              >
                <h2>{section.title}</h2>
                {section.content}
                {index === 0 && tableData && (
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>{tableData.headers[0]}</th>
                          <th>{tableData.headers[1]}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.rows.map((row, rowIndex) => (
                          <tr
                            key={`row-${rowIndex}`}
                            className="even:bg-muted m-0 border-t p-0"
                          >
                            <td>{row.col1}</td>
                            <td>{row.col2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {index === 0 && alert && (
                  <Alert>
                    {alert.icon}
                    <AlertTitle>{alert.title}</AlertTitle>
                    <AlertDescription>{alert.description}</AlertDescription>
                  </Alert>
                )}
              </section>
            ))}
          </div>
          <div className="sticky top-8 hidden h-fit lg:block">
            <span className="flex items-center gap-2 text-sm">
              {navIcon}
              {navTitle}
            </span>
            <nav className="mt-2 text-sm">
              <ul>
                <li>
                  <a
                    href="#section1"
                    className={cn(
                      'block py-1 transition-colors duration-200',
                      activeSection === 'section1'
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground hover:text-primary',
                    )}
                  >
                    Process Overview
                  </a>
                </li>
                {sections.map((section, index) => (
                  <li key={`nav-${index}`}>
                    <a
                      href={`#${section.id}`}
                      className={cn(
                        'block py-1 transition-colors duration-200',
                        activeSection === section.id
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-primary',
                      )}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Content1 };
