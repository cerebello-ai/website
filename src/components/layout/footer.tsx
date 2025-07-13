import Link from 'next/link';

import { Facebook, Linkedin, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';

const navigation = [
  {
    title: 'AI Solutions',
    links: [
      { name: 'AI Scans', href: '/ai-scans' },
      { name: 'Custom AI Solutions', href: '/custom-ai' },
      { name: 'AI Center of Excellence', href: '/ai-center' },
      { name: 'Automation', href: '/automation' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Artificial Intelligence', href: '/services/ai' },
      { name: 'Robotic Process Automation', href: '/services/rpa' },
      { name: 'Low-code Apps', href: '/services/low-code' },
      { name: 'Integration iPaaS', href: '/services/ipaas' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Terms of service', href: '/terms' },
      { name: 'Privacy policy', href: '/privacy' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="bg-primary">
        <div className="border-sand-600 mx-auto flex max-w-[95vw] flex-col items-center border-b py-10 text-center md:py-14 lg:py-20">
          <h2 className="max-w-[800px] text-5xl leading-none font-semibold tracking-tight text-balance lg:text-6xl">
            Transform your business with AI.{' '}
            <span className="text-sand-600">Your digital future starts today.</span>
          </h2>
          <Button asChild variant="secondary" size="lg" className="mt-9">
            <Link href="/contact">Schedule Your AI Scan</Link>
          </Button>
        </div>

        {/* Navigation Section */}
        <nav className="border-sand-600/50 mx-auto max-w-[95vw] border-b py-6">
          <div className="container flex flex-wrap gap-x-32 gap-y-20 md:justify-end md:gap-y-24 lg:gap-y-32">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 font-medium lg:text-lg">{section.title}</h3>
                <ul className="space-y-6">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-muted-foreground lg:text-lg"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="container py-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-medium">
              © {new Date().getFullYear()} Cerbello. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  aria-label={link.href}
                  key={link.href}
                  href={link.href}
                  className="hover:text-muted-foreground"
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
