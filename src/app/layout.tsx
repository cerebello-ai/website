import { Inter, Inter_Tight } from 'next/font/google';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import { Navbar4 } from '@/components/layout/navbar4';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

export const metadata: Metadata = {
  title: {
    default: 'Cerbello - AI & Automation Solutions',
    template: '%s | Cerbello',
  },
  description:
    'Empower your company to work smarter through automation and AI. Custom AI & Automation solutions that drive efficiency and unlock growth opportunities.',
  keywords: [
    'AI Solutions',
    'Artificial Intelligence',
    'Automation',
    'RPA',
    'Machine Learning',
    'Data Management',
    'Business Intelligence',
    'Digital Transformation',
    'Low-code Development',
    'iPaaS Integration',
  ],
  authors: [{ name: 'Cerbello Team' }],
  creator: 'Cerbello',
  publisher: 'Cerbello',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Cerbello - AI & Automation Solutions',
    description:
      'Empower your company to work smarter through automation and AI. Custom AI & Automation solutions that drive efficiency and unlock growth opportunities.',
    siteName: 'Cerbello',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cerbello - AI & Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cerbello - AI & Automation Solutions',
    description:
      'Empower your company to work smarter through automation and AI. Custom AI & Automation solutions that drive efficiency and unlock growth opportunities.',
    images: ['/og-image.jpg'],
    creator: '@cerbello',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`h-screen ${inter.variable} ${interTight.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar4 />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
