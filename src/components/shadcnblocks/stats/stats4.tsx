import { Star } from 'lucide-react';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaApple } from 'react-icons/fa';
import { SiTrustpilot } from 'react-icons/si';

import { StatsProps } from '@/components/shadcnblocks/types/common';

interface Stats4Props extends StatsProps {
  layout?: 'horizontal' | 'vertical';
  gap?: 'small' | 'medium' | 'large';
}

const Stats4 = ({
  title = 'Platform Performance Insights',
  stats = [
    { label: 'Apple Store', value: '4.8', description: 'FaApple' },
    { label: 'Play Store', value: '4.8', description: 'BiLogoPlayStore' },
    { label: 'Trustpilot', value: '4.9', description: 'SiTrustpilot' },
  ],
  layout = 'horizontal',
  gap = 'medium',
  className,
}: Stats4Props) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaApple':
        return <FaApple className="lg:mr-1" />;
      case 'BiLogoPlayStore':
        return <BiLogoPlayStore className="lg:mr-1" />;
      case 'SiTrustpilot':
        return <SiTrustpilot className="lg:mr-1" />;
      default:
        return <FaApple className="lg:mr-1" />;
    }
  };

  const getGapClass = () => {
    switch (gap) {
      case 'small':
        return 'gap-4 lg:gap-6';
      case 'medium':
        return 'gap-6 lg:gap-12';
      case 'large':
        return 'gap-8 lg:gap-16';
      default:
        return 'gap-6 lg:gap-12';
    }
  };

  return (
    <section className={`py-32 ${className || ''}`}>
      <div className="container">
        <div
          className={`flex ${layout === 'horizontal' ? 'flex-col-reverse lg:flex-row' : 'flex-col'} items-center justify-between gap-4`}
        >
          <p className="text-center text-lg font-medium lg:text-left lg:text-2xl">
            {title}
          </p>
          <div className={`flex items-center ${getGapClass()}`}>
            {stats?.map((stat, index) => (
              <div
                key={`stat-${index}`}
                className="flex flex-col items-center gap-1"
              >
                <div className="flex items-center gap-2 text-2xl font-medium">
                  <span>{stat.value}</span>
                  <Star />
                </div>
                <div className="flex items-center gap-2">
                  {getIcon(stat.description || '')}
                  <span className="text-xs whitespace-nowrap lg:text-sm">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats4 };
