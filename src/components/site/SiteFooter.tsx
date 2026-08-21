import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { BRAND, homeCopy } from "@/lib/home-copy";
import { CONTACT } from "@/lib/site-content";
import { LangToggle } from "./SiteNav";

export function SiteFooter() {
  const { lang } = useLang();
  const t = homeCopy(lang);
  const kicker = lang === "it" ? BRAND.kicker : BRAND.kickerEn;

  return (
    <footer className="relative z-20 border-t border-cream/10 bg-charcoal">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-4">
          <span className="display-editorial block text-base tracking-[0.16em] text-cream">
            {BRAND.name}
          </span>
          <p className="label-xs mt-4 text-cream/45">{kicker}</p>
          <p className="mt-8 text-sm text-muted-warm">
            {lang === "it" ? "Dal" : "Since"} {BRAND.since}
          </p>
        </div>

        <nav className="flex flex-col gap-4 lg:col-span-3">
          <span className="label-xs text-cream/35">{lang === "it" ? "Pagine" : "Pages"}</span>
          {t.nav.map((n) => (
            <Link key={n.to} to={n.to} className="link-draw w-fit text-sm text-cream/70">
              {n.label}
            </Link>
          ))}
          <Link to="/privacy" className="link-draw mt-2 w-fit text-sm text-cream/70">
            {t.legalLinks.privacy}
          </Link>
        </nav>

        <address className="flex flex-col gap-3 not-italic lg:col-span-5">
          <span className="label-xs text-cream/35">{t.studio.label}</span>
          <p className="text-sm leading-relaxed text-cream/70">
            Via Oropa 54B
            <span className="block">Vanchiglietta / Vanchiglia</span>
            <span className="block">10153 Torino, Italia</span>
          </p>
          <a
            href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
            className="link-draw mt-3 w-fit text-sm text-cream/70"
          >
            {CONTACT.phone1}
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw w-fit text-sm text-cream/70"
          >
            {CONTACT.phone2}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="link-draw w-fit text-sm text-cream/70">
            {CONTACT.email}
          </a>
          <span className="mt-3 text-xs text-cream/35">P.IVA {CONTACT.vat}</span>
        </address>
      </div>

      <div className="mx-auto max-w-[1440px] border-t border-cream/10 px-6 py-10 lg:px-10">
        <p className="max-w-3xl text-xs leading-relaxed text-cream/40">
          {t.cookieNotice.map((l) => (
            <span key={l} className="mt-2 block first:mt-0">
              {l}
            </span>
          ))}
        </p>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-cream/10 px-6 py-6 lg:px-10">
        <span className="label-xs text-cream/30">
          © {new Date().getFullYear()} {BRAND.name} — P.IVA {CONTACT.vat}
        </span>
        <div className="flex items-center gap-7">
          <Link to="/privacy" className="label-xs text-cream/40 transition-colors hover:text-cream">
            {t.legalLinks.legal}
          </Link>
          <Link to="/contact" className="label-xs text-cream/40 transition-colors hover:text-cream">
            {t.legalLinks.contact}
          </Link>
          <LangToggle />
        </div>
      </div>
    </footer>
  );
}
