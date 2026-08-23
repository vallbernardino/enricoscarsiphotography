import { createFileRoute } from "@tanstack/react-router";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { ADVERTISING_IMAGES } from "@/lib/hero-slides";

export const Route = createFileRoute("/services/advertising")({
  head: () => ({
    meta: [
      { title: "Fotografia pubblicitaria — Enrico Scarsi, Fotografo a Torino" },
      {
        name: "description",
        content:
          "Fotografia pubblicitaria a Torino: industriale, architettura e interni, case vacanza, prodotto e catalogo per aziende, agenzie e professionisti.",
      },
      {
        property: "og:title",
        content: "Advertising photography — Enrico Scarsi, photographer in Turin",
      },
      {
        property: "og:description",
        content:
          "Industrial, architecture and interiors, vacation property and product photography for companies, agencies and freelancers in Turin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdvertisingPage,
});

function AdvertisingPage() {
  const { lang } = useLang();
  const h = homeCopy(lang);
  const adv = h.advertising;

  return (
    <PageShell
      title={adv.page.title}
      intro={adv.page.heading}
      back={{ label: h.back, to: "/services" }}
    >
      <PageSection label={adv.label} tone="light">
        <div className="py-16 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="font-sans text-[0.82rem] font-semibold uppercase tracking-[0.28em] text-ink sm:text-[0.92rem]">
              {adv.page.heading}
            </h2>
            <div className="mt-8 max-w-2xl space-y-6">
              {adv.page.intro.map((p) => (
                <p key={p} className="text-[1.05rem] leading-[1.8] text-ink/70">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-x-14 gap-y-16 sm:grid-cols-2">
          {adv.items.map((c, i) => (
            <Reveal key={c.key} delay={(i % 2) * 90}>
              <img
                src={ADVERTISING_IMAGES[c.key]}
                alt={c.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="mt-5 border-t border-ink/15 pt-4">
                <span className="display-editorial text-[0.9rem] tracking-[0.12em] text-ink">
                  {c.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>
    </PageShell>
  );
}
