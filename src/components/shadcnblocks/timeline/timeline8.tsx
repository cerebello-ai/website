import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type TimelineEntry = {
  date: string;
  items: {
    content: string;
    highlights?: { text: string; position: number }[];
  }[];
};

interface Timeline8Props {
  title?: string;
  subtitle?: string;
  timelineData?: TimelineEntry[];
}

const Timeline8 = ({
  title = 'Timeline',
  subtitle = 'Track our progress and milestones',
  timelineData = [
    {
      date: 'March 21, 2025',
      items: [
        {
          content:
            'Launched <strong>AI-powered code generation</strong> in our IDE, allowing developers to generate boilerplate code with natural language prompts.',
        },
        {
          content:
            'Introduced <em>contextual code suggestions</em> that understand project structure and coding patterns for more accurate completions.',
        },
        {
          content:
            'Added <u>automated code refactoring</u> capabilities that suggest and apply improvements to existing codebases.',
        },
      ],
    },
    {
      date: 'February 14, 2025',
      items: [
        {
          content:
            'Released major performance improvements resulting in <strong>40% faster</strong> compile times across all supported languages.',
        },
        {
          content:
            'Enhanced debugging capabilities with <em>real-time variable inspection</em> and step-through debugging for complex applications.',
        },
      ],
    },
    {
      date: 'January 8, 2025',
      items: [
        {
          content:
            'Expanded language support to include <strong>Rust</strong>, <strong>Go</strong>, and <strong>Swift</strong> with full syntax highlighting and IntelliSense.',
        },
        {
          content:
            'Implemented <u>collaborative editing</u> features allowing multiple developers to work on the same codebase simultaneously.',
        },
        {
          content:
            'Added integrated <em>version control</em> with Git support directly within the IDE interface.',
        },
      ],
    },
  ],
}: Timeline8Props) => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <div className="mb-10 text-center">
          <h1 className="text-foreground text-3xl font-semibold tracking-tighter lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>
          )}
        </div>
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="bg-muted absolute top-4 left-2"
          />
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="bg-foreground absolute top-2 left-0 flex size-5 items-center justify-center rounded-full">
                <div className="bg-background size-3 rounded-full" />
              </div>
              <Badge
                variant="secondary"
                className="mb-4 rounded-xl px-3 py-2 text-sm"
              >
                {entry.date}
              </Badge>

              <Card className="my-5 border-none shadow-none">
                <CardContent className="px-2">
                  <ul className="flex flex-col gap-1">
                    {entry.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3">
                        <span className="bg-foreground mt-2 h-2 w-2 flex-none rounded-full" />
                        <span
                          className="text-md text-foreground leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline8 };
