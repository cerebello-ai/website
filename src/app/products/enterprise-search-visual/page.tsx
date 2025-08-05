import Link from 'next/link';

import {
  Search,
  Database,
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

export const metadata: Metadata = {
  title: 'Enterprise Search & AI Assistant - Visual Demo | Cerebello',
  description:
    'See our Enterprise Search & AI Assistant in action. Interactive demo showing how teams search across Notion, Confluence, Google Drive, and more to get instant AI-powered answers.',
  keywords:
    'enterprise search demo, AI assistant interface, document search UI, knowledge management demo, workplace search interface, team productivity tools, Cerebello',
  openGraph: {
    title: 'Enterprise Search & AI Assistant - Interactive Demo',
    description:
      'Experience our AI-powered search platform. See the interface, features, and capabilities in action.',
    type: 'website',
    images: [
      {
        url: '/images/products/enterprise-search-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Cerebello Enterprise Search Dashboard Demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Search Visual Demo by Cerebello',
    description:
      'Interactive demo of our enterprise search platform. See the interface and features.',
    images: ['/images/products/enterprise-search-dashboard.png'],
  },
  alternates: {
    canonical: '/products/enterprise-search-visual',
  },
};

const EnterpriseSearchVisualPage = () => {
  const structuredData = [
    generateServiceSchema({
      name: 'Enterprise Search & AI Assistant',
      description:
        'AI-powered search platform that helps teams find information faster across internal tools like Notion, Confluence, Google Drive, and more.',
      url: '/products/enterprise-search-visual',
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
      url: '/products/enterprise-search-visual',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        {
          name: 'Enterprise Search Demo',
          url: '/products/enterprise-search-visual',
        },
      ],
    }),
  ];

  const integrations = [
    { name: 'Notion', logo: '/images/integrations/notion.svg' },
    { name: 'Confluence', logo: '/images/integrations/confluence.svg' },
    { name: 'Google Drive', logo: '/images/integrations/google-drive.svg' },
    { name: 'Slack', logo: '/images/integrations/slack.svg' },
    { name: 'GitHub', logo: '/images/integrations/github.svg' },
    { name: 'Jira', logo: '/images/integrations/jira.svg' },
    { name: 'SharePoint', logo: '/images/integrations/sharepoint.svg' },
    { name: 'Dropbox', logo: '/images/integrations/dropbox.svg' },
  ];

  /* const features = [
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
  ]; */

  return (
    <>
      <StructuredData data={structuredData} />

      {/* Hero Section */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h1 className="font-inter-tight mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  Find Information Faster Than Ever
                </h1>
                <p className="font-inter text-muted-foreground mb-8 text-lg md:text-xl">
                  Transform how your team works with our Enterprise Search & AI
                  Assistant. Search across Notion, Confluence, Google Drive, and
                  more to get instant answers from all your company documents.
                </p>
                <div className="flex flex-col items-start gap-4 sm:flex-row">
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
                  <Button variant="outline" size="lg">
                    Request Demo
                  </Button>
                </div>

                <div className="mt-8 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3">
                  <Badge
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="text-primary h-4 w-4" />
                    <span>40+ Integrations</span>
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="text-primary h-4 w-4" />
                    <span>Enterprise Security</span>
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="text-primary h-4 w-4" />
                    <span>Custom Deployment</span>
                  </Badge>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="from-primary/10 to-mint/20 rounded-2xl bg-gradient-to-tr p-8">
                <img
                  src="/images/products/enterprise-search-dashboard.png"
                  alt="Enterprise Search Dashboard Interface"
                  className="border-border/50 h-auto w-full rounded-lg border shadow-2xl"
                />
              </div>
              {/* Floating elements for visual interest */}
              <div className="bg-primary/10 absolute -top-4 -right-4 rounded-full p-3">
                <Search className="text-primary h-6 w-6" />
              </div>
              <div className="bg-mint/20 absolute -bottom-4 -left-4 rounded-full p-3">
                <MessageSquare className="text-primary h-6 w-6" />
              </div>
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
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="font-inter-tight text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Powerful Features for Modern Teams
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Everything you need to transform how your team finds and uses
                information
              </p>
            </div>

            {/* Feature 1 - Universal Search */}
            <div className="mb-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6">
                  <Search className="text-primary mb-4 h-10 w-10" />
                  <h3 className="mb-4 text-2xl font-semibold">
                    Universal Search
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Search across all your team applications from a single,
                    unified interface. No more switching between tools to find
                    the information you need.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>One search interface for all your tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Natural language queries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Advanced filtering and sorting</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="from-mint/20 to-primary/10 rounded-2xl bg-gradient-to-br p-6">
                  <img
                    src="/images/products/search-interface.png"
                    alt="Universal Search Interface"
                    className="border-border/50 h-auto w-full rounded-lg border shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2 - AI-Powered Answers */}
            <div className="mb-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="lg:order-2">
                <div className="mb-6">
                  <MessageSquare className="text-primary mb-4 h-10 w-10" />
                  <h3 className="mb-4 text-2xl font-semibold">
                    AI-Powered Answers
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Get instant, contextual answers from your company documents
                    using advanced AI. Complete with source citations and
                    relevant snippets.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Contextual AI responses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Source citations and links</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Follow-up question suggestions</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="from-primary/10 to-mint/20 rounded-2xl bg-gradient-to-br p-6">
                  <img
                    src="/images/products/ai-answers.png"
                    alt="AI-Powered Answers Interface"
                    className="border-border/50 h-auto w-full rounded-lg border shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Feature 3 - Enterprise Security */}
            <div className="mb-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6">
                  <Shield className="text-primary mb-4 h-10 w-10" />
                  <h3 className="mb-4 text-2xl font-semibold">
                    Enterprise Security
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Granular permission controls ensure users only see content
                    they're authorized to access, maintaining your existing
                    security model across all integrated tools.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Document-level permissions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Role-based access control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Real-time permission sync</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="from-mint/20 to-primary/10 rounded-2xl bg-gradient-to-br p-6">
                  <img
                    src="/images/products/security-permissions.png"
                    alt="Security and Permissions Dashboard"
                    className="border-border/50 h-auto w-full rounded-lg border shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Connects With Your Favorite Tools
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Seamlessly integrate with 40+ popular business applications
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 text-center"
                >
                  <img
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="mx-auto mb-4 h-12 w-auto opacity-70 transition-opacity hover:opacity-100"
                  />
                  <p className="text-muted-foreground text-sm font-medium">
                    {integration.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                And many more... Can't find your tool?
                <Link
                  href="/contact"
                  className="text-primary ml-1 hover:underline"
                >
                  Contact us for custom integrations
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Simple Setup, Powerful Results
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Get up and running in minutes, not months
              </p>
            </div>

            <div className="space-y-24">
              {/* Step 1 */}
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="mb-6 flex items-center">
                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <span className="font-inter-tight text-primary text-xl font-semibold">
                        1
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold">
                      Connect Your Tools
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Connect your existing tools like Notion, Confluence, Google
                    Drive, and Slack with secure OAuth authentication. No
                    complex setup required.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>One-click OAuth integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Secure credential management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Support for 40+ platforms</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="from-mint/20 to-primary/10 rounded-2xl bg-gradient-to-br p-6">
                    <img
                      src="/images/products/integration-setup.png"
                      alt="Integration Setup Interface"
                      className="border-border/50 h-auto w-full rounded-lg border shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="lg:order-2">
                  <div className="mb-6 flex items-center">
                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <span className="font-inter-tight text-primary text-xl font-semibold">
                        2
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold">
                      AI Indexes Everything
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Our AI automatically indexes and processes your documents,
                    respecting permissions and access controls while building a
                    comprehensive knowledge base.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Intelligent document processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Permission-aware indexing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Real-time content updates</span>
                    </li>
                  </ul>
                </div>
                <div className="relative lg:order-1">
                  <div className="from-primary/10 to-mint/20 rounded-2xl bg-gradient-to-br p-6">
                    <img
                      src="/images/products/indexing-process.png"
                      alt="AI Indexing Process"
                      className="border-border/50 h-auto w-full rounded-lg border shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="mb-6 flex items-center">
                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <span className="font-inter-tight text-primary text-xl font-semibold">
                        3
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold">
                      Search & Get Answers
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Ask questions in natural language and get instant, accurate
                    answers with source citations. Transform how your team finds
                    information.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Natural language search</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>AI-generated summaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <span>Source citations and links</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="from-mint/20 to-primary/10 rounded-2xl bg-gradient-to-br p-6">
                    <img
                      src="/images/products/search-results.png"
                      alt="Search Results and AI Answers"
                      className="border-border/50 h-auto w-full rounded-lg border shadow-lg"
                    />
                  </div>
                </div>
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
        secondaryButtonText="Schedule Demo"
        secondaryButtonHref="/contact"
        footerText="Free 14-day trial • No credit card required • Custom deployment options available"
      />
    </>
  );
};

export default EnterpriseSearchVisualPage;
