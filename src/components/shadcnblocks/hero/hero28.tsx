import { HeroProps } from '../types/common';

import { Button } from '@/components/ui/button';

interface BackgroundIcon {
  src: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
}

interface Hero28Props extends HeroProps {
  buttonText?: string;
  buttonHref?: string;
  maxWidth?: string;
  showBackgroundPattern?: boolean;
  backgroundIcons?: BackgroundIcon[];
}

const Hero28 = ({
  title = 'Welcome to Our Website',
  description = 'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.',
  buttonText = 'Primary',
  buttonHref = '#',
  maxWidth = 'max-w-3xl',
  showBackgroundPattern = true,
  backgroundIcons = [
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
      x: 160,
      y: 140,
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg',
      x: 80,
      y: 300,
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg',
      x: 320,
      y: 380,
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg',
      x: 1200,
      y: 60,
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg',
      x: 1280,
      y: 300,
    },
  ],
}: Hero28Props) => {
  const iconRects = [
    { x: 140, y: 120 },
    { x: 60, y: 280 },
    { x: 300, y: 360 },
    { x: 1180, y: 40 },
    { x: 1260, y: 280 },
  ];

  return (
    <section className="relative py-32">
      {/* Background pattern */}
      {showBackgroundPattern && (
        <div className="absolute inset-x-0 top-0 container hidden h-full overflow-hidden lg:block">
          <div className="flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 520">
              <defs>
                <radialGradient id="text-backgroud" cx="50%" cy="50%" r={0.6}>
                  <stop stopColor="black" offset={0.4} />
                  <stop stopColor="black" offset={1} stopOpacity={0} />
                </radialGradient>
                <linearGradient id="icon-backgroud" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="var(--color-accent)" offset={0} />
                  <stop stopColor="var(--color-background)" offset={1} />
                </linearGradient>
                <mask id="mask">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    stroke="none"
                    fill="black"
                  />
                  <rect
                    x="80"
                    y="40"
                    width="1260"
                    height="380"
                    rx="140"
                    stroke="none"
                    filter="url(#blur)"
                    fill="white"
                  />
                  <rect
                    x="40"
                    y="-120"
                    width="1320"
                    height="600"
                    stroke="none"
                    fill="url(#text-backgroud)"
                  />
                </mask>
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
                </filter>
              </defs>
              <path
                stroke="var(--border)"
                strokeWidth={1}
                d="M0,40H1400M0,120H1400M0,200H1400M0,280H1400M0,360H1400M0,440H1400M60,0V520M140,0V520M220,0V520M300,0V520M380,0V520M460,0V520M540,0V520M620,0V520M700,0V520M780,0V520M860,0V520M940,0V520M1020,0V520M1100,0V520M1180,0V520M1260,0V520M1340,0V520"
                mask="url(#mask)"
              />
              {iconRects.map((rect, index) => (
                <rect
                  key={`rect-${index}`}
                  x={rect.x}
                  y={rect.y}
                  width={80}
                  height={80}
                  stroke="var(--border)"
                  fill="url(#icon-backgroud)"
                />
              ))}
              {backgroundIcons.map((icon, index) => (
                <image
                  key={`icon-${index}`}
                  href={icon.src}
                  x={icon.x}
                  y={icon.y}
                  width={icon.width || 40}
                  height={icon.height || 40}
                />
              ))}
            </svg>
          </div>
        </div>
      )}
      <div className="relative container flex flex-col items-center text-center">
        <h1 className="my-6 text-4xl font-semibold text-pretty lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className={`text-muted-foreground mb-8 ${maxWidth} lg:text-xl`}>
            {description}
          </p>
        )}
        {buttonText && (
          <div>
            <Button asChild>
              <a href={buttonHref}>{buttonText}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export { Hero28 };
