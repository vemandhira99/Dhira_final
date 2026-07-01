# Akashic Page - Deep Design & Architecture Notes

This document provides an exhaustive teardown of the DHIRA v3 website's design system, layout strategies, and animation primitives. It serves as the definitive blueprint for building the upcoming **Akashic** page.

## 1. Core Stack & Architecture
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript 5.7
- **Styling Paradigm:** 
  - Standard sections use **Tailwind CSS** strictly for layout, typography, and spacing.
  - Complex UI Mockups (e.g., `PlatformBIChartMockup`) use **inline `style={{}}` objects** intentionally to maintain pixel-perfect precision and avoid overly long class strings for bespoke geometry.
- **Component Anatomy:** 
  - Layouts (`Nav.tsx`, `Footer.tsx`) wrap standard pages.
  - Page contents are composed of sequential, semantic `<section>` components.
  - Simulated product UIs belong in `components/demos/mockups/` (e.g., mock BI charts, data pipelines).

## 2. Layout & Section Division Strategies
Every section avoids generic card grids in favor of content-driven "organic shapes."

- **The Rail Container:** Most sections are bounded horizontally using the `.rail-container` utility class (`max-w-[1440px] border-x border-lineSoft px-4 sm:px-6 lg:px-8`), ensuring a consistent maximum width and subtle side borders.
- **Section Headers (Eyebrows):** 
  - Eyebrows follow a strict pattern: `[01] / THE PROBLEM / THE ARCHITECTURE GAP`.
  - Implemented via: `font-mono text-[11px] uppercase tracking-eyebrow text-inkSoft`. Numbers are often styled in `text-overcast` or a section-specific color (like `text-red`).
  - Placed in a dashed-border flex container spanning the top of the section.
- **Asymmetric Grids:** 
  - Example (Problem Section): `grid-cols-1 lg:grid-cols-[0.58fr_1fr]`. This creates a sticky, narrow left rail for the core message and a wider right lane for scrolling content or complex graphics.
  - The sticky left rail uses `lg:sticky lg:top-32 self-start` to remain visible while right-side blocks scroll past.
- **Background Transitions:** Sections alternate deliberate background tokens (`bg-white`, `bg-background`). High-impact sections (like `PowerfulPlatform`) break the pattern with a bold `bg-[#3E63DD]` (blue) background to act as a visual anchor.

## 3. Typography Hierarchy
Typography is tightly controlled using the Google Fonts ecosystem defined in `tailwind.config.ts`.
- **Primary Headings (`font-heading`):** Google Sans. 
  - Sizing: `text-[48px]` to `text-[64px]` (`heading-xl`).
  - Weight & Tracking: `font-semibold leading-[1.1] tracking-tighter`.
  - Style: Headlines are complete, declarative thoughts. No em-dashes; use colons or periods.
- **Body (`font-sans`):** Google Sans Text.
  - Standard copy is `text-base` or `text-lg`, often `leading-relaxed text-inkSoft`.
- **Monospace/Data (`font-mono`):** Google Sans Mono.
  - Used for eyebrows, raw data values, code snippets, and telemetry labels.
- **Editorial Quotes (`font-display`):** Newsreader.
  - *Strict Rule:* Used only for pull-quotes. Do not use for standard marketing headings.

## 4. Animation & Motion Design
The site utilizes a deeply integrated animation strategy prioritizing smoothness and scroll-awareness.

### Intersection-Observer Fades (`ScrollReveal`)
- The `<ScrollReveal>` component wraps almost every block of static text.
- It triggers a `fade-in` animation (`mc-stage-in` or similar) when the element enters the viewport.
- **Staggering:** Sibling elements use the `delay` prop (e.g., `delay={80}`, `delay={160}`) to create a cascading entrance effect that feels natural, not theatrical (delays rarely exceed 400ms).

### Data-Driven Animations
- **Number Count-ups:** `hooks/useCountUp.ts` animates raw numbers dynamically (e.g., "$0" to "$581B"). 
  - `useCountUp` animates once when scrolling into view.
  - `useCountUpValue` is used for re-triggerable UI updates inside active mockups.

### Scroll-Tracking & Scroll-Linked States
- The `Hero.tsx` section binds text opacity, blur, and color changes to `window.scrollY`. 
  - As the user scrolls past a `150vh` sticky section, the text progresses through an active state by calculating `quoteProgress` relative to window height.

### Custom Keyframes (`globals.css`)
Complex simulated UI relies on bespoke CSS keyframes rather than Tailwind utilities:
- **SVG Path Drawings:** `.fl-sparkline` uses `stroke-dasharray` and `stroke-dashoffset` to draw lines dynamically (`@keyframes fl-spark`). Connectors (`vconn-flow`) simulate data moving through pipelines.
- **Mockup Interactions:** 
  - `ps-crawl`, `ps-zip`: Simulates data packets moving across lines.
  - `ps-pulse`, `ps-caret-blink`: Adds heartbeat-like realism to fake live-status badges.
  - `hs-card`: Uses data attributes (`data-pos="center|left|right"`) with sophisticated `cubic-bezier(0.2,0.8,0.2,1)` transforms to build the 3D rotating card carousel in the Hero.

### Reduced Motion
- *Absolute Rule:* All custom animations respect user preferences. `globals.css` forces `animation-duration: 0.01ms !important` globally when `prefers-reduced-motion: reduce` is active. JS intervals (like the rotating Hero text) fall back to slower fade cycles.

## 5. Design Tokens (Colors)
- **Surfaces:** `background` (#FFFFFF), `primary-bg` (#FAFAFB), `tertiary-bg` (#F3F3F4).
- **Text:** `ink` (#1A1C1D) for headers, `inkSoft` (#6f7988) for body, `overcast` (#64748B) for watermarks/labels.
- **Accents:** `blue` (#3E63DD) is the sole dominant brand color. `red` (#E5484D) is restricted specifically to problem indicator bars.
- **UI Elements:** Use `btn-primary` (dark ink fill, 10px radius) and `btn-secondary` (white with subtle border) for calls to action.

## 6. How to Build the Akashic Page
When constructing the Akashic page, follow this lifecycle:
1. **Define the Grid:** Use `.rail-container` and asymmetric grids (`lg:grid-cols-[1fr_2fr]`) to avoid standard, boxy designs.
2. **Layer the Entrance:** Wrap text and headings in `<ScrollReveal delay={...}>` to ensure smooth loading.
3. **Typography First:** Apply `tracking-tighter` and `leading-[1.1]` to large headers using `Google Sans`. 
4. **Mockup Engineering:** If the page requires UI simulations, build them in `components/demos/mockups/` using precise inline styles, raw SVGs, and custom keyframes added to `globals.css`. Ensure no real data fetching occurs in these files.
5. **No Invented Metrics:** If numbers are used, they must map to verified telemetry or actual statistics.
