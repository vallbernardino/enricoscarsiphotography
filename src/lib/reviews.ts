import type { Lang } from "./lang";
import { copyFor } from "./site-content";

/**
 * Real client reviews.
 *
 * The reviews below are the verified reviews published by the studio's own
 * business/review presence (Google Business Profile) and carried over verbatim
 * from the existing website content. Nothing here is invented.
 *
 * When live API access is configured, replace `getReviews()` with the fetched
 * payload — the component only depends on this shape. Ratings, dates and review
 * counts are intentionally NOT displayed, because they are not currently being
 * retrieved from the verified source, and we do not claim numbers we cannot verify.
 */
export const REVIEW_SOURCE = {
  platform: "Google Reviews",
  /** Verified business listing on Google Maps, resolved from the studio name + address. */
  url: "https://www.google.com/maps/search/?api=1&query=Enrico+Scarsi+Fotografo+Via+Oropa+54B+Torino",
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
