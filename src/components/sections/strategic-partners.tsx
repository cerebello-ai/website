import Link from 'next/link';

import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Award,
  Handshake,
  Rocket,
} from 'lucide-react';

import { Button } from '../ui/button';

const partnershipPrinciples = [
  {
    number: '01',
    title: 'Mutual Success',
    description: 'Win-win partnerships that create value for all stakeholders',
  },
  {
    number: '02',
    title: 'Technical Excellence',
    description: 'Combining expertise to deliver best-in-class solutions',
  },
  {
    number: '03',
    title: 'Long-term Vision',
    description: 'Building relationships that evolve with industry needs',
  },
  {
    number: '04',
    title: 'Shared Innovation',
    description: 'Co-creating the future of AI and automation',
  },
];

const partnerSpotlight = {
  name: 'Ciphix',
  logo: '/images/partners/ciphix-logo.svg', // You'll need to add this
  description:
    'AI and Intelligent Automation company focused on productivity optimization',
  partnership: {
    title: 'Enterprise AI Email Platform for Samsung',
    description:
      "Together with Ciphix, we delivered Samsung's transformative on-premise AI email platform, revolutionizing internal communications while maintaining complete data security.",
    achievements: [
      '50% reduction in email response time',
      '100% on-premise data security maintained',
      '4 departments transformed with AI',
      '>90% employee satisfaction with AI support',
    ],
    quote:
      '"Cerebello\'s solution transformed how our teams handle email communications. The AI understands our context and helps us work smarter, not harder."',
    author: 'Samsung Technology Team',
  },
};

const partnershipTypes = [
  {
    icon: Handshake,
    title: 'Joint Ventures',
    description:
      'Collaborative business ventures targeting specific markets or technologies',
    features: [
      'Shared investment and risk',
      'Combined expertise',
      'New market entry',
    ],
  },
  {
    icon: Rocket,
    title: 'Innovation Labs',
    description: 'Dedicated R&D partnerships for breakthrough AI solutions',
    features: [
      'Cutting-edge research',
      'Patent development',
      'Future technology',
    ],
  },
  {
    icon: Award,
    title: 'Channel Partnerships',
    description:
      'Strategic alliances for market expansion and customer acquisition',
    features: ['Extended reach', 'Local expertise', 'Accelerated growth'],
  },
];

const StrategicPartners = () => {
  return (
    <div className="bg-mint-50">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Strategic Partnerships That{' '}
              <span className="text-primary">Transform Industries</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
              We collaborate with visionary companies to create AI solutions
              that redefine what's possible in business automation and
              intelligence.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="px-8 text-lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Explore Partnerships
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-lg">
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Principles */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Partnership Principles
              </h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              {partnershipPrinciples.map((principle, index) => (
                <div key={index} className="group">
                  <div className="mb-4 flex items-start gap-6">
                    <div className="text-primary/20 flex-shrink-0 text-6xl leading-none font-bold">
                      {principle.number}
                    </div>
                    <div className="pt-2">
                      <h3 className="mb-3 text-xl font-semibold">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Spotlight - Chiphix */}
      <section className="from-primary/5 to-primary/10 bg-gradient-to-br py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Partner Spotlight</h2>
            <p className="text-muted-foreground text-lg">
              Deep dive into how strategic partnerships create exceptional value
            </p>
          </div>

          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Left Side - Partner Info */}
              <div className="p-8 lg:p-12">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                    <span className="text-primary text-2xl font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {partnerSpotlight.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {partnerSpotlight.description}
                    </p>
                  </div>
                </div>

                <h4 className="mb-3 text-xl font-semibold">
                  {partnerSpotlight.partnership.title}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {partnerSpotlight.partnership.description}
                </p>

                <div className="mb-8 space-y-3">
                  {partnerSpotlight.partnership.achievements.map(
                    (achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="font-medium">{achievement}</span>
                      </div>
                    ),
                  )}
                </div>

                <blockquote className="border-primary text-muted-foreground border-l-4 pl-4 italic">
                  {partnerSpotlight.partnership.quote}
                  <footer className="text-foreground mt-2 font-semibold">
                    — {partnerSpotlight.partnership.author}
                  </footer>
                </blockquote>
              </div>

              {/* Right Side - Visual */}
              <div className="from-primary to-primary/80 flex items-center justify-center bg-gradient-to-br p-8 lg:p-12">
                <div className="text-center text-white">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/20">
                    <Zap className="h-12 w-12" />
                  </div>
                  <h4 className="mb-4 text-2xl font-bold">
                    Enterprise AI Email Platform
                  </h4>
                  <p className="mb-6 text-white/90">
                    Combining AI expertise with enterprise security to create
                    transformative communication solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold">50%</div>
                      <div className="text-sm text-white/80">
                        Faster Response
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm text-white/80">Data Security</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Partnership Models</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Flexible partnership structures designed to maximize value for
              both organizations and our mutual customers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="group hover:border-primary/30 rounded-xl border-2 border-gray-100 p-8 transition-all duration-300 hover:shadow-lg"
              >
                <type.icon className="text-primary mb-6 h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mb-4 text-xl font-semibold">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="bg-primary h-2 w-2 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-primary to-primary/90 bg-gradient-to-r py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-white">
            <Users className="mx-auto mb-6 h-16 w-16 opacity-90" />
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Join our network of strategic partners and help shape the future
              of AI-powered business transformation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary bg-white px-8 text-lg hover:bg-gray-100"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start the Conversation
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-primary bg-white px-8 text-lg hover:bg-gray-100"
              >
                <Link href="/resources">Download Partner Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategicPartners;
