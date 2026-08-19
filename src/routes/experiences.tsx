import { createFileRoute } from "@tanstack/react-router";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { CONTACT, copyFor } from "@/lib/site-content";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Esperienze e servizi — Enrico Capuano, Torino" },
      {
        name: "description",
        content:
          "Servizi fotografici per privati e aziende a Torino: ritratto, famiglia, maternità, eventi aziendali, pubblicitaria e catalogo.",
      },
      { property: "og:title", content: "Experiences & services — Enrico Capuano" },
      {
        property: "og:description",
        content: "Photography services for private and corporate clients in Turin and Piedmont.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const { lang } = useLang();
  const h = homeCopy(lang);
  const c = copyFor(lang);
  const tel = `tel:${CONTACT.phone1.replace(/\s/g, "")}`;

  return (
    <PageShell title={h.pages.experiences.title} intro={h.pages.experiences.intro}>
      <PageSection
        label={lang === "it" ? "Clienti privati" : "Private clients"}
        heading={c.privates.heading}
      >
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted-warm lg:col-span-6">
            {c.privates.body.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 lg:col-span-6">
            {c.privates.frames.slice(0, 4).map((f) => (
              <PhotoFrame key={f.id} caption={f.caption} aspect="aspect-[4/5]" />
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection
        label={lang === "it" ? "Aziende" : "Corporate"}
        heading={c.corporate.heading}
        tone="light"
      >
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 text-[0.95rem] leading-relaxed text-ink/70 lg:col-span-5">
            {c.corporate.body.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:col-span-7">
            {c.corporate.frames.map((f) => (
              <PhotoFrame key={f.id} caption={f.caption} aspect="aspect-[3/2]" tone="light" />
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection label={c.services.heading} heading={c.services.intro}>
        <ul className="flex flex-wrap gap-2">
          {c.services.items.map((s) => (
            <li
              key={s}
              className="border border-cream/20 px-4 py-2.5 text-sm text-cream/80 transition-colors hover:border-champagne hover:text-champagne"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {c.services.callouts.map((co) => (
            <Reveal key={co.title} className="border-t border-champagne bg-charcoal-soft p-8">
              <span className="label-xs text-champagne">{co.kicker}</span>
              <h3 className="mt-4 font-display text-2xl leading-snug text-cream">{co.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-warm">{co.body}</p>
              <a
                href={tel}
                className="label-xs mt-7 inline-block border border-cream/30 px-4 py-2.5 text-cream transition-colors hover:border-champagne hover:text-champagne"
              >
                {co.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection label={lang === "it" ? "Area di lavoro" : "Coverage"} heading={c.coverage.heading}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted-warm">
              {c.coverage.body.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {c.coverage.cities.map((city) => (
                <li key={city} className="label-xs text-cream/60">
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <PhotoFrame aspect="aspect-[4/3]" caption={c.coverage.caption} />
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
