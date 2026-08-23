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

## 3. Advertising Photography group (four secondary images)

Inside the existing "What we photograph" section, directly under the existing six primary categories (unchanged in content, order, size and styling), add one quiet secondary row presented as a single labelled group:

- Group label: ADVERTISING PHOTOGRAPHY (small label type, understated)
- Four supporting photographs in the group: Industrial, Architecture / Interiors, Vacation Property, Product / Commercial
- Individual images carry only a small quiet caption — no per-image arrow, no per-image link
- One arrow/action indicator for the whole group, which clearly reads as clickable and opens the Advertising Photography page

Presentation:

- Desktop: a single 4-across row, each image noticeably smaller than the primary cards, separated from the primaries by generous whitespace and the existing hairline rule language.
- Mobile: stays vertical — 2 across on small screens, no horizontal scrolling; primary categories' mobile behaviour untouched.
- Same visual treatment language as the existing service cards; no new decorative effects.

Four new photographs generated to match the existing visual language: photorealistic, natural light and materials, documentary/editorial, no retouched or AI-gloss look — a Turin-area workshop/production floor, a naturally lit interior/architectural view, a holiday property with warm daylight, and a still-life product shot on a real surface.

## 4. Advertising Photography page

One dedicated detail/gallery page, reached both from the group arrow on the homepage and from the Advertising Photography entry on the Services page. No per-image pages.

Introductory copy (verbatim):

> Advertising photography: how to make your brand visible?
>
> A well-crafted image can attract, engage, and boost your brand's visibility. We work with companies, communications agencies, and freelancers to create photographs that showcase products and services through strong, effective visual storytelling.

Below the intro, the page shows the Advertising Photography gallery (the four new photographs), using the existing PageShell / PageSection editorial treatment so it matches the rest of the site. Italian copy mirrors it in the same tone. All other services keep their current behaviour (no new detail pages).

## Technical notes

- `src/lib/home-copy.ts`: add an `advertising` block (group label, image captions, arrow CTA, page title/intro paragraphs) in IT + EN and extend the `HomeCopy` type; adjust `final.heading`/`strong` for the single-line sentence-case heading.
- `src/components/site/HomeSections.tsx`: `FinalCta` renders the single-line heading with the accent span; `ServicesSection` gains the advertising group with one shared arrow link.
- `src/lib/hero-slides.ts`: add an `ADVERTISING_IMAGES` map for the four new photographs (hero slideshow sequence unchanged).
- New route `src/routes/services.advertising.tsx` (`/services/advertising`) with its own head metadata; `src/routes/services.tsx` links its Advertising Photography entry there.
- `src/components/site/SiteNav.tsx`: HOME link uses `to="/"` with top-scroll handling — reset scroll on navigation and smooth-scroll when already on `/`.
- New assets under `src/assets/`: `adv-industrial.jpg`, `adv-architecture.jpg`, `adv-vacation.jpg`, `adv-product.jpg`.
- Add `/services/advertising` to `src/routes/sitemap[.]xml.ts`.
