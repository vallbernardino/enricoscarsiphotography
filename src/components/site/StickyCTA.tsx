import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { CONTACT } from "@/lib/site-content";

/**
 * Immediate contact while browsing: a restrained, high-contrast CALL button
 * dialling the studio line. Detailed requests stay with the inquiry section.
 */
export function StickyCTA() {
  const { lang } = useLang();
  const t = homeCopy(lang);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const nearStudio = () => {
      const el = document.getElementById("studio");
      if (!el) return false;
      const r = el.getBoundingClientRect();
      const h = window.innerHeight || 800;
      return r.top < h * 0.85 && r.bottom > h * 0.15;
    };
    const onScroll = () =>
      setShow(window.scrollY > (window.innerHeight || 800) * 0.5 && !nearStudio());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
      aria-label={`${t.call} ${CONTACT.phone1}`}
      className={`label-xs breathe call-ripple fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 border border-champagne bg-champagne px-6 py-4 text-[0.62rem] text-charcoal transition-all duration-700 hover:bg-cream ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Phone className="call-ring h-3.5 w-3.5" strokeWidth={1.75} />
      <span>{lang === "it" ? "Chiama" : "Call"}</span>
      <span className="hidden text-charcoal/60 sm:inline">{CONTACT.phone1}</span>
    </a>
  );
}
