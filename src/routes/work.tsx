import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { copyFor } from "@/lib/site-content";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Enrico Scarsi, Fotografo in Torino" },
      {
        name: "description",
        content:
          "Gallerie fotografiche di Enrico Scarsi: proposte, matrimoni, coppie, ritratti, eventi e fotografia business a Torino.",
      },
      { property: "og:title", content: "Work — Enrico Scarsi" },
      {
        property: "og:description",
        content: "Photography galleries: proposals, weddings, couples, portraits, events, business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const { lang } = useLang();
  const h = homeCopy(lang);
  const c = copyFor(lang);
  const [tab, setTab] = useState(0);
  const active = c.portfolio.tabs[tab] ?? c.portfolio.tabs[0]!;
  const frames = tab === 0 ? c.portfolio.frames : c.portfolio.frames.filter((f) => f.tab === active);

  return (
    <PageShell title={h.pages.work.title} intro={h.pages.work.intro}>
      <PageSection label={h.work.label} heading={h.work.heading}>
        <div className="grid grid-cols-2 gap-px lg:grid-cols-3">
          {h.work.categories.map((cat, i) => (
            <Reveal key={cat.key} variant="mask" delay={i * 80}>
              <div className="relative">
                <PhotoFrame aspect="aspect-[3/2]" caption={cat.title} />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-6 font-display text-xl uppercase tracking-[0.12em] text-cream">
                  {cat.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection label={c.portfolio.heading} heading={c.portfolio.intro} tone="light">
        <div className="flex flex-wrap gap-2">
          {c.portfolio.tabs.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setTab(i)}
              aria-pressed={tab === i}
              className={`label-xs border px-4 py-2.5 transition-colors ${
                tab === i ? "border-ink bg-ink text-paper" : "border-ink/25 text-ink/60 hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {frames.map((f) => (
            <PhotoFrame key={f.id} aspect="aspect-square" caption={f.caption} tone="light" />
          ))}
        </div>
      </PageSection>
    </PageShell>
  );
}
