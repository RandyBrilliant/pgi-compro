# Architecture Overview

This document provides a technical deep-dive into the PGI Company Profile website architecture.

---

## Table of Contents

1. [Tech Stack Details](#tech-stack-details)
2. [Next.js 16 Specifics](#nextjs-16-specifics)
3. [Component Architecture](#component-architecture)
4. [Styling Architecture](#styling-architecture)
5. [Animation System](#animation-system)
6. [Data Flow](#data-flow)
7. [SEO Strategy](#seo-strategy)
8. [Performance Considerations](#performance-considerations)

---

## Tech Stack Details

### Next.js 16 with App Router

This project uses **Next.js 16** which has breaking changes from earlier versions. Key differences:

- `params` and `searchParams` are now **Promises** and must be awaited
- Use `PageProps<'/path'>` and `LayoutProps<'/path'>` type helpers
- Server Components are the default (no `'use server'` needed)
- Client Components require `'use client'` directive

### React 19

React 19 introduces:
- Server Components (native)
- `use` hook for promises
- Improved streaming

### Tailwind CSS 4

Uses the new Tailwind v4 syntax:
```css
/* globals.css */
@import 'tailwindcss';
```

No `tailwind.config.js` needed for basic setup - use CSS variables for theming.

---

## Next.js 16 Specifics

### Page Props Pattern

```tsx
// ✅ Correct - Next.js 16
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // ...
}

// Or use the helper type
export default async function Page(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params
  // ...
}
```

### Layout Props Pattern

```tsx
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}

// Or with type helper
export default function Layout(props: LayoutProps<'/services'>) {
  return <div>{props.children}</div>
}
```

### Server vs Client Components

```tsx
// Server Component (default) - can fetch data directly
export default async function ServerComponent() {
  const data = await fetchData()
  return <div>{data}</div>
}

// Client Component - for interactivity
'use client'
import { useState } from 'react'

export default function ClientComponent() {
  const [state, setState] = useState(false)
  return <button onClick={() => setState(!state)}>Toggle</button>
}
```

### When to Use Each

| Use Server Components | Use Client Components |
|-----------------------|----------------------|
| Fetching data | State management (useState, useReducer) |
| Accessing backend resources | Event handlers (onClick, onChange) |
| Rendering static content | Browser APIs (localStorage, window) |
| SEO-critical content | Animations with user interaction |
| Large dependencies | Third-party client libraries |

---

## Component Architecture

### Component Categories

```
components/
├── layout/      # Structural components (Header, Footer)
├── ui/          # Reusable primitive components
├── features/    # Business-specific components
└── animations/  # Animation wrapper components
```

### Component Design Principles

1. **Single Responsibility**: Each component does one thing well
2. **Composition over Inheritance**: Build complex UIs from simple pieces
3. **Props for Configuration**: Use props, not hardcoded values
4. **TypeScript First**: All components are fully typed

### UI Component Pattern

```tsx
// components/ui/Button.tsx
import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-pgi-gold text-pgi-black hover:bg-pgi-gold-light',
        secondary: 'border border-pgi-gold text-pgi-gold hover:bg-pgi-gold/10',
        ghost: 'text-pgi-gray-300 hover:text-pgi-white',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
```

### Feature Component Pattern

```tsx
// components/features/BusinessUnitCard.tsx
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import type { BusinessUnit } from '@/types'

interface BusinessUnitCardProps {
  unit: BusinessUnit
}

export function BusinessUnitCard({ unit }: BusinessUnitCardProps) {
  return (
    <Card className="group">
      <Card.Image 
        src={unit.image} 
        alt={unit.name}
        className="group-hover:scale-105 transition-transform"
      />
      <Card.Content>
        <Card.Title>{unit.name}</Card.Title>
        <Card.Description>{unit.tagline}</Card.Description>
        <Button variant="secondary" asChild>
          <a href={`/services/${unit.id}`}>Learn More</a>
        </Button>
      </Card.Content>
    </Card>
  )
}
```

---

## Styling Architecture

### Tailwind CSS Theme

Custom theme is defined via CSS variables in `globals.css`:

```css
/* src/app/globals.css */
@import 'tailwindcss';

@theme {
  /* Colors */
  --color-pgi-black: #0a0a0a;
  --color-pgi-dark: #141414;
  --color-pgi-charcoal: #1a1a1a;
  --color-pgi-gold: #C9A962;
  --color-pgi-gold-light: #D4B872;
  --color-pgi-gold-dark: #B89952;
  --color-pgi-burgundy: #722F37;
  
  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}
```

### Utility Function

```tsx
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Usage:
```tsx
<div className={cn(
  'base-styles',
  isActive && 'active-styles',
  className
)} />
```

---

## Animation System

### Motion Library Setup

```tsx
// components/animations/FadeIn.tsx
'use client'

import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className 
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### Animation Best Practices

1. **Use `useInView`** for scroll-triggered animations (better performance)
2. **Prefer `transform` and `opacity`** (GPU accelerated)
3. **Respect reduced motion**:
   ```tsx
   const prefersReducedMotion = useReducedMotion()
   
   if (prefersReducedMotion) {
     return <div>{children}</div>
   }
   ```
4. **Stagger children** for lists

---

## Data Flow

### Static Data Pattern

Data lives in TypeScript files for type safety:

```tsx
// src/lib/data/business-units.ts
import type { BusinessUnit } from '@/types'

export const businessUnits: BusinessUnit[] = [
  {
    id: 'pgi-property',
    name: 'PGI Property',
    // ...
  },
]
```

### Type Definitions

```tsx
// src/types/index.ts
export interface BusinessUnit {
  id: string
  name: string
  tagline: string
  description: string
  services: string[]
  image: string
}

export interface Project {
  id: string
  slug: string
  title: string
  businessUnit: string
  description: string
  images: string[]
  year: number
  status: 'completed' | 'ongoing'
}

export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  level: 1 | 2 | 3
}
```

---

## SEO Strategy

### Metadata Architecture

```tsx
// Root layout - default metadata
export const metadata: Metadata = {
  title: {
    default: 'PT. Property Group Imperium | Building Excellence',
    template: '%s | PGI',
  },
  description: 'Premium real estate development...',
}

// Page-specific metadata
export const metadata: Metadata = {
  title: 'About Us',  // Becomes "About Us | PGI"
  description: 'Learn about our company...',
}
```

### Dynamic Metadata

```tsx
// projects/[slug]/page.tsx
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  
  return {
    title: project.title,
    description: project.description,
  }
}
```

---

## Performance Considerations

### Image Optimization

```tsx
import Image from 'next/image'

// Always provide dimensions
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority  // For above-fold images
/>
```

### Font Optimization

```tsx
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})
```

---

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Button.tsx` |
| Pages | lowercase | `page.tsx` |
| Utilities | camelCase | `utils.ts` |
| Data files | kebab-case | `business-units.ts` |
| Types | PascalCase | `index.ts` (exports) |

---

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Images optimized and uploaded
- [ ] SEO metadata verified
- [ ] Lighthouse score > 90
- [ ] Mobile responsiveness checked
- [ ] Forms tested
- [ ] 404 page styled
- [ ] Error boundaries implemented
