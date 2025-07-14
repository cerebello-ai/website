import { notFound } from 'next/navigation';

import { Metadata } from 'next';

import { Content1 } from '@/components/shadcnblocks/content/content1';
import { Cta4 } from '@/components/shadcnblocks/cta/cta4';
import { Feature118 } from '@/components/shadcnblocks/feature/feature118';
import { Hero68 } from '@/components/shadcnblocks/hero/hero68';
import { Stats9 } from '@/components/shadcnblocks/stats/stats9';
import { Testimonial16 } from '@/components/shadcnblocks/testimonial/testimonial16';
import { Timeline1 } from '@/components/shadcnblocks/timeline/timeline1';

// Services data
const servicesData = {
  'process-mining-analysis': {
    title: 'Process Mining & Analysis',
    description:
      'Discover optimization opportunities through advanced AI-powered process mining and analysis.',
    shortDescription:
      'Leverage AI-powered process mining to identify bottlenecks and optimization opportunities.',
    introduction:
      'Process Mining & Analysis uses advanced AI techniques to provide deep insights into your business operations, revealing hidden inefficiencies and optimization opportunities.',
    content:
      'Our process mining service combines data science with business expertise to analyze your actual process flows, identify deviations from optimal paths, and provide actionable insights for improvement.',
    benefits: [
      {
        title: 'Real-time Visibility',
        description:
          'Live process visualization showing exactly how work flows through your organization',
      },
      {
        title: 'Bottleneck Detection',
        description:
          'Automatically identify where processes slow down or get stuck',
      },
      {
        title: 'Performance Metrics',
        description:
          'Comprehensive tracking of cycle times, throughput, and efficiency metrics',
      },
      {
        title: 'Compliance Monitoring',
        description:
          'Ensure processes follow required procedures and regulatory requirements',
      },
    ],
    methodology: [
      {
        title: 'Data Integration',
        description:
          'Connect and extract data from your existing systems and databases.',
      },
      {
        title: 'Process Discovery',
        description:
          'Use AI algorithms to automatically discover your actual process flows.',
      },
      {
        title: 'Analysis & Insights',
        description:
          'Generate actionable insights and optimization recommendations.',
      },
    ],
    stats: [
      { label: 'Processes Analyzed', value: '2000+' },
      { label: 'Average Efficiency Gain', value: '40%' },
      { label: 'Cost Reduction', value: '25%' },
      { label: 'Implementation Speed', value: '60% faster' },
    ],
    features: [
      'Real-time Process Visualization',
      'Automated Bottleneck Detection',
      'Performance Metrics Dashboard',
      'Compliance Monitoring',
      'Cost Reduction Analysis',
      'Optimization Recommendations',
    ],
  },
  'intelligent-automation': {
    title: 'Intelligent Automation',
    description:
      'Automate complex business processes using AI, RPA, and machine learning technologies.',
    shortDescription:
      'Transform operations with intelligent automation combining AI and RPA.',
    introduction:
      'Intelligent Automation represents the next evolution of business process automation, combining traditional RPA with AI and machine learning to handle complex, decision-based workflows.',
    content:
      'Our intelligent automation solutions go beyond simple task automation to create thinking robots that can handle exceptions, make decisions, and continuously improve their performance.',
    benefits: [
      {
        title: 'Dramatic Efficiency',
        description:
          'Reduce manual work by up to 80% while increasing processing speed',
      },
      {
        title: 'Enhanced Accuracy',
        description:
          'Eliminate human error with AI-powered quality control and validation',
      },
      {
        title: '24/7 Operations',
        description:
          'Round-the-clock processing without breaks, holidays, or sick days',
      },
      {
        title: 'Scalable Growth',
        description:
          'Easily scale operations up or down based on business demands',
      },
    ],
    methodology: [
      {
        title: 'Process Assessment',
        description:
          'Identify the best automation candidates through detailed analysis.',
      },
      {
        title: 'AI Integration',
        description:
          'Combine RPA with AI for intelligent decision-making capabilities.',
      },
      {
        title: 'Deployment & Optimization',
        description:
          'Deploy solutions with continuous monitoring and improvement.',
      },
    ],
    stats: [
      { label: 'Processes Automated', value: '1500+' },
      { label: 'Average Time Savings', value: '75%' },
      { label: 'Error Reduction', value: '95%' },
      { label: 'ROI Achievement', value: '6 months' },
    ],
    features: [
      'AI-Powered Decision Making',
      'Exception Handling',
      'Natural Language Processing',
      'Document Intelligence',
      'Predictive Analytics',
      'Continuous Learning',
    ],
  },
  'predictive-analytics': {
    title: 'Predictive Analytics',
    description:
      'Make data-driven decisions with AI-powered predictive insights and forecasting.',
    shortDescription:
      'Harness AI to forecast trends and anticipate future business outcomes.',
    introduction:
      'Predictive Analytics transforms your historical data into powerful insights about future trends, risks, and opportunities, enabling proactive decision-making.',
    content:
      'Our predictive analytics solutions use advanced machine learning algorithms to analyze patterns in your data and provide accurate forecasts that drive strategic business decisions.',
    benefits: [
      {
        title: 'Future Forecasting',
        description:
          'Predict market trends, demand patterns, and business outcomes with high accuracy',
      },
      {
        title: 'Risk Mitigation',
        description:
          'Identify potential risks before they impact your business operations',
      },
      {
        title: 'Customer Intelligence',
        description:
          'Understand customer behavior patterns and predict future actions',
      },
      {
        title: 'Optimized Planning',
        description:
          'Make informed decisions about inventory, staffing, and resource allocation',
      },
    ],
    methodology: [
      {
        title: 'Data Preparation',
        description:
          'Clean and structure your data for optimal model performance.',
      },
      {
        title: 'Model Development',
        description:
          'Build and train custom predictive models for your specific needs.',
      },
      {
        title: 'Deployment & Monitoring',
        description:
          'Deploy models with real-time monitoring and continuous improvement.',
      },
    ],
    stats: [
      { label: 'Prediction Accuracy', value: '92%' },
      { label: 'Models Deployed', value: '300+' },
      { label: 'Business Value Created', value: '€50M+' },
      { label: 'Time to Insight', value: '50% faster' },
    ],
    features: [
      'Advanced Machine Learning',
      'Real-time Predictions',
      'Custom Model Development',
      'Risk Assessment Tools',
      'Demand Forecasting',
      'Performance Optimization',
    ],
  },
  'strategic-consulting': {
    title: 'Strategic Consulting',
    description:
      'Expert guidance for navigating AI transformation and achieving competitive advantage.',
    shortDescription:
      'Strategic AI guidance from experts to navigate digital transformation.',
    introduction:
      'Strategic Consulting provides executive-level guidance to help organizations successfully navigate the complex landscape of AI transformation and digital innovation.',
    content:
      'Our strategic consulting services combine deep technical expertise with business acumen to help leadership teams make informed decisions about AI investments and transformation initiatives.',
    benefits: [
      {
        title: 'Strategic Clarity',
        description:
          'Clear roadmap for AI transformation aligned with business objectives',
      },
      {
        title: 'Expert Guidance',
        description:
          'Access to experienced AI strategists and transformation experts',
      },
      {
        title: 'Risk Management',
        description:
          'Identify and mitigate potential risks before they impact your business',
      },
      {
        title: 'Competitive Edge',
        description:
          'Stay ahead of industry trends with cutting-edge AI strategies',
      },
    ],
    methodology: [
      {
        title: 'Strategic Assessment',
        description:
          'Evaluate current capabilities and identify transformation opportunities.',
      },
      {
        title: 'Roadmap Development',
        description:
          'Create comprehensive transformation roadmaps with clear milestones.',
      },
      {
        title: 'Implementation Guidance',
        description:
          'Provide ongoing strategic oversight and course correction.',
      },
    ],
    stats: [
      { label: 'Strategic Engagements', value: '150+' },
      { label: 'Transformation Success', value: '94%' },
      { label: 'Average ROI Increase', value: '280%' },
      { label: 'Executive Satisfaction', value: '98%' },
    ],
    features: [
      'AI Strategy Development',
      'Digital Transformation Planning',
      'Technology Roadmapping',
      'Best Practice Implementation',
      'Risk Assessment & Mitigation',
      'Success Measurement',
    ],
  },
  'implementation-support': {
    title: 'Implementation Support',
    description:
      'End-to-end deployment and integration services for successful AI implementation.',
    shortDescription:
      'Comprehensive support for successful AI solution deployment and integration.',
    introduction:
      'Implementation Support provides comprehensive assistance throughout the entire AI deployment lifecycle, ensuring successful integration with your existing systems and processes.',
    content:
      'Our implementation support services guarantee smooth deployment of AI solutions with minimal disruption to your operations while maximizing adoption and value realization.',
    benefits: [
      {
        title: 'Seamless Integration',
        description:
          'Smooth integration with existing systems and minimal business disruption',
      },
      {
        title: 'Expert Management',
        description:
          'Professional project management ensuring on-time, on-budget delivery',
      },
      {
        title: 'Comprehensive Training',
        description:
          'Thorough training programs to ensure successful user adoption',
      },
      {
        title: 'Ongoing Success',
        description:
          'Continuous support and optimization for long-term success',
      },
    ],
    methodology: [
      {
        title: 'Planning & Preparation',
        description: 'Detailed implementation planning and system preparation.',
      },
      {
        title: 'Deployment & Integration',
        description:
          'Careful system deployment with thorough testing and validation.',
      },
      {
        title: 'Training & Support',
        description:
          'Comprehensive training programs and ongoing technical support.',
      },
    ],
    stats: [
      { label: 'Successful Implementations', value: '400+' },
      { label: 'On-Time Delivery Rate', value: '97%' },
      { label: 'User Adoption Rate', value: '89%' },
      { label: 'Client Satisfaction', value: '96%' },
    ],
    features: [
      'Professional Project Management',
      'System Integration Services',
      'Comprehensive Training Programs',
      'Change Management Support',
      '24/7 Technical Support',
      'Performance Optimization',
    ],
  },
};

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    return {
      title: 'Service Not Found | Cerebello',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} | AI Services | Cerebello`,
    description: service.description,
    keywords: `${service.title}, AI services, business automation, ${service.features.join(', ')}, Cerebello`,
    openGraph: {
      title: `${service.title} | Cerebello`,
      description: service.shortDescription,
      type: 'article',
      url: `https://cerebello.nl/services/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Cerebello`,
      description: service.shortDescription,
    },
    alternates: {
      canonical: `https://cerebello.nl/services/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default function ServicePage({ params }: Props) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero68 service={service} />
      <Content1 service={service} />
      <Feature118 benefits={service.benefits} />
      <Timeline1 methodology={service.methodology} />
      <Stats9 stats={service.stats} benefits={service.benefits} />
      <Testimonial16 />
      <Cta4 serviceTitle={service.title} />
    </>
  );
}
