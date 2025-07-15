# Cerebello Website Styling Guide

## Overview
This document outlines the styling patterns and design system used across the Cerebello website, based on analysis of key components including hero sections, about page, logos, and testimonials.

## Design System Foundation

### Typography
- **Primary Font**: `font-inter` (Inter)
- **Tight Font**: `font-inter-tight` (Inter Tight) - used for headlines
- **Font Weights**: 
  - Regular (400) - body text
  - Medium (500) - labels and secondary text
  - Semi-bold (600) - section headings
  - Bold (700) - main headlines

### Color System
- **Primary**: `text-primary` - brand accent color
- **Foreground**: `text-foreground` - main text color
- **Muted**: `text-muted-foreground` - secondary text color
- **Background**: `bg-background` - main background
- **Sand Tones**: `bg-sand-50`, `bg-sand-100` - light neutral backgrounds
- **Mint Accents**: `bg-mint`, `bg-mint-50`, `bg-mint/20` - brand color backgrounds

## Layout Patterns

### Container & Spacing
- **Container**: `container` class for consistent max-width and centering
- **Vertical Spacing**: 
  - Sections: `py-24 md:py-32` (large), `py-16 md:py-28 lg:py-32` (medium), `py-12 md:py-20 lg:py-24` (small)
  - Component spacing: `mb-4`, `mb-6`, `mb-8`, `mb-12`
- **Responsive Margins**: `mt-8 md:mt-12 lg:mt-20`

### Grid Systems
- **Responsive Grids**: `grid gap-4 sm:grid-cols-3` (hero features)
- **Two-column**: `md:grid-cols-2` (testimonials, images)
- **Flexible Layouts**: `flex flex-col gap-3 md:flex-row`

## Component Styling Patterns

### Hero Sections
**Background Pattern**:
```css
bg-sand-50 dark:bg-background relative overflow-hidden
```

**Grid Background**:
```css
absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]
```

**Headlines**:
```css
font-inter-tight text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl
```

**Descriptions**:
```css
font-inter text-muted-foreground mx-auto mb-8 max-w-2xl text-lg md:text-xl
```

**Decorative Elements**:
```css
bg-mint/20 dark:bg-mint/10 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl
```

### Badges
```css
border-border bg-background mb-4 (variant="outline")
```

### Buttons
**Primary Button**:
```css
bg-primary text-primary-foreground hover:bg-primary/90 (size="lg")
```

**Outline Button**:
```css
border-border (variant="outline" size="lg")
```

**Button Groups**:
```css
flex flex-col items-center justify-center gap-4 sm:flex-row
```

### Feature Lists
**Container**:
```css
mx-auto grid max-w-2xl gap-4 sm:grid-cols-3
```

**Items**:
```css
text-muted-foreground flex items-center justify-center gap-2 text-sm
```

**Icons**:
```css
text-primary h-5 w-5
```

### About Section
**Background**: `bg-mint-50 py-24 md:py-32`

**Headings**:
- H1: `text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl`
- H2: `text-2xl leading-8 font-semibold md:text-3xl`
- Muted H2: `text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl`

**Body Text**:
```css
text-lg leading-6 (paragraphs)
text-lg (general body text)
```

**Layout Shifts**:
```css
lg:translate-x-24 (left alignment)
lg:-translate-x-24 (right alignment)
```

### Logos Section
**Background**: `bg-sand-100 overflow-hidden py-12 md:py-20 lg:py-24`

**Headline**:
```css
text-xl font-semibold tracking-tight text-balance lg:text-3xl
```

**Marquee Animation**:
```css
animate-marquee flex shrink-0 items-center gap-12
```

**Logo Links**:
```css
p-6 (padding)
object-contain transition-opacity hover:opacity-70
```

### Testimonials Section
**Background**: `bg-mint py-16 md:py-28 lg:py-32`

**Main Heading**:
```css
text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl
```

**Description**:
```css
text-lg font-medium text-gray-700 dark:text-gray-300
```

**Cards**:
```css
border-[7px] transition-all
border-foreground (active)
border-mint text-emerald-600 shadow-none (inactive)
```

**Quote Text**:
```css
text-lg leading-7 font-semibold tracking-tight text-balance md:text-xl lg:text-2xl
```

**Author Info**:
```css
font-semibold max-md:text-sm (name)
text-muted-foreground text-xs md:text-sm (company)
```

## Responsive Breakpoints

### Text Sizing
- **Mobile**: `text-4xl` → **SM**: `text-5xl` → **MD**: `text-6xl` → **LG**: `text-7xl`
- **Body**: `text-lg` → **MD**: `text-xl`
- **Small**: `text-sm` → **MD**: `text-base`

### Spacing
- **Padding**: `py-24` → **MD**: `py-32`
- **Margins**: `mt-8` → **MD**: `mt-12` → **LG**: `mt-20`
- **Gaps**: `gap-4` → **SM**: `gap-6` → **MD**: `gap-8`

### Layout
- **Mobile**: `flex-col` → **SM**: `flex-row`
- **Grid**: `grid-cols-1` → **SM**: `grid-cols-2` → **MD**: `grid-cols-3`

## Dark Mode Support
- Uses CSS variables: `hsl(var(--border))`, `hsl(var(--foreground))`
- Dark variants: `dark:bg-background`, `dark:text-gray-300`
- Decorative elements: `dark:bg-mint/10`

## Animation & Transitions
- **Hover Effects**: `hover:opacity-70`, `hover:bg-primary/90`
- **Transform**: `group-hover:translate-x-1`
- **Marquee**: `animate-marquee`
- **Transitions**: `transition-opacity`, `transition-transform`, `transition-all`

## Best Practices
1. **Consistency**: Use established spacing scale (`py-24 md:py-32` for sections)
2. **Responsive**: Always include mobile-first responsive classes
3. **Accessibility**: Maintain proper contrast with muted-foreground colors
4. **Performance**: Use CSS variables for consistent theming
5. **Semantic**: Use appropriate HTML structure with styling classes