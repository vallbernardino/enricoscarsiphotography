import { Mail, MessageCircle, Phone } from "lucide-react";
import { useLang } from "@/lib/lang";
import { CONTACT, copyFor } from "@/lib/site-content";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="hairline flex items-stretch">
      {(["it", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`mono-label px-2.5 py-1.5 transition-colors ${
            lang === l ? "bg-ink text-paper" : "text-stone hover:text-ink"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function LanguageGate() {
  const { chosen, setLang } = useLang();
  if (chosen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-6">
      <div className="hairline w-full max-w-md bg-paper p-8 text-center">
        <p className="mono-label">Enrico Scarsi — Fotografia</p>
        <h2 className="mt-4 font-display text-2xl">Italiano / English</h2>
        <div className="mt-7 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setLang("it")}
            className="bg-ink px-4 py-3 font-display text-lg text-paper transition-opacity hover:opacity-85"
          >
            Italiano
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className="hairline px-4 py-3 font-display text-lg text-ink transition-colors hover:bg-card"
          >
            English
          </button>
        </div>
        <p className="mono-label mt-6 normal-case tracking-normal">
          Puoi cambiare lingua in qualsiasi momento · You can switch language at any time
        </p>
      </div>
    </div>
  );
}

export function ContactButtons({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  const c = copyFor(lang).actions;
  const items = [
    { icon: Phone, label: c.call, href: `tel:${CONTACT.phone1.replace(/\s/g, "")}` },
    { icon: Mail, label: c.email, href: `mailto:${CONTACT.email}` },
    {
      icon: MessageCircle,
      label: c.whatsapp,
      href: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`,
    },
  ];
  return (
    <div className="flex items-stretch gap-2">
      {items.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="hairline flex items-center gap-2 px-2.5 py-1.5 text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          <Icon className="h-4 w-4" strokeWidth={1.5} />
          {!compact && <span className="mono-label text-inherit">{label}</span>}
        </a>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { lang } = useLang();
  const t = copyFor(lang);
  return (
    <header className="sticky top-0 z-40 border-b border-stone/40 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4">
        <a href="#top" className="mr-auto block">
          <span className="block font-display text-lg leading-none tracking-tight">
            {t.brand.name}
          </span>
          <span className="mono-label mt-1.5 block">{t.brand.kicker}</span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {t.nav.map((n) => (
            <a key={n.href} href={n.href} className="link-draw text-sm text-ink/80 hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ContactButtons compact />
        </div>
      </div>
    </header>
  );
}
