# Refine & Clean Up — Enrico Scarsi Fotografia (Phase 1)

Refinement of the existing site. No rebuild. The photographer/experience dark section, the hero photograph, the Bodoni + Inter type system, the palette tokens and the live studio map all stay.

## 1. Navigation simplified

Primary nav becomes exactly three items in both languages:

```text
ENRICO SCARSI            SERVIZI / SERVICES    FOTOGRAFO / PHOTOGRAPHER    CONTATTI / CONTACT
```

- Logo/name is the home link.
- No Torino, Reviews, Experience or Studio in the nav; they live inside pages/sections.
- Desktop stays text-based. Mobile keeps a compact panel with the same three destinations.
- `/work` and `/experiences` are consolidated into a single `/services` page; `/photographer` absorbs the methodology; `/contact` stays. Old paths redirect-safe by keeping links pointed to the new routes.
- Secondary pages get a small `← SERVIZI / ← SERVICES` style back link (no large back button), ready for future per-service pages.

## 2. Hero

- Same hero photograph, shown first, as frame 1 of a slow cinematic slideshow.
- Cross-fade with a gentle scale drift, ~7s per frame, no arrows, no dots, no controls, no sliding.
- Order: hero → weddings/proposals → families → portraits → events → business → studio → back to hero.
- Text stays centered, static, one calm opacity fade on load. No letter-by-letter, no sheen, no gradient sweep.
- Reduced type scale; `Since 1989` and `35+ years behind the camera.` preserved verbatim.
- Respects `prefers-reduced-motion` (holds on the hero frame).
- Service breadth named in clean type under the headline — spaced words, no dot separators.

Imagery: I will generate warm editorial stand-in photographs for the six non-hero frames and upload them as CDN assets, so real studio photos can replace them file-for-file later.

## 3. Services section — lighter and more spacious

Replaces the current dark-leaning work grid. Warm white / near-white background, editorial catalogue feel:

- Heading `COSA FOTOGRAFIAMO / WHAT WE PHOTOGRAPH` plus a short intro on the breadth of the practice.
- Six large image entries: Weddings / Proposals, Families, Portraits, Events, Business, Studio — big image areas, thin hairline dividers, quiet hover, generous margins, no cards, no shadows, no icons.
- Below them, the full offering as a typographic index in three groups, using the original terminology:
  - PRIVATE: Portrait, Family, Wedding, Couple photography, City Tour photography, Visa photography, Gift voucher
  - BUSINESS: Advertising photography, Corporate portrait, Event photography, Industrial photography, Architecture / interiors, Vacation property / house photography, Product / commercial photography
  - ADDITIONAL: Video / filming, Photography courses
- Each entry is structured as a link target so individual service pages can be added in Phase 2 without touching the homepage.

## 4. Photographer / Experience — untouched

Dark cinematic treatment, imagery, composition, typography and copy stay as built. Only the CTA target updates to `/photographer`. Wording `Since 1989` / `35+ years behind the camera.` unchanged. The five-step methodology (listening, planning, the shoot, care and flexibility, delivery and lasting relationship) is expanded on the Photographer page only, not the homepage.

## 5. Torino

Kept as a homepage section, `TORINO CON UN ALTRO SGUARDO / TORINO THROUGH A DIFFERENT LENS`, full-bleed and cinematic, with imagery spanning several service types rather than weddings alone. Not a nav item.

## 6. Reviews / Trust

- Section `WHAT CLIENTS SAY / COSA DICONO I CLIENTI`, understated.
- Two platform blocks: Google Reviews (existing verified listing link) and Trustpilot at `https://it.trustpilot.com/review/fotografico.it`, using the real Trustpilot wordmark asset — not text.
- No invented scores, counts or testimonials. Structure is built to accept the verbatim reviews you will paste; until then it shows the platform blocks and links only.

## 7. Inquiry, Studio, Final CTA, Footer

- Inquiry stays right after the services overview: `TELL US WHAT YOU'RE PLANNING`, fields Name, Email, WhatsApp/phone, service type (list synced to the real offering), message, preferred contact method. Kept short.
- Studio section keeps the live interactive Google Map at Via Oropa 54B with Vanchiglietta / Vanchiglia and the Corso Belgio / Corso Casale reference, plus phone, WhatsApp, email.
- Final CTA `What will you remember?` retained.
- Footer: name, Professional Photographer in Turin, full address, both numbers, email, VAT 05529370016, and the exact cookie statement ("This website does not use any type of cookies…"). The privacy page's third-party wording is aligned so nothing contradicts it.

## 8. Colour, type, motion, responsive

- Rebalance so the site alternates true light and true dark instead of reading beige: near-white for services/reviews/studio, charcoal for hero, photographer, Torino, final CTA. Champagne stays a sparing accent.
- Type scale trimmed again where headings still dominate; body line-height and size tuned for readability.
- Motion limited to slow image reveals, mask openings, light section overlap and restrained parallax. No bouncing, no flying text, no animation on everything.
- Mobile: three-destination nav, intelligent hero cropping that keeps faces intact, scaled type, intentional whitespace. Verified at mobile, tablet and desktop widths.

## Technical notes

- Files touched: `SiteNav.tsx`, `Hero.tsx` (new slideshow component), `HomeSections.tsx` (services/reviews/studio/torino), `InquiryForm.tsx`, `SiteFooter.tsx`, `home-copy.ts`, `site-content.ts`, `reviews.ts`, `styles.css`, `routes/index.tsx`, new `routes/services.tsx` (replacing `work.tsx` / `experiences.tsx`), `routes/photographer.tsx`, `routes/contact.tsx`, `routes/privacy.tsx`, `PageShell.tsx`.
- New assets: six generated hero-slideshow images plus the Trustpilot wordmark, uploaded as CDN asset pointers.
- Zero border-radius rule and existing design tokens preserved.
- Per-route head metadata kept unique per page.
- No individual service-detail pages in this phase.
