import { Check } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TeamMember {
  src: string;
  fallback: string;
}

interface Expectation {
  text: string;
}

interface Logo {
  src: string;
  alt: string;
}

interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'select';
  required?: boolean;
  options?: { value: string; label: string }[];
}

interface Contact1Props {
  title?: string;
  description?: string;
  teamMembers?: TeamMember[];
  expectations?: Expectation[];
  logos?: Logo[];
  formFields?: FormField[];
  submitButtonText?: string;
  privacyText?: string;
  privacyLink?: string;
}

const Contact1 = ({
  title = 'Book free demo now',
  description = 'In non libero bibendum odio pellentesque ullamcorper. Aenean condimentum, dolor commodo pulvinar bibendum.',
  teamMembers = [
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
      fallback: 'SB',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
      fallback: 'RA',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
      fallback: 'JS',
    },
  ],
  expectations = [
    { text: 'Detailed product presentation tailored to you' },
    { text: 'Consulting on your messaging strategy' },
    { text: 'Answers to all the questions you have' },
  ],
  logos = [
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
      alt: 'Astro',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg',
      alt: 'shadcn/ui',
    },
  ],
  formFields = [
    {
      id: 'fullName',
      label: 'Full name',
      placeholder: 'Joe Average',
      required: true,
    },
    {
      id: 'company',
      label: 'Company',
      placeholder: 'Acme Corp',
      required: true,
    },
    {
      id: 'phone',
      label: 'Phone number',
      placeholder: '12 3456 7890',
      required: true,
    },
    {
      id: 'email',
      label: 'Email (business)',
      placeholder: 'name@company.com',
      required: true,
    },
    {
      id: 'country',
      label: 'Country',
      placeholder: 'Select country',
      type: 'select',
      required: true,
      options: [{ value: 'aus', label: 'Australia' }],
    },
    {
      id: 'companySize',
      label: 'Company size',
      placeholder: 'Select',
      type: 'select',
      required: true,
      options: [
        { value: '1-10', label: '1-10' },
        { value: '11-50', label: '11-50' },
        { value: '51-200', label: '51-200' },
        { value: '200+', label: '200+' },
      ],
    },
    {
      id: 'referral',
      label: 'How did you hear about us?',
      placeholder: 'Select',
      type: 'select',
      required: false,
      options: [{ value: 'search', label: 'Web Search' }],
    },
  ],
  submitButtonText = 'Book demo',
  privacyText = 'For more information about how we handle your personal information, please visit our',
  privacyLink = '#',
}: Contact1Props) => {
  return (
    <section className="relative py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)] [background-size:8px_8px]"></div>
      <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
        <div className="w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-[40rem]">
            <h1 className="text-4xl font-medium lg:text-5xl">{title}</h1>
            <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7">
              {description}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="space-y-16 pb-20 lg:pb-0">
              <div className="space-y-6">
                {teamMembers && teamMembers.length > 0 && (
                  <div className="mt-16 flex overflow-hidden">
                    {teamMembers.map((member, index) => (
                      <Avatar
                        key={index}
                        className={`size-11 ${index > 0 ? '-ml-4' : ''}`}
                      >
                        <AvatarImage src={member.src} />
                        <AvatarFallback>{member.fallback}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                )}
                {expectations && expectations.length > 0 && (
                  <div className="space-y-4">
                    <p className="text-sm font-semibold">
                      What you can expect:
                    </p>
                    {expectations.map((expectation, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2.5"
                      >
                        <Check className="text-muted-foreground size-5 shrink-0" />
                        <p className="text-sm">{expectation.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {logos && logos.length > 0 && (
                <div className="flex items-center space-x-12">
                  {logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-6"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:mt-2.5">
          <div className="relative flex w-full max-w-[30rem] min-w-[20rem] flex-col items-center overflow-visible md:min-w-[24rem]">
            <form className="z-10 space-y-6">
              <div className="border-border bg-background w-full space-y-6 rounded-xl border px-6 py-10 shadow-sm">
                {formFields?.map((field) => (
                  <div key={field.id}>
                    <div className="mb-2.5 text-sm font-medium">
                      <label htmlFor={field.id}>
                        {field.label}
                        {!field.required && (
                          <span className="text-muted-foreground">
                            {' '}
                            (Optional)
                          </span>
                        )}
                      </label>
                    </div>
                    {field.type === 'select' ? (
                      <Select>
                        <SelectTrigger id={field.id} name={field.id}>
                          <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        id={field.id}
                        name={field.id}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
                <div className="flex w-full flex-col justify-end space-y-3 pt-2">
                  <Button type="submit">{submitButtonText}</Button>
                  <div className="text-muted-foreground text-xs">
                    {privacyText}{' '}
                    <a href={privacyLink} className="underline">
                      privacy policy
                    </a>
                    .
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact1 };
