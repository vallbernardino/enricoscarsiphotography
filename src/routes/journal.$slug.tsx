import { createFileRoute } from "@tanstack/react-router";
import { JournalArticle } from "@/components/site/JournalPage";
import { officialArticlePages } from "@/lib/official-content";
export const Route = createFileRoute("/journal/$slug")({
  head: ({ params }) => { const page = officialArticlePages.find((entry) => entry.slug === params.slug); const title = page?.title ?? "Journal — Enrico Scarsi"; return { meta: [{ title }, { name: "description", content: page?.blocks[0]?.text ?? "Photography journal by Enrico Scarsi." }, { property: "og:title", content: title }, { property: "og:description", content: page?.blocks[0]?.text ?? "Photography journal by Enrico Scarsi." }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] }; },
  component: ArticleRoute,
});
function ArticleRoute() { const { slug } = Route.useParams(); return <JournalArticle slug={slug} />; }