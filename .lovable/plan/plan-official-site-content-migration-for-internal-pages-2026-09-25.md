# Plan: Official-site content migration for internal pages

## Goal
Expand the current Enrico Scarsi website by migrating the useful depth of `fotografico.it` into modern internal pages, while keeping the current homepage visually and structurally unchanged.

## Locked scope
- Do not redesign or reorder the homepage.
- Do not change Hero, Selected Work, Video section, homepage Services, Photographer section, Reviews, Blog, Call CTA, Inquiry, footer, animations, spacing, typography, or visual identity.
- Do not add backend, database, CMS, auth, analytics, paid services, or trackers.
- Do not copy the old website’s visual design.

## Source inspection already started
The official sitemap exposes the main content set, including:
- Core services: book/model portfolio, male/female book, portrait/corporate portrait, social/CV/casting/polaroid/dating.
- Private services: family, children, baptisms/communion/confirmation, couple, proposal, birthdays, gift vouchers, weddings and wedding variants.
- Professional services: advertising, industrial, architecture/interiors, hotels/resorts, restaurants/food, e-commerce/product, events/conferences.
- Other services: video, individual photography lessons, visa/passport/ETA photos, luxury photo tour.
- Blog/resource pages with deeper related content.

## Implementation approach
1. **Create a structured service content source**
   - Add one central bilingual data file for migrated internal service content.
   - Keep every page’s source URL, title, category, detailed sections, pricing notes where present, and meaningful related links.
   - English will be the master content for rendering; Italian will be a faithful, natural version with the same structure and meaning.

2. **Create internal service pages**
   - Add dynamic service routes under `/services/...` for all reachable migrated service pages.
   - Use the existing `PageShell`, `PageSection`, typography, arrows, dividers, colors, and restrained reveal patterns.
   - Keep pages editorial and readable on desktop and mobile, without cards, old-site styling, or homepage changes.

3. **Update the Services overview only where it is already an internal page**
   - Link each existing service row to the correct detailed page.
   - Preserve Advertising Photography as one unified offering; industrial, architecture/interiors, vacation properties, and product/catalog remain covered inside it instead of becoming separate homepage services.
   - Do not change the locked homepage Services section design or order.

4. **Preserve useful relationships**
   - Add source-based “continue to” recommendations at the end of detailed service pages only where the old site indicates a natural relationship.
   - Avoid generic recommendation blocks or repeating the full services menu everywhere.
   - Always include a quiet “All services” return path.

5. **Language entry adjustment**
   - Keep the existing premium language gate, but make the choice session-only so a new visit asks again.
   - Language switching changes text only, never layout or visuals.

6. **Performance-safe migration**
   - Lazy-load internal-page images below the first viewport.
   - Use stable aspect boxes and existing local/project assets where available.
   - Do not introduce temporary media URLs or unnecessary dependencies.

7. **Verification**
   - Confirm homepage DOM order and visible sections remain unchanged.
   - Check all new service links and related links return real pages.
   - Check mobile pages for no horizontal overflow.
   - Check build log and runtime/console logs after edits.
   - List any official-site pages or facts that could not be reliably migrated for later review.

## Notes
- The official site is broad, so this pass will prioritize migrating the full service hierarchy and substantive service-page content first.
- Existing foreign-language pages on the old site beyond IT/EN will be used only as reference where useful; the new site remains IT/EN.
