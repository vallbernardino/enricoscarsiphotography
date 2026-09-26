import { createFileRoute } from "@tanstack/react-router";
import { JournalIndex } from "@/components/site/JournalPage";
export const Route = createFileRoute("/journal/")({
  head: () => ({ meta: [{ title: "Journal — Enrico Scarsi Fotografia" }, { name: "description", content: "Approfondimenti di Enrico Scarsi su fotografia, ritratto, eventi e immagine professionale." }, { property: "og:title", content: "Journal — Enrico Scarsi Fotografia" }, { property: "og:description", content: "Photography articles by Enrico Scarsi in Turin." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: JournalIndex,
});