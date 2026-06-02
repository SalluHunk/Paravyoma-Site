# Paravyoma Technologies — Website

A premium, enterprise-grade B2B website for **Paravyoma Technologies**, a
solutions & technology partner.

> **AI-assisted execution. Human-led strategy.**

Paravyoma does not sell websites or apps — it sells business outcomes through
technology: streamlined operations, automated workflows, stronger customer
engagement and scalable systems for sustainable growth.

## Tech stack

| Layer       | Choice                                     |
| ----------- | ------------------------------------------ |
| Framework   | Next.js 15 (App Router, RSC)               |
| Language    | TypeScript (strict)                        |
| Styling     | Tailwind CSS 3 + design tokens             |
| Components  | ShadCN UI conventions (Radix primitives)   |
| Icons       | lucide-react                               |
| Typography  | Geist (display) + Inter (body) via next/font |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command             | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the dev server             |
| `npm run build`     | Production build                 |
| `npm run start`     | Serve the production build       |
| `npm run lint`      | Lint with ESLint                 |
| `npm run typecheck` | Type-check without emitting      |

## Design system

The design system is the foundation for **all current and future pages**.

- **Tokens** — defined as HSL CSS variables in `src/app/globals.css` and mapped
  in `tailwind.config.ts`. Colours, radius, shadows and fonts all flow from here.
- **Palette** — Primary `#0F172A`, Secondary `#1E293B`, Accent `#2563EB`,
  Background `#FFFFFF`, Surface `#F8FAFC`, Text `#111827`.
- **Primitives** — `Container`, `Section`, `SectionHeading`, `Reveal`, `Logo`.
- **UI** — `Button` (primary / secondary / brand / ghost / link) and `Accordion`,
  following ShadCN conventions in `src/components/ui`.

### Building a new page

```tsx
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

export default function ExamplePage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Label"
        title="Page heading"
        description="Supporting copy."
        align="center"
      />
      {/* ...content using the shared primitives... */}
    </Section>
  );
}
```

Reuse `Section`, `Container`, `SectionHeading`, `Button` and `Reveal` so spacing,
typography and motion stay consistent everywhere.

## Project structure

```
src/
  app/
    layout.tsx          # Root layout: fonts, metadata, header/footer, JSON-LD
    page.tsx            # Homepage (composes section components)
    globals.css         # Design tokens + base styles
    sitemap.ts          # SEO sitemap
    robots.ts           # robots.txt
    not-found.tsx       # 404 page
  components/
    ui/                 # ShadCN-style primitives (button, accordion)
    layout/             # site-header, site-footer
    sections/           # Homepage sections
    shared/             # Container, Section, SectionHeading, Reveal, Logo
  lib/
    utils.ts            # cn() class merger
    site.ts             # Single source of truth for site config / nav
```

## Accessibility & SEO

- Semantic landmarks, skip-to-content link and visible focus rings.
- `prefers-reduced-motion` fully respected.
- Per-route metadata, Open Graph / Twitter cards, canonical URLs.
- JSON-LD structured data (Organization, WebSite, ProfessionalService).
- Sitemap and robots routes.

## Notes

Update `src/lib/site.ts` with the production domain, email and any social links
before launch.
