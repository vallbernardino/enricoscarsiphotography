import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { InquiryForm } from "@/components/site/InquiryForm";
import {
  ExperienceSection,
  FinalCta,
  ReviewsSection,
  ServicesSection,
  StudioSection,
  TorinoSection,
} from "@/components/site/HomeSections";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyCTA } from "@/components/site/StickyCTA";

const OG_IMAGE =
  "https://id-preview--692bc463-6724-49fe-af4f-41ba6a16bf06.lovable.app/__l5e/assets-v1/270ee54f-f303-4ef2-ae41-b2ca85521503/hero-torino.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enrico Scarsi — Fotografo professionista a Torino dal 1989" },
      {
        name: "description",
        content:
          "Studio fotografico a Torino dal 1989: ritratto, famiglia, matrimonio, eventi, fotografia aziendale, pubblicitaria e architettura. Oltre 35 anni dietro la macchina fotografica.",
      },
      { property: "og:title", content: "Enrico Scarsi — Professional Photographer in Turin" },
      {
        property: "og:description",
        content:
          "Photography for moments that matter. Turin studio since 1989: portraits, families, weddings, events, business and advertising photography.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-charcoal">
      <SiteNav overlay />
      <Hero />
      <ServicesSection />
      <InquiryForm />
      <ExperienceSection />
      <TorinoSection />
      <ReviewsSection />
      <StudioSection />
      <FinalCta />
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
