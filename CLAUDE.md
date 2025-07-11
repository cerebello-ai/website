# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies (uses pnpm by default)
pnpm install
# or
npm install

# Run development server with Turbopack
npm run dev

# Build for production (static export)
npm run build

# Start production server
npm run start

# Run linter with auto-fix
npm run lint
```

## Architecture Overview

This is a Next.js 15 template with App Router, built by Shadcnblocks.com. The project uses static export (`output: 'export'` in next.config.ts) which generates static HTML/CSS/JS files suitable for deployment to any static hosting service.

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **Tailwind CSS v4** for styling
- **shadcn/ui** components (New York style with neutral base color)
- **MDX** support for content pages (privacy, terms)
- **TypeScript** with strict mode enabled
- **React Hook Form** with Zod validation
- **Lucide React** for icons
- **next-themes** for dark mode support

### Project Structure
- `src/app/` - App Router pages and layouts
  - MDX files for privacy and terms pages
  - Global styles in `globals.css`
  - Root layout with theme provider setup
- `src/components/` - React components
  - `layout/` - Navbar and Footer components
  - `sections/` - Page sections (hero, features, testimonials, etc.)
  - `ui/` - shadcn/ui components
- `src/lib/` - Utility functions
- `public/` - Static assets including images and favicons

### Path Aliases
- `@/*` maps to `./src/*`
- Common imports: `@/components`, `@/lib/utils`, `@/components/ui`

### Styling Approach
- Uses Tailwind CSS v4 with CSS variables for theming
- Custom font variables: `--font-inter` and `--font-inter-tight`
- Dark mode support via `next-themes` ThemeProvider
- Component styling uses `cn()` utility from `@/lib/utils` for conditional classes

### Important Configuration
- Static export mode means no server-side features (API routes, middleware, etc.)
- Images are unoptimized due to static export
- MDX enabled for `.mdx` file support
- ESLint configured with Prettier integration