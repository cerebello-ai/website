import { CtaProps } from '@/components/shadcnblocks/types/common';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface Cta20Props extends CtaProps {
  buttonSize?: 'sm' | 'lg' | 'default';
  showSeparators?: boolean;
}

const Cta20 = ({
  description = 'Transform your business today.',
  buttons = [{ text: 'Get Started' }],
  buttonSize = 'lg',
  showSeparators = true,
  className,
}: Cta20Props) => {
  const primaryButton = buttons[0];

  return (
    <section className={className || 'py-32'}>
      <div className="container">
        <div>
          <p className="text-center text-sm">{description}</p>
          <div className="mt-4 flex items-center justify-between gap-4">
            {showSeparators && <Separator className="shrink" />}
            {primaryButton && (
              <Button size={buttonSize} asChild={!!primaryButton.href}>
                {primaryButton.href ? (
                  <a href={primaryButton.href}>{primaryButton.text}</a>
                ) : (
                  primaryButton.text
                )}
              </Button>
            )}
            {showSeparators && <Separator className="shrink" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta20 };
