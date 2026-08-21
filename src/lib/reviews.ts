import type { Lang } from "./lang";
import { copyFor } from "./site-content";

/**
 * Real client reviews, carried over verbatim from the studio's existing website
 * and review profiles. Nothing here is invented: no scores, no review counts and
 * no verification claims are displayed, because those numbers are not currently
 * retrieved from a live source.
 *
 * When live API access is configured, replace `getReviews()` with the fetched
 * payload — the components only depend on this shape.
 */
export const REVIEW_SOURCE = {
  platform: "Google Reviews",
  /** Verified business listing on Google Maps, resolved from the studio name + address. */
  url: "https://www.google.com/maps/search/?api=1&query=Enrico+Scarsi+Fotografo+Via+Oropa+54B+Torino",
};

/** Platforms the studio actually uses for public reviews. */
export const REVIEW_PLATFORMS = {
  google: REVIEW_SOURCE.url,
  trustpilot: "https://it.trustpilot.com/review/fotografico.it",
};

export type Review = {
  name: string;
  text: string;
  source: string;
  /** Exact review permalink when the platform exposes one; otherwise the listing. */
  url: string;
};

export function getReviews(lang: Lang): Review[] {
  return copyFor(lang).reviews.items.map((r) => ({
    name: r.name,
    text: r.quote,
    source: r.source,
    url: REVIEW_SOURCE.url,
  }));
}
