import { StatsProps } from '@/components/shadcnblocks/types/common';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface StatCard {
  logo: string;
  avatar: string;
  avatarFallback?: string;
  value: string;
  label: string;
  href?: string;
}

interface Stats10Props extends StatsProps {
  statCards?: StatCard[];
  gridColumns?: number;
  hoverAnimation?: boolean;
  maxWidth?: string;
}

const Stats10 = ({
  title,
  description,
  statCards = [
    {
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      avatarFallback: '',
      value: '89%',
      label: 'Stop spending on ads with zero conversions',
    },
    {
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
      avatarFallback: '',
      value: '7 HRS',
      label: 'Daily savings on ad management',
    },
    {
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
      avatarFallback: '',
      value: '2,540%',
      label: 'Growth in overall client ad investment',
    },
  ],
  gridColumns = 3,
  hoverAnimation = true,
  maxWidth = 'max-w-[75rem]',
  className,
}: Stats10Props) => {
  return (
    <section className={`py-12 md:py-20 ${className || ''}`}>
      <div className={`container ${maxWidth}`}>
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="text-muted-foreground text-lg">{description}</p>
            )}
          </div>
        )}
        <div className="pt-10 pb-10">
          <div
            className={`grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-${gridColumns}`}
          >
            {statCards?.map((statCard, index) => {
              const CardWrapper = statCard.href ? 'a' : 'div';
              return (
                <CardWrapper
                  href={statCard.href}
                  key={`stat-card-${index}`}
                  className="block w-full"
                >
                  <Card
                    className={`rounded-3xl border-2 p-10 transition ${hoverAnimation ? 'hover:border-primary hover:-translate-y-3' : ''}`}
                  >
                    <CardContent className="block p-0">
                      <div className="flex items-center gap-7">
                        <Avatar className="h-14 w-14 overflow-hidden rounded-full border">
                          <AvatarImage src={statCard.avatar} alt="" />
                          <AvatarFallback>
                            {statCard.avatarFallback}
                          </AvatarFallback>
                        </Avatar>
                        <img src={statCard.logo} alt="" className="h-6" />
                      </div>
                      <div className="mt-6 text-6xl leading-tight font-semibold">
                        {statCard.value}
                      </div>
                      <p className="mb-5 max-w-52 text-lg font-medium">
                        {statCard.label}
                      </p>
                    </CardContent>
                  </Card>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats10 };
