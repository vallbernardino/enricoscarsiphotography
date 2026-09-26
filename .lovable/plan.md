# Final content-completion and controlled refinement

## Scope
Preserve the approved homepage, visual system, routes, and interactions except for the three expressly requested changes: hero typography, compact site search, and a shorter first showreel segment. Complete the internal-page content from the live official Enrico Scarsi site without paraphrasing or inventing facts.

## Implementation

1. **Create an authoritative content inventory**
   - Map every current official service, subservice, article, package, price, condition, location, CTA, and related-service link to a real internal route.
   - Compare every existing catalog entry sentence-by-sentence with its corresponding official page.
   - Replace current paraphrases and audit-style commentary with the complete source wording; remove unsupported statements and prices.
   - Preserve all verified numeric distinctions, package names, inclusions, durations, deposits, variants, and conditions exactly.
   - Include currently missing substantive material such as studio rental and relevant official articles, without exposing source/migration notes to visitors.

2. **Complete bilingual internal content**
   - Keep the official Italian wording as published.
   - Use the official English wording where an English page exists; otherwise provide a faithful full English translation without shortening or changing meaning.
   - Keep the existing session-scoped IT/EN switch so language changes text only.
   - Keep visitor-entered inquiry values untouched.

3. **Extend internal service and article routes**
   - Reuse the existing `PageShell`, service-detail route, and editorial design components.
   - Add only the routes needed to represent the official hierarchy and searchable content.
   - Keep Advertising Photography as one unified page, preserve its approved English introduction exactly once, and present industrial, architecture/interiors, hospitality, restaurant, product/e-commerce, and artwork work as supported applications.
   - Preserve official related/recommended links rather than generating recommendations.

4. **Make pricing and long-form detail easy to scan**
   - Retain full source paragraphs and original list structure.
   - Present verified prices in a dedicated editorial pricing area with clear package/variant distinctions on desktop and mobile.
   - Omit pricing where the official page states none; never infer “from” pricing or shared pricing.
   - Keep non-priced services connected to the existing inquiry/contact path.

5. **Add compact bilingual navigation search**
   - Place `SEARCH` immediately after `HOME` on desktop and integrate an equally usable control in the existing mobile menu.
   - Expand within the navigation area with a close/clear action, Enter support, keyboard accessibility, and no external search provider.
   - Build a lightweight static bilingual index from the authoritative local content: services, complete descriptions, prices, variants, photographer information, Video, Blog/articles, and other actual pages.
   - Rank exact title/service/price matches first, show concise matching excerpts and thumbnails where available, and link only to valid internal routes.

6. **Apply the two controlled homepage refinements**
   - Preserve every Hero image, crop, overlay, height, slideshow interval, transition, and composition.
   - Render the existing statement as centered warm-yellow `PHOTOGRAPHY` followed by italic lowercase `for moments that matter.`, at a slightly smaller scale; retain the eyebrow, experience line, and services action unchanged.
   - Rebuild only the project-local desktop/mobile showreel renditions so the first of the five used clips reaches the second clip sooner, without speeding human motion unnaturally; preserve all five clips, current section markup, text, styling, crop behavior, autoplay/muted/loop/inline playback, and subtle transitions.

7. **Protect locked work and verify production readiness**
   - Do not edit Selected Work, Services overview, Photographer sections/images, Reviews, Blog presentation, Inquiry form, footer, Call CTA, or their responsive/animation behavior.
   - Confirm Call still uses `+39 011 8998291`; Email, WhatsApp, and inquiry behavior remain unchanged.
   - Test every route and search result in IT/EN, desktop and mobile navigation, price readability, reduced motion, showreel playback, Hero rendering, image/video loading, and zero horizontal overflow.
   - Check build diagnostics, runtime/console errors, broken local assets, secrets, trackers, analytics, cookies, and new dependencies.
   - Compare checksums for locked homepage files against the recorded baseline to prove they were not modified.

## Technical details
- Keep the content catalog as the single source for page rendering and search indexing; do not add a CMS, database, authentication, analytics, external search, or paid service.
- Use project-local media and existing dependencies/components only.
- Preserve lazy loading and stable media dimensions below the fold; do not alter Hero loading priority.
- Items that cannot be established from the live official pages will be removed or listed for later review rather than guessed.
