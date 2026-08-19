import { createFileRoute } from "@tanstack/react-router";
import { createFileRoute as _unused } from "@tanstack/react-router";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { MapEmbed } from "@/components/site/MapEmbed";
import { InquiryForm } from "@/components/site/InquiryForm";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { CONTACT, copyFor } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contatti — Enrico Capuano, Fotografo in Torino" },
      {
        name: "description",
        content:
          "Studio fotografico in Via Oropa 54B, Torino. Telefono, email, WhatsApp e richiesta di preventivo per servizi fotografici.",
      },
      { property: "og:title", content: "Contact — Enrico Capuano, photographer in Turin" },
      {
        property: "og:description",
        content: "Studio in Via Oropa 54B, Turin. Phone, email, WhatsApp and inquiry form.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLang();
  const h = homeCopy(lang);
  const c = copyFor(lang);
  const tel1 = `tel:${CONTACT.phone1.replace(/\s/g, "")}`;

  return (
    <PageShell title={h.pages.contact.title} intro={h.pages.contact.intro}>
      <PageSection label={h.torino.mapLabel} heading={c.contact.heading}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <dl className="divide-y divide-cream/12 border-y border-cream/12">
              <div className="py-4">
                <dt className="label-xs text-cream/45">{c.contact.addressLabel}</dt>
                <dd className="mt-2 text-sm text-cream/85">
                  {c.contact.address}
                  <span className="mt-1 block text-muted-warm">{c.contact.addressNote}</span>
                </dd>
              </div>
              <div className="py-4">
                <dt className="label-xs text-cream/45">{c.contact.phoneLabel}</dt>
                <dd className="mt-2 text-sm text-cream/85">
                  <a href={tel1} className="link-draw">
                    {CONTACT.phone1}
                  </a>
                  <span className="text-muted-warm"> · </span>
                  <a href={`tel:${CONTACT.phone2.replace(/\s/g, "")}`} className="link-draw">
                    {CONTACT.phone2}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="label-xs text-cream/45">{c.contact.emailLabel}</dt>
                <dd className="mt-2 text-sm text-cream/85">
                  <a href={`mailto:${CONTACT.email}`} className="link-draw">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="label-xs text-cream/45">{c.contact.vatLabel}</dt>
                <dd className="mt-2 font-mono text-xs text-muted-warm">{CONTACT.vat}</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <MapEmbed className="h-[380px] lg:h-[460px]" />
          </div>
        </div>
      </PageSection>

      <InquiryForm />
    </PageShell>
  );
}
