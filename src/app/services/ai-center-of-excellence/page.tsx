import Link from 'next/link';

import {
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Building2,
  Rocket,
  Settings,
  Shield,
} from 'lucide-react';
import { Metadata } from 'next';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { StructuredData } from '@/components/structured-data';
import { generateServiceSchema, generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title:
    'AI Center of Excellence - Strategic AI Governance & Enterprise Transformation | Cerebello',
  description:
    'Build a world-class AI Center of Excellence with Cerebello. Establish strategic AI governance, drive enterprise-wide adoption, and accelerate innovation. Proven frameworks for sustainable AI transformation across your organization.',
  keywords: [
    'AI Center of Excellence',
    'AI governance',
    'AI strategy',
    'enterprise AI transformation',
    'AI leadership',
    'digital innovation',
    'AI adoption framework',
    'AI organizational maturity',
    'AI consulting Netherlands',
    'strategic AI planning',
    'AI capabilities development',
    'enterprise AI governance',
    'AI transformation consulting',
    'Cerebello',
  ].join(', '),
  authors: [{ name: 'Cerebello' }],
  creator: 'Cerebello',
  publisher: 'Cerebello',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title:
      'AI Center of Excellence: Strategic AI Governance & Enterprise Transformation',
    description:
      'Build a world-class AI Center of Excellence with expert guidance from Cerebello. Establish governance frameworks, drive adoption, and accelerate innovation across your enterprise with proven methodologies.',
    url: '/services/ai-center-of-excellence',
    siteName: 'Cerebello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/services/ai-center-of-excellence-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Cerebello AI Center of Excellence - Strategic AI Governance and Enterprise Transformation Service',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Center of Excellence - Strategic AI Transformation | Cerebello',
    description:
      'Build enterprise AI capabilities with proven frameworks. Strategic governance, adoption acceleration, and innovation leadership for sustainable AI transformation.',
    images: ['/images/services/ai-center-of-excellence-hero.jpg'],
    creator: '@cerebello_ai',
    site: '@cerebello_ai',
  },
  alternates: {
    canonical: '/services/ai-center-of-excellence',
  },
  category: 'AI Consulting Services',
};

const AICenterOfExcellencePage = () => {
  const structuredData = [
    generateServiceSchema({
      name: 'AI Center of Excellence',
      description:
        'Strategic AI governance and enterprise transformation service to establish a world-class AI Center of Excellence',
      url: '/services/ai-center-of-excellence',
      category: 'AI Transformation',
      serviceType: 'AI Consulting',
      offers: [
        {
          name: 'AI Governance & Ethics Framework',
          description: 'Establish ethical guidelines and compliance standards',
        },
        {
          name: 'Innovation & Research Hub',
          description:
            'Foster AI innovation and emerging technology evaluation',
        },
        {
          name: 'Talent & Capability Development',
          description:
            'Build internal AI capabilities through training programs',
        },
        {
          name: 'Strategic AI Planning',
          description: 'Align AI initiatives with business objectives',
        },
      ],
      aggregateRating: {
        ratingValue: '4.9',
        ratingCount: '127',
        bestRating: '5',
      },
    }),
    generateWebPageSchema({
      name: 'AI Center of Excellence - Strategic AI Governance',
      description:
        'Build a world-class AI Center of Excellence with expert guidance. Establish governance, drive adoption, and accelerate innovation.',
      url: '/services/ai-center-of-excellence',
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        {
          name: 'AI Center of Excellence',
          url: '/services/ai-center-of-excellence',
        },
      ],
    }),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/company-talk.jpg"
            alt="Strategic business meeting"
            className="h-full w-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-inter-tight mb-6 text-4xl font-semibold tracking-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl">
              Build Your AI Center of Excellence
            </h1>
            <p className="font-inter mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Establish a strategic hub for AI governance, innovation, and
              enterprise-wide adoption. Drive sustainable transformation with
              expert guidance and proven frameworks.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Start Your AI CoE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Download Framework Guide
              </Button>
            </div>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 border-white/20 bg-white/10 text-white"
              >
                <CheckCircle className="h-5 w-5 text-white" />
                <span>Strategic Governance</span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 border-white/20 bg-white/10 text-white"
              >
                <CheckCircle className="h-5 w-5 text-white" />
                <span>Innovation Hub</span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 border-white/20 bg-white/10 text-white"
              >
                <CheckCircle className="h-5 w-5 text-white" />
                <span>Enterprise Adoption</span>
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
                Why Establish an AI Center of Excellence?
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <p className="font-inter-tight text-foreground font-l mb-2 text-5xl font-semibold">
                  3x
                </p>
                <p className="text-muted-foreground">
                  faster AI project delivery with centralized expertise
                </p>
              </div>
              <div className="text-center">
                <p className="font-inter-tight text-foreground mb-2 text-5xl font-semibold">
                  85%
                </p>
                <p className="text-muted-foreground">
                  reduction in AI project failures through governance
                </p>
              </div>
              <div className="text-center">
                <p className="font-inter-tight text-foreground mb-2 text-5xl font-semibold">
                  40%
                </p>
                <p className="text-muted-foreground">
                  cost savings through shared resources and standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-inter-tight text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Core Functions of Your AI CoE
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                A comprehensive framework for AI excellence across your
                organization
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Shield className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>AI Governance & Ethics</CardTitle>
                  <CardDescription>
                    Responsible AI implementation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Establish ethical guidelines, risk management frameworks,
                    and compliance standards. Ensure AI deployments align with
                    business values and regulatory requirements while
                    maintaining transparency and accountability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lightbulb className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Innovation & Research</CardTitle>
                  <CardDescription>
                    Driving cutting-edge AI initiatives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Foster innovation through proof-of-concept development,
                    emerging technology evaluation, and strategic partnerships.
                    Create an environment for experimentation and breakthrough
                    AI solutions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Talent & Capability</CardTitle>
                  <CardDescription>Building AI expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Develop internal AI capabilities through training programs,
                    certification paths, and career development. Build a
                    community of AI practitioners and champions across
                    departments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Settings className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Standards & Methodology</CardTitle>
                  <CardDescription>
                    Consistent AI development practices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Define standardized approaches for AI project management,
                    data quality, model development, and deployment. Create
                    reusable templates and best practices for enterprise-wide
                    consistency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Strategic Alignment</CardTitle>
                  <CardDescription>
                    Business-driven AI priorities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ensure AI initiatives align with business objectives through
                    strategic planning, portfolio management, and ROI tracking.
                    Prioritize high-impact use cases and manage resource
                    allocation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Rocket className="text-primary mb-4 h-8 w-8" />
                  <CardTitle>Delivery & Operations</CardTitle>
                  <CardDescription>
                    Scaling AI across the enterprise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provide shared services for AI infrastructure, data
                    platforms, and deployment capabilities. Enable business
                    units to rapidly implement AI solutions with proven patterns
                    and support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="bg-sand-100 overflow-hidden py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Our Implementation Approach
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Structured methodology to establish and mature your AI Center of
                Excellence
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="bg-background rounded-lg p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-mint/20 dark:bg-mint/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Foundation Phase</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Establish the organizational structure and initial
                  capabilities:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Define charter, mission, and success metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Recruit and structure the core team
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Establish governance framework and policies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Launch initial pilot projects
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-mint/20 dark:bg-mint/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Expansion Phase</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Scale capabilities and broaden organizational impact:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Develop standardized methodologies and toolkits
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Launch training and certification programs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Build shared AI infrastructure and platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Establish innovation labs and research initiatives
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-mint/20 dark:bg-mint/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Optimization Phase</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Achieve enterprise-wide AI excellence and continuous
                  improvement:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Implement advanced analytics and MLOps
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Foster cross-functional AI communities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Drive industry partnerships and thought leadership
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Establish continuous learning and adaptation
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-mint/20 dark:bg-mint/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <span className="text-sm font-semibold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold">Evolution Phase</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Lead industry innovation and create competitive advantage:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Pioneer emerging AI technologies and trends
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Create AI-driven business model innovations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Establish external AI ecosystem partnerships
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">
                      Achieve AI-first organizational culture
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Measuring AI CoE Success
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                Key performance indicators to track your AI Center of Excellence
                impact
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="text-primary mx-auto mb-2 h-8 w-8" />
                  <CardTitle className="text-lg">Business Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>Revenue from AI initiatives</li>
                    <li>Cost savings achieved</li>
                    <li>Process efficiency gains</li>
                    <li>Customer satisfaction improvement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Rocket className="text-primary mx-auto mb-2 h-8 w-8" />
                  <CardTitle className="text-lg">Delivery Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>Time-to-market for AI solutions</li>
                    <li>Project success rate</li>
                    <li>Quality metrics and SLAs</li>
                    <li>Stakeholder satisfaction</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="text-primary mx-auto mb-2 h-8 w-8" />
                  <CardTitle className="text-lg">Capability Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>AI-skilled employees trained</li>
                    <li>Certification completions</li>
                    <li>Internal AI community size</li>
                    <li>Knowledge sharing activities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Building2 className="text-primary mx-auto mb-2 h-8 w-8" />
                  <CardTitle className="text-lg">
                    Organizational Maturity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>AI governance compliance</li>
                    <li>Departments engaged</li>
                    <li>Reusable assets created</li>
                    <li>Innovation pipeline health</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-mint py-16 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Success Story: Enterprise AI Transformation
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gray-700 dark:text-gray-300">
                How a Fortune 500 company built a world-class AI Center of
                Excellence
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-semibold">The Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    A multinational manufacturing company faced significant AI
                    adoption challenges:
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Fragmented AI efforts across business units</li>
                    <li>• Lack of standardized approaches and governance</li>
                    <li>• Limited AI expertise and capabilities</li>
                    <li>• Inconsistent ROI from AI investments</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-semibold">
                    Our AI CoE Solution
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We established a comprehensive AI Center of Excellence:
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Centralized AI strategy and governance</li>
                    <li>• Cross-functional team of AI specialists</li>
                    <li>• Standardized methodologies and tools</li>
                    <li>• Enterprise-wide training programs</li>
                  </ul>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="grid gap-4 text-center sm:grid-cols-4">
                <div>
                  <p className="font-inter-tight text-foreground text-3xl font-semibold">
                    300%
                  </p>
                  <p className="text-muted-foreground text-sm">
                    increase in AI project success rate
                  </p>
                </div>
                <div>
                  <p className="font-inter-tight text-foreground text-3xl font-semibold">
                    18
                  </p>
                  <p className="text-muted-foreground text-sm">
                    months to enterprise-wide adoption
                  </p>
                </div>
                <div>
                  <p className="font-inter-tight text-foreground text-3xl font-semibold">
                    €50M
                  </p>
                  <p className="text-muted-foreground text-sm">
                    in documented cost savings
                  </p>
                </div>
                <div>
                  <p className="font-inter-tight text-foreground text-3xl font-semibold">
                    500+
                  </p>
                  <p className="text-muted-foreground text-sm">
                    employees trained in AI
                  </p>
                </div>
              </div>

              <blockquote className="mt-8 text-center text-lg leading-7 font-semibold tracking-tight text-balance">
                "The AI Center of Excellence transformed our approach to AI from
                scattered experiments to strategic advantage. We now lead our
                industry in AI-driven innovation and operational excellence."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSimple
        title="Ready to Build Your AI Center of Excellence?"
        description="Join the organizations that have established AI as a strategic capability. Let's create a framework for sustainable AI transformation across your enterprise."
        primaryButtonText="Schedule Strategic Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Download CoE Framework"
        secondaryButtonHref="/contact"
        footerText="Strategic consultation • Proven frameworks • Expert guidance"
      />
    </>
  );
};

export default AICenterOfExcellencePage;
