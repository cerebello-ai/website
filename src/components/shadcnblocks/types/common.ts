// Common prop interfaces for shadcnblocks components

export interface ButtonProps {
  text?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon?: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface BaseComponentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export interface HeroProps extends BaseComponentProps {
  badges?: string[];
  buttons?: ButtonProps[];
  features?: FeatureItem[];
  benefits?: BenefitItem[];
  image?: string;
  video?: string;
}

export interface CtaProps extends BaseComponentProps {
  features?: string[];
  benefits?: string[];
  buttons?: ButtonProps[];
  urgency?: string;
}

export interface FeatureProps extends BaseComponentProps {
  features?: FeatureItem[];
  layout?: 'grid' | 'list' | 'carousel';
  columns?: 2 | 3 | 4;
}

export interface ContentProps extends BaseComponentProps {
  content?: string;
  sections?: Array<{
    title: string;
    content: string;
  }>;
  sidebar?: boolean;
  toc?: boolean;
}

export interface StatsProps extends BaseComponentProps {
  stats?: StatItem[];
  layout?: 'horizontal' | 'grid';
}

export interface TestimonialProps extends BaseComponentProps {
  testimonials?: TestimonialItem[];
  layout?: 'grid' | 'carousel' | 'masonry';
  showRatings?: boolean;
}

export interface TimelineProps extends BaseComponentProps {
  steps?: Array<{
    step?: string;
    title: string;
    subtitle?: string;
    description: string;
    date?: string;
  }>;
  orientation?: 'vertical' | 'horizontal';
}
