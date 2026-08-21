import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { InquiryForm } from "@/components/site/InquiryForm";
import {
  ExperienceSection,
  FinalCta,
  ReviewsSection,
  StudioSection,
  TorinoSection,
  WorkSection,
} from "@/components/site/HomeSections";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyCTA } from "@/components/site/StickyCTA";

const OG_IMAGE =
  "https://id-preview--692bc463-6724-49fe-af4f-41ba6a16bf06.lovable.app/__l5e/assets-v1/270ee54f-f303-4ef2-ae41-b2ca85521503/hero-torino.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enrico Scarsi — Fotografo in Torino | Photography That Matters" },
      {
        name: "description",
        content:
          "Enrico Scarsi, fotografo in Torino dal 1989. Proposte, matrimoni, coppie, ritratti, eventi e business. Oltre 35 anni dietro la macchina fotografica.",
      },
      { property: "og:title", content: "Enrico Scarsi — Fotografo in Torino" },
      {
        property: "og:description",
        content:
          "Photography for moments that matter. Turin-based photographer since 1989: proposals, weddings, couples, portraits, events and business.",
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
      <InquiryForm />
      <WorkSection />
      <ExperienceSection />
      <TorinoSection />
      <StoriesSection />
      <FinalCta />
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
