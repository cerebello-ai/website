interface Logo {
  name: string;
  logo: string;
}

interface Logos1Props {
  text?: string;
  logos?: Logo[];
  showGrayscale?: boolean;
}

const Logos1 = ({
  text = "Used by the world's leading companies",
  logos = [
    {
      name: 'Astro',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
    },
    {
      name: 'Vercel',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg',
    },
    {
      name: 'Astro',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
    },
    {
      name: 'Supabase',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg',
    },
    {
      name: 'Figma',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg',
    },
  ],
  showGrayscale = true,
}: Logos1Props) => {
  return (
    <section className="container flex flex-wrap items-center justify-between gap-12 py-32">
      <p className="text-primary text-lg leading-[140%] tracking-[-0.32px]">
        {text}
      </p>
      <div
        className={`flex flex-wrap items-center gap-x-8 gap-y-6 lg:gap-[60px] ${showGrayscale ? 'opacity-70 grayscale' : ''}`}
      >
        {logos.map((logo, index) => (
          <img
            key={`logo-${index}`}
            src={logo.logo}
            alt={`${logo.name} logo`}
            width={109}
            height={48}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export { Logos1 };
