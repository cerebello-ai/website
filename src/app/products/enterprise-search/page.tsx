import Link from 'next/link';

import {
  Search,
  Database,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  MessageSquare,
  FileText,
  Users,
  Clock,
} from 'lucide-react';
import { Metadata } from 'next';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { StructuredData } from '@/components/structured-data';
import { generateServiceSchema, generateWebPageSchema } from '@/lib/schema';
import { Marquee } from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import AnimatedTeamHeading from '@/components/animated-team-heading';

export const metadata: Metadata = {
  title: 'Enterprise Search & AI Assistant | Cerebello',
  description:
    'Transform how your team finds information with our Enterprise Search & AI Assistant. Search across Notion, Confluence, Google Drive, and more to get instant answers from your company documents.',
  keywords:
    'enterprise search, AI assistant, document search, knowledge management, workplace search, team productivity, information retrieval, Cerebello',
  openGraph: {
    title: 'Enterprise Search & AI Assistant - Find Information Faster',
    description:
      'AI-powered search across all your team tools. Get instant answers from documents, streamline knowledge sharing, and boost productivity.',
    type: 'website',
    images: [
      {
        url: '/images/products/enterprise-search-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Cerebello Enterprise Search & AI Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Search & AI Assistant by Cerebello',
    description:
      'Transform how your team finds information. AI-powered search across all your company tools.',
    images: ['/images/products/enterprise-search-hero.jpg'],
  },
  alternates: {
    canonical: '/products/enterprise-search',
  },
};

const EnterpriseSearchPage = () => {
  const structuredData = [
    generateServiceSchema({
      name: 'Enterprise Search & AI Assistant',
      description:
        'AI-powered search platform that helps teams find information faster across internal tools like Notion, Confluence, Google Drive, and more.',
      url: '/products/enterprise-search',
      category: 'Enterprise Software',
      serviceType: 'AI Search Platform',
      offers: [
        {
          name: 'Universal Search',
          description:
            'Search across all your team applications from one interface',
        },
        {
          name: 'AI-Powered Answers',
          description:
            'Get instant answers from your company documents using AI',
        },
        {
          name: 'Secure Integration',
          description:
            'Enterprise-grade security with granular permission controls',
        },
        {
          name: 'Custom Deployment',
          description:
            'Flexible deployment options including on-premise solutions',
        },
      ],
      aggregateRating: {
        ratingValue: '4.9',
        ratingCount: '127',
        bestRating: '5',
      },
    }),
    generateWebPageSchema({
      name: 'Enterprise Search & AI Assistant',
      description:
        'Transform how your team finds information with AI-powered search across all your company tools and documents.',
      url: '/products/enterprise-search',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Enterprise Search', url: '/products/enterprise-search' },
      ],
    }),
  ];

  const integrations = [
    {
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
      name: 'Slack',
      className: '',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      name: 'Notion',
      className: '',
    },
    {
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      name: 'GitHub',
      className: 'dark:invert',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg',
      name: 'Google Drive',
      className: '',
    },
    {
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg',
      name: 'Confluence',
      className: '',
    },
    {
      image: 'https://www.svgrepo.com/show/448240/microsoft-teams.svg',
      name: 'Microsoft Teams',
      className: '',
    },
    {
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      name: 'Jira',
      className: '',
    },
    {
      image: 'https://www.svgrepo.com/show/353674/dropbox.svg',
      name: 'Dropbox',
      className: '',
    },
  ];

  const features = [
    {
      icon: Search,
      title: 'Universal Search',
      description:
        'Search across all your team applications from a single, unified interface.',
    },
    {
      icon: MessageSquare,
      title: 'AI-Powered Answers',
      description:
        'Get instant, contextual answers from your company documents using advanced AI.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Granular permission controls ensure users only see what they should see.',
    },
    {
      icon: Zap,
      title: 'Real-time Sync',
      description:
        'Always up-to-date information with real-time synchronization across all sources.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Share knowledge and insights seamlessly across your organization.',
    },
    {
      icon: Database,
      title: 'Smart Indexing',
      description:
        'Intelligent document processing and indexing for lightning-fast search results.',
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://c.stocksy.com/a/0NGO00/z9/5782802.jpg"
            alt="Team collaboration with technology"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedTeamHeading />
            <p className="font-inter mx-auto mt-6 mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Transform how your team works with our Enterprise Search & AI
              Assistant. Search across Notion, Confluence, Google Drive, and
              more to get instant answers from all your company documents.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/products/enterprise-search-visual">View Demo</Link>
              </Button>
            </div>

            <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 border-white/20 bg-white/10 px-4 py-2 text-white"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-white" />
                <span className="whitespace-nowrap">40+ Integrations</span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 border-white/20 bg-white/10 px-4 py-2 text-white"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-white" />
                <span className="whitespace-nowrap">Enterprise Security</span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 border-white/20 bg-white/10 px-4 py-2 text-white"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-white" />
                <span className="whitespace-nowrap">Custom Deployment</span>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-mint-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h2 className="text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
                Why Teams Choose Our Search Platform
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <p className="font-inter-tight text-foreground mb-2 text-5xl font-semibold">
                  75%
                </p>
                <p className="text-muted-foreground">
                  reduction in time spent searching for information
                </p>
              </div>
              <div className="text-center">
                <p className="font-inter-tight text-foreground mb-2 text-5xl font-semibold">
                  40+
                </p>
                <p className="text-muted-foreground">
                  integrations with popular business tools
                </p>
              </div>
              <div className="text-center">
                <p className="font-inter-tight text-foreground mb-2 text-5xl font-semibold">
                  99.9%
                </p>
                <p className="text-muted-foreground">
                  uptime with enterprise-grade reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-inter-tight text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Powerful Features for Modern Teams
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Everything you need to transform how your team finds and uses
                information
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="text-primary mb-4 h-8 w-8" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-32">
        <div className="container">
          <h2 className="font-inter-tight text-center text-5xl font-medium tracking-tight md:text-7xl">
            Integrated with Your Favorite Apps
          </h2>
          <p className="font-inter text-muted-foreground/80 mx-auto mt-4 max-w-xl text-center tracking-tight md:text-lg">
            Seamlessly connect with 40+ popular business applications to unify
            your team's knowledge base and accelerate productivity.
          </p>

          <div className="relative mt-12">
            <Marquee pauseOnHover className="[--duration:20s]">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-muted flex items-center justify-center gap-4 rounded-full px-5 py-2"
                >
                  <img
                    src={integration.image}
                    alt={integration.name}
                    className={cn('size-5', integration?.className)}
                  />
                  <p className="text-lg">{integration.name}</p>
                </div>
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:20s]">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-muted flex items-center justify-center gap-4 rounded-full px-5 py-2"
                >
                  <img
                    src={integration.image}
                    alt={integration.name}
                    className={cn('size-5', integration?.className)}
                  />
                  <p className="text-lg">{integration.name}</p>
                </div>
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]">
              {[...integrations].reverse().map((integration, index) => (
                <div
                  key={index}
                  className="bg-muted flex items-center justify-center gap-4 rounded-full px-5 py-2"
                >
                  <img
                    src={integration.image}
                    alt={integration.name}
                    className={cn('size-5', integration?.className)}
                  />
                  <p className="text-lg">{integration.name}</p>
                </div>
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:20s]">
              {[...integrations].reverse().map((integration, index) => (
                <div
                  key={index}
                  className="bg-muted flex items-center justify-center gap-4 rounded-full px-5 py-2"
                >
                  <img
                    src={integration.image}
                    alt={integration.name}
                    className={cn('size-5', integration?.className)}
                  />
                  <p className="text-lg">{integration.name}</p>
                </div>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Simple Setup, Powerful Results
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Get up and running in minutes, not months
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-mint/20 dark:bg-mint/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <span className="font-inter-tight text-foreground text-xl font-semibold">
                    1
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">
                  Connect Your Tools
                </h3>
                <p className="text-muted-foreground">
                  Connect your existing tools like Notion, Confluence, Google
                  Drive, and Slack with secure OAuth authentication.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-mint/20 dark:bg-mint/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <span className="font-inter-tight text-foreground text-xl font-semibold">
                    2
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">
                  AI Indexes Everything
                </h3>
                <p className="text-muted-foreground">
                  Our AI automatically indexes and processes your documents,
                  respecting permissions and access controls.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-mint/20 dark:bg-mint/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <span className="font-inter-tight text-foreground text-xl font-semibold">
                    3
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">
                  Search & Get Answers
                </h3>
                <p className="text-muted-foreground">
                  Ask questions in natural language and get instant, accurate
                  answers with source citations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-mint py-16 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Perfect for Every Team
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-background rounded-lg p-8">
                <Users className="text-primary mb-4 h-8 w-8" />
                <h3 className="mb-4 text-xl font-semibold">Customer Support</h3>
                <p className="text-muted-foreground mb-4">
                  Find answers to customer questions instantly from knowledge
                  bases, documentation, and past conversations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Reduce response times by 60%
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Improve first-contact resolution
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-8">
                <FileText className="text-primary mb-4 h-8 w-8" />
                <h3 className="mb-4 text-xl font-semibold">Sales Teams</h3>
                <p className="text-muted-foreground mb-4">
                  Access competitive intelligence, product information, and
                  customer insights to close deals faster.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Faster proposal preparation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Better customer insights
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-8">
                <Globe className="text-primary mb-4 h-8 w-8" />
                <h3 className="mb-4 text-xl font-semibold">Engineering</h3>
                <p className="text-muted-foreground mb-4">
                  Search through code repositories, documentation, and technical
                  specifications to solve problems faster.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Reduce debugging time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Better code reusability
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-8">
                <Clock className="text-primary mb-4 h-8 w-8" />
                <h3 className="mb-4 text-xl font-semibold">Product Teams</h3>
                <p className="text-muted-foreground mb-4">
                  Access user research, market analysis, and product
                  requirements to make better decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Data-driven product decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Faster feature development
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Enterprise-Grade Security
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Your data stays private and secure with industry-leading
                protection
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Shield className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Advanced Permissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Granular access controls ensure users only see content
                    they're authorized to access, maintaining your existing
                    security model.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        Document-level permissions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        Role-based access control
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        Real-time sync with source permissions
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Flexible Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Choose from cloud, on-premise, or hybrid deployment options
                    to meet your specific security and compliance requirements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        On-premise deployment available
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        SOC 2 Type II compliant
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        Data encryption at rest and in transit
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSimple
        title="Ready to Transform How Your Team Finds Information?"
        description="Join thousands of teams who've reduced search time by 75% and increased productivity across the board."
        primaryButtonText="Get Started Today"
        primaryButtonHref="/contact"
        secondaryButtonText="View Demo"
        secondaryButtonHref="http://chatemployee.com/"
        footerText="Works out of the box, syncs in real time, with document level access."
      />
    </>
  );
};

export default EnterpriseSearchPage;
