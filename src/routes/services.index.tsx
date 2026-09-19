import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Servizi fotografici — Enrico Scarsi, Fotografo a Torino" },
      {
        name: "description",
        content:
          "Servizi dello studio a Torino: ritratto, famiglia, matrimonio, coppia, eventi, ritratto corporate, pubblicitaria, industriale, architettura, case vacanza, video e corsi.",
      },
      { property: "og:title", content: "Services — Enrico Scarsi, photographer in Turin" },
      {
        property: "og:description",
        content:
          "Portrait, family, wedding, events, advertising, corporate, industrial, architecture, video and photography courses in Turin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  const { lang } = useLang();
  const h = homeCopy(lang);
  const t = h.services;

  return (
    <PageShell title={h.pages.services.title} intro={h.pages.services.intro}>
      <PageSection label={t.label} heading={t.heading} tone="light">
        <p className="max-w-2xl text-[0.95rem] leading-[1.95] text-ink/60">{t.intro}</p>
      </PageSection>

      <PageSection label={t.indexLabel} heading={t.indexIntro} tone="light">
        <div className="grid items-start gap-x-12 gap-y-16 lg:grid-cols-3">
          {t.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <div className="service-category-rule relative border-b border-ink/20 pb-5"><h3 className="label-xs text-ink/70">{g.title}</h3></div>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>
                    <Link to={item === t.advertisingItem ? "/services/advertising" : "/contact"} className="group flex min-h-16 items-center justify-between gap-4 border-b border-ink/12 py-4 text-[0.9rem] leading-snug text-ink/75 transition-colors hover:text-ink">
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{item}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" strokeWidth={1.5} />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-16 max-w-xl text-sm leading-relaxed text-ink/45">{t.soon}</p>
      </PageSection>
    </PageShell>
  );
}
