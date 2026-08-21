import { createFileRoute } from "@tanstack/react-router";
import { PageSection, PageShell } from "@/components/site/PageShell";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { CONTACT } from "@/lib/site-content";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy e informazioni legali — Enrico Scarsi Fotografo, Torino" },
      {
        name: "description",
        content:
          "Informativa privacy e dati legali dello studio fotografico Enrico Scarsi, Via Oropa 54B, Torino: cookie, servizi esterni e contatti.",
      },
      { property: "og:title", content: "Privacy & legal information — Enrico Scarsi" },
      {
        property: "og:description",
        content:
          "How this website handles browsing data, which third-party services it embeds, and the studio's legal details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const copy = {
  it: {
    sections: [
      {
        heading: "Cookie e dati di navigazione",
        body: [
          "Questo sito non utilizza cookie di profilazione e non installa strumenti di analisi o tracciamento dei visitatori. Non vengono creati profili utente e non viene raccolto alcun dato personale durante la semplice navigazione.",
          "L'unica informazione salvata nel browser è la lingua scelta (italiano o inglese), memorizzata localmente sul dispositivo per non ripresentare la scelta a ogni visita. Non viene trasmessa a nessuno e può essere cancellata svuotando i dati del sito.",
        ],
      },
      {
        heading: "Servizi esterni utilizzati",
        body: [
          "Mappa dello studio: la mappa interattiva è fornita da Google Maps. Aprendo la pagina che la contiene, il browser si collega ai server di Google, che possono raccogliere dati tecnici (ad esempio indirizzo IP) e impostare propri cookie secondo l'informativa privacy di Google.",
          "Tipografia: i caratteri tipografici sono serviti da Google Fonts, con la stessa modalità di collegamento tecnico.",
          "Recensioni: le recensioni mostrate rimandano alla scheda pubblica del fotografo sulla piattaforma di recensioni. Il collegamento si apre solo se scegli di cliccarlo.",
        ],
      },
      {
        heading: "Modulo di contatto",
        body: [
          "Il modulo di richiesta non invia dati a un server di questo sito: apre il tuo programma di posta o WhatsApp con il messaggio già compilato. I dati che inserisci restano sul tuo dispositivo fino a quando decidi di inviarli.",
          "I messaggi ricevuti vengono usati esclusivamente per rispondere alla richiesta.",
        ],
      },
    ],
    legalHeading: "Dati legali",
  },
  en: {
    sections: [
      {
        heading: "Cookies and browsing data",
        body: [
          "This website uses no profiling cookies and installs no analytics or visitor-tracking tools. No user profiles are created and no personal data is collected through ordinary browsing.",
          "The only information stored in your browser is your chosen language (Italian or English), kept locally on your device so the choice is not asked again on every visit. It is never transmitted and can be removed by clearing the site data.",
        ],
      },
      {
        heading: "Third-party services",
        body: [
          "Studio map: the interactive map is provided by Google Maps. When the page containing it loads, your browser connects to Google's servers, which may collect technical data (such as your IP address) and set their own cookies under Google's privacy policy.",
          "Typography: the typefaces are served by Google Fonts, through the same kind of technical connection.",
          "Reviews: the reviews shown link out to the photographer's public listing on the review platform. That connection is only made if you choose to click through.",
        ],
      },
      {
        heading: "Inquiry form",
        body: [
          "The inquiry form does not send data to a server on this site: it opens your email client or WhatsApp with the message pre-filled. What you type stays on your device until you decide to send it.",
          "Messages received are used solely to reply to your request.",
        ],
      },
    ],
    legalHeading: "Legal details",
  },
};

function PrivacyPage() {
  const { lang } = useLang();
  const h = homeCopy(lang);
  const c = copy[lang];

  return (
    <PageShell title={h.pages.privacy.title} intro={h.pages.privacy.intro}>
      {c.sections.map((s) => (
        <PageSection key={s.heading} heading={s.heading}>
          <div className="max-w-2xl space-y-6 text-sm leading-[1.9] text-muted-warm">
            {s.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </PageSection>
      ))}

      <PageSection heading={c.legalHeading}>
        <div className="max-w-2xl space-y-2 text-sm text-muted-warm">
          <p className="text-cream/80">Enrico Scarsi</p>
          <p>Via Oropa 54B, Vanchiglietta / Vanchiglia, 10153 Torino, Italia</p>
          <p>P.IVA {CONTACT.vat}</p>
          <p>
            <a href={`mailto:${CONTACT.email}`} className="link-draw">
              {CONTACT.email}
            </a>
          </p>
          <p>
            <a href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`} className="link-draw">
              {CONTACT.phone1}
            </a>
          </p>
        </div>
      </PageSection>
    </PageShell>
  );
}
