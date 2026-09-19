# Final Pre-Pitch Implementation

## Scope guard

Preserve the approved hero, navigation styling, homepage photographer section, inquiry/contact, reviews, Blog placement, Call CTA geometry, “What will you remember?”, advertising direction, palette, typography, and all unrelated layouts. This pass adds the requested flow and functionality without redesigning existing work.

## 1. Selected Work and film transition

- Insert a new bilingual Selected Work section immediately after the unchanged Hero.
- Build an asymmetric, sharp-corner bento from replaceable project assets representing the studio’s full range: people, weddings, Turin/travel, business, events, industrial, architecture/interiors, property, products, and education.
- Give the bento a bounded internal vertical track. Scroll position advances it; while the section remains active, a very slow time-based drift continues without moving the webpage.
- Clamp the movement to a finite endpoint. Keep the film layer fully concealed until that endpoint is reached, then clear the bento and reveal the film.
- Add the supplied 15-second H.264 film as a project asset, with autoplay, muted, loop, playsInline, no controls, fixed aspect handling, and a restrained bilingual editorial overlay.
- Make the cream Services section layer above and cover the film as normal page scrolling continues.
- Disable autonomous motion and use a simple static progression for reduced-motion users.

## 2. Services presentation and content

- Replace only the homepage Services presentation with the specified bilingual “MY SERVICES” introduction and three precisely aligned typographic columns.
- Preserve the exact service inventory. Advertising Photography is one linked service; industrial, architecture/interiors, vacation property, and product/catalog remain examples within that offering and link to the same dedicated advertising page where appropriate.
- Use consistent horizontal rows, right-aligned arrows, static hairline dividers, subtle row interaction, and a slow secondary line traveling left-to-right beneath each category heading.
- Add a small staged reveal for label, heading, copy, CTA, then columns. Adapt the layout intentionally for mobile without horizontal card scrolling.
- Keep the dedicated Services page aligned with the same inventory and direct Advertising Photography link, without changing its approved overall page shell.

## 3. Local search in the existing navigation

- Add a compact Search icon/control to the existing desktop and mobile navigation without changing its visual structure.
- Open an accessible, bilingual search layer with focus management, close/return behavior, keyboard support, title/excerpt/link results, and empty-state messaging.
- Build a lightweight local index from the project’s service descriptions, photographer/contact/privacy pages, advertising page, and current externally hosted Blog destination/content references. Keep the index data-driven so future local service or Blog pages can be appended without changing the search UI.
- Preserve persistent fixed navigation and HOME behavior on every route and at the page bottom.

## 4. Replaceable photography assets

- Generate a cohesive temporary set covering every requested service category, using natural light, believable Italian environments, realistic texture, and documentary/editorial framing.
- Store each generated photograph as a named project asset and centralize crop/alt metadata so future client-photo replacement does not alter layout or motion.
- Reuse the set efficiently across the bento and relevant service presentation; lazy-load below-fold images with stable aspect boxes while leaving Hero loading untouched.

## 5. Locked details and language

- Keep “What will you remember?” unchanged, including lowercase champagne “you” and the existing full-bleed overlap.
- Keep Google Reviews, recognizable Trustpilot branding, and the single-review sharp-switch behavior.
- Refine the existing Blog outline timing to trace, hold, fade, pause, repeat without changing its placement or styling.
- Keep the Call CTA’s exact dimensions, placement, typography, colors, and layout; only tune its current ripple/breathing visibility. Preserve the existing no-animation reduced-motion rule.
- Review all newly introduced Italian copy for natural professional usage rather than literal translation.
- Keep the Advertising Photography introduction rendered exactly once.

## 6. Performance, privacy, and verification

- Use transform-based, requestAnimationFrame-coordinated motion with bounded observers/listeners and no page auto-scroll.
- Optimize the supplied 4K presentation film into portable local web renditions/poster while preserving the attached source as the sole visual source; choose responsive playback without relying on preview URLs.
- Confirm no trackers, analytics, profiling, new cookies, secrets, database, authentication, CMS, or paid services are introduced.
- Verify desktop, tablet, and mobile for: unchanged Hero; persistent navigation; HOME top return; Search; bento movement/pause drift/end; complete film concealment before reveal; film playback; Services cover; exact service links; advertising copy uniqueness; reviews; Blog animation; Call CTA reduced motion; inquiry states; and all internal routes/assets.
- Check browser console/network and production build output. Any legal, production hosting, external Blog, or third-party availability item that cannot be proven locally will be reported as **REQUIRES PRODUCTION/EXTERNAL VERIFICATION**.

## Technical notes

- Expected new modules: Selected Work/film sequence, local search index/dialog, and centralized portfolio asset metadata.
- Expected existing files touched: homepage composition, navigation, bilingual copy, Services rendering, shared styles, and possibly the Services index for link consistency.
- No new backend, database, router, CMS, analytics, or paid dependency.
