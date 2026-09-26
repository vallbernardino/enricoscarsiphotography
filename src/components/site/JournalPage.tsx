import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageSection, PageShell } from "./PageShell";
import { useLang } from "@/lib/lang";
import { officialArticlePages } from "@/lib/official-content";

export function JournalArticle({ slug }: { slug: string }) {
  const { lang } = useLang();
  const page = officialArticlePages.find((entry) => entry.slug === slug);
  if (!page) return <PageShell title={lang === "it" ? "Articolo non trovato" : "Article not found"} intro=""><PageSection tone="light"><Link to="/journal">Journal</Link></PageSection></PageShell>;
  return (
    <PageShell title={lang === "it" ? page.title : page.titleEn} intro="" back={{ label: lang === "it" ? "Tutti gli articoli" : "All articles", to: "/journal" }}>
      <PageSection tone="light" label={lang === "it" ? "APPROFONDIMENTO" : "JOURNAL"}>
        <article className="mx-auto max-w-3xl space-y-7 text-[0.98rem] leading-[1.95] text-ink/70">
          {(lang === "it" ? page.blocks : page.blocksEn).map((block, index) => block.kind === "heading" ? <h2 key={index} className="pt-5 font-display text-[1.5rem] leading-tight text-ink sm:text-[1.85rem]">{block.text}</h2> : <p key={index}>{block.text}</p>)}
        </article>
      </PageSection>
    </PageShell>
  );
}

export function JournalIndex() {
  const { lang } = useLang();
  return <PageShell title="Journal" intro={lang === "it" ? "Approfondimenti su fotografia, eventi, ritratto e immagine professionale." : "Insights on photography, events, portraiture and professional imagery."}><PageSection tone="light"><div className="divide-y divide-ink/12">{officialArticlePages.map((page) => <Link key={page.slug} to="/journal/$slug" params={{ slug: page.slug }} className="group flex items-center justify-between gap-8 py-6 text-ink"><span className="font-display text-lg">{lang === "it" ? page.title : page.titleEn}</span><ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" /></Link>)}</div></PageSection></PageShell>;
}