# Aeterna Events — Project Context

> Single source of truth for building the Aeterna Events website.
> Contains business plan, branding system, design tokens, logo details, content strategy, and technical direction.
> **Read this file fully before writing any code.**

---

## 1. Business Overview

### What Aeterna Events Does

Aeterna Events is an Italian venue-finding agency for international clients. The name is Latin for "eternal."

**Vision:** Reveal the eternal value of Italy's cultural heritage through venues and experiences that transform celebrations into unforgettable moments.

**Mission:** Guide international brands, organizations and couples in discovering Italy beyond the expected — providing expert venue finding and refined event support for meaningful corporate events and private celebrations.

### Target Audience

Two segments, both international (primarily English-speaking):

1. **Corporate** — International remote companies seeking retreat/team meeting locations. Content creators looking for retreat venues. Focus on cultural heritage, tradition, and affordability.
2. **Wedding** — Couples seeking an Italian destination wedding. The right venue is the core value proposition.

### Problem Solved

Connect international clients with Italian venues that lack the infrastructure to manage foreign clients directly. Promote lesser-known Italian destinations as perfect event locations.

### Competitive Advantage

Deep knowledge and connections with a broad network of venues across Italy — not limited to a small group of contracted venues like most agencies. Tailored, bespoke service.

### Business Model (Step 1 — Launch Phase)

- Sole proprietorship
- 10% commission from venues on successful bookings
- Venue finding service: free if client signs with the venue, flat fee if not
- Revenue = commissions only

### Marketing Channels (relevant to website)

- **Instagram** — Main promotional channel. Two pages: corporate events and weddings. 2+ posts/week. Focus on unusual Italian destinations.
- **Facebook** — Repost from Instagram. Groups and communities.
- **Reddit** — Community engagement, DM-based outreach, inspiration for content.
- **LinkedIn** — B2B profile, venue finding positioning, event services.
- **Direct outreach** — Email campaigns to target companies and agencies outside Italy.

### Domain

`aeternaevents.com`

---

## 2. Brand Identity

### Brand Personality

| Trait | Meaning |
|-------|---------|
| **Timeless** | Rooted in centuries of culture, not in trends |
| **Refined** | Every detail curated with care and intention |
| **Warm** | Approachable luxury — never cold or elitist |
| **Knowledgeable** | Deep expertise worn lightly, shared generously |

### Brand Voice

- **Tone:** Warm, confident, knowledgeable. Like a well-traveled friend who knows every hidden courtyard in Italy.
- Never salesy or aggressive. Understated elegance.
- Use "we guide," "we discover," "we connect" — active, personal verbs.
- Avoid corporate jargon. Avoid superlatives ("the best," "the most exclusive").
- Can use occasional Italian words naturally (not forced): "piazza," "palazzo," "festa."

---

## 3. Logo

The logo is a **custom wordmark**: the word **AETERNA** set in an elegant custom serif typeface, with the letter **T replaced by a stylized Ionic column** with a serpentine vine. Below: a thin gold horizontal line, then "EVENTS" in a clean sans-serif.

The text is fully outlined as SVG paths (no font dependency). The column features a gold gradient (#D4B876 → #C4A265).

### Variants

Two logo SVG files are provided in `public/logos/`:

| File | Background | Text Color | Usage |
|------|-----------|------------|-------|
| `Light_logo.svg` | #F5F0E8 (Warm White) | #2C2C2C (Charcoal) | Light sections, default |
| `Dark_logo.svg` | #2C2C2C (Charcoal) | #FAF7F0 (Ivory) | Dark sections, footer |

**Important:** Both SVGs contain a background `<rect>`. When using on the web, you may want to remove this rect and let the logo sit on the page background, or use them as-is where the background matches.

### Column Icon (standalone)

The standalone column SVG (`Aeterna_logo.svg`) can be used as a favicon, social media avatar, or loading icon. It is 235×486 with the same gold gradient.

### Logo Usage Rules

- Minimum clear space: the height of the letter "A" on all sides
- Minimum width: 120px digital, 25mm print
- Never add drop shadows, outlines, glow, or effects
- Never distort proportions
- On light backgrounds: use Light_logo.svg
- On dark backgrounds: use Dark_logo.svg

---

## 4. Color Palette

### CSS Custom Properties

```css
:root {
  /* ─── Primary ─── */
  --color-charcoal:      #2C2C2C;   /* Primary text, dark backgrounds */
  --color-warm-white:    #F5F0E8;   /* Primary light background */
  --color-ivory:         #FAF7F0;   /* Lightest neutral, text-on-dark, alt bg */
  --color-antique-gold:  #C4A265;   /* Primary accent — lines, icons, highlights */
  --color-light-gold:    #D4B876;   /* Secondary accent — hover states, gradient start */

  /* ─── Supporting ─── */
  --color-deep-olive:    #5A6B4A;   /* Nature, heritage — section labels, tags */
  --color-terracotta:    #B87850;   /* Warmth, Italy — CTA hover, warm accents */
  --color-soft-sage:     #A8B89A;   /* Subtle backgrounds, badges */
  --color-stone-grey:    #9B9485;   /* Captions, metadata, secondary text */

  /* ─── Dark Variants ─── */
  --color-deep-navy:     #1E2A3A;   /* Alt dark sections */

  /* ─── Semantic Aliases ─── */
  --bg-primary:          var(--color-warm-white);
  --bg-secondary:        var(--color-ivory);
  --bg-dark:             var(--color-charcoal);
  --bg-dark-alt:         var(--color-deep-navy);
  --text-primary:        var(--color-charcoal);
  --text-secondary:      var(--color-stone-grey);
  --text-on-dark:        var(--color-ivory);   /* NOTE: #FAF7F0, not #F5F0E8 */
  --accent-primary:      var(--color-antique-gold);
  --accent-hover:        var(--color-light-gold);
  --accent-warm:         var(--color-terracotta);
}
```

### Color Rules

- **Gold is an accent only.** Thin lines, decorative borders, icon strokes, small highlights, link hover underlines. Never large fills.
- **Never use pure white (#FFFFFF)** as a background. Use Warm White (#F5F0E8) or Ivory (#FAF7F0).
- **Never use pure black (#000000)** for text. Use Charcoal (#2C2C2C).
- **Text on dark backgrounds uses Ivory (#FAF7F0)**, not Warm White — this provides slightly more contrast.
- **Terracotta** for CTA buttons and warm interactive elements.
- **Deep Olive** for section labels, category tags, nature-related contexts.
- Overall feeling: warm, never sterile or clinical.

---

## 5. Typography

### Font Stack

```css
:root {
  --font-serif:     'Lora', Georgia, 'Times New Roman', serif;
  --font-sans:      'Poppins', 'Helvetica Neue', Arial, sans-serif;
}
```

> **Note:** The logo itself uses a custom outlined serif — not Lora. The logo should always be rendered via the SVG files, never recreated with a web font. Lora is the closest equivalent for body/headline text on the website.

### Font Sizes (fluid)

```css
:root {
  --text-xs:        clamp(0.7rem, 0.65rem + 0.25vw, 0.8rem);
  --text-sm:        clamp(0.8rem, 0.75rem + 0.3vw, 0.9rem);
  --text-base:      clamp(0.95rem, 0.9rem + 0.3vw, 1.05rem);
  --text-lg:        clamp(1.1rem, 1rem + 0.5vw, 1.3rem);
  --text-xl:        clamp(1.4rem, 1.2rem + 1vw, 1.8rem);
  --text-2xl:       clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem);
  --text-3xl:       clamp(2.2rem, 1.8rem + 2vw, 3.2rem);
  --text-hero:      clamp(2.8rem, 2rem + 3vw, 4.5rem);
}
```

### Typography Usage

| Context | Font | Weight | Notes |
|---------|------|--------|-------|
| Hero headlines | Lora | 400 | Large, letterspaced. Let the typeface do the work. |
| Section headlines | Lora | 400–500 | Size contrast over weight contrast. |
| Body text | Lora | 400 | Editorial content: venue descriptions, stories, about. |
| Pull quotes | Lora Italic | 400 | Larger size, gold accent for attribution. |
| Navigation | Poppins | 300–400 | Letterspaced, uppercase or sentence case. |
| Buttons / CTAs | Poppins | 500 | Letterspaced uppercase for primary CTAs. |
| Labels / metadata | Poppins | 300 | Captions, dates, categories, footer. |
| Form fields | Poppins | 400 | Clean and functional. |

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
```

---

## 6. Design System

### Spacing

```css
:root {
  --space-xs:    0.25rem;
  --space-sm:    0.5rem;
  --space-md:    1rem;
  --space-lg:    1.5rem;
  --space-xl:    2rem;
  --space-2xl:   3rem;
  --space-3xl:   4rem;
  --space-4xl:   6rem;
  --space-section: clamp(4rem, 3rem + 5vw, 8rem);
}
```

### Borders & Radius

```css
:root {
  --border-thin:    1px solid rgba(196, 162, 101, 0.3);
  --border-accent:  1px solid var(--color-antique-gold);
  --radius-sm:      4px;
  --radius-md:      8px;
  --radius-lg:      12px;
  --radius-full:    9999px;
}
```

### Shadows

```css
:root {
  --shadow-sm:     0 1px 3px rgba(44, 44, 44, 0.06);
  --shadow-md:     0 4px 12px rgba(44, 44, 44, 0.08);
  --shadow-lg:     0 8px 30px rgba(44, 44, 44, 0.10);
  --shadow-gold:   0 4px 20px rgba(196, 162, 101, 0.15);
}
```

### Transitions

```css
:root {
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast:  150ms;
  --duration-base:  300ms;
  --duration-slow:  500ms;
}
```

### Design Principles

1. **Photography-led.** The brand frames, never competes with, stunning venue photography. Large hero images, full-bleed sections, subtle overlays.
2. **Generous whitespace.** Let content breathe. Wide margins, generous section padding.
3. **Gold as punctuation.** Thin lines, subtle borders, hover underlines, icon accents. Never large fills.
4. **Warm backgrounds.** Alternate between Warm White, Ivory, and occasional Charcoal or Deep Navy for contrast.
5. **Motion with restraint.** Subtle fade-in on scroll, gentle hover transitions. No bouncing, spinning, or aggressive parallax. A page gently revealing itself.
6. **Mobile-first.** Audience finds Aeterna primarily through Instagram → website. Mobile experience is paramount.

---

## 7. Website Structure

### Pages

| Page | Purpose |
|------|---------|
| **Home** | Hero image, value proposition, intro to both services, featured venues/testimonials, CTA |
| **Corporate Events** | Retreat/team meeting venue finding. Problem-solution framing. Process. CTA. |
| **Weddings** | Destination wedding venue finding. Emotional storytelling. Process. CTA. |
| **About** | Story behind Aeterna. Personal connection to Italy, deep knowledge, team. |
| **Contact** | Form, email, social links. Simple and clean. |

### Navigation

- Sticky top nav: transparent on hero, solid on scroll
- Logo (left) — use the SVG logo, remove background rect for transparency
- Nav links (center or right): Home, Corporate, Weddings, About, Contact
- CTA button (right)
- Mobile: hamburger menu with full-screen overlay

### Footer

- Dark background (Charcoal #2C2C2C)
- Logo (dark variant)
- Navigation links
- Social icons: Instagram, Facebook, LinkedIn
- Email address
- Legal: © 2026 Aeterna Events, P.IVA [number]

---

## 8. Component Patterns

### Hero Section
- Full-viewport-height image with subtle dark gradient overlay from bottom
- Headline: Lora, large, letterspaced
- Subheadline: Poppins Light
- CTA button: Poppins Medium, uppercase, letterspaced, Terracotta or Charcoal bg, Ivory text
- Optional: subtle ken-burns (slow zoom) on background image

### Section Headers
- Small label: Poppins Light uppercase, letterspaced, gold or deep olive color
- Large title: Lora, size contrast, Charcoal
- Optional: thin gold line accent (1px, short width)

### Cards (Venue/Service)
- Rounded image top (radius-md)
- Warm White or Ivory background
- Title: Lora
- Description: Poppins Light
- Subtle shadow-md on hover
- Gold border-bottom accent on hover

### CTA Buttons
- **Primary:** Terracotta bg (#B87850), Ivory text, Poppins Medium uppercase, letterspaced, radius-sm. Hover: slightly darker.
- **Secondary:** Transparent bg, Charcoal border, Charcoal text. Hover: Charcoal bg, Ivory text.
- **Ghost (on dark):** Transparent bg, Ivory border, Ivory text. Hover: Ivory bg, Charcoal text.

### Testimonial/Quote
- Lora Italic, larger than body text
- Gold quotation mark accent or gold left border
- Attribution: Poppins Light, stone grey

### Contact Form
- Clean, minimal layout with generous spacing
- Poppins for labels and input text
- Labels: Poppins Light, small, uppercase letterspaced, stone grey or deep olive
- Inputs: full-width, subtle bottom-border only (no full box), Charcoal text
- Focus state: gold bottom-border (#C4A265), subtle gold glow
- Required fields: name, email, event type (dropdown: Corporate Retreat / Destination Wedding / Other), message
- Optional fields: estimated guest count, preferred region in Italy, preferred dates
- Submit button: Terracotta bg, Ivory text, Poppins Medium uppercase
- Success state: replace form with a warm confirmation message ("Thank you — we'll be in touch shortly.")
- Error state: inline validation, subtle terracotta text below the field

**Form submission:** Use a third-party form service (no backend needed):
- **Option A — Formspree:** `<form action="https://formspree.io/f/{form_id}" method="POST">` — simple, reliable, free tier
- **Option B — Web3Forms:** `<form action="https://api.web3forms.com/submit" method="POST">` with access key in a hidden field — no email exposed in source code
- Both work with plain HTML forms and send submissions to the owner's email
- Add a hidden honeypot field for spam protection
- For AJAX submission (no page redirect), intercept submit with vanilla JS `fetch()` and show the success message in-place

---

## 9. Image Strategy

Since this is the launch phase without a portfolio, the website should use:

- **High-quality stock photography** of Italian venues, landscapes, architecture
- Focus on: Tuscan countryside, historic palazzos, coastal venues, intimate courtyard settings, Italian details (olive groves, stone walls, arched doorways, table settings)
- Warm, natural tones — avoid over-saturated or cold-toned photos
- Images should feel editorial, not generic stock
- When possible, use placeholder sections clearly labeled "[Client photos will replace]" for future portfolio content

---

## 10. SEO & Meta

- Primary language: English
- Secondary language considerations: Italian pages may be added later
- Title pattern: `Page Name — Aeterna Events | Italian Venue Finding`
- Meta description: Focus on "Italian venue finding," "corporate retreats Italy," "destination wedding Italy"
- Open Graph images: Use the logo or hero images
- Favicon: Standalone column icon from `Aeterna_logo.svg`

---

## 11. Technical Notes

### Stack

Pure HTML + CSS + vanilla JavaScript. No frameworks, no build step, no bundlers.

- **HTML5** — semantic markup, one `.html` file per page
- **CSS3** — single `styles.css` with custom properties (the design tokens above), no preprocessors
- **Vanilla JS** — single `main.js` for interactivity (mobile menu, scroll animations, contact form AJAX, navbar transparency toggle)
- **Google Fonts** — loaded via `<link>` in `<head>`
- **Form service** — Formspree or Web3Forms for contact form (see Component Patterns > Contact Form)

### Why No Framework

This is a 5-page brochure/marketing site. There is no user authentication, no dynamic data, no complex state. Plain HTML/CSS/JS is faster to build, has zero build complexity, loads instantly, is trivial to deploy anywhere, and any developer or AI agent can work with it without framework knowledge.

### File Structure

```
/
├── index.html              # Home
├── corporate.html          # Corporate Events
├── weddings.html           # Weddings
├── about.html              # About
├── contact.html            # Contact
├── css/
│   └── styles.css          # All styles — variables, base, components, pages
├── js/
│   └── main.js             # Mobile menu, scroll animations, form handler, navbar
├── images/
│   ├── hero/               # Full-bleed hero images
│   ├── venues/             # Venue photography
│   └── about/              # Team / story images
├── logos/
│   ├── Light_logo.svg      # Primary logo (light backgrounds)
│   ├── Dark_logo.svg       # Dark variant (dark backgrounds)
│   └── Aeterna_logo.svg    # Standalone column icon (favicon source)
├── favicon.ico             # Generated from column icon
└── robots.txt
```

### CSS Architecture

All styles live in one `styles.css` file, organized in this order:

```css
/* 1. Custom Properties (design tokens) — colors, fonts, spacing, shadows, transitions */
/* 2. Reset / Base — box-sizing, html/body, links, images */
/* 3. Typography — headings, body, labels, quotes */
/* 4. Layout — .container, .section, .grid utilities */
/* 5. Components — .btn, .card, .nav, .footer, .form-group, .hero */
/* 6. Page-specific — .home-hero, .corporate-process, .wedding-gallery, etc. */
/* 7. Animations — @keyframes, .fade-in, .slide-up */
/* 8. Media queries — mobile-first breakpoints */
```

### JavaScript Responsibilities

`main.js` handles only four things:

1. **Mobile menu** — hamburger toggle, full-screen overlay open/close, body scroll lock
2. **Navbar transparency** — `IntersectionObserver` on hero section; navbar is transparent over hero, solid with shadow after scrolling past
3. **Scroll animations** — `IntersectionObserver` to add `.visible` class to `.fade-in` elements as they enter viewport
4. **Contact form** — intercept form submit, POST via `fetch()` to Formspree/Web3Forms, show success/error message in-place without page redirect

No jQuery. No animation libraries. Use native `IntersectionObserver` and CSS transitions for all animation.

### Shared HTML Patterns

Every page includes the same `<header>` (navbar) and `<footer>`. Since there's no templating engine, these are duplicated across pages. Keep them identical — when editing nav or footer, update all five files.

**Navbar structure:**
```html
<header class="navbar" id="navbar">
  <div class="container navbar-inner">
    <a href="/" class="navbar-logo">
      <img src="/logos/Light_logo.svg" alt="Aeterna Events" class="logo-light">
      <img src="/logos/Dark_logo.svg" alt="Aeterna Events" class="logo-dark">
    </a>
    <nav class="navbar-links">
      <a href="/corporate.html">Corporate</a>
      <a href="/weddings.html">Weddings</a>
      <a href="/about.html">About</a>
      <a href="/contact.html" class="btn btn-primary btn-sm">Get in Touch</a>
    </nav>
    <button class="navbar-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
```

**Logo switching:** On hero sections (dark overlay), show `logo-dark` and hide `logo-light`. On scroll past hero, swap to `logo-light`. Handle via a CSS class `.navbar--scrolled` toggled by JS.

### Deployment

The site is fully static — deploy anywhere:
- **Netlify** — drag-and-drop or Git deploy, free tier, automatic HTTPS
- **Vercel** — same, works well with static sites despite being React-focused
- **GitHub Pages** — free, simple
- **Any standard web hosting** — just upload the files

### Performance Checklist

- Optimize images: use WebP format where possible, provide width/height attributes to prevent layout shift
- Lazy-load images below the fold: `<img loading="lazy">`
- Preload hero images: `<link rel="preload" as="image" href="...">`
- Minify CSS/JS for production (can use a simple CLI tool like `csso` / `terser`, or skip it — files will be small enough)
- Add `<meta name="viewport" content="width=device-width, initial-scale=1">` to every page

---

## 12. What NOT to Do

- ❌ Never use pure white (#FFF) or pure black (#000)
- ❌ Never recreate the logo with a web font — always use the SVG files
- ❌ Never use gold as a large background fill
- ❌ Never use aggressive animations (bouncing, spinning, parallax)
- ❌ Never use stock photos that feel generic or corporate
- ❌ Never use emojis in copy
- ❌ Never use superlatives ("the best," "number one," "most exclusive")
- ❌ Never crowd the layout — generous whitespace is non-negotiable
- ❌ Never use a cold color palette — everything should feel warm
- ❌ Never introduce a JS framework (React, Vue, etc.) — this is a static brochure site
- ❌ Never add a build step, bundler, or preprocessor — plain HTML/CSS/JS only
- ❌ Never use jQuery or animation libraries — native IntersectionObserver and CSS transitions are sufficient
