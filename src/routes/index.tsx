import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";
import { Reveal } from "@/components/site/Reveal";
import { ContactButtons, LanguageGate, SiteHeader } from "@/components/site/SiteChrome";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useLang } from "@/lib/lang";
import { CONTACT, copyFor } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enrico Scarsi Fotografia — Fotografo a Torino | Photographer in Turin" },
      {
        name: "description",
        content:
          "Studio fotografico a Torino: ritratto, famiglia, maternità, eventi aziendali, pubblicitaria e catalogo. 4,9 ★ su 371 recensioni Google.",
      },
      {
        property: "og:title",
        content: "Enrico Scarsi Fotografia — Fotografo a Torino",
      },
      {
        property: "og:description",
        content:
          "Reportage, ritratto, eventi e fotografia pubblicitaria a Torino e in tutto il Piemonte. Studio in Via Oropa 54B.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="mono-label">{children}</span>
      <span className="h-px flex-1 bg-stone/40" />
    </div>
  );
}

function Index() {
  const { lang } = useLang();
  const t = copyFor(lang);
  const [tab, setTab] = useState(0);
  const activeTab = t.portfolio.tabs[tab] ?? t.portfolio.tabs[0]!;
  const frames =
    tab === 0 ? t.portfolio.frames : t.portfolio.frames.filter((f) => f.tab === activeTab);

  const tel1 = `tel:${CONTACT.phone1.replace(/\s/g, "")}`;

  return (
    <div id="top" className="min-h-screen bg-paper">
      <LanguageGate />
      <SiteHeader />

      {/* HERO */}
      <section className="border-b border-stone/40">
        <div className="mx-auto max-w-[1240px] px-6 pt-10 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel>{lang === "it" ? "Torino · Piemonte" : "Turin · Piedmont"}</SectionLabel>
              <h1 className="mt-8 font-display text-[2.6rem] leading-[1.02] tracking-tight sm:text-6xl">
                {t.hero.headline}
              </h1>
              <p className="mt-7 max-w-md text-[0.975rem] leading-relaxed text-ink/75">
                {t.hero.sub}
              </p>
              <div className="mt-9 flex flex-col gap-2 sm:flex-row">
                <a
                  href={tel1}
                  className="bg-ink px-5 py-3 text-center text-sm font-medium text-paper transition-opacity hover:opacity-85"
                >
                  {t.hero.ctas[0]}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="border border-ink px-5 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  {t.hero.ctas[1]}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                  className="border border-ink px-5 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  {t.hero.ctas[2]}
                </a>
              </div>
              <dl className="mt-12 grid grid-cols-3 border-t border-stone/40 pt-5">
                {t.hero.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="mono-label">{s.label}</dt>
                    <dd className="mt-1 font-display text-xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-7">
              <PhotoPlaceholder
                id="IMG_001"
                caption={t.hero.caption}
                aspect="aspect-[3/2] lg:h-[70vh] lg:aspect-auto"
                sprockets
              />
            </div>
          </div>
          <div className="h-14 lg:h-20" />
        </div>
      </section>

      {/* PRIVATE */}
      <Reveal as="section" className="border-b border-stone/40">
        <div id="privati" className="mx-auto max-w-[1240px] scroll-mt-28 px-6 py-20">
          <SectionLabel>{lang === "it" ? "Clienti privati" : "Private clients"}</SectionLabel>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:col-span-6">
              {t.privates.heading}
            </h2>
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-ink/75 lg:col-span-6">
              {t.privates.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
            {t.privates.frames.map((f) => (
              <PhotoPlaceholder key={f.id} id={f.id} caption={f.caption} aspect="aspect-[4/5]" />
            ))}
          </div>
        </div>
      </Reveal>

      {/* CORPORATE */}
      <Reveal as="section" className="border-b border-stone/40 bg-card">
        <div id="aziende" className="mx-auto max-w-[1240px] scroll-mt-28 px-6 py-20">
          <SectionLabel>{lang === "it" ? "Aziende e professionisti" : "Corporate clients"}</SectionLabel>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:col-span-6">
              {t.corporate.heading}
            </h2>
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-ink/75 lg:col-span-6">
              {t.corporate.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.corporate.frames.map((f) => (
              <PhotoPlaceholder
                key={f.id}
                id={f.id}
                caption={f.caption}
                aspect="aspect-[3/2]"
                sprockets
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* METHOD */}
      <Reveal as="section" className="border-b border-stone/40">
        <div className="mx-auto max-w-[1240px] px-6 py-20">
          <SectionLabel>{lang === "it" ? "Metodo" : "Method"}</SectionLabel>
          <h2 className="mt-8 max-w-2xl font-display text-3xl sm:text-4xl">{t.method.heading}</h2>
          <p className="mt-4 max-w-xl text-sm text-stone">{t.method.intro}</p>
          <ol className="mt-14 space-y-0 border-t border-stone/40">
            {t.method.steps.map((s) => (
              <li key={s.n} className="grid gap-6 border-b border-stone/40 py-10 lg:grid-cols-12">
                <span className="mono-label lg:col-span-1">{s.n}</span>
                <h3 className="font-display text-2xl leading-snug lg:col-span-4">{s.title}</h3>
                <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink/75 lg:col-span-7">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* SERVICES */}
      <Reveal as="section" className="border-b border-stone/40">
        <div id="servizi" className="mx-auto max-w-[1240px] scroll-mt-28 px-6 py-20">
          <SectionLabel>{lang === "it" ? "Servizi" : "Services"}</SectionLabel>
          <h2 className="mt-8 font-display text-3xl sm:text-4xl">{t.services.heading}</h2>
          <p className="mt-4 max-w-xl text-sm text-stone">{t.services.intro}</p>
          <ul className="mt-12 flex flex-wrap gap-2">
            {t.services.items.map((s) => (
              <li key={s}>
                <span className="hairline block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper">
                  {s}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {t.services.callouts.map((c) => (
              <div key={c.title} className="border-t-2 border-brass bg-card p-8">
                <span className="mono-label">{c.kicker}</span>
                <h3 className="mt-4 font-display text-2xl leading-snug">{c.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/75">{c.body}</p>
                <a
                  href={tel1}
                  className="mt-7 inline-block border border-ink px-4 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
                >
                  {c.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* COVERAGE */}
      <Reveal as="section" className="border-b border-stone/40 bg-card">
        <div className="mx-auto max-w-[1240px] px-6 py-20">
          <SectionLabel>{lang === "it" ? "Area di lavoro" : "Coverage"}</SectionLabel>
          <div className="mt-8 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl sm:text-4xl">{t.coverage.heading}</h2>
              <div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-ink/75">
                {t.coverage.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {t.coverage.cities.map((c) => (
                  <li key={c} className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-brass" strokeWidth={1.75} />
                    <span className="mono-label">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <PhotoPlaceholder caption={t.coverage.caption} aspect="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* PORTFOLIO */}
      <Reveal as="section" className="border-b border-stone/40">
        <div id="portfolio" className="mx-auto max-w-[1240px] scroll-mt-28 px-6 py-20">
          <SectionLabel>{lang === "it" ? "Lavori" : "Work"}</SectionLabel>
          <h2 className="mt-8 font-display text-3xl sm:text-4xl">{t.portfolio.heading}</h2>
          <p className="mt-4 max-w-xl text-sm text-stone">{t.portfolio.intro}</p>
          <div className="mt-10 flex flex-wrap gap-2">
            {t.portfolio.tabs.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setTab(i)}
                aria-pressed={tab === i}
                className={`mono-label border border-stone/55 px-4 py-2.5 transition-colors ${
                  tab === i ? "bg-ink text-paper" : "text-stone hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
            {frames.map((f) => (
              <PhotoPlaceholder key={f.id} id={f.id} caption={f.caption} aspect="aspect-square" />
            ))}
          </div>
        </div>
      </Reveal>

      {/* REVIEWS */}
      <Reveal as="section" className="border-b border-stone/40 bg-ink text-paper">
        <div id="recensioni" className="mx-auto max-w-[1240px] scroll-mt-28 px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-display text-3xl sm:text-4xl">{t.reviews.heading}</h2>
            <div className="border border-paper/30 px-5 py-3">
              <span className="font-display text-2xl text-brass">{t.reviews.badge}</span>
              <span className="mono-label ml-3 text-paper/60">{t.reviews.ratingLabel}</span>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.reviews.items.map((r) => (
              <figure key={r.name} className="flex flex-col border border-paper/20 p-7">
                <blockquote className="font-display text-lg italic leading-relaxed text-paper/90">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-paper/15 pt-4">
                  <span className="block text-sm">{r.name}</span>
                  <span className="mono-label mt-1 block text-paper/45">{r.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ABOUT */}
      <Reveal as="section" className="border-b border-stone/40">
        <div id="chi-siamo" className="mx-auto max-w-[1240px] scroll-mt-28 px-6 py-20">
          <SectionLabel>{lang === "it" ? "Il fotografo" : "The photographer"}</SectionLabel>
          <div className="mt-8 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <PhotoPlaceholder caption={t.about.caption} aspect="aspect-square" id="IMG_019" />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="font-display text-3xl sm:text-4xl">{t.about.heading}</h2>
              <div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-ink/75">
                {t.about.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-9">
                <ContactButtons />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* CONTACT */}
      <Reveal as="section">
        <div id="contatti" className="mx-auto max-w-[1240px] scroll-mt-28 px-6 py-20">
          <SectionLabel>{lang === "it" ? "Contatti" : "Contact"}</SectionLabel>
          <div className="mt-8 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl sm:text-4xl">{t.contact.heading}</h2>
              <dl className="mt-8 divide-y divide-stone/40 border-y border-stone/40">
                <div className="py-4">
                  <dt className="mono-label">{t.contact.addressLabel}</dt>
                  <dd className="mt-1.5 text-sm">
                    {t.contact.address}
                    <span className="mt-1 block text-stone">{t.contact.addressNote}</span>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="mono-label">{t.contact.phoneLabel}</dt>
                  <dd className="mt-1.5 text-sm">
                    <a href={tel1} className="link-draw">
                      {CONTACT.phone1}
                    </a>
                    <span className="text-stone"> · </span>
                    <a href={`tel:${CONTACT.phone2.replace(/\s/g, "")}`} className="link-draw">
                      {CONTACT.phone2}
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="mono-label">{t.contact.emailLabel}</dt>
                  <dd className="mt-1.5 text-sm">
                    <a href={`mailto:${CONTACT.email}`} className="link-draw">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="mono-label">{t.contact.vatLabel}</dt>
                  <dd className="mt-1.5 font-mono text-xs">{CONTACT.vat}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <ContactButtons />
              </div>
            </div>
            <div className="lg:col-span-7">
              <PhotoPlaceholder caption={t.contact.mapCaption} aspect="aspect-[3/2]" />
            </div>
          </div>
        </div>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
