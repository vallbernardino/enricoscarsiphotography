# Service detail page refinement

## Scope
Refine only individual service pages, direct homepage service links, the existing Call button color, removal of the specified meeting-room showreel clip, and search relevance. Preserve every locked homepage section and the site-wide visual system.

## Implementation

1. **Verify source content before presentation changes**
   - Recheck each displayed price, package, duration, quantity, condition, and service relationship against the corresponding current page on `fotografico.it`.
   - Keep the existing complete official content; remove unsupported claims rather than guessing.
   - Preserve Advertising Photography as one unified service.

2. **Recompose the service detail template**
   - Keep the existing dark service-page hero treatment and add a stable large empty image slot using the current visual language.
   - Show the service title, official introduction when appropriate, and verified pricing in the hero without making pricing dominant.
   - Follow with the full source description directly, without an invented overview/about heading or an adjacent image.
   - Retain source headings only where they genuinely belong to the original content.

3. **Add an editorial work-slot gallery**
   - Add 6–9 empty, stable image slots per service in an asymmetric editorial composition.
   - Use no generated, stock, or temporary photographs and place no text or actions over the slots.
   - Keep useful image sizes on mobile, natural stacking, and zero horizontal overflow.

4. **Organize prices, options, and factual details**
   - Present only existing verified prices and package variants, with the number of columns/rows determined by actual options.
   - Keep all associated inclusions, quantities, durations, deposits, conditions, locations, and booking notes.
   - Omit empty sections and avoid generic cards, repeated labels, oversized prices, or fabricated structure.

5. **Refine related services and final actions**
   - Keep only existing catalog relationships and link every item directly to its service route.
   - Use a light editorial row with a small empty image slot, service name, and subtle arrow.
   - End every service page with bilingual `SEND AN INQUIRY →` linking to the existing homepage inquiry section and `CALL` using `+39 011 8998291`; add no new form or service.

6. **Apply the explicitly requested supporting changes**
   - Map every homepage service label directly to its existing detail route while leaving the Services navigation item unchanged.
   - Change only the existing Call button and ripple color to the current warm logo-gold family; preserve geometry, placement, type, motion, and phone number.
   - Rebuild the existing desktop/mobile showreel renditions without only the meeting-room/whiteboard clip; preserve every other clip, their timing, sequence, natural motion, section design, and playback behavior.
   - Improve the existing bilingual static search through normalization, partial-word matching, category/keyword aliases tied to real services, weighted title/body/price matches, and relevance-first ranking—without changing its UI or position.

7. **Verification**
   - Check all service routes in Italian and English, verified pricing visibility, complete source text, gallery slot counts, direct related/homepage links, inquiry and call actions, Search results, and the remaining video sequence without gaps or stale requests.
   - Test desktop and mobile for readable content, stable layouts, easy actions, and no horizontal overflow.
   - Confirm locked sections remain unchanged and review build, runtime, console, asset, route, and network diagnostics.

## Technical details
- Reuse the existing TanStack routes, service catalog, official-content index, `PageShell`, `Reveal`, and semantic color tokens.
- Keep the implementation frontend-only with no CMS, database, authentication, paid API, external search provider, new backend, generated imagery, or unnecessary dependency.
- Maintain a single reusable service-detail component so every service receives the same hierarchy while optional sections remain content-driven.
