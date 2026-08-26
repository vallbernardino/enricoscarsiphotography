# Restore Call CTA original layout

## Problem
The Call CTA is rendering as a full-width block at the bottom of the page instead of the approved compact sticky button in the bottom-right corner.

## Root cause
The `.call-ripple` utility added in the last implementation sets `position: relative`, which overrides the element's `fixed` Tailwind utility. Once the element loses fixed positioning it falls into normal document flow, and as a block-level flex container it stretches full-width at the bottom of the page.

## Fix
In `src/styles.css`, update the `.call-ripple` utility:
- Remove `position: relative`.
- Keep `isolation: isolate` so the ripple pseudo-element still layers behind the button content.

`position: fixed` already creates a containing block for the absolutely positioned `::before` ripple, so the relative positioning is unnecessary.

## Verification
- Screenshot and bounding-box check on `/` at mobile (616 px) and desktop (1280 px) after scrolling past hero.
- Confirm the button shrinks to its content width, sits at bottom-right, and the ripple/scale pulse animation still works.
- Confirm the surrounding section layout is unchanged.

## No other changes
- Keep the existing `flex`, padding, typography, colors, and hover states.
- Keep the more visible pulse animation (`breathe`, `call-ripple::before`, `call-ring`).
- Do not modify navigation, hero, services, or any other section.
