import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  href: string;
  image: string;
}

interface FeaturedPost {
  title: string;
  summary: string;
  badge: string;
  href: string;
  image: string;
}

interface Blog3Props {
  title?: string;
  subtitle?: string;
  posts?: BlogPost[];
  featuredPost?: FeaturedPost;
  gridColumns?: string;
}

const Blog3 = ({
  title = 'Latest Blog Posts',
  subtitle = 'Discover insights, tutorials, and updates from our team of experts. Stay ahead with the latest trends in web development, design, and technology.',
  posts = [
    {
      id: 'post-1',
      title: 'The Future of Web Development: Embracing AI and Automation',
      summary:
        'Discover how artificial intelligence is revolutionizing web development workflows, from automated testing to intelligent code generation and deployment strategies.',
      label: 'Technology',
      author: 'Sarah Chen',
      published: '15 Mar 2024',
      href: '#',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
    },
    {
      id: 'post-2',
      title: 'Building Scalable Design Systems: Lessons from Enterprise Teams',
      summary:
        'Learn the best practices for creating and maintaining design systems that scale across large organizations and multiple product teams.',
      label: 'Design',
      author: 'Marcus Rodriguez',
      published: '12 Mar 2024',
      href: '#',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
    },
    {
      id: 'post-3',
      title: 'Performance Optimization: Making Your React Apps Lightning Fast',
      summary:
        'Explore advanced techniques for optimizing React applications, including code splitting, lazy loading, and performance monitoring strategies.',
      label: 'Development',
      author: 'Emily Watson',
      published: '08 Mar 2024',
      href: '#',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
    },
  ],
  featuredPost = {
    title: 'The Complete Guide to Modern CSS Grid Layouts',
    summary:
      'Master the art of CSS Grid with practical examples, responsive design patterns, and real-world use cases that will transform your layouts.',
    badge: 'Featured',
    href: '#',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  },
  gridColumns = 'md:grid-cols-2 lg:grid-cols-3',
}: Blog3Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <a
          href={featuredPost.href}
          className="group relative mb-8 block md:mb-14 md:overflow-clip md:rounded-xl lg:mb-16"
        >
          <div className="mb-4 aspect-4/3 overflow-clip rounded-xl md:mb-0 md:aspect-8/5 lg:rounded-2xl">
            <div className="h-full w-full transition duration-300 group-hover:opacity-80">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="relative h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="md:from-primary/80 md:text-primary-foreground flex flex-col gap-6 md:absolute md:inset-x-0 md:bottom-0 md:bg-linear-to-t md:to-transparent md:p-8 md:pt-24">
            <div>
              <div className="mb-4 md:hidden">
                <Badge variant="secondary">{featuredPost.badge}</Badge>
              </div>
              <div className="mb-2 flex">
                <div className="flex-1 text-lg font-medium md:text-2xl lg:text-3xl">
                  {featuredPost.title}
                </div>
              </div>
              <div className="text-sm md:text-base">{featuredPost.summary}</div>
              <div className="pt-4 text-base font-medium">
                By David Kim • 18 Mar 2024
              </div>
            </div>
          </div>
        </a>
        <div
          className={`grid gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-12 ${gridColumns}`}
        >
          {posts.map((post) => (
            <a key={post.id} href={post.href} className="group flex flex-col">
              <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                <div className="h-full w-full transition duration-300 group-hover:opacity-80">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-3/2 h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="mb-4">
                <Badge variant="secondary">{post.label}</Badge>
              </div>
              <div className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl lg:text-3xl">
                {post.title}
              </div>
              <div className="text-muted-foreground mb-4 line-clamp-2 text-sm md:mb-5 md:text-base">
                {post.summary}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-px">
                  <span className="text-xs font-medium">{post.author}</span>
                  <span className="text-muted-foreground text-xs">
                    {post.published}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog3 };
