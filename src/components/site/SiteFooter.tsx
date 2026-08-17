import { Facebook, Instagram, Linkedin, AtSign, Twitter } from "lucide-react";
import { useLang } from "@/lib/lang";
import { CONTACT, copyFor } from "@/lib/site-content";
import { LangToggle } from "./SiteChrome";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
  { icon: Twitter, label: "X", href: "https://x.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { icon: AtSign, label: "Threads", href: "https://www.threads.net" },
];

export function SiteFooter() {
  const { lang } = useLang();
  const t = copyFor(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone/40 bg-ink text-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="block font-display text-xl">{t.brand.name}</span>
            <span className="mono-label mt-2 block text-paper/50">{t.brand.kicker}</span>
            <p className="mt-6 text-sm leading-relaxed text-paper/70">
              {t.contact.address}
              <br />
              {t.contact.addressNote}
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <span className="mono-label block text-paper/45">{t.contact.phoneLabel}</span>
              <a href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`} className="link-draw">
                {CONTACT.phone1}
              </a>
              <span className="text-paper/40"> · </span>
              <a href={`tel:${CONTACT.phone2.replace(/\s/g, "")}`} className="link-draw">
                {CONTACT.phone2}
              </a>
            </div>
            <div>
              <span className="mono-label block text-paper/45">{t.contact.emailLabel}</span>
              <a href={`mailto:${CONTACT.email}`} className="link-draw">
                {CONTACT.email}
              </a>
            </div>
            <div>
              <span className="mono-label block text-paper/45">{t.contact.vatLabel}</span>
              <span className="font-mono text-xs">{CONTACT.vat}</span>
            </div>
            <div>
              <span className="mono-label mb-2 block text-paper/45">{t.contact.socialLabel}</span>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-9 w-9 items-center justify-center border border-paper/30 transition-colors hover:bg-paper hover:text-ink"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <nav className="grid grid-cols-2 gap-y-2 text-sm text-paper/75">
              {t.nav.map((n) => (
                <a key={n.href} href={n.href} className="link-draw w-fit hover:text-paper">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="mt-6 [--stone:oklch(0.75_0.02_78)]">
              <LangToggle />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/15 pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-paper/45">{t.footer.legal}</p>
          <p className="mono-label mt-4 text-paper/45">
            © {year} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
