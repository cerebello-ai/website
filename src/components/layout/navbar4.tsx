'use client';

import { useState } from 'react';

import Link from 'next/link';
import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Code,
  Computer,
  DollarSign,
  File,
  Flag,
  Gavel,
  Globe,
  Globe2,
  Lightbulb,
  Lock,
  Menu,
  Phone,
  PieChart,
  Puzzle,
  Rocket,
  Search,
  ShieldCheck,
  UserRound,
  Users,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { generateSolutionSlug } from '@/lib/utils/slugify';

const solutions = [
  {
    id: 'solution-1',
    title: 'AI Integration',
    description:
      'Seamlessly integrate AI solutions into your existing business processes.',
    href: generateSolutionSlug('AI Integration'),
    subpages: [
      {
        id: 'subpage-1',
        title: 'Process Analysis',
        href: '/solutions/process-analysis',
        icon: Search,
      },
      {
        id: 'subpage-2',
        title: 'AI Strategy Development',
        href: generateSolutionSlug('AI Strategy Development'),
        icon: Lightbulb,
      },
      {
        id: 'subpage-3',
        title: 'ROI Optimization',
        href: generateSolutionSlug('ROI Optimization'),
        icon: DollarSign,
      },
      {
        id: 'subpage-4',
        title: 'Implementation Roadmap',
        href: generateSolutionSlug('Implementation Roadmap'),
        icon: Clock,
      },
      {
        id: 'subpage-5',
        title: 'Change Management',
        href: generateSolutionSlug('Change Management'),
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: 'solution-2',
    title: 'Business Automation',
    description:
      'End-to-end automation solutions that streamline your operations.',
    href: generateSolutionSlug('Business Automation'),
    subpages: [
      {
        id: 'subpage-6',
        title: 'Workflow Automation',
        href: '/solutions/workflow-automation',
        icon: CheckCircle2,
      },
      {
        id: 'subpage-7',
        title: 'Intelligent Document Processing',
        href: '/solutions/intelligent-document-processing',
        icon: File,
      },
      {
        id: 'subpage-8',
        title: 'Customer Service AI',
        href: '/solutions/customer-service-ai',
        icon: UserRound,
      },
      {
        id: 'subpage-9',
        title: 'Data Analytics & Insights',
        href: '/solutions/data-analytics-insights',
        icon: PieChart,
      },
      {
        id: 'subpage-10',
        title: 'API Integration',
        href: '/solutions/api-integration',
        icon: Globe,
      },
    ],
  },
  {
    id: 'solution-3',
    title: 'Strategic Consulting',
    description: 'Expert guidance for your AI transformation journey.',
    href: generateSolutionSlug('Strategic Consulting'),
    subpages: [
      {
        id: 'subpage-11',
        title: 'Digital Transformation',
        href: generateSolutionSlug('Digital Transformation'),
        icon: Rocket,
      },
      {
        id: 'subpage-12',
        title: 'Process Optimization',
        href: generateSolutionSlug('Process Optimization'),
        icon: Clock,
      },
      {
        id: 'subpage-13',
        title: 'Business Model Innovation',
        href: generateSolutionSlug('Business Model Innovation'),
        icon: Lightbulb,
      },
      {
        id: 'subpage-14',
        title: 'Technology Assessment',
        href: generateSolutionSlug('Technology Assessment'),
        icon: Search,
      },
      {
        id: 'subpage-15',
        title: 'Implementation Support',
        href: generateSolutionSlug('Implementation Support'),
        icon: CheckCircle2,
      },
    ],
  },
  {
    id: 'solution-4',
    title: 'Custom Development',
    description: 'Bespoke AI-powered applications tailored to your needs.',
    href: generateSolutionSlug('Custom Development'),
    subpages: [
      {
        id: 'subpage-16',
        title: 'AI-Powered Web Apps',
        href: generateSolutionSlug('AI-Powered Web Apps'),
        icon: Globe2,
      },
      {
        id: 'subpage-17',
        title: 'Mobile Solutions',
        href: generateSolutionSlug('Mobile Solutions'),
        icon: Phone,
      },
      {
        id: 'subpage-18',
        title: 'Data Dashboards',
        href: generateSolutionSlug('Data Dashboards'),
        icon: PieChart,
      },
      {
        id: 'subpage-19',
        title: 'System Integration',
        href: generateSolutionSlug('System Integration'),
        icon: AppWindow,
      },
      {
        id: 'subpage-20',
        title: 'UX/UI Design',
        href: generateSolutionSlug('UX/UI Design'),
        icon: UserRound,
      },
    ],
  },
];

const solutionTechnologies = [
  {
    id: 'technology-1',
    title: 'AI & Machine Learning',
    href: '#',
    icon: Puzzle,
  },
  {
    id: 'technology-2',
    title: 'Secure & Compliant',
    href: '#',
    icon: Lock,
  },
  {
    id: 'technology-3',
    title: 'Human-Centered Design',
    href: '#',
    icon: Code,
  },
];

const productCategories = [
  {
    title: 'Standalone Products', //
    products: [
      {
        id: 'product-1',
        title: 'Enterprise Search & AI Assistant',
        description:
          'Search across internal tools (Notion, Confluence, etc.) and get instant answers from documents.',
        image:
          'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
        href: '/products/enterprise-search',
      },
      {
        id: 'product-2',
        title: 'AI-Powered Help Desk Platform',
        description:
          'AI-driven customer support that automates FAQs, integrates with CRMs, and escalates to human agents.',
        image:
          'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg',
        href: '/products/ai-helpdesk',
      },
      {
        id: 'product-1',
        title: 'Enterprise Search & AI Assistant',
        description:
          'Search across internal tools (Notion, Confluence, etc.) and get instant answers from documents.',
        image:
          'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg',
        href: '/products/enterprise-search',
      },
    ],
  },
];

const globalCategories = [
  {
    title: 'Enterprise Solutions',
    features: [
      {
        id: 'feature-1',
        title: 'Digital Transformation',
        description: 'Transform how your organization works with our platform.',
        href: '#',
        icon: Rocket,
      },
      {
        id: 'feature-2',
        title: 'Change Management',
        description: 'Expert guidance for organizational change and adoption.',
        href: '#',
        icon: Building2,
      },
      {
        id: 'feature-3',
        title: 'Global Deployment',
        description: 'Roll out and scale across global teams seamlessly.',
        href: '#',
        icon: Globe2,
      },
    ],
  },
  {
    title: 'Business Solutions',
    features: [
      {
        id: 'feature-4',
        title: 'Customer Success',
        description: 'Dedicated support for your business needs.',
        href: '#',
        icon: Phone,
      },
      {
        id: 'feature-5',
        title: 'Compliance',
        description: 'Meet industry standards and regulations.',
        href: '#',
        icon: Gavel,
      },
      {
        id: 'feature-6',
        title: 'ROI Calculator',
        description: 'Measure the impact on your business.',
        href: '#',
        icon: DollarSign,
      },
      {
        id: 'feature-7',
        title: 'IT Solutions',
        description: 'Enterprise-grade security and administration tools.',
        href: '#',
        icon: Computer,
      },
      {
        id: 'feature-8',
        title: 'Strategic Planning',
        description: 'Align teams and track company objectives.',
        href: '#',
        icon: Flag,
      },
    ],
  },
];

// const resources = [
//   {
//     id: 'resource-1',
//     title: 'Events & Webinars',
//     description: 'Learn from industry experts.',
//     href: generateResourceSlug('Events & Webinars'),
//     icon: Calendar,
//   },
//   {
//     id: 'resource-2',
//     title: 'Podcasts',
//     description: 'Insights on productivity and leadership.',
//     href: generateResourceSlug('Podcasts'),
//     icon: Mic,
//   },
//   {
//     id: 'resource-3',
//     title: 'Blog',
//     description: 'Latest updates and best practices.',
//     href: generateResourceSlug('Blog'),
//     icon: Newspaper,
//   },
//   {
//     id: 'resource-4',
//     title: 'Video Tutorials',
//     description: 'Get started with guided videos.',
//     href: generateResourceSlug('Video Tutorials'),
//     icon: PlayCircle,
//   },
//   {
//     id: 'resource-5',
//     title: 'Knowledge Base',
//     description: 'Detailed guides and documentation.',
//     href: generateResourceSlug('Knowledge Base'),
//     icon: Book,
//   },
//   {
//     id: 'resource-6',
//     title: 'Success Stories',
//     description: 'See how others achieve more.',
//     href: generateCaseStudySlug('Success Stories'),
//     icon: Lightbulb,
//   },
// ];

// const topicGroups = [
//   {
//     title: 'Learning Resources',
//     topics: [
//       {
//         id: 'topic-1',
//         title: 'Getting Started Guide',
//         href: '#',
//         icon: Globe,
//       },
//       {
//         id: 'topic-2',
//         title: 'Product Updates',
//         href: '#',
//         icon: Rocket,
//       },
//       {
//         id: 'topic-3',
//         title: 'Best Practices',
//         href: '#',
//         icon: Pyramid,
//       },
//       {
//         id: 'topic-4',
//         title: 'Integrations',
//         href: '#',
//         icon: ArrowRightLeft,
//       },
//       {
//         id: 'topic-5',
//         title: 'API Documentation',
//         href: '#',
//         icon: AppWindow,
//       },
//     ],
//   },
//   {
//     title: 'Community',
//     topics: [
//       {
//         id: 'topic-6',
//         title: 'Community Forum',
//         href: '#',
//         icon: Play,
//       },
//     ],
//   },
// ];

const SolutionsMenu = () => (
  <div className="grid gap-8 sm:grid-cols-2">
    <a
      href="/services/ai-scan"
      className="group bg-primary text-primary-foreground relative flex h-full flex-row overflow-hidden rounded-lg px-0 pt-8 lg:rounded-xl lg:px-6"
    >
      <div className="relative flex w-full flex-col space-y-12 text-left md:space-y-8 lg:w-full lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-6 xl:space-x-12">
        <div className="relative flex flex-col px-6 lg:mb-6 lg:px-0">
          <span className="mb-6 text-xs font-medium tracking-wider uppercase md:mb-8">
            AI Implementation Scan
          </span>
          <div className="mt-auto flex items-center space-x-1 text-xs">
            Start Your AI Journey
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </div>
          <p className="text-primary-foreground/85 mt-2 text-xs">
            Discover your AI potential with our comprehensive implementation
            scan.{' '}
            <span className="md:hidden">
              We analyze your processes to identify high-impact automation
              opportunities.
            </span>
          </p>
        </div>
        <div className="relative aspect-2/1 overflow-clip rounded-t pl-6 lg:max-w-[22rem] lg:pl-0">
          <img
            src="https://c.stocksy.com/a/2PGO00/z9/5782928.jpg"
            alt="placeholder"
            className="aspect-2/1 h-full w-full translate-y-px object-cover object-center"
          />
        </div>
      </div>
    </a>

    <div className="order-last mt-3 sm:order-none sm:mt-0 sm:py-2 md:p-6">
      <div className="mb-4 text-left leading-none md:col-span-2 lg:col-span-4 lg:mb-6">
        <strong className="text-muted-foreground text-left text-xs font-medium tracking-wider uppercase">
          Our Approach
        </strong>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {solutionTechnologies.map((technology) => (
          <NavigationMenuLink
            key={technology.id}
            href="#"
            className="group flex flex-row"
          >
            <technology.icon className="size-4" />
            <div className="flex-1 text-sm font-medium">{technology.title}</div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        ))}
      </div>
    </div>
    <div className="col-span-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {solutions.map((solution) => (
        <div key={solution.id} className="border-border rounded-md border p-5">
          <div className="border-border border-b pb-4">
            <a href={solution.href} className="group flex flex-col text-left">
              <div className="flex items-center">
                <strong className="text-sm font-medium">
                  {solution.title}
                </strong>
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                {solution.description}
              </p>
            </a>
          </div>
          <menu className="mt-6 grid gap-y-4">
            {solution.subpages.map((subpage) => (
              <NavigationMenuLink
                key={subpage.id}
                href={subpage.href}
                className="group text-foreground/85 hover:text-foreground flex flex-row items-center space-x-4 text-left lg:space-x-4 lg:border-0"
              >
                <subpage.icon className="size-4" />
                <div className="flex-1 text-sm font-medium">
                  {subpage.title}
                </div>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
              </NavigationMenuLink>
            ))}
          </menu>
        </div>
      ))}
    </div>
  </div>
);

const ProductsMenu = () => (
  <div className="grid gap-y-12 lg:flex lg:space-x-8">
    <div className="w-full shrink-0 lg:max-w-[18rem]">
      <a
        href="#"
        className="group text-primary-foreground relative flex h-full flex-row overflow-hidden rounded-lg px-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col space-y-12 text-left lg:space-y-0">
          <div className="relative flex aspect-2/1 max-h-[11rem] w-full flex-1 justify-center">
            <img
              src="https://c.stocksy.com/a/joGO00/z9/5784521.jpg"
              alt="placeholder"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="bg-primary relative z-20 flex flex-col rounded-b-xl p-6">
            <div className="flex items-center space-x-1 text-xs">
              Enterprise AI Solutions
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-primary-foreground/70 mt-2 text-xs">
              Transform your business with scalable AI and automation solutions.
            </p>
          </div>
        </div>
      </a>
    </div>
    <div className="grid w-full gap-y-12 lg:gap-y-6">
      {productCategories.map((category) => (
        <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
          <div className="border-border text-left lg:border-b lg:pb-3">
            <strong className="text-muted-foreground text-left text-xs font-medium tracking-wider uppercase">
              {category.title}
            </strong>
          </div>
          <menu className="grid md:grid-cols-2 md:gap-x-5 lg:gap-y-7">
            {category.products.map((product) => (
              <NavigationMenuLink
                key={product.id}
                href={product.href}
                className="group border-border flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
              >
                <div className="relative flex aspect-square w-6 shrink-0 items-center justify-center overflow-clip rounded md:size-9 md:p-2">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="flex-1">
                  <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                    {product.title}
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                    {product.description}
                  </p>
                </div>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
              </NavigationMenuLink>
            ))}
          </menu>
        </div>
      ))}
    </div>
  </div>
);

const GlobalGuidanceMenu = () => (
  <div>
    <div className="space-y-6 lg:flex lg:space-y-0 lg:space-x-8">
      <div className="w-full shrink-0 lg:max-w-[18rem]">
        <a
          href="#"
          className="group text-primary-foreground relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
        >
          <div className="relative z-10 flex w-full flex-col-reverse text-left lg:flex-col">
            <div className="relative flex aspect-4/3 max-h-[18rem] w-full flex-1 justify-center">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt="placeholder"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="bg-primary relative z-20 mt-auto flex flex-col rounded-b-xl p-6">
              <div className="flex items-center space-x-1 text-xs">
                AI Transformation Journey
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-primary-foreground/85 mt-2 text-xs">
                Empower your business to work smarter with tailored AI
                solutions.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid w-full gap-y-12 lg:gap-y-6">
        {globalCategories.map((category) => (
          <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
            <div className="border-border text-left lg:border-b lg:pb-3">
              <strong className="text-muted-foreground text-left text-xs font-medium tracking-wider uppercase">
                {category.title}
              </strong>
            </div>
            <menu className="grid md:grid-cols-3 md:gap-x-6 lg:gap-y-6">
              {category.features.map((feature) => (
                <NavigationMenuLink
                  key={feature.id}
                  href="#"
                  className="group border-border flex flex-row items-center space-x-4 border-b py-5 text-left sm:py-7 lg:border-0 lg:py-0"
                >
                  <div className="flex aspect-square size-9 shrink-0 items-center justify-center">
                    <feature.icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                      {feature.title}
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                </NavigationMenuLink>
              ))}
            </menu>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CustomersMenu = () => (
  <div className="md:grid-col-2 grid gap-y-8 md:gap-x-6 lg:grid-cols-4">
    <div className="md:col-span-2">
      <a
        href="/case-studies"
        className="group bg-accent text-accent-foreground relative flex h-full flex-row overflow-hidden rounded-lg p-0 pr-0 pl-0 sm:pl-6 md:pr-6 lg:rounded-xl lg:px-6"
      >
        <div className="relative z-10 flex w-full flex-col text-left sm:flex-row sm:items-end sm:justify-between">
          <div className="relative z-20 flex max-w-[18rem] flex-col py-6 pt-6 pb-10 pl-6 sm:pt-16 sm:pb-6 sm:pl-0 md:max-w-[16rem] lg:pt-6">
            <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
              Success Stories
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs">
              See how organizations are achieving operational excellence through
              AI-driven automation and strategic consulting.
            </p>
          </div>
          <div className="border-border flex h-full border-t sm:mr-[20%] sm:w-[110px] sm:border-none">
            <div className="border-border relative grid w-1/2 border-x sm:w-full">
              <div className="relative flex items-center justify-center border-b p-4">
                <img
                  src="/images/clients/samsung.svg"
                  alt="Samsung logo"
                  className="h-4 w-full"
                />
                <div className="bg-accent absolute top-0 left-0 flex translate-x-[-50%] translate-y-[-50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
                <div className="bg-accent absolute top-0 right-0 flex translate-x-[50%] translate-y-[-50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
                <div className="bg-accent absolute bottom-0 left-0 flex translate-x-[-50%] translate-y-[50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
                <div className="bg-accent absolute right-0 bottom-0 flex translate-x-[50%] translate-y-[50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
              </div>
              <div className="relative flex items-center justify-center border-b p-4">
                <img
                  src="/images/clients/ziggo.svg"
                  alt="Ziggo logo"
                  className="h-4 w-full"
                />
                <div className="bg-accent absolute bottom-0 left-0 flex translate-x-[-50%] translate-y-[50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
                <div className="bg-accent absolute right-0 bottom-0 flex translate-x-[50%] translate-y-[50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
              </div>
              <div className="relative flex items-center justify-center border-b p-4">
                <img
                  src="/images/clients/stadswerk072.svg"
                  alt="Stadswerk072 logo"
                  className="h-4 w-full"
                />
                <div className="bg-accent absolute bottom-0 left-0 flex translate-x-[-50%] translate-y-[50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
                <div className="bg-accent absolute right-0 bottom-0 flex translate-x-[50%] translate-y-[50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
              </div>
              <div className="relative flex items-center justify-center p-4">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg"
                  alt="placeholder"
                  className="h-4 w-full"
                />
                <div className="bg-accent absolute bottom-0 left-0 flex translate-x-[-50%] translate-y-[50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
                <div className="bg-accent absolute right-0 bottom-0 flex translate-x-[50%] translate-y-[50%] items-center justify-center p-2">
                  <div className="bg-border size-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <a
      href="/case-studies/samsung"
      className="group bg-primary text-primary-foreground flex flex-row overflow-clip rounded-lg lg:flex lg:flex-col-reverse lg:rounded-xl"
    >
      <div className="mt-6 px-6 pb-6 text-left lg:mt-12 lg:pb-6">
        <span className="inline-block max-w-[12rem] text-xs/5 font-medium">
          Unlock innovation with cutting-edge AI solutions.
        </span>
      </div>
      <div className="mb-6 flex whitespace-nowrap lg:mb-0">
        <div className="border-primary-foreground/15 flex w-full border-y"></div>
        <div className="border-primary-foreground/15 relative flex aspect-12/5 w-full max-w-[12rem] shrink-0 items-center justify-center border">
          <div className="bg-primary absolute top-0 left-0 flex translate-x-[-50%] translate-y-[-50%] items-center justify-center p-2">
            <div className="bg-primary-foreground size-1 rounded-full"></div>
          </div>
          <div className="bg-primary absolute right-0 bottom-0 flex translate-x-[50%] translate-y-[50%] items-center justify-center p-2">
            <div className="bg-primary-foreground size-1 rounded-full"></div>
          </div>
          <img
            src="/images/clients/samsung.svg"
            alt="Samsung logo"
            className="w-1/2 object-contain object-center opacity-100 invert transition-all duration-100 group-hover:scale-[1.1]"
          />
        </div>
        <div className="border-primary-foreground/15 flex w-full border-y"></div>
      </div>
    </a>
    <div className="col-span-1">
      <a
        href="/services/ai-scan"
        className="group bg-accent text-accent-foreground flex h-full flex-col-reverse overflow-hidden rounded-lg md:flex-col lg:rounded-xl"
      >
        <div className="border-border mb-5 flex justify-between border-y pl-6 md:mt-12 md:mb-0">
          <div className="border-border relative aspect-square w-16 border-x p-4">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              alt="placeholder"
              className="h-auto w-full object-contain"
            />
            <div className="bg-accent absolute top-0 left-0 flex translate-x-[-50%] translate-y-[-50%] items-center justify-center p-2">
              <div className="bg-border size-1 rounded-full"></div>
            </div>
            <div className="bg-accent absolute top-0 right-0 flex translate-x-[50%] translate-y-[-50%] items-center justify-center p-2">
              <div className="bg-border size-1 rounded-full"></div>
            </div>
            <div className="bg-accent absolute bottom-0 left-0 flex translate-x-[-50%] translate-y-[50%] items-center justify-center p-2">
              <div className="bg-border size-1 rounded-full"></div>
            </div>
            <div className="bg-accent absolute right-0 bottom-0 flex translate-x-[50%] translate-y-[50%] items-center justify-center p-2">
              <div className="bg-border size-1 rounded-full"></div>
            </div>
          </div>
          <div className="border-border relative aspect-square w-16 border-l p-4">
            <div className="bg-accent absolute top-0 left-0 flex translate-x-[-50%] translate-y-[-50%] items-center justify-center p-2">
              <div className="bg-border size-1 rounded-full"></div>
            </div>
            <div className="bg-accent absolute bottom-0 left-0 flex translate-x-[-50%] translate-y-[50%] items-center justify-center p-2">
              <div className="bg-border size-1 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="p-6 text-left md:mt-auto">
          <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
            Start Your AI Journey
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </div>
          <p className="text-muted-foreground mt-2 text-xs">
            Transform your business with AI-driven automation today.
          </p>
        </div>
      </a>
    </div>
  </div>
);

const PartnersMenu = () => (
  <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4">
    <div className="md:col-span-2">
      <a
        href="/services/ai-center-of-excellence"
        className="group bg-primary text-primary-foreground relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pt-6 pb-[14rem] md:pt-40 md:pb-6">
            <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
              AI Center of Excellence
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs">
              Build internal AI competency and lead your industry with our
              comprehensive training and support programs.
            </p>
          </div>
          <div className="bg-accent absolute inset-0 top-[32%] invert md:top-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="object-fit h-full w-full object-top-right opacity-100 md:h-2/3 md:object-top"
            />
          </div>
        </div>
      </a>
    </div>
    <div className="md:col-span-1">
      <a
        href="/strategic-partners"
        className="group bg-accent text-accent-foreground relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pt-6 pb-[14rem] md:pt-40 md:pb-6">
            <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
              Strategic Partners
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-muted-foreground mt-2 text-xs">
              Collaborate with us to deliver innovative AI solutions.
            </p>
          </div>
          <div className="absolute inset-0 top-[32%] md:top-0">
            <img
              src="https://c.stocksy.com/a/Gi7O00/z9/5749524.jpg"
              alt="placeholder"
              className="object-fit h-full w-full object-top-right md:h-2/3 md:object-top"
            />
          </div>
        </div>
      </a>
    </div>
    <div className="grid gap-4 md:col-span-1">
      <NavigationMenuLink
        href="/implementation-partners"
        className="group border-border flex w-full flex-row items-center rounded-lg border lg:rounded-xl"
      >
        <div className="flex items-start p-6 text-left">
          <Users className="size-8" />
          <div className="ml-4">
            <div className="text-foreground/85 hover:text-foreground mt-auto mb-1 text-sm font-semibold">
              Implementation Partners
            </div>
            <p className="text-muted-foreground group-hover:text-foreground text-xs">
              Expert partners for seamless AI deployment.
            </p>
          </div>
        </div>
      </NavigationMenuLink>
      <NavigationMenuLink
        href="/technology-partners"
        className="group border-border flex w-full flex-row items-center rounded-lg border lg:rounded-xl"
      >
        <div className="flex items-start p-6 text-left">
          <Computer className="size-8" />
          <div className="ml-4">
            <div className="text-foreground/85 hover:text-foreground mt-auto mb-1 text-sm font-semibold">
              Technology Partners
            </div>
            <p className="text-muted-foreground group-hover:text-foreground text-xs">
              Leading-edge technology for optimal results.
            </p>
          </div>
        </div>
      </NavigationMenuLink>
    </div>
  </div>
);

// const ResourcesMenu = () => (
//   <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-6">
//     <div className="col-span-1">
//       <a
//         href="#"
//         className="group bg-primary text-primary-foreground relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
//       >
//         <div className="relative z-10 flex w-full flex-col-reverse text-left">
//           <div className="relative z-20 flex flex-col px-6 pt-6 pb-[14rem] md:pt-40 md:pb-6">
//             <div className="mt-auto flex items-center space-x-1 text-xs">
//               Resource Center
//               <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
//             </div>
//             <p className="mt-2 text-xs">
//               Access whitepapers, case studies, and AI implementation guides to
//               accelerate your transformation.
//             </p>
//           </div>
//           <div className="absolute inset-0">
//             <img
//               src="/images/layout/banner-navabar.jpg"
//               alt="placeholder"
//               className="h-full w-full object-cover object-center"
//             />
//           </div>
//           <div className="absolute inset-x-0 top-0 z-10 h-[60%] bg-[linear-gradient(hsl(var(--color-primary))_50%,transparent)] md:top-auto md:bottom-[-10%] md:h-[50%] md:bg-[linear-gradient(transparent,hsl(var(--color-primary))_50%)]"></div>
//         </div>
//       </a>
//     </div>
//     <div className="lg:col-span-2 lg:flex lg:flex-col">
//       <div>
//         <div className="border-border mb-4 pb-3 text-left md:mb-6 lg:border-b">
//           <strong className="text-muted-foreground text-left text-xs font-medium tracking-wider uppercase">
//             Featured Resources
//           </strong>
//         </div>
//       </div>
//       <menu className="grid gap-y-4 lg:h-full lg:grid-cols-2 lg:gap-6">
//         {resources.map((resource) => (
//           <NavigationMenuLink
//             key={resource.id}
//             href={resource.href}
//             className="group border-border bg-accent lg:bg-background flex flex-row items-center space-x-4 rounded-md px-6 py-5 text-left md:space-x-5 lg:border lg:p-5"
//           >
//             <resource.icon className="size-6 sm:size-7" />
//             <div className="ml-4 flex-1">
//               <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
//                 {resource.title}
//               </div>
//               <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
//                 {resource.description}
//               </p>
//             </div>
//             <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
//           </NavigationMenuLink>
//         ))}
//       </menu>
//     </div>
//     <div className="col-span-1 md:col-span-2 lg:col-span-1">
//       {topicGroups.map((group) => (
//         <Fragment key={group.title}>
//           <div className="border-border mb-4 pb-3 text-left md:col-span-2 md:mb-7 lg:border-b">
//             <strong className="text-muted-foreground text-left text-xs font-medium tracking-wider uppercase">
//               Learning & Support
//             </strong>
//           </div>
//           <menu className="mb-7 grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-1 lg:gap-x-0">
//             {group.topics.map((topic) => (
//               <NavigationMenuLink
//                 key={topic.id}
//                 href={topic.href}
//                 className="group border-border flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-8 lg:space-x-4 lg:border-0 lg:py-0"
//               >
//                 <div className="flex aspect-square size-9 shrink-0 items-center justify-center">
//                   <topic.icon className="size-5" />
//                 </div>
//                 <div className="text-foreground/85 group-hover:text-foreground flex-1 text-xs font-medium md:text-sm">
//                   {topic.title}
//                 </div>
//                 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
//               </NavigationMenuLink>
//             ))}
//           </menu>
//         </Fragment>
//       ))}
//     </div>
//   </div>
// );

const Navbar4 = () => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<
    | 'solutions'
    | 'products'
    | 'global'
    | 'customers'
    | 'partners'
    | 'resources'
    | null
  >(null);
  return (
    <header className="bg-sand-100 relative z-50">
      <div className="container">
        <NavigationMenu className="min-w-full">
          <div className="flex w-full justify-between gap-2 py-4">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/images/layout/logo.svg"
                alt="Streamline"
                className="h-7 w-auto"
              />
              {/* <span className="text-lg font-semibold tracking-tighter">
                Cerebello
              </span> */}
            </a>
            <div className="flex items-center gap-2 xl:gap-8">
              <NavigationMenuList className="hidden lg:flex">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <SolutionsMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <ProductsMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about"
                    className="group bg-background hover:bg-muted hover:text-accent-foreground inline-flex w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <GlobalGuidanceMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    Case Studies
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <CustomersMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    AI Center of Excellence
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <PartnersMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <ResourcesMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild className="hidden md:flex" size="sm">
                <Link href="/services/ai-scan">
                  Schedule AI Scan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Main Menu"
                className="lg:hidden"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                    setSubmenu(null);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="border-border bg-sand-100 fixed inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t lg:hidden">
              {submenu && (
                <div className="mt-3 px-[1rem]">
                  <Button variant="link" onClick={() => setSubmenu(null)}>
                    <ArrowLeft className="mr-2 size-4 text-xs" />
                    Go back
                  </Button>
                </div>
              )}
              {submenu === null && (
                <div>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-6 text-left"
                    onClick={() => setSubmenu('solutions')}
                  >
                    <span className="flex-1 text-sm font-medium">
                      Solutions
                    </span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-6 text-left"
                    onClick={() => setSubmenu('products')}
                  >
                    <span className="flex-1 text-sm font-medium">Products</span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-6 text-left"
                    onClick={() => setSubmenu('global')}
                  >
                    <span className="flex-1 text-sm font-medium">About</span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-6 text-left"
                    onClick={() => setSubmenu('customers')}
                  >
                    <span className="flex-1 text-sm font-medium">
                      Case Studies
                    </span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-6 text-left"
                    onClick={() => setSubmenu('partners')}
                  >
                    <span className="flex-1 text-sm font-medium">
                      AI Center of Excellence
                    </span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                  {/* <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-6 text-left"
                    onClick={() => setSubmenu('resources')}
                  >
                    <span className="flex-1 text-sm font-medium">
                      Resources
                    </span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button> */}
                </div>
              )}
              {submenu === 'solutions' && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Solutions</h2>
                  <SolutionsMenu />
                </div>
              )}
              {submenu === 'products' && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Products</h2>
                  <ProductsMenu />
                </div>
              )}
              {submenu === 'global' && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Company</h2>
                  <GlobalGuidanceMenu />
                </div>
              )}
              {submenu === 'customers' && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Customers</h2>
                  <CustomersMenu />
                </div>
              )}
              {submenu === 'partners' && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Partners</h2>
                  <PartnersMenu />
                </div>
              )}
              {/* {submenu === 'resources' && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Resources</h2>
                  <ResourcesMenu />
                </div>
              )} */}
              {/* Mobile menu footer */}
              <div className="mx-[2rem] mt-auto flex flex-col items-center gap-8 py-24">
                <Button size="sm">Get Started</Button>
                <div className="flex flex-col items-center gap-2">
                  <a
                    href="/contact"
                    className="text-foreground/85 hover:text-foreground text-xs"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </header>
  );
};

export { Navbar4 };
