# PT. Property Group Imperium (PGI) - Company Profile Website

A premium, grand-design company profile website for PT. Property Group Imperium (PGI), a luxury real estate conglomerate specializing in property management, construction, heavy machinery rental, and property development.

![PGI Logo Placeholder](public/images/logo/pgi-logo-placeholder.svg)

## 🏗️ Project Overview

**Tagline**: "Building Excellence, Shaping the Future"

This website showcases PGI's four business units:
- **PGI Property** - Property Management
- **PGI Contractor** - Construction Services
- **PGI Machinery** - Heavy Equipment Rental
- **PGI Developer** - Property Development

---

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Run production build
bun start

# Lint code
bun run lint

# Format code
bun run format
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.2 | React framework with App Router |
| React | 19.2.4 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Motion | latest | Animations (Framer Motion) |
| Lucide React | latest | Icon library |
| Biome | 2.2.0 | Linting & formatting |
| Bun | latest | Package manager & runtime |

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors (Dark Theme) */
--pgi-black: #0a0a0a;        /* Rich black - primary background */
--pgi-dark: #141414;         /* Dark surface - cards, sections */
--pgi-charcoal: #1a1a1a;     /* Secondary dark */

/* Accent Colors (Gold) */
--pgi-gold: #C9A962;         /* Primary gold - main accent */
--pgi-gold-light: #D4B872;   /* Light gold - hover states */
--pgi-gold-dark: #B89952;    /* Dark gold - pressed states */

/* Text Colors */
--pgi-white: #FFFFFF;        /* Primary text on dark */
--pgi-gray-100: #F5F5F5;     /* Light text */
--pgi-gray-300: #D4D4D4;     /* Secondary text */
--pgi-gray-500: #737373;     /* Muted text */

/* Supporting Colors */
--pgi-burgundy: #722F37;     /* Special accent elements */
```

### Typography

| Usage | Font | Weight |
|-------|------|--------|
| Headings (H1-H3) | Playfair Display | 400, 700 |
| Body & UI | Inter | 400, 500, 600, 700 |

### Design Principles
- **Luxury Dark Theme**: Rich black backgrounds with gold accents
- **Elegant Typography**: Serif headings for premium feel
- **Subtle Animations**: Scroll-triggered reveals, micro-interactions
- **Mobile-First**: Responsive design for all screen sizes

---

## 📁 Project Structure

```
pgi-compro/
├── public/
│   ├── images/
│   │   ├── hero/              # Hero background images
│   │   ├── logo/              # Company logos
│   │   ├── business-units/    # Business unit images
│   │   ├── projects/          # Project gallery images
│   │   ├── team/              # Team member photos
│   │   ├── clients/           # Client logos
│   │   └── about/             # About page images
│   └── videos/                # Optional video assets
│
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout (fonts, metadata)
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles & Tailwind
│   │   ├── sitemap.ts         # SEO sitemap
│   │   ├── robots.ts          # SEO robots.txt
│   │   ├── about/
│   │   │   └── page.tsx       # About page
│   │   ├── services/
│   │   │   ├── page.tsx       # Services overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Individual service
│   │   ├── projects/
│   │   │   ├── page.tsx       # Projects gallery
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Project detail
│   │   └── contact/
│   │       └── page.tsx       # Contact page
│   │
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   ├── Container.tsx  # Max-width wrapper
│   │   │   └── Section.tsx    # Section wrapper
│   │   │
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx     # Button variants
│   │   │   ├── Card.tsx       # Card component
│   │   │   ├── Badge.tsx      # Category badges
│   │   │   ├── Input.tsx      # Form input
│   │   │   ├── Textarea.tsx   # Form textarea
│   │   │   ├── Logo.tsx       # Company logo
│   │   │   └── SectionTitle.tsx # Heading with accent
│   │   │
│   │   ├── features/          # Feature components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BusinessUnitCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── TeamMemberCard.tsx
│   │   │   ├── ClientLogoCarousel.tsx
│   │   │   ├── ValueCard.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── StatsSection.tsx
│   │   │
│   │   └── animations/        # Animation wrappers
│   │       ├── FadeIn.tsx
│   │       ├── SlideIn.tsx
│   │       └── ScaleIn.tsx
│   │
│   ├── lib/
│   │   ├── config.ts          # Site configuration
│   │   ├── utils.ts           # Utility functions (cn, etc.)
│   │   └── data/              # Static data
│   │       ├── business-units.ts
│   │       ├── projects.ts
│   │       ├── team.ts
│   │       └── values.ts
│   │
│   └── types/
│       └── index.ts           # TypeScript types
│
├── AGENTS.md                  # AI coding guidelines
├── biome.json                 # Biome linter config
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS for Tailwind
├── tailwind.config.ts         # Tailwind theme config
└── tsconfig.json              # TypeScript config
```

---

## 📄 Pages Overview

### 1. Homepage (`/`)
- **Hero Section**: Full-screen with background image/video, tagline, CTA
- **Business Units**: 4-card grid showcasing each division
- **Featured Projects**: Showcase of notable projects
- **Client Logos**: Trusted partners carousel
- **Statistics**: Animated counters (years, projects, etc.)

### 2. About (`/about`)
- **Company Story**: History and background
- **Vision & Mission**: Company direction
- **Core Values**: Value cards with icons
- **Our Team**: Organizational hierarchy with photos

### 3. Services (`/services`)
Overview of all business units with links to detail pages:
- `/services/pgi-property` - Property Management
- `/services/pgi-contractor` - Construction
- `/services/pgi-machinery` - Heavy Equipment
- `/services/pgi-developer` - Development

### 4. Projects (`/projects`)
- **Gallery Grid**: Filterable by business unit
- **Project Detail** (`/projects/[slug]`): Full project showcase

### 5. Contact (`/contact`)
- **Contact Form**: Name, email, phone, message
- **Contact Info**: Address, phone, email
- **Map Placeholder**: For Google Maps integration

---

## 🧩 Component Guide

### UI Components

#### Button
```tsx
import { Button } from '@/components/ui/Button'

// Variants: primary (gold), secondary (outline), ghost
<Button variant="primary">Get Started</Button>
<Button variant="secondary">Learn More</Button>
```

#### Card
```tsx
import { Card } from '@/components/ui/Card'

<Card>
  <Card.Image src="/image.jpg" alt="..." />
  <Card.Content>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description text</Card.Description>
  </Card.Content>
</Card>
```

#### SectionTitle
```tsx
import { SectionTitle } from '@/components/ui/SectionTitle'

// Includes gold accent line
<SectionTitle 
  title="Our Services" 
  subtitle="What we offer"
  align="center" // or "left"
/>
```

### Animation Components

```tsx
import { FadeIn, SlideIn, ScaleIn } from '@/components/animations'

// Fade in on scroll
<FadeIn>
  <div>Content fades in</div>
</FadeIn>

// Slide from direction
<SlideIn direction="left" delay={0.2}>
  <div>Slides from left</div>
</SlideIn>

// Scale up
<ScaleIn>
  <div>Scales up on scroll</div>
</ScaleIn>
```

### Layout Components

```tsx
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

// Container limits max-width
<Container>
  <p>Content with max-width</p>
</Container>

// Section adds vertical padding
<Section className="bg-pgi-dark">
  <Container>
    <p>Section content</p>
  </Container>
</Section>
```

---

## 📝 Content Management

### Updating Site Config
Edit `src/lib/config.ts`:
```typescript
export const siteConfig = {
  name: "PT. Property Group Imperium",
  shortName: "PGI",
  tagline: "Building Excellence, Shaping the Future",
  contact: {
    email: "info@pgigroup.com",
    phone: "+62 xxx xxxx xxxx",
    address: "Jakarta, Indonesia"
  },
  // ...
}
```

### Adding/Editing Business Units
Edit `src/lib/data/business-units.ts`:
```typescript
export const businessUnits = [
  {
    id: "pgi-property",
    name: "PGI Property",
    tagline: "Excellence in Property Management",
    description: "Full description here...",
    services: ["Service 1", "Service 2"],
    image: "/images/business-units/property.jpg"
  },
  // Add more...
]
```

### Adding/Editing Projects
Edit `src/lib/data/projects.ts`:
```typescript
export const projects = [
  {
    id: "project-1",
    slug: "grand-residence-tower",
    title: "Grand Residence Tower",
    businessUnit: "pgi-developer",
    description: "Luxury apartment complex...",
    images: ["/images/projects/grand-1.jpg"],
    year: 2024,
    status: "completed"
  },
  // Add more...
]
```

### Adding/Editing Team Members
Edit `src/lib/data/team.ts`:
```typescript
export const team = [
  {
    id: "1",
    name: "John Doe",
    position: "President Director",
    image: "/images/team/john-doe.jpg",
    level: 1  // 1 = top level, 2 = directors, 3 = managers
  },
  // Add more...
]
```

---

## 🖼️ Image Guidelines

### Required Image Placeholders

| Location | Recommended Size | Format |
|----------|------------------|--------|
| Hero background | 1920x1080 | JPG/WebP |
| Business unit cards | 800x600 | JPG/WebP |
| Project thumbnails | 600x400 | JPG/WebP |
| Project gallery | 1200x800 | JPG/WebP |
| Team photos | 400x400 | JPG/PNG |
| Client logos | 200x100 | PNG/SVG |
| Company logo | 200x60 | SVG |

### Image Optimization
- Use Next.js `<Image>` component (auto-optimized)
- Provide `width` and `height` to prevent layout shift
- Use `priority` for above-fold images (hero)

```tsx
import Image from 'next/image'

<Image
  src="/images/hero/hero-bg.jpg"
  alt="PGI Building"
  width={1920}
  height={1080}
  priority  // For hero images
/>
```

---

## 🔍 SEO Implementation

### Metadata (per page)
```typescript
// In any page.tsx
export const metadata = {
  title: 'About Us | PGI',
  description: 'Learn about PT. Property Group Imperium...',
  openGraph: {
    title: 'About Us | PGI',
    description: '...',
    images: ['/og-image.jpg'],
  },
}
```

### Structured Data
JSON-LD is added in root layout for organization schema.

### Generated Files
- `sitemap.ts` → Auto-generates sitemap.xml
- `robots.ts` → Generates robots.txt
- `opengraph-image.tsx` → Dynamic OG images

---

## ♿ Accessibility

- All images have descriptive `alt` text
- Interactive elements have focus states
- Color contrast meets WCAG AA standards
- `prefers-reduced-motion` respected for animations
- Semantic HTML structure
- Keyboard navigation support

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Manual Build
```bash
bun run build
bun start
```

### Environment Variables
Create `.env.local` for any API keys:
```env
# Example (if adding contact form backend)
CONTACT_API_KEY=your_api_key
```

---

## 📋 Development Checklist

### Phase 1: Foundation
- [ ] Install dependencies (motion, lucide-react, clsx, tailwind-merge)
- [ ] Configure Tailwind theme with PGI colors
- [ ] Set up fonts (Playfair Display, Inter)
- [ ] Create base UI components

### Phase 2: Layout
- [ ] Header with navigation
- [ ] Footer with links
- [ ] Mobile menu

### Phase 3: Pages
- [ ] Homepage (hero, business units, projects, clients, stats)
- [ ] About page (story, vision, values, team)
- [ ] Services pages
- [ ] Projects gallery & detail pages
- [ ] Contact page

### Phase 4: Polish
- [ ] SEO metadata & structured data
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing

---

## 🤝 Contributing

1. Follow existing code patterns
2. Use Biome for linting (`bun run lint`)
3. Keep components reusable
4. Document any new components

---

## 📞 Support

For questions about this project, contact the development team.

---

**Built with ❤️ for PT. Property Group Imperium**
