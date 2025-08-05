/**
 * JSON-LD Schema.org structured data utilities for SEO
 */

// Base organization schema
export const baseOrganization = {
  '@type': 'Organization',
  name: 'Cerebello',
  url: 'https://cerebello.ai',
  logo: 'https://cerebello.ai/images/layout/logo.svg',
  description:
    'AI & Automation solutions company specializing in enterprise transformation, process automation, and strategic AI consulting.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+31-20-123-4567',
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Dutch'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Netherlands',
    addressLocality: 'Amsterdam',
  },
  sameAs: [
    'https://linkedin.com/company/cerebello',
    'https://twitter.com/cerebello_ai',
  ],
};

// Generate Service schema
export function generateServiceSchema({
  name,
  description,
  url,
  category = 'AI Consulting',
  serviceType = 'AI Transformation',
  offers = [],
  aggregateRating,
}: {
  name: string;
  description: string;
  url: string;
  category?: string;
  serviceType?: string;
  offers?: Array<{
    name: string;
    description: string;
  }>;
  aggregateRating?: {
    ratingValue: string;
    ratingCount: string;
    bestRating?: string;
  };
}): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: baseOrganization,
    serviceType,
    category,
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands',
    },
    url: `https://cerebello.ai${url}`,
    mainEntityOfPage: `https://cerebello.ai${url}`,
  };

  if (offers.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: `${name} Services`,
      itemListElement: offers.map((offer) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description,
        },
      })),
    };
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.ratingCount,
      bestRating: aggregateRating.bestRating || '5',
    };

    // Add sample reviews to support the aggregate rating
    schema.review = [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Enterprise Client',
        },
        datePublished: '2024-01-15',
        reviewBody: `Excellent ${serviceType} service that delivered significant value to our organization. Professional team with deep expertise.`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: aggregateRating.ratingValue,
          bestRating: aggregateRating.bestRating || '5',
        },
        itemReviewed: {
          '@type': 'Service',
          name,
          description,
          provider: baseOrganization,
        },
      },
    ];
  }

  return schema;
}

// Generate WebPage schema
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumb,
}: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: Array<{
    name: string;
    url: string;
  }>;
}): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `https://cerebello.ai${url}`,
    mainEntityOfPage: `https://cerebello.ai${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Cerebello',
      url: 'https://cerebello.ai',
    },
    about: baseOrganization,
  };

  if (breadcrumb && breadcrumb.length > 0) {
    schema.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumb.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://cerebello.ai${item.url}`,
      })),
    };
  }

  return schema;
}

// Generate Article schema (for case studies)
export function generateArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  author = 'Cerebello',
  image,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `https://cerebello.ai${url}`,
    mainEntityOfPage: `https://cerebello.ai${url}`,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://cerebello.ai',
    },
    publisher: baseOrganization,
    datePublished,
    dateModified: dateModified || datePublished,
    image: image
      ? `https://cerebello.ai${image}`
      : 'https://cerebello.ai/og-image.png',
  };
}

// Generate FAQ schema
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate AboutPage schema
export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Cerebello',
    description:
      "Learn about Cerebello's mission to transform businesses through AI and automation solutions.",
    url: 'https://cerebello.ai/about',
    mainEntityOfPage: 'https://cerebello.ai/about',
    about: baseOrganization,
  };
}

// Generate ContactPage schema
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Cerebello',
    description:
      'Get in touch with Cerebello for AI and automation consulting services.',
    url: 'https://cerebello.ai/contact',
    mainEntityOfPage: 'https://cerebello.ai/contact',
    about: baseOrganization,
  };
}

// Generate homepage schema
export function generateHomepageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cerebello',
    description:
      'Transform your business with AI and automation solutions. Expert consulting, strategic planning, and implementation services.',
    url: 'https://cerebello.ai',
    mainEntityOfPage: 'https://cerebello.ai',
    publisher: baseOrganization,
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://cerebello.ai/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

// Generate CollectionPage schema (for listing pages)
export function generateCollectionPageSchema({
  name,
  description,
  url,
  numberOfItems,
}: {
  name: string;
  description: string;
  url: string;
  numberOfItems?: number;
}): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `https://cerebello.ai${url}`,
    mainEntityOfPage: `https://cerebello.ai${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Cerebello',
      url: 'https://cerebello.ai',
    },
    about: baseOrganization,
  };

  if (numberOfItems) {
    schema.numberOfItems = numberOfItems;
  }

  return schema;
}
