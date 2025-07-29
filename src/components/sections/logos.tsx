'use client';

import Image from 'next/image';
import Link from 'next/link';

const ITEMS = [
  {
    name: 'ING',
    src: 'https://jakdesign.nl/wp-content/uploads/2024/03/snel-en-wel-logo.png',
    width: 80,
    height: 80,
    href: 'https://ing.nl',
  },
  {
    name: 'Philips',
    src: 'https://jakdesign.nl/wp-content/uploads/2024/03/sinnetechniek-logo.png',
    width: 80,
    height: 80,
    href: 'https://philips.com',
  },
  {
    name: 'ASML',
    src: '/images/clients/ziggo.svg',
    width: 80,
    height: 80,
    href: 'https://asml.com',
  },
  {
    name: 'Themmin',
    src: 'https://framerusercontent.com/images/B2mD7FkdrVEMJmnyY86WMumE.png',
    width: 80,
    height: 80,
    href: 'https://aholddelhaize.com',
  },
  {
    name: 'Heineken',
    src: 'https://framerusercontent.com/images/41nmME7RqSvy8N9d4VOlC42zMtE.png',
    width: 80,
    height: 80,
    href: 'https://heineken.com',
  },
  {
    name: 'Samsung',
    src: 'https://ciphix.io/wp-content/uploads/Voorbij_pb_groen_RGB-1597661948.6866.png.webp',
    width: 100,
    height: 80,
    href: 'https://klm.com',
  },
  {
    name: 'KPN',
    src: 'https://unlockingdigital.nl/wp-content/uploads/2021/04/lvnl.svg',
    width: 80,
    height: 80,
    href: 'https://kpn.com',
  },
  {
    name: 'Samsung',
    src: '/images/clients/samsung.svg',
    width: 80,
    height: 80,
    href: 'https://samsung.com',
  },
  {
    name: 'Unilever',
    src: '/images/clients/stadswerk072.svg',
    width: 80,
    height: 80,
    href: 'https://unilever.com',
  },
  {
    name: 'Ziggo',
    src: '/images/logos/watershed.svg',
    width: 80,
    height: 80,
    href: 'https://ziggo.nl',
  },
];

export default function Logos() {
  return (
    <section className="bg-sand-100 overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container text-center">
        <h2 className="text-xl font-semibold tracking-tight text-balance lg:text-3xl">
          Trusted by leading Dutch companies for AI transformation.
          <br />
          <span className="text-muted-foreground">
            From multinational corporations to innovative enterprises.
          </span>
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="flex w-full">
          {/* First marquee group */}
          <div
            className="animate-marquee flex shrink-0 items-center gap-12"
            style={{ filter: 'brightness(0) invert(0)' }}
          >
            {ITEMS.map((logo, index) => (
              <Link
                href={logo.href}
                target="_blank"
                key={index}
                className="p-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </Link>
            ))}
          </div>
          {/* Second marquee group */}
          <div className="animate-marquee flex shrink-0 items-center gap-12">
            {ITEMS.map((logo, index) => (
              <Link
                href={logo.href}
                target="_blank"
                key={index}
                className="p-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
