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
import { SelectedWork } from "@/components/site/SelectedWork";
import { FilmSection } from "@/components/site/FilmSection";

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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-charcoal">
      <SiteNav overlay />
      <Hero />
      <SelectedWork />
      <FilmSection />
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
