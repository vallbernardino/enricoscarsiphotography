import heroAsset from "@/assets/hero-torino.png.asset.json";
import slideWeddings from "@/assets/slide-weddings.jpg";
import slideFamilies from "@/assets/slide-families.jpg";
import slidePortraits from "@/assets/slide-portraits.jpg";
import slideEvents from "@/assets/slide-events.jpg";
import slideBusiness from "@/assets/slide-business.jpg";
import slideStudio from "@/assets/slide-studio.jpg";

/**
 * Hero photography sequence. The selected hero photograph is always first;
 * the following frames represent the real breadth of the studio's work.
 */
export const HERO_SLIDES = [
  { key: "hero", src: heroAsset.url, position: "58% center" },
  { key: "weddings", src: slideWeddings, position: "50% 40%" },
  { key: "families", src: slideFamilies, position: "50% 45%" },
  { key: "portraits", src: slidePortraits, position: "45% 35%" },
  { key: "events", src: slideEvents, position: "50% 45%" },
  { key: "business", src: slideBusiness, position: "50% 45%" },
  { key: "studio", src: slideStudio, position: "50% center" },
] as const;

export const SERVICE_IMAGES: Record<string, string> = {
  weddings: slideWeddings,
  families: slideFamilies,
  portraits: slidePortraits,
  events: slideEvents,
  business: slideBusiness,
  studio: slideStudio,
};

import advIndustrial from "@/assets/adv-industrial.jpg";
import advArchitecture from "@/assets/adv-architecture.jpg";
import advVacation from "@/assets/adv-vacation.jpg";
import advProduct from "@/assets/adv-product.jpg";

/** Secondary advertising-photography frames shown under the main categories. */
export const ADVERTISING_IMAGES: Record<string, string> = {
  industrial: advIndustrial,
  architecture: advArchitecture,
  vacation: advVacation,
  product: advProduct,
};
