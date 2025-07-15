import { Brain, Zap, TrendingUp } from 'lucide-react';

import { FAQ } from '@/components/sections/faq';
import { Feature1 } from '@/components/sections/feature1';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import Testimonials from '@/components/sections/testimonials';
import { Logos2 } from '@/components/shadcnblocks/logos/logos2';

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Feature1
        title="AI & Automation tailored for modern enterprises"
        description="Cerbello merges AI with data management to transform challenges into growth opportunities. Our tailored, ethical solutions unlock insights and drive sustainable success."
        metrics={[
          { value: '75%', label: 'Efficiency Increase', icon: Zap },
          { value: '60%', label: 'Cost Reduction', icon: TrendingUp },
          { value: '3x', label: 'Faster Insights', icon: Brain },
        ]}
      />
      {/* <Feature2 />
      <Feature3 /> */}
      <Logos2 />
      <Testimonials
        testimonials={[
          {
            quote:
              "Thanks to Streamline, we're finding new leads that we never would have found with legal methods.",
            author: 'Amy Chase, PM',
            company: 'Mercury Finance',
            image: '/images/homepage/testimonials/amy-chase.webp',
            className: 'object-top',
          },
          {
            quote:
              'Founder Mode is hard enough without having a really nice project management app.',
            author: 'Victoria Smith & Henry Vargas, Founders',
            company: 'Mercury Finance',
            image: '/images/homepage/testimonials/victoria-smith.webp',
          },
          {
            quote:
              'Founder Mode is hard enough without having a really nice project management app.',
            author: 'Victoria Smith',
            company: 'Mercury Finance',
            image: '/images/homepage/testimonials/kevin-yam.webp',
            className: 'object-top',
          },
          {
            quote:
              'Founder Mode is hard enough without having a really nice project management app.',
            author: 'Henry Vargas',
            company: 'Mercury Finance',
            image: '/images/homepage/testimonials/kundo-marta.webp',
            className: 'object-top',
          },
          {
            quote:
              'I was able to replace 80% of my team with Streamline bots so I can spend more time on my body.',
            author: 'Jonas Kotara, Lead Engineer',
            company: 'Mercury Finance',
            image: '/images/homepage/testimonials/jonas-kotara.webp',
            className: 'object-top',
          },
        ]}
      />
      <FAQ
        leftQuestions={[
          {
            question: 'What is Cerebello and what services do you offer?',
            answer:
              'Cerebello is a Netherlands-based AI & automation consultancy that helps organizations streamline operations and enhance decision-making. We offer AI Solutions, Process Automation, Strategy & Consultancy, and System Integrations from custom AI development to intelligent workflow automation.',
          },
          {
            question: 'How long does an AI Scan take and what do I get?',
            answer:
              'Our AI Scan typically takes 4-6 weeks and delivers a comprehensive assessment of your AI opportunities. You receive an executive-ready report, actionable roadmap, presentation, and supporting materials, everything needed to confidently move forward with AI implementation.',
          },
          {
            question: 'What industries do you specialize in?',
            answer:
              'We serve medium to large enterprises across Manufacturing & Maritime Logistics, Healthcare (Zorg), Public Sector (Municipalities), and Professional Services. Our solutions are industry-agnostic by design, tailored to your specific business context and regulatory requirements.',
          },
          {
            question: 'How do you ensure data privacy and security?',
            answer:
              'We embed ethics and responsibility into every solution. We can deploy on-premise AI systems, maintain GDPR compliance, and ensure all data stays within your secure infrastructure. Our team follows strict security protocols and can work with your existing governance frameworks.',
          },
          {
            question: 'What kind of ROI can I expect from AI implementation?',
            answer:
              'Our clients typically see 30-200% ROI in the first year. For example, Samsung reduced email workload by 50%, Ziggo achieved 40% faster response times, and OceanicTransCo saw 200% ROI with 60% reduction in breakdowns through predictive maintenance.',
          },
        ]}
        rightQuestions={[
          {
            question:
              'Do you only implement AI, or do you also provide strategy?',
            answer:
              'We offer end-to-end support from high-level strategy consulting to hands-on implementation. Unlike firms that only advise, we combine strategic insight with technical execution, ensuring continuity from AI roadmap to deployed solutions.',
          },
          {
            question: 'How do you handle legacy system integration?',
            answer:
              'Integration is one of our core strengths. We specialize in connecting AI solutions with existing IT systems (ERP, CRM, databases) through APIs and middleware. We ensure new tools work seamlessly with your current technology stack without disrupting operations.',
          },
          {
            question:
              'What makes Cerebello different from other AI consultancies?',
            answer:
              'We combine the agility of a boutique firm with enterprise-grade professionalism. Our unique blend includes end-to-end expertise, ethical AI leadership, focus on integration & adoption, and tailored solutions instead of one-size-fits-all approaches.',
          },
          {
            question: 'How do you ensure employee adoption of AI tools?',
            answer:
              'We focus on augmenting human capabilities, not replacing them. Our approach includes comprehensive training, change management support, and involving employees throughout the process. We design solutions that make teams more effective and satisfied with their work.',
          },
          {
            question: 'Can you work with companies outside the Netherlands?',
            answer:
              'Yes, while we initially focus on the Netherlands market, our services are designed for scalability to enterprise customers globally. We can work remotely or travel to client locations as needed for discovery and implementation.',
          },
        ]}
      />
    </>
  );
}
