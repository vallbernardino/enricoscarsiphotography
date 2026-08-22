# Final Pre-Pitch Refinement — Enrico Scarsi Fotografia

Refinement only. The approved direction, palette, typography, hero concept, nav style and Photographer section stay. Changes below and nothing else.

## 1. Navigation & internal-page HOME

- Primary nav becomes HOME · SERVICES · THE PHOTOGRAPHER · CONTACT · IT / EN, same visual style, same text treatment. No Torino, no Blog.
- On internal pages (Services, The Photographer, Contact, Privacy, future service pages) HOME is an explicit nav item, not just the studio name.
- Existing small back link on secondary pages stays minimal.

## 2. Language selection

Keep the current entry choice (ENGLISH | ITALIANO) exactly as is.

## 3. Hero

Unchanged copy, photography, centered static typography. Only pacing changes:

- Frame 1: ~3.4s, frame 2: ~4.2s, frames 3+: ~8s, gently alternating (8s / 9.5s).
- Same slow cross-fade, no arrows, dots or new effects. Reduced-motion still holds on frame 1.

## 4. CALL CTA

- Sticky CTA becomes CALL with `tel:+390118998291` (studio number), replacing the inquiry-linked sticky button.
- Visible while scrolling, high-contrast, restrained; optional very subtle breathing on the border only. No pulse/glow/bounce.
- The inquiry section keeps its own separate purpose and stays email/phone-based — no third-party services added.

## 5. Services

- Remove any dot separators between category names.
- ALL SERVICES reads as the section heading: darker ink, stronger weight, slightly larger than supporting labels, with deliberate space above and below.
- Hierarchy: ALL SERVICES → the six categories → the full typographic index (Private / Business / Additional) unchanged in content.
- More negative space around the information-heavy blocks; photography areas untouched.
- Category entries keep linking to the services route so per-service pages can be added later. No detail pages built now.

## 6. Photographer section — new portrait

- The supplied portrait of Enrico is uploaded as a CDN asset and used as-is (no regeneration, no retouching).
- Integrated as one continuous editorial composition inside the existing dark section: large, weighted left, bleeding to the section edge, with a soft charcoal gradient blending its own dark negative space into the background — no frame, border, card, halo or hard edge.
- Existing typography, copy, hierarchy and spacing preserved. "Since 1989" and "35+ years behind the camera." unchanged.

## 7. Replacement / new photographs

Generated in the same photographic language (real people, natural light, real texture, documentary framing, no airbrushing, no AI gloss), each with its own setting:

- Family: replaces the distorted frame — candid interaction, correct anatomy.
- Torino: new photograph, different lens feeling from the hero, authentic local architecture and light, no postcard/tourism look.
- What will you remember?: new observed human moment, full-bleed, with the subject allowed to extend slightly past the section edge as an intentional editorial overlap.

Torino and final-CTA sections currently use placeholder frames; these get the real photographs.

## 8. Typography tweaks

- Torino: TORINO prominent uppercase, supporting line lowercase.
- Final CTA: "WHAT WILL YOU / remember?" kept, with YOU given more typographic weight.

## 9. Reviews / trust

- Google Reviews and Trustpilot blocks stay with real logos and real links. Nothing fabricated.
- The multi-card testimonial grid is replaced by a single one-line testimonial shown at a time, below the platform blocks, using the reviews already in the project.
- Advance with a sharp left switch, then a pause — no marquee, ticker or slow fade. Horizontal swipe enabled on mobile for the testimonial only.

## 10. Mobile — What we photograph

Vertical stacking kept. Card image height and the gaps between cards reduced moderately so photographs stay large enough to appreciate. No carousel, no horizontal scrolling, desktop untouched.

## 11. Lower page rhythm

More breathing room around services, reviews, inquiry and supporting text; alternating photography → space → content → photography. No new sections, no card/glass/glow treatments. Full-bleed photographic areas unchanged.

## 12. Blog, footer, sitemap

- Footer links: Home, Services, The Photographer, Contact, Blog (https://www.fotografico.it/blog.html, external), Privacy. Blog is not in the main nav; existing articles are not copied or rewritten.
- Studio details, VAT and the exact cookie/privacy statements preserved verbatim.
- A real XML sitemap is served from the actual routes; no visible sitemap page, no priority/last-modified shown as content.

## 13. Live map & responsive check

- The interactive Via Oropa 54B map stays as-is.
- Verify at mobile, tablet and desktop: hero slideshow and text, portrait blending and face crop, full-bleed overlap, testimonial swipe, CALL CTA, nav, map, stacked service cards.

## Technical notes

- Files touched: `SiteNav.tsx`, `PageShell.tsx`, `StickyCTA.tsx`, `Hero.tsx`, `hero-slides.ts`, `HomeSections.tsx`, `SiteFooter.tsx`, `home-copy.ts`, plus a new sitemap route and new asset pointers (Enrico portrait, family, Torino, remember).
- Zero border-radius rule, design tokens, per-route head metadata and existing routes preserved. No new dependencies or paid integrations.
