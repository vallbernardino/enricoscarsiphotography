# Focused Film, Header Contact, and Inquiry Update

## Scope
- Preserve the Hero, Selected Work, Services, Call control, photographer imagery/layout, reviews, Blog, contact styling, footer, and all unrelated behavior.
- Restore the existing local film directly between Selected Work and Services.
- Apply only the requested copy, header, contact-action, and form-destination changes.

## Implementation
1. **Film section**
   - Reuse the existing portable 1080p/mobile MP4 renditions and poster in `public/media`.
   - Add one full-bleed, responsive film section after Selected Work, with autoplay, muted, looping, inline playback, no controls, and restrained existing editorial wording.
   - Use the official logo yellow only for the film text/accent; keep the rest dark and cinematic.

2. **Photographer translation**
   - Replace only the Italian eyebrow, headline, three paragraphs, and CTA with the supplied wording.
   - Leave English and the section’s visual composition unchanged.

3. **Header additions**
   - Store the supplied official logo as a project asset and place a small proportional mark immediately before the existing Enrico Scarsi text.
   - Add compact Email and WhatsApp links to desktop and mobile navigation without changing existing links, language switch, HOME behavior, or fixed header behavior.
   - Style only those two links with a restrained charcoal/cream/logo-yellow gradient.

4. **Inquiry destination**
   - Preserve every existing field and all form styling.
   - Keep native required/email validation and duplicate prevention.
   - On submission, include only nonempty current fields in a bilingual, professionally formatted message and open WhatsApp to the existing studio mobile number for the visitor to send.

5. **Verification**
   - Confirm section order, video playback and mobile fit, exact Italian copy, unchanged English, logo/contact links, studio Call number and geometry, WhatsApp message encoding, no horizontal overflow, and no console/runtime/build errors.
