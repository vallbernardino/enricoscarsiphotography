import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { BRAND, homeCopy } from "@/lib/home-copy";

export function LangToggle({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { lang, setLang } = useLang();
  const idle = tone === "dark" ? "text-cream/45" : "text-ink/45";
  const active = tone === "dark" ? "text-cream" : "text-ink";
  return (
    <div className="flex items-center gap-2">
      {(["it", "en"] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i === 1 && <span className={`${idle} text-[0.7rem]`}>|</span>}
          <button
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`label-xs transition-colors ${
              lang === l ? `${active} underline decoration-champagne underline-offset-4` : idle
            } hover:${active}`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

export function SiteNav({ overlay = false }: { overlay?: boolean }) {
  const { lang } = useLang();
  const t = homeCopy(lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !overlay || scrolled;
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  /** HOME always lands at the top of the homepage hero. */
  const homeScroll = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        solid ? "bg-charcoal/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center gap-8 px-6 py-5 lg:px-10">
        <Link to="/" className="mr-auto block leading-none">
          <span className="display-editorial text-[0.9rem] tracking-[0.2em] text-cream">
            {BRAND.name}
          </span>
          <span className="label-xs mt-1.5 block text-cream/45">
            {lang === "it" ? BRAND.kicker : BRAND.kickerEn}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {t.nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              resetScroll
              {...(n.to === "/" ? { onClick: homeScroll } : {})}
              className="label-xs link-draw text-cream/70 transition-colors hover:text-cream"
              activeProps={{ className: "label-xs link-draw text-cream" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LangToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
          className="flex flex-col gap-[5px] p-2 lg:hidden"
        >
          <span className="block h-px w-6 bg-cream" />
          <span className="block h-px w-6 bg-cream" />
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-charcoal/95 px-6 pb-8 pt-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-5">
            {t.nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                resetScroll
                onClick={(e) => {
                  setOpen(false);
                  if (n.to === "/") homeScroll(e);
                }}
                className="display-editorial text-lg tracking-[0.14em] text-cream"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-7">
            <LangToggle />
          </div>
        </div>
      )}
    </header>
  );
}
