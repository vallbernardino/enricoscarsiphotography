import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailBySlug } from "@/components/site/ServiceDetailPage";
import { getServicePage, serviceRouteAliases } from "@/lib/service-pages";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const resolvedSlug = serviceRouteAliases[params.slug] ?? params.slug;
    const service = getServicePage(resolvedSlug);
    const title = service ? `${service.copy.en.title} — Enrico Scarsi` : "Service — Enrico Scarsi";
    const description = service?.copy.en.intro ?? "Detailed photography services by Enrico Scarsi in Turin.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceSlugPage,
});

function ServiceSlugPage() {
  const { slug } = Route.useParams();
  return <ServiceDetailBySlug slug={serviceRouteAliases[slug] ?? slug} />;
}
