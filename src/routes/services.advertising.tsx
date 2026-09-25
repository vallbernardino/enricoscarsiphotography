import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import { getServicePage } from "@/lib/service-pages";

const service = getServicePage("advertising");

export const Route = createFileRoute("/services/advertising")({
  head: () => ({
    meta: [
      { title: "Fotografia pubblicitaria — Enrico Scarsi, Fotografo a Torino" },
      {
        name: "description",
        content:
          "Fotografia pubblicitaria a Torino: industriale, architettura e interni, case vacanza, prodotto e catalogo per aziende, agenzie e professionisti.",
      },
      {
        property: "og:title",
        content: "Advertising photography — Enrico Scarsi, photographer in Turin",
      },
      {
        property: "og:description",
        content:
          "Industrial, architecture and interiors, vacation property and product photography for companies, agencies and freelancers in Turin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdvertisingPage,
});

function AdvertisingPage() {
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
