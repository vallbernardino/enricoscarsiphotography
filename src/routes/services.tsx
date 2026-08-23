import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { SERVICE_IMAGES } from "@/lib/hero-slides";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  const { lang } = useLang();
  const h = homeCopy(lang);
  const t = h.services;
  const alts = h.hero.slideAlts;

  return (
    <PageShell title={h.pages.services.title} intro={h.pages.services.intro}>
      <PageSection label={t.label} heading={t.heading} tone="light">
        <p className="max-w-2xl text-[0.95rem] leading-[1.95] text-ink/60">{t.intro}</p>

        <div className="mt-20 grid gap-x-14 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {t.categories.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 90}>
              <img
                src={SERVICE_IMAGES[c.key]}
                alt={alts[c.key] ?? c.title}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="mt-6 border-t border-ink/15 pt-5">
                <span className="display-editorial text-[0.95rem] tracking-[0.12em] text-ink">
                  {c.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection label={t.indexLabel} heading={t.indexIntro} tone="light">
        <div className="grid gap-x-14 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {t.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <h3 className="label-xs border-b border-ink/15 pb-4 text-ink/70">{g.title}</h3>
              <ul className="mt-6 space-y-4">
                {g.items.map((item) => (
                  <li key={item} className="text-[0.95rem] leading-relaxed text-ink/75">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <div className="mt-16">
          <Link
            to="/services/advertising"
            className="arrow-link label-xs border-b border-ink/25 pb-2 text-ink transition-colors hover:text-ink/60"
          >
            {h.advertising.view}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
        <p className="mt-16 max-w-xl text-sm leading-relaxed text-ink/45">{t.soon}</p>
      </PageSection>
    </PageShell>
  );
}
