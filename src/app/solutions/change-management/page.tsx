import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

import { CtaSimple } from '@/components/sections/cta/cta-simple';
import { FeatureProcessMethodology } from '@/components/sections/feature/feature-process-methodology';
import { RelatedSolutions } from '@/components/sections/related-solutions';
import { StatsProcessAnalysis } from '@/components/sections/stats-process-analysis';
import Testimonials from '@/components/sections/testimonials';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Change Management for AI & Automation | Adoption Strategy | Cerebello',
  description:
    'Guide your organization through successful AI and automation adoption with strategic change management. Address resistance, build trust, and ensure lasting transformation through human-centered approach.',
  keywords:
    'Change Management, AI Adoption, Automation Implementation, Digital Transformation, Employee Training, Organizational Change, Stakeholder Engagement, User Adoption, Change Strategy, Cultural Transformation',
  openGraph: {
    title: 'Change Management for AI & Automation | Cerebello',
    description:
      'Ensure successful AI adoption with strategic change management. Build trust, address resistance, and drive lasting organizational transformation.',
    type: 'article',
    url: 'https://cerebello.nl/solutions/change-management',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Change Management for AI & Automation | Cerebello',
    description:
      'Guide your organization through AI adoption with human-centered change management and strategic communication.',
  },
  alternates: {
    canonical: 'https://cerebello.nl/solutions/change-management',
  },
};

// Testimonials data
const testimonials = [
  {
    slug: 'samsung-ai-adoption',
    quote: 'Cerebello led comprehensive change enablement for our AI-powered email platform across multiple departments. Over 90% of staff reported satisfaction with the AI assistant, transforming how teams handle email while maintaining security.',
    author: 'Kim Sung-ho',
    company: 'Samsung Electronics',
    image: '/images/homepage/testimonials/amy-chase.webp',
  },
  {
    slug: 'logistics-fleet-automation',
    quote: 'Our workforce initially resisted AI-driven scheduling automation. Cerebello\'s human-centric approach turned skeptical operations crews into advocates, reporting that AI made their jobs safer and more efficient.',
    author: 'Captain Elena Rodriguez',
    company: 'OceanicTransCo Global Shipping',
    image: '/images/homepage/testimonials/victoria-smith.webp',
  },
  {
    slug: 'manufacturing-predictive-maintenance',
    quote: 'Change management was critical for our predictive maintenance rollout. Cerebello helped us achieve 200% ROI in the first year by ensuring our technicians fully embraced and utilized the AI-powered monitoring systems.',
    author: 'James Thompson',
    company: 'Advanced Manufacturing Corp',
    image: '/images/homepage/testimonials/kevin-yam.webp',
  },
];

// Methodology steps for Change Management
const changeManagementMethodologySteps = [
  {
    step: '01',
    title: 'Readiness Assessment & Stakeholder Alignment',
    subtitle: 'Foundation Building',
    description: 'Evaluate organizational preparedness through surveys, interviews, and workshops. Map key stakeholders and build coalition for change with early involvement of leadership and influential team members.',
  },
  {
    step: '02',
    title: 'Change Strategy & Planning',
    subtitle: 'Vision Development',
    description: 'Develop customized change management plan with compelling vision, clear case for change, and defined roles. Craft communication strategy focusing on how AI assists rather than replaces employees.',
  },
  {
    step: '03',
    title: 'Communication & Engagement',
    subtitle: 'Trust Building',
    description: 'Maintain transparent communication through town halls, updates, and interactive Q&A sessions. Address fears head-on and highlight quick wins to build understanding and enthusiasm.',
  },
  {
    step: '04',
    title: 'Training & Skill Development',
    subtitle: 'Capability Building',
    description: 'Design role-specific training programs with hands-on workshops, e-learning modules, and coaching. Transform anxiety into empowerment by building confidence with new AI tools.',
  },
  {
    step: '05',
    title: 'Pilot Programs & Feedback Loops',
    subtitle: 'Iterative Implementation',
    description: 'Start with pilot groups to gather feedback and refine approach. Publicize early successes to create positive momentum and peer encouragement throughout the organization.',
  },
  {
    step: '06',
    title: 'Go-Live Support & Continuous Improvement',
    subtitle: 'Sustained Adoption',
    description: 'Provide real-time support during launch and monitor adoption metrics. Maintain feedback channels and conduct follow-up training to ensure lasting cultural transformation.',
  },
];

// Stats and benefits data for Change Management
const changeManagementStats = [
  { label: 'User Satisfaction Rate', value: '90%+' },
  { label: 'Implementation Success Rate', value: '87%' },
  { label: 'Change Program Failure Rate (Industry)', value: '70%' },
  { label: 'Average ROI Achievement', value: '200%' },
];

const changeManagementBenefits = [
  {
    title: 'Stakeholder Alignment & Executive Sponsorship',
    description: 'Build strong coalition for change with clear vision, defined roles, and consistent leadership communication throughout organization',
  },
  {
    title: 'Comprehensive Training & Skill Development',
    description: 'Role-specific programs with hands-on workshops, e-learning, and coaching to build confidence and competency with AI tools',
  },
  {
    title: 'Trust Building & Resistance Management',
    description: 'Address fears proactively through transparent communication, focusing on AI augmentation rather than job replacement',
  },
  {
    title: 'Adoption Monitoring & Continuous Support',
    description: 'Data-driven monitoring of usage metrics with ongoing support and feedback loops to ensure sustained transformation',
  },
];

export default function ChangeManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sand-100 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-inter-tight text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
              Change Management for AI & Automation
            </h2>

            <h1 className="font-inter-tight mb-8 max-w-[900px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Guide People Through AI Transformation
            </h1>

            <div className="font-inter space-y-6 text-lg leading-relaxed">
              <p>
                Introducing cutting-edge AI or automation is only half the battle – the other half is ensuring your people embrace the change. Cerebello's Change Management service focuses on the human side of digital transformation, guiding medium to large organizations through the cultural and organizational shifts that come with AI adoption.
              </p>

              <p>
                Studies show that fear of job loss, lack of trust in AI, and general resistance to change are common barriers to AI adoption. These human factors cause up to 70% of change programs to fail, rather than the technology itself. We help business and technology leaders prepare their teams, align stakeholders, and build trust so that new AI and intelligent systems are not just deployed, but fully adopted and utilized.
              </p>

              <p>
                By prioritizing communication, training, and empathy, we turn potential resistance into enthusiasm, ensuring your AI initiatives deliver lasting value. Our structured, human-centric approach addresses employee fears, builds capabilities, and creates cultural alignment that drives successful transformation with measurable outcomes.
              </p>

              <div className="bg-sand-50 mt-8 rounded-lg p-6">
                <p className="font-inter-tight text-sand-900 text-xl font-medium">
                  Ready to ensure successful AI adoption? Discover how strategic change management can drive lasting transformation.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 mt-6 rounded-sm border"
                >
                  <Link href="/contact" className="">
                    <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                      Schedule Change Assessment
                      <ArrowRight className="size-4 stroke-3" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <FeatureProcessMethodology
        title="Our Change Enablement Methodology"
        description="Follow our human-centered approach to successful AI and automation adoption"
        steps={changeManagementMethodologySteps}
      />

      {/* Stats Section */}
      <StatsProcessAnalysis
        title="Change Management Impact"
        description="Our structured approach delivers measurable adoption success and organizational transformation"
        badge="Success Metrics"
        stats={changeManagementStats}
        benefits={changeManagementBenefits}
      />

      {/* Related Solutions Section */}
      <RelatedSolutions
        title="Complete Your Transformation Journey"
        description="Our Change Management service integrates with our full suite of AI transformation and implementation solutions"
      />

      {/* Testimonial Section */}
      <Testimonials
        testimonials={testimonials}
        title="Change Success Stories"
        description="See how organizations have achieved high adoption rates and employee satisfaction with our change management approach, turning AI initiatives into lasting organizational transformation."
      />

      {/* Call to Action Section */}
      <CtaSimple
        title="Ready to Ensure Successful AI Adoption?"
        description="Join organizations that have achieved lasting AI transformation through strategic change management. Build trust, address resistance, and create the cultural foundation for sustained success."
        primaryButtonText="Start Your Change Journey"
        primaryButtonHref="/contact"
        secondaryButtonText="Change Strategy Consultation"
        secondaryButtonHref="/contact"
        footerText="Change strategy • Training programs • Adoption support"
      />
    </>
  );
}