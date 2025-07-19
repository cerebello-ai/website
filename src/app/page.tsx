import { Brain, Zap, TrendingUp } from 'lucide-react';

import { FAQ } from '@/components/sections/faq';
import { Feature1 } from '@/components/sections/feature1';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import Testimonials from '@/components/sections/testimonials';
import { Logos2 } from '@/components/shadcnblocks/logos/logos2';

// Environment-based client filtering
const VISIBLE_CLIENTS = process.env.NEXT_PUBLIC_VISIBLE_CLIENTS
  ? process.env.NEXT_PUBLIC_VISIBLE_CLIENTS.split(',').map((client) =>
      client.trim(),
    )
  : ['samsung', 'ziggo', 'stadswerk072', 'techflow', 'medcare']; // default to all clients

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
            slug: 'samsung',
            quote:
              "Cerebello's AI-powered email solution reduced our response times by 75% while maintaining 100% data security compliance. A game-changer for our operations.",
            author: 'Park Min-jun, IT Director',
            company: 'Samsung Electronics',
            image: '/images/homepage/testimonials/amy-chase.webp',
            className: 'object-top',
          },
          {
            slug: 'ziggo',
            quote:
              'The AI-driven automation implemented by Cerebello cut our processing time by 60% and improved response times by 40%. Exceptional results.',
            author: 'Sophie van der Berg, Operations Manager',
            company: 'Ziggo',
            image: '/images/homepage/testimonials/victoria-smith.webp',
          },
          {
            slug: 'stadswerk072',
            quote:
              'Our AI assistant now handles 70% of citizen queries autonomously, dramatically improving resident satisfaction and freeing our team for complex cases.',
            author: 'Jan de Vries, Digital Innovation Lead',
            company: 'Stadswerk072 (City of Alkmaar)',
            image: '/images/homepage/testimonials/kevin-yam.webp',
            className: 'object-top',
          },
          {
            slug: 'techflow',
            quote:
              "Cerebello's strategic approach to AI implementation delivered 200% ROI in the first year. Their expertise in both technology and business transformation is unmatched.",
            author: 'Emma Thompson, CEO',
            company: 'TechFlow Solutions',
            image: '/images/homepage/testimonials/kundo-marta.webp',
            className: 'object-top',
          },
          {
            slug: 'medcare',
            quote:
              'From AI scan to deployment, Cerebello guided us through every step. Their ethical AI approach and GDPR compliance gave us complete confidence.',
            author: 'Dr. Hendrik Muller, CTO',
            company: 'MedCare Netherlands',
            image: '/images/homepage/testimonials/jonas-kotara.webp',
            className: 'object-top',
          },
        ].filter((testimonial) => VISIBLE_CLIENTS.includes(testimonial.slug))}
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
