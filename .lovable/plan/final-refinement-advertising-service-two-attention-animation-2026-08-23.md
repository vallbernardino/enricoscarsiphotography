# Final refinement: advertising service + two attention animations

## 1. Advertising Photography (already in place — verify only)

The current build already has what points 1–3 ask for, so no rework:

- Homepage "What we photograph" section carries an Advertising Photography group below the six main categories, with one shared arrow.
- That arrow links straight to `/services/advertising` (no detour through `/services`).
- The Services page has an Advertising Photography entry with the same arrow treatment linking to the same page.
- `/services/advertising` exists as one route, using the supplied intro copy and the four advertising photographs.

Remaining work here is a check pass only: confirm the naming reads "Advertising Photography" / "Fotografia pubblicitaria" consistently, both entry points resolve to the single page, and the group is responsive (2-across mobile, 4-across desktop) with no duplicate arrows.

## 2. Call CTA — attention pulse

The sticky CALL button keeps its exact look, position, wording and colour. Only the motion changes: the current opacity-only "breathe" becomes a slow, restrained pulse combining a very small scale change with the existing opacity shift — long cycle, smooth easing, no bounce, no glow, no colour flash. It stays visibly alive while scrolling but never draws the eye away from content. Disabled under reduced-motion.

## 3. Blog CTA — perimeter line animation

The only Blog element on the site is the external Blog link in the footer navigation column. It is not moved, resized, restyled or reworded. It gains a thin champagne outline that traces continuously around its perimeter, hairline weight, slow travel, visible but quiet — enough to read as clickable. Layout is unaffected (the outline sits in an absolutely positioned overlay), and the effect is disabled under reduced-motion.

If the traced outline reads as noisy at footer scale, it falls back to the same restrained pulse used on the Call button.

## 4. Everything else untouched

No changes to navigation, hero, service categories, photographer, Torino, testimonials, "What will you remember?", review logos, inquiry section, imagery, typography, colours, spacing, page structure or any other interaction. No new sections, no animations anywhere else.

## Technical notes

- `src/styles.css`: extend the `breathe` keyframes with a small `scale` component; add a `blog-trace` utility (pseudo-element outline with an animated conic/linear gradient mask) plus reduced-motion guards.
- `src/components/site/StickyCTA.tsx`: no structural change — keeps `breathe`.
- `src/components/site/SiteFooter.tsx`: wrap the Blog anchor in a `relative inline-block` and apply the trace class; text node unchanged.
- Verification: Playwright pass on `/`, `/services`, `/services/advertising` at mobile and desktop widths to confirm the advertising links and that nothing else shifted.
