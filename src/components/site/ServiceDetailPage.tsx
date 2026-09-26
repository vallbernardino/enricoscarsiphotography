import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/lang";
import { getServicePage, getServiceTitle, type ServicePage } from "@/lib/service-pages";
import { CONTACT } from "@/lib/site-content";
import { getOfficialPagesForService } from "@/lib/official-content";

function ContactLink({ children }: { children: string }) {
  return (
    <a
      href={`mailto:${CONTACT.email}`}
      className="arrow-link label-xs inline-flex border-b border-ink/25 pb-2 text-ink transition-colors hover:border-champagne hover:text-ink/70"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
    </a>
  );
}

export function ServiceDetailPage({ service }: { service: ServicePage }) {
  const { lang } = useLang();
  const copy = service.copy[lang];
  const officialPages = getOfficialPagesForService(service.slug);

  return (
    <PageShell title={copy.title} intro={service.slug === "advertising" ? copy.intro : ""} back={{ label: copy.allServicesLabel, to: "/services" }}>
      <PageSection tone="light" label={copy.eyebrow} heading={copy.overviewLabel}>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-10">
              {(officialPages.length ? [] : copy.sections).map((section) => (
                <section key={section.heading} className="border-t border-ink/12 pt-8 first:border-t-0 first:pt-0">
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
                <article key={page.slug} className="border-t border-ink/12 pt-10 first:border-t-0 first:pt-0">
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

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={90}>
              <div className="space-y-10 border-t border-ink/15 pt-7 lg:sticky lg:top-28">
                {copy.pricing?.length ? (
                  <div>
                    <h3 className="label-xs text-ink/45">{copy.pricingLabel}</h3>
                    <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10 text-sm leading-relaxed text-ink">
                      {copy.pricing.map((item) => (
                        <li key={item} className="py-4 font-medium">{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {copy.facts?.length ? (
                  <div>
                    <h3 className="label-xs text-ink/45">{copy.detailsLabel}</h3>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/68">
                      {copy.facts.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div>
                  <ContactLink>{copy.cta}</ContactLink>
                </div>

              </div>
            </Reveal>
          </aside>
        </div>
      </PageSection>

      {service.related.length ? (
        <PageSection tone="dark" label={copy.relatedLabel}>
          <div className="grid gap-px border-y border-cream/10 md:grid-cols-3">
            {service.related.map((slug) => (
              <Link
                key={slug}
                to="/services/$slug"
                params={{ slug }}
                className="group flex min-h-28 items-center justify-between gap-6 border-b border-cream/10 px-0 py-7 text-cream transition-colors hover:text-champagne md:border-b-0 md:border-r md:px-8 last:md:border-r-0"
              >
                <span className="font-display text-[1.15rem] leading-snug">{getServiceTitle(slug, lang)}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-cream/35 transition-transform group-hover:translate-x-1 group-hover:text-champagne" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/services"
              className="arrow-link label-xs inline-flex border-b border-cream/30 pb-2 text-cream transition-colors hover:border-champagne hover:text-champagne"
            >
              {copy.allServicesLabel}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </PageSection>
      ) : null}
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
