import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";

export function StickyCTA({ href = "#inquiry" }: { href?: string }) {
  const { lang } = useLang();
  const label = homeCopy(lang).sticky;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const nearContact = () => {
      for (const id of ["inquiry", "studio"]) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const h = window.innerHeight || 800;
        if (r.top < h * 0.85 && r.bottom > h * 0.15) return true;
      }
      return false;
    };
    const onScroll = () =>
      setShow(window.scrollY > (window.innerHeight || 800) * 0.9 && !nearContact());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      className={`arrow-link label-xs fixed bottom-5 right-5 z-40 border border-cream/25 bg-charcoal/85 px-5 py-3 text-[0.6rem] text-cream backdrop-blur-md transition-all duration-700 hover:border-champagne hover:text-champagne ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {label}
      <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
    </a>
  );
}
