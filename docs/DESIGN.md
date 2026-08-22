# Les Alpes D’Azur — Design System

Source reference: `Home Page.png` (1440×6204 artboard)

Holiday accommodation site for the French Southern Alps. Visual direction is clean, airy, and nature-forward — alpine photography + a coordinated teal palette on pale cyan grounds.

---

## Brand

| Token | Value |
| --- | --- |
| Brand name | Les Alpes D’Azur |
| Tagline | Your Retreat in the Heart of the Mountains. |
| Subtitle | HOLIDAY ACCOMMODATION |
| Location line | The French Southern Alps, Alpes-Maritimes |

Wordmark uses **Roboto Serif**. Supporting UI and body copy use **Poppins**.

---

## Typography

### Font families

```css
--font-display: "Roboto Serif", Georgia, "Times New Roman", serif;
--font-body: "Poppins", "Helvetica Neue", Arial, sans-serif;
```

**Google Fonts import**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Roboto+Serif:ital,opsz,wght@0,8..144,400;0,8..144,500;0,8..144,600;0,8..144,700;1,8..144,400&display=swap"
  rel="stylesheet"
/>
```

### Roles

| Role | Font | Weight | Notes |
| --- | --- | --- | --- |
| Logo / wordmark | Roboto Serif | 500–600 | Title case; white on hero, white on footer |
| Hero headline | Roboto Serif | 600–700 | Large, centered, white |
| Section headings | Roboto Serif | 600–700 | Split-color treatment (see Color) |
| Footer form heading | Roboto Serif | 600 | White |
| Navigation | Poppins | 400–500 | Thin / light tracking feel |
| Body paragraphs | Poppins | 400 | Comfortable line-height ~1.7 |
| Buttons / CTAs | Poppins | 500–600 | Sentence or title case as mock |
| Circular image captions | Poppins | 500 | Accent teal |
| Form labels | Poppins | 400 | Soft teal on dark footer |
| Tagline (footer) | Roboto Serif | 400 italic | White / soft white |
| Microcopy / credit | Poppins | 300–400 | Small |

### Type scale (desktop @ ~1440px)

| Token | Size | Line height | Usage |
| --- | --- | --- | --- |
| `--text-hero` | clamp(2.5rem, 5vw, 3.75rem) | 1.15 | Hero headline |
| `--text-h1` | clamp(2rem, 3.5vw, 2.75rem) | 1.2 | Primary section titles |
| `--text-h2` | clamp(1.75rem, 2.8vw, 2.25rem) | 1.25 | Feature / places titles |
| `--text-h3` | 1.25rem–1.5rem | 1.3 | Footer headings, form title |
| `--text-lead` | 1.125rem | 1.6 | Hero location line |
| `--text-body` | 1rem (16px) | 1.7 | Paragraphs |
| `--text-nav` | 0.9375rem–1rem | 1.2 | Header links |
| `--text-caption` | 0.875rem | 1.3 | Circle labels, small UI |
| `--text-micro` | 0.75rem–0.8125rem | 1.4 | Copyright / designer credit |

### Heading color pattern

Section titles often split across two colors in one line:

1. Leading words → `--color-ink` (`#004A53`)
2. Brand / emphasis words → `--color-brand` (`#0095A6`)

Example: “Welcome to **Les Alpes D’Azur**”, “Places to **Visit**”.

---

## Color

Extracted from the homepage mock.

### Core palette

| Token | Hex | RGB | Usage |
| --- | --- | --- | --- |
| `--color-brand` | `#0095A6` | `0, 149, 166` | Primary accent, solid CTAs, footer fill, active dots, emphasis text |
| `--color-ink` | `#004A53` | `0, 74, 83` | Body text, non-emphasized heading words |
| `--color-ink-soft` | `#1C6068` | `28, 96, 104` | Secondary / muted dark teal |
| `--color-surface` | `#E8FCFF` | `232, 252, 255` | Main page background (pale cyan) |
| `--color-surface-soft` | `#E2F6FB` | `226, 246, 251` | Form fields on footer, soft panels |
| `--color-white` | `#FFFFFF` | `255, 255, 255` | Hero text, outline button, pure white UI |
| `--color-mountain-deep` | `#0C5C67` | `12, 92, 103` | Mountain silhouette layers |
| `--color-mountain-mid` | `#135058` | `19, 80, 88` | Mid mountain layer |
| `--color-mountain-light` | `#22747D` | `34, 116, 125` | Lighter ridge layer |
| `--color-dot-inactive` | `#C1DEE2` | `193, 222, 226` | Carousel inactive dots |
| `--color-overlay` | `rgba(0, 74, 83, 0.25)` | — | Optional hero/nav scrim |

### Semantic aliases

```css
:root {
  --color-primary: var(--color-brand);
  --color-text: var(--color-ink);
  --color-text-on-brand: var(--color-white);
  --color-text-on-dark: var(--color-white);
  --color-text-muted-on-dark: #AECFD4;
  --color-bg: var(--color-surface);
  --color-bg-footer: var(--color-brand);
  --color-border-subtle: rgba(0, 149, 166, 0.25);
  --color-focus: var(--color-ink);
}
```

### Contrast guidance

- Body text `#004A53` on `#E8FCFF` — primary reading combo
- White text on hero photography — ensure photo darkens mid-frame enough (gradient scrim if needed)
- White / `#E8FBFF` labels on `#0095A6` footer
- Do not use brand teal text on brand teal backgrounds

---

## Layout

### Canvas & container

| Token | Value |
| --- | --- |
| Design width | 1440px |
| Content max width | ~1100–1200px |
| Page horizontal padding | 80–100px desktop / 20–24px mobile |
| Section vertical rhythm | 80–120px between major blocks |
| Column gap (2-col features) | 48–72px |

### Grid patterns

| Pattern | Structure |
| --- | --- |
| Hero | Full-bleed background image; centered text stack |
| Welcome | Single centered column (~720–800px text measure) |
| Feature split | 2 columns — copy + media (alternates L/R) |
| Places grid | 3×2 circular image grid |
| Footer | 2 columns — brand/links + contact form |
| Mountain transition | Full-bleed layered SVG/illustration before footer |

### Hero rules (from mock)

- Full-bleed alpine photograph edge-to-edge
- Brand wordmark in nav (left), links right
- One headline + one location line + one outline CTA
- No cards, badges, or overlays on the photo beyond nav + centered copy

---

## Spacing tokens

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 80px;
--space-10: 120px;
```

Common mappings:

- Heading → paragraph: `--space-5` / `--space-6`
- Paragraph → button: `--space-5` / `--space-6`
- Circle image → caption: `--space-3` / `--space-4`
- Nav link gap: `--space-6` / `--space-7`

---

## Radius, borders, elevation

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | 6px | Inputs (slight rounding) |
| `--radius-md` | 10–12px | Feature images, buttons |
| `--radius-pill` | 999px | Not primary — avoid pill buttons |
| `--radius-circle` | 50% | Places-to-visit photos |
| `--border-outline` | 1.5–2px solid `#FFFFFF` | Hero “Contact Us” |
| Shadow | None / near-none | Flat, airy look — no multi-layer card shadows |

---

## Components

### 1. Primary button (filled)

- Background: `--color-brand`
- Text: white, Poppins 500–600
- Padding: ~12px 28–36px
- Radius: `--radius-md`
- Label examples: `View More`, `Send Message`
- Hover: darken toward `--color-ink` or ~10% darker brand
- Focus: visible ring using `--color-ink`

### 2. Outline button (hero)

- Transparent fill
- Border: white 1.5–2px
- Text: white Poppins
- Same padding as primary
- Hover: soft white fill / white text → ink, or translucent white fill

### 3. Navigation

- Left: serif wordmark
- Right: `Apartment` · `La Brigue` · `Out & About`
- Color: white on hero
- Underline or opacity change on hover
- Sticky optional; mock shows overlaid on hero

### 4. Feature media

- Rectangular photo, mild rounded corners
- Optional carousel (Apartment): 4 dots — active `#0095A6`, inactive `#C1DEE2`
- Placed beside copy in alternating 2-column sections

### 5. Circular place cards (minimal)

- Round crop only — not rectangular cards
- Caption centered under circle in brand teal Poppins
- Examples: Train des Merveilles, La Citron, etc.
- After grid: short centered body + primary button

### 6. Contact form (footer)

- Labels above fields (soft teal / muted on brand)
- Fields: pale cyan / near-white fill (`#E8FBFF`), soft radius
- Fields: Name, Email, Message (textarea taller)
- Primary “Send Message” aligned end of form

### 7. Mountain footer transition

- Layered mountain silhouettes in `--color-mountain-*` tones
- Bridges pale page surface into solid brand footer
- Prefer SVG or CSS/SVG illustration, not photo

### 8. Footer brand block

- Wordmark + `HOLIDAY ACCOMMODATION`
- Italic tagline
- Short descriptive paragraph
- Quick Links: `Apartment | La Brigue | Out & About` (pipe-separated)
- Credit: `Designed & Developed By Mash'd` centered at bottom

---

## Page sections (homepage)

Implement in this order:

1. **Header / Hero** — full-bleed valley photo, nav, headline, location, outline CTA
2. **Welcome** — pale cyan, centered split-color heading + 2 paragraphs
3. **Our Apartment** — copy left / image+carousel right
4. **La Brigue** — image left / copy right
5. **Places to Visit** — heading, 3×2 circle grid, body, CTA
6. **Mountain transition**
7. **Footer** — brand + quick links | contact form | credit

---

## Motion

Keep motion quiet and intentional (2–3 moments max on first ship):

1. Hero text / CTA fade-up on load (~400–600ms, ease-out)
2. Feature images slight fade/slide as they enter viewport
3. Button hover color transition (~150–200ms)
4. Optional: mountain silhouette soft draw/parallax — subtle only

Avoid continuous glow, bounce, or decorative particle effects.

---

## Imagery

| Slot | Direction |
| --- | --- |
| Hero | Wide alpine valley, sunlit, natural — full bleed |
| Apartment | Warm interior / décor stills |
| La Brigue | Stone village / tower / heritage architecture |
| Places | Landmark / landscape subjects, circular-cropped |
| Tone | Real place photography; avoid stock-generic abstract gradients as the main idea |

Suggested aspect ratios:

- Hero: ~16:9 or taller full-viewport crop
- Feature rectangles: ~4:3 or 3:2
- Places: 1:1 circles

---

## Responsive notes

| Breakpoint | Behavior |
| --- | --- |
| ≥1200px | 2-col features, 3-col place grid |
| 768–1199px | Tighten padding; place grid 2-col; features may stay 2-col or stack |
| <768px | Stack all columns; nav → menu; circles 2-col; hero type scales down; form full width |

Touch targets ≥44px for buttons and nav items.

---

## CSS variables (starter)

```css
:root {
  /* Brand */
  --color-brand: #0095a6;
  --color-ink: #004a53;
  --color-ink-soft: #1c6068;
  --color-surface: #e8fcff;
  --color-surface-soft: #e2f6fb;
  --color-white: #ffffff;
  --color-mountain-deep: #0c5c67;
  --color-mountain-mid: #135058;
  --color-mountain-light: #22747d;
  --color-dot-inactive: #c1dee2;
  --color-text-muted-on-dark: #aecfd4;

  /* Type */
  --font-display: "Roboto Serif", Georgia, "Times New Roman", serif;
  --font-body: "Poppins", "Helvetica Neue", Arial, sans-serif;

  --text-hero: clamp(2.5rem, 5vw, 3.75rem);
  --text-h1: clamp(2rem, 3.5vw, 2.75rem);
  --text-h2: clamp(1.75rem, 2.8vw, 2.25rem);
  --text-body: 1rem;
  --text-caption: 0.875rem;

  /* Shape */
  --radius-sm: 6px;
  --radius-md: 12px;
  --content-max: 1120px;
  --page-pad-x: clamp(1.25rem, 6vw, 5rem);
}
```

---

## Do / Don’t

**Do**

- Lead with the brand wordmark in the first viewport
- Use Roboto Serif for display, Poppins for UI/body
- Keep the pale cyan + teal system consistent across pages
- Prefer photography of the place over abstract decoration
- Alternate feature layouts for visual rhythm

**Don’t**

- Card-wrap the hero or place circles
- Overlay floating badges / promo chips on photography
- Introduce purple gradients, cream/terracotta palettes, or heavy shadows
- Use a second competing accent color outside the teal family
- Crowd the hero with stats, schedules, or secondary promos
