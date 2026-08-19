import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { BRAND, homeCopy } from "@/lib/home-copy";
import { CONTACT, copyFor } from "@/lib/site-content";
import { LangToggle } from "./SiteNav";

export function SiteFooter() {
  const { lang } = useLang();
  const t = homeCopy(lang);
  const c = copyFor(lang);

  return (
    <footer className="relative z-20 border-t border-cream/10 bg-charcoal">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <span className="font-display text-lg uppercase tracking-[0.2em] text-cream">
            {BRAND.name}
          </span>
          <p className="label-xs mt-3 text-cream/45">{BRAND.kicker}</p>
          <p className="mt-6 text-sm text-muted-warm">
            {lang === "it" ? "Dal" : "Since"} {BRAND.since}
          </p>
        </div>

        <nav className="flex flex-col gap-3 lg:col-span-3">
          <span className="label-xs text-cream/40">{lang === "it" ? "Pagine" : "Pages"}</span>
          {t.nav.map((n) => (
            <Link key={n.to} to={n.to} className="link-draw w-fit text-sm text-cream/75">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 lg:col-span-5">
          <span className="label-xs text-cream/40">{c.contact.addressLabel}</span>
          <p className="text-sm text-cream/75">{c.contact.address}</p>
          <a href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`} className="link-draw w-fit text-sm text-cream/75">
            {CONTACT.phone1}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="link-draw w-fit text-sm text-cream/75">
            {CONTACT.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-cream/10 px-6 py-6 lg:px-10">
        <span className="label-xs text-cream/35">{c.footer.copyright}</span>
        <LangToggle />
      </div>
    </footer>
  );
}
