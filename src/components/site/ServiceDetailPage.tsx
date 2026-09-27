import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/lang";
import { getServicePage, getServiceTitle, type ServicePage } from "@/lib/service-pages";
import { CONTACT } from "@/lib/site-content";
import { getOfficialPagesForService } from "@/lib/official-content";

const galleryShapes = ["aspect-[4/5] md:col-span-7", "aspect-[3/2] md:col-span-5", "aspect-square md:col-span-4", "aspect-[4/5] md:col-span-4", "aspect-square md:col-span-4", "aspect-[3/2] md:col-span-5", "aspect-[4/5] md:col-span-7"];

export function ServiceDetailPage({ service }: { service: ServicePage }) {
  const { lang } = useLang();
  const copy = service.copy[lang];
  const officialPages = getOfficialPagesForService(service.slug);

  return (
    <PageShell
      title={copy.title}
      intro={copy.intro}
      back={{ label: copy.allServicesLabel, to: "/services" }}
      heroDetails={copy.pricing?.length ? <p className="mt-8 max-w-xl text-xs leading-relaxed text-cream/60">{copy.pricing.join(" · ")}</p> : undefined}
      heroMedia={<PhotoFrame aspect="aspect-[16/10]" tone="dark" />}
    >
      <PageSection tone="light">
        <Reveal className="max-w-4xl">
          <div className="space-y-12">
              {(officialPages.length ? [] : copy.sections).map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-[1.45rem] leading-[1.22] text-ink sm:text-[1.75rem]">
                    {section.heading}
                  </h2>
                  <div className="mt-7 space-y-6 text-[0.98rem] leading-[1.95] text-ink/68">
                    {section.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 64)}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-8 divide-y divide-ink/12 border-y border-ink/12">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-5 py-4 text-sm leading-relaxed text-ink/70">
                          <span className="mt-2 h-px w-8 shrink-0 bg-champagne" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
              {officialPages.map((page) => (
                <article key={page.slug} className="space-y-6">
                  <div className="space-y-6 text-[0.98rem] leading-[1.95] text-ink/68">
                    {(lang === "it" ? page.blocks : page.blocksEn).map((block, index) =>
                      block.kind === "heading" ? (
                        <h2 key={`${page.slug}-${index}`} className="pt-4 font-display text-[1.45rem] leading-[1.22] text-ink first:pt-0 sm:text-[1.75rem]">
                          {block.text}
                        </h2>
                      ) : block.kind === "list" ? (
                        <div key={`${page.slug}-${index}`} className="flex gap-5 border-b border-ink/10 py-3 text-sm">
                          <span className="mt-3 h-px w-8 shrink-0 bg-champagne" />
                          <span>{block.text}</span>
                        </div>
                      ) : (
                        <p key={`${page.slug}-${index}`}>{block.text}</p>
                      ),
                    )}
                  </div>
                </article>
              ))}
          </div>
        </Reveal>
      </PageSection>

      <PageSection tone="light">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-7">
          {galleryShapes.map((shape, index) => <div key={index} className={shape}><PhotoFrame aspect="h-full" tone="light" /></div>)}
        </div>
      </PageSection>

      {copy.pricing?.length || copy.facts?.length ? (
        <PageSection tone="light">
          <div className="grid gap-20 lg:grid-cols-12">
            {copy.pricing?.length ? (
              <Reveal className="lg:col-span-7">
                <h2 className="label-xs text-ink/45">{copy.pricingLabel}</h2>
                <ul className="mt-7 divide-y divide-ink/12 border-y border-ink/12">
                  {copy.pricing.map((item) => <li key={item} className="py-6 text-sm leading-relaxed text-ink">{item}</li>)}
                </ul>
              </Reveal>
            ) : null}
            {copy.facts?.length ? (
              <Reveal delay={90} className="lg:col-span-4 lg:col-start-9">
                <h2 className="label-xs text-ink/45">{copy.detailsLabel}</h2>
                <ul className="mt-7 space-y-5 text-sm leading-relaxed text-ink/68">
                  {copy.facts.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Reveal>
            ) : null}
          </div>
        </PageSection>
      ) : null}

      {service.related.length ? (
        <PageSection tone="dark" label={copy.relatedLabel}>
          <div className="divide-y divide-cream/10 border-y border-cream/10">
            {service.related.map((slug) => (
              <Link key={slug} to="/services/$slug" params={{ slug }} className="group grid min-h-24 grid-cols-[5rem_1fr_auto] items-center gap-5 py-5 text-cream transition-colors hover:text-logo-yellow sm:grid-cols-[7rem_1fr_auto]">
                <div className="aspect-[4/3] border border-cream/15 bg-cream/5" aria-hidden="true" />
                <span className="font-display text-[1.15rem] leading-snug">{getServiceTitle(slug, lang)}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-cream/35 transition-transform group-hover:translate-x-1 group-hover:text-logo-yellow" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </PageSection>
      ) : null}

      <PageSection tone="light">
        <Reveal className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Link to="/" hash="inquiry" className="arrow-link label-xs border-b border-ink/25 pb-2 text-ink transition-colors hover:border-logo-yellow">
            {lang === "it" ? "INVIA UNA RICHIESTA" : "SEND AN INQUIRY"}<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
          <a href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`} className="arrow-link label-xs border-b border-ink/25 pb-2 text-ink transition-colors hover:border-logo-yellow">
            {lang === "it" ? "CHIAMA" : "CALL"}<span className="text-ink/55">{CONTACT.phone1}</span><ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </Reveal>
      </PageSection>
    </PageShell>
  );
}

export function MissingServicePage() {
  const { lang } = useLang();
  const title = lang === "it" ? "Servizio non trovato" : "Service not found";
  const intro = lang === "it" ? "Torna all'elenco completo dei servizi." : "Return to the complete services list.";
  return (
    <PageShell title={title} intro={intro} back={{ label: lang === "it" ? "Tutti i servizi" : "All services", to: "/services" }}>
      <PageSection tone="light">
        <Link to="/services" className="arrow-link label-xs inline-flex border-b border-ink/25 pb-2 text-ink">
          {lang === "it" ? "Tutti i servizi" : "All services"}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </Link>
      </PageSection>
    </PageShell>
  );
}

export function ServiceDetailBySlug({ slug }: { slug: string }) {
  const service = getServicePage(slug);
  if (!service) return <MissingServicePage />;
  return <ServiceDetailPage service={service} />;
}
