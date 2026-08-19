import { createFileRoute } from "@tanstack/react-router";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/lang";
import { BRAND, homeCopy } from "@/lib/home-copy";
import { copyFor } from "@/lib/site-content";

export const Route = createFileRoute("/photographer")({
  head: () => ({
    meta: [
      { title: "Il fotografo — Enrico Capuano, Torino dal 1989" },
      {
        name: "description",
        content:
          "Enrico Capuano fotografa a Torino dal 1989: metodo di lavoro, esperienza e approccio a ritratto, reportage ed eventi.",
      },
      { property: "og:title", content: "The photographer — Enrico Capuano" },
      {
        property: "og:description",
        content: "35+ years behind the camera in Turin: method, experience and approach.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PhotographerPage;
});

function PhotographerPage() {
  const { lang } = useLang();
  const h = homeCopy(lang);
  const c = copyFor(lang);

  return (
    <PageShell title={h.pages.photographer.title} intro={h.pages.photographer.intro}>
      <PageSection label={h.experience.label} heading={c.about.heading}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PhotoFrame aspect="aspect-[4/5]" caption={c.about.caption} />
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted-warm">
              {c.about.body.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-cream/15 pt-6">
              {c.hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="label-xs text-cream/45">{s.label}</dt>
                  <dd className="mt-2 font-display text-2xl text-cream">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-champagne">
              {lang === "it" ? "Dal" : "Since"} {BRAND.since}
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection label={c.method.heading} heading={c.method.intro} tone="light">
        <ol className="border-t border-ink/15">
          {c.method.steps.map((s) => (
            <Reveal
              key={s.n}
              as="li"
              className="grid gap-6 border-b border-ink/15 py-10 lg:grid-cols-12"
            >
              <span className="label-xs text-ink/45 lg:col-span-1">{s.n}</span>
              <h3 className="font-display text-2xl leading-snug lg:col-span-4">{s.title}</h3>
              <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink/70 lg:col-span-7">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </PageSection>
    </PageShell>
  );
}
