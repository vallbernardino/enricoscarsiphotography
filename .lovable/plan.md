# Final micro-refinement

Three changes only. Everything else on the site stays byte-for-byte as approved.

## 1. "What will you remember?" heading

Currently the final CTA renders the heading as two lines in the display-editorial (uppercase) style, with the second line italic. Change only the text treatment:

- Render one sentence-case line: "What will you remember?" — only the initial "W" capitalised, "you" lowercase.
- Colour just the word "you" in the existing champagne accent (`text-champagne`, already in the palette), upright (not italic).
- Italian keeps its wording "Cosa ricorderai?", with the verb "ricorderai" carrying the same accent colour (Italian has no separate word for "you" here).
- Same font, size, position, photograph, spacing and reveal animation as now — only capitalisation and the accent word change.

## 2. HOME goes to the top of the homepage

Nav appearance is untouched. Only behaviour:

- Clicking HOME from an internal page lands at the very top of the homepage (hero), never a restored scroll position.
- Clicking HOME while already on the homepage smoothly scrolls back to the hero.
- Applies to both the desktop nav and the mobile menu link.

## 3. Four secondary photography categories

Inside the existing "What we photograph" section, directly under the existing six primary categories (unchanged in content, order, size and styling), add one quiet row:

- Industrial Photography
- Architecture / Interiors
- Vacation Property Photography
- Product / Commercial Photography

Presentation:

- Desktop: a single 4-across row, each item noticeably smaller than the primary cards (smaller image ratio, smaller label, no arrow flourish), separated from the primaries by generous whitespace and the existing hairline rule language.
- Mobile: stays vertical — 2 across on small screens, stacked comfortably, images still large enough to read. No horizontal scrolling.
- Labels use the existing small-caps/label type; no new decorative effects.
- Each links to /services like the primary categories.

Four new photographs generated to match the existing visual language: photorealistic, natural light and materials, documentary/editorial, no retouched or AI-gloss look — a Turin-area workshop/production floor, a naturally lit interior/architectural view, a holiday property with warm daylight, and a still-life product shot on a real surface.

## Technical notes

- `src/lib/home-copy.ts`: add a `secondaryCategories` array (IT + EN) to the `services` copy and its type; adjust the `final.heading`/`strong` fields for the single-line sentence-case heading.
- `src/components/site/HomeSections.tsx`: `FinalCta` renders the single-line heading with the accent span; `ServicesSection` gains the secondary row after the primary grid.
- `src/lib/hero-slides.ts`: add the four new images to a `SECONDARY_SERVICE_IMAGES` map (hero slideshow sequence unchanged).
- `src/components/site/SiteNav.tsx`: HOME link uses `to="/"` with hash/top handling — scroll to top on navigation and smooth-scroll when already on `/`.
- New assets under `src/assets/`: `service-industrial.jpg`, `service-architecture.jpg`, `service-vacation.jpg`, `service-product.jpg`.
